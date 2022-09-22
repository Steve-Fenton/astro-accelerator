// @ts-check

import { qs } from './modules/query.js';
import { raiseEvent } from './modules/events.js';
import { contains, sanitise, explode, highlight } from './modules/string.js';

/**
type SearchEntry = {
    score: number;
    title: string;
    safeTitle: string;
    categories: string[];
    tags: string;
    url: string;
    date: string;
}
 */

var dataUrl = '/search.json';
var haystack = /** @type {SearchEntry} */ [];
var currentQuery = '';

var ready = false;
var scrolled = false;

/**
 * 
 * @param {string} s 
 * @returns 
 */
function search(s) {
    const needles = /** @type {SearchEntry} */ [];
    let summaries = [];

    // Clean the input
    const cleanQuery = sanitise(s);

    if (currentQuery === cleanQuery) {
        return;
    }

    raiseEvent('searched', { search: s });

    currentQuery = cleanQuery;
    const queryTerms = explode(currentQuery);

    haystack.forEach( (item) => {

        item.score = 0;
        
        queryTerms.forEach(term => {
            if (contains(item.safeTitle, term)) {
                item.score = item.score + 10;
            }

            item.categories.forEach(c => {
                if (contains(c, term)) {
                    item.score = item.score + 5;
                    summaries.push(c);
                }
            });

            if (contains(item.tags, term)) {
                item.score = item.score + 5;
            }
        })

        if (item.score > 0) {
            needles.push(item);
        }
    });

    needles.sort(function (a, b){
        return b.score - a.score;
    });

    const results = qs('#site-search-results');

    const ol = document.createElement('ol');
    ol.className = 'site-search-results';

    const limit = Math.min(needles.length, 12)

    for (let i = 0; i < limit; i++) {
        const needle = needles[i];

        const a = document.createElement('a');
        a.innerHTML = needle.title;
        a.href = needle.url;

        const uniqueSummaries = [...new Set(summaries)];
        const description = highlight(
            uniqueSummaries.join('...'),
            queryTerms
        );

        const t = document.createElement('span');
        if (description.length > 0) {
            t.innerHTML = '...' + description + '...';
        }

        const li = document.createElement('li');
        li.appendChild(a);
        li.appendChild(t);

        ol.appendChild(li);
    }

    var h2 = document.createElement('h2');
    h2.innerHTML = needles.length === 0
        ? results.dataset.emptytitle || 'No Results'
        : results.dataset.title || 'Results';

    results.innerHTML = '';
    results.appendChild(h2);
    results.appendChild(ol);
}

var debounceTimer;

function debounceSearch() {
    var input = /** @type {HTMLInputElement} */(qs('#site-search-query'));

    if (input == null) {
        throw new Error('Cannot find #site-search-query');
    }

    var s = input.value;

    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(function () {
        if (ready) {
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
            item.tags = sanitise(item.tags);
            item.categories = item.categories.map(c => sanitise(c));
        }

        var siteSearch = qs('#site-search');
        var siteSearchQuery = qs('#site-search-query');

        if (siteSearch == null || siteSearchQuery == null) {
            throw new Error('Cannot find #site-search or #site-search-query');
        }
    
        siteSearch.addEventListener('submit', function (e) {
            e.preventDefault();
            debounceSearch();
            return false;
        });
    
        siteSearchQuery.addEventListener('keyup', function (e) {
            e.preventDefault();
            if (!scrolled) {
                scrolled = true;
                this.scrollIntoView(true);
            }
            debounceSearch();
            return false;
        });

        console.log('Search ready');
    })
    .catch((error) => {
        console.log(error)
    });
