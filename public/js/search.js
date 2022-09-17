---
layout: null
---
// @ts-check

import { qs } from './modules/query.js';
import { raiseEvent } from './modules/events.js';
import { contains, sanitise, explode } from './modules/string.js';

var dataUrl = '{{ "/search.json" | prepend: site.baseurl }}';
var haystack = [];
var needles = [];
var currentQuery = null;

var ready = false;
var scrolled = false;

/**
 * Performs the search
 * @param {string} s 
 * @returns 
 */
function search(s) {
    needles = [];

    // Clean the input
    var cleanQuery = sanitise(s);

    if (currentQuery === cleanQuery) {
        return;
    }

    raiseEvent('searched', { search: s });

    currentQuery = cleanQuery;

    var queryTerms = explode(currentQuery);

    for (var i = 0; i < haystack.length; i++) {
        var item = haystack[i];

        item.score = 0;
        
        var title = sanitise(item.title);
        var category = sanitise(item.category);
        var tags = sanitise(item.tags);

        for (var j = 0; j < queryTerms.length; j++) {
            var term = queryTerms[j];

            if (contains(title, term)) {
                item.score = item.score + 10;
            }

            if (contains(category, term)) {
                item.score = item.score + 5;
            }

            if (contains(tags, term)) {
                item.score = item.score + 5;
            }
        }

        if (item.score > 0) {
            needles.push(item);
        }
    }

    needles.sort(function (a, b){
        return b.score - a.score;
    });

    var results = qs('#site-search-results');

    if (results == null) {
        throw new Error('Cannot find #site-search-results');
    }

    var ol = document.createElement('ol');
    ol.className = 'site-search-results';

    var limit = Math.min(needles.length, 12)

    for (var i = 0; i < limit; i++) {
        var needle = needles[i];

        var a = document.createElement('a');
        a.innerHTML = needle.title;
        a.href = needle.url;

        var li = document.createElement('li');
        li.appendChild(a);

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
    });
