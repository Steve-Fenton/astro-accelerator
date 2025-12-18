/**
 * This javascript file comes from Astro Accelerator
 * Edits will be overwritten if you change the file locally
 *
 * @format
 */

// @ts-check

import { qs } from './modules/query.js';
import { raiseEvent } from './modules/events.js';
import { contains, sanitise, explode, highlight } from './modules/string.js';
import { stemmer } from './modules/stemmer.js';

// @ts-ignore
const f = window.site_features ?? {};

/**
 *
 * @param {string[]} settings
 * @param {string} option
 * @returns
 */
function enabled(settings, option) {
    return settings && settings.includes(option);
}

/**
 *
 * @param {any} value
 * @param {number} index
 * @param {any[]} array
 * @returns
 */
function unique(value, index, array) {
    return array.indexOf(value) === index;
}

/**
@typedef {
    {
        text: string;
        safeText: string;
        slug: string;
    }
} Heading

@typedef {
    {
        foundWords: number;
        foundTerms: string[];
        score: number;
        depth: number;
        title: string;
        keywords: string;
        safeTitle: string;
        description: string;
        safeDescription: string;
        headings: Heading[];
        tags: string[];
        url: string;
        date: string;
        matchedHeadings: Heading[];
    }
}  SearchEntry

@typedef {
    {
        [ix: string]: string
    }
} Synonyms
 */

function initializeSearch() {
    const siteSearchInput = /** @type {HTMLInputElement} */ (
        qs('.site-search-query')
    );
    const siteSearchWrapper = /** @type {HTMLElement} */ (
        qs('.site-search-wrapper')
    );
    const siteSearchElement = /** @type {HTMLFormElement} */ (
        qs('.site-search-wrapper > form')
    );
    const siteSearchResults = /** @type {HTMLElement} */ (
        qs('.site-search-results')
    );

    /** @type {SearchEntry[]} */
    var haystack = [];
    var currentQuery = '';
    var dataUrl = /** @type {string} */ (siteSearchElement.dataset.sourcedata);

    // Legacy scoring
    var scoring = {
        depth: 5,
        phraseTitle: 60,
        phraseHeading: 20,
        phraseDescription: 20,
        termTitle: 40,
        termHeading: 15,
        termDescription: 15,
        termTags: 15,
        termKeywords: 15,
    };

    // Found word scoring
    const scores = {
        titleExact: 20,
        titleContains: 15,
        headingContains: 10,
        contentContains: 1,
    };

    var ready = false;

    /** @type{Synonyms | null} */
    var _synonyms = null;

    /**
     * Gets the list of synonyms if they exist
     * @returns { Promise<Synonyms> }
     */
    async function getSynonyms() {
        if (_synonyms != null) {
            return _synonyms;
        }

        try {
            const synonymsModule = await import('./synonyms.js');
            _synonyms = synonymsModule.synonyms;
        } catch {
            _synonyms = {};
        }

        return _synonyms ?? {};
    }

    /**
     * Replaces synonyms
     * @param {string[]} queryTerms
     * @returns {Promise<string[]>}
     */
    async function replaceSynonyms(queryTerms) {
        const synonyms = await getSynonyms();

        for (let i = 0; i < queryTerms.length; i++) {
            const term = queryTerms[i];
            if (synonyms[term] != null) {
                if (synonyms[term].length === 0) {
                    // @ts-ignore
                    queryTerms[i] = null;
                } else {
                  const synonym = synonyms[term].split(' ');
                  for (let s of synonym) {
                    queryTerms.push(s);
                  }
                }
            }
        }

        return queryTerms.filter((qt) => qt != null);
    }

    /**
     * Search term `s` and number of results `r`
     * @param {string} s
     * @param {number|null} [r=12]
     * @returns
     */
    async function search(s, r) {
        const numberOfResults = r ?? 12;

        /** @type {SearchEntry[]} */
        let needles = [];

        // Clean the input
        const cleanQuery = sanitise(s);

        if (currentQuery === cleanQuery) {
            return;
        }

        currentQuery = cleanQuery;
        /** @type {string[]} */
        const stemmedTerms = [];
        const queryTerms = await replaceSynonyms(explode(currentQuery));

        for (const term of queryTerms) {
            const stemmed = stemmer(term);
            if (stemmed !== term) {
                stemmedTerms.push(stemmed);
            }
        }

        const allTerms = queryTerms.concat(stemmedTerms);

        cleanQuery.length > 0 &&
            haystack.forEach((item) => {
                item.foundWords = 0;
                item.foundTerms = [];
                item.score = 0;
                item.matchedHeadings = [];

                // The user searches for "Kitchen Sink"

                // Part 1 - Phrase Matches, i.e. "Kitchen Sink"

                // Title
                if (item.safeTitle === currentQuery) {
                    item.foundWords += scores.titleExact;
                }

                if (contains(item.safeTitle, currentQuery)) {
                    item.score = item.score + scoring.phraseTitle;
                    item.foundWords += scores.titleContains;
                }

                // Headings
                item.headings.forEach((c) => {
                    if (contains(c.safeText, currentQuery)) {
                        item.score = item.score + scoring.phraseHeading;
                        item.matchedHeadings.push(c);
                        item.foundWords += scores.headingContains;
                    }
                });

                // Description
                if (contains(item.description, currentQuery)) {
                    item.score = item.score + scoring.phraseDescription;
                    item.foundWords += scores.contentContains;
                }

                // Part 2 - Term Matches, i.e. "Kitchen" or "Sink"

                let foundWords = 0;
                /** @type{string[]} */
                let foundTerms = [];

                allTerms.forEach((term) => {
                    let isTermFound = false;

                    // Title
                    if (contains(item.safeTitle, term)) {
                        item.score = item.score + scoring.termTitle;
                        item.foundWords += scores.titleContains / 2;
                        isTermFound = true;
                    }

                    // Headings
                    item.headings.forEach((c) => {
                        if (contains(c.safeText, term)) {
                            item.score = item.score + scoring.termHeading;
                            item.foundWords += scores.headingContains / 2;
                            isTermFound = true;

                            if (
                                item.matchedHeadings.filter(
                                    (h) => h.slug == c.slug
                                ).length == 0
                            ) {
                                item.matchedHeadings.push(c);
                            }
                        }
                    });

                    // Description
                    if (contains(item.description, term)) {
                        isTermFound = true;
                        item.score = item.score + scoring.termDescription;
                    }

                    // Tags
                    item.tags.forEach((t) => {
                        if (contains(t, term)) {
                            isTermFound = true;
                            item.score = item.score + scoring.termTags;
                        }
                    });

                    // Keywords
                    if (contains(item.keywords, term)) {
                        isTermFound = true;
                        item.score = item.score + scoring.termKeywords;
                    }

                    if (isTermFound) {
                        foundWords++;
                        foundTerms.push(term);
                    }
                });

                item.foundWords += foundWords;
                item.foundTerms = item.foundTerms
                    .concat(foundTerms)
                    .filter(unique);

                if (item.score > 0) {
                    needles.push(item);
                }
            });

        needles.forEach((n) => {
            // Bonus points for shallow results, i.e. /features over /features/something/something

            if (n.depth < 5) {
                n.score += scoring.depth;
                n.foundWords++;
            }

            if (n.depth < 4) {
                n.score += scoring.depth;
                n.foundWords++;
            }
        });

        needles = needles.sort(function (a, b) {
            if (b.foundTerms.length === a.foundTerms.length) {
                if (b.foundWords === a.foundWords) {
                    return b.score - a.score;
                }

                return b.foundWords - a.foundWords;
            }

            return b.foundTerms.length - a.foundTerms.length;
        });

        const total = needles.reduce(function (accumulator, needle) {
            return accumulator + needle.score;
        }, 0);

        const results = siteSearchResults;

        const ul = document.createElement('ul');
        ul.className = 'site-search-results-list';

        const limit = Math.min(needles.length, numberOfResults);

        // @ts-ignore
        const siteUrl = new URL(site_url);

        for (let i = 0; i < limit; i++) {
            const needle = needles[i];

            const address = new URL(needle.url);
            const isSameHost = siteUrl.host == address.host;
            const url = isSameHost ? address.pathname : needle.url;

            const listElementWrapper = document.createElement('a');
            listElementWrapper.href = url;
            listElementWrapper.className = 'result-wrapper';

            const listElementTitle = document.createElement('span');

            // Only highlight user query terms, not stemmed terms
            listElementTitle.innerHTML = highlight(needle.title, queryTerms);
            listElementTitle.className = 'result-title';

            const path = document.createElement('div');
            path.className = 'result-path';

            // Split the path into segments, filter out empty segments (in case of leading slash)
            const segments = address.pathname.split('/').filter(Boolean);

            segments.forEach((segment, index) => {
                const words = segment.replace(/-/g, ' ').split(' ');
                const processedSegment = words
                    .map((word, index) =>
                        index === 0
                            ? word.charAt(0).toUpperCase() +
                              word.slice(1).toLowerCase()
                            : word.toLowerCase()
                    )
                    .join(' ');

                const segmentSpan = document.createElement('span');
                segmentSpan.className = 'result-path-segment';
                segmentSpan.textContent = processedSegment;
                path.appendChild(segmentSpan);

                if (index < segments.length - 1) {
                    const svgIcon = document.createElement('span');
                    svgIcon.className = 'result-path-icon';
                    svgIcon.innerHTML = `
                      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10">
                          <path d="M1 9L5 5L1 1" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  `;
                    path.appendChild(svgIcon);
                }
            });

            const listElementDescription = document.createElement('p');
            listElementDescription.className = 'result-description';
            // Only highlight user query terms, not stemmed terms
            listElementDescription.innerHTML = highlight(
                needle.description,
                queryTerms
            );

            const li = document.createElement('li');
            li.classList.add('site-search-results-item');
            li.dataset.words = needle.foundWords.toString();
            li.dataset.score = (
                Math.round((needle.score / total) * 1000) / 1000
            ).toString();
            listElementWrapper.appendChild(path);
            listElementWrapper.appendChild(listElementTitle);
            listElementWrapper.appendChild(listElementDescription);
            li.appendChild(listElementWrapper);

            if (
                enabled(f.search, 'headings') &&
                needle.matchedHeadings.length > 0
            ) {
                const headings = document.createElement('ul');
                headings.className = 'result-headings';

                headings.tabIndex = 0;

                needle.matchedHeadings.forEach((h) => {
                    const item = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = url + '#' + h.slug;
                    // Only highlight user query terms, not stemmed terms
                    link.innerHTML = highlight(h.text, queryTerms);
                    item.appendChild(link);
                    headings.append(item);
                });

                li.appendChild(headings);
            }

            ul.appendChild(li);
        }

        let h4;
        if (needles.length === 0) {
            h4 = document.createElement('h4');
            h4.classList.add('search-results-heading');
            h4.innerHTML = results.dataset.emptytitle || 'No Results';
        }

        const more = document.createElement('button');
        more.className = 'show-more';
        more.type = 'button';
        more.innerHTML = 'See more';
        more.addEventListener('click', async function (e) {
            e.stopPropagation(); // Prevent the click from closing the dropdown
            currentQuery = '';
            const oldTotal = numberOfResults;
            const newTotal = numberOfResults + 12;
            await search(s, newTotal);
            window.setTimeout(function () {
                const previousPosition = qs(
                    `.site-search-results-list li:nth-child(${oldTotal}) > a`
                );
                console.log(previousPosition.outerHTML);
                previousPosition.focus();
            }, 10);
        });

        if (needles.length > numberOfResults) {
            const moreLi = document.createElement('li');
            moreLi.appendChild(more);
            ul.appendChild(moreLi);
        }

        results.innerHTML = '';
        results.appendChild(ul);
        h4 && results.appendChild(h4);

        const address = window.location.href.split('?')[0];
        window.history.pushState(
            {},
            '',
            address + '?q=' + encodeURIComponent(cleanQuery)
        );
        raiseEvent('searched', { search: s });
    }

    /** @type {Number} */
    var debounceTimer;

    function debounceSearch() {
        var input = siteSearchInput;

        if (input == null) {
            throw new Error('Cannot find .site-search-query');
        }

        // Words chained with . are combined, i.e. System.Text is "systemtext"
        var s = input.value.replace(/\./g, '').trim();

        if (!s) {
            const address = window.location.href.split('?')[0];
            window.history.pushState({}, '', address);
        }

        window.clearTimeout(debounceTimer);
        debounceTimer = window.setTimeout(function () {
            if (ready && s) {
                search(s);
            }
        }, 400);
    }

    fetch(dataUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            haystack = data;
            ready = true;

            for (let i = 0; i < haystack.length; i++) {
                const item = haystack[i];
                item.safeTitle = sanitise(item.title);
                item.tags = item.tags.map((t) => sanitise(t));
                item.safeDescription = sanitise(item.description);
                item.depth = item.url.match(/\//g)?.length ?? 0;

                item.headings.forEach((h) => (h.safeText = sanitise(h.text)));
            }

            /** @type {HTMLFormElement} */
            const siteSearch = siteSearchElement;

            /** @type {HTMLInputElement} */
            const siteSearchQuery = siteSearchInput;

            if (siteSearch == null || siteSearchQuery == null) {
                throw new Error(
                    'Cannot find #site-search or .site-search-query'
                );
            }

            siteSearch.addEventListener('submit', function (e) {
                e.preventDefault();
                debounceSearch();
                return false;
            });

            siteSearchQuery.addEventListener('keyup', function (e) {
                e.preventDefault();
                debounceSearch();
                return false;
            });

            const params = new URLSearchParams(window.location.search);
            if (params.has('q')) {
                siteSearchQuery.value = params.get('q') ?? '';
            }

            for (let key of Object.keys(scoring)) {
                if (params.has(`s_${key}`)) {
                    scoring[key] = parseInt(
                        params.get(`s_${key}`) ?? scoring[key].toString(),
                        10
                    );
                }
            }

            debounceSearch();
        })
        .catch((error) => {
            console.log(error);
        });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSearch);
} else {
    initializeSearch();
}
