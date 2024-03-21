// ==UserScript==
// @name         Redirect Blacklisted Websites vscode
// @namespace    http://your.namespace.here/
// @version      0.1
// @description  Redirects from blacklisted websites to different specified URLs
// @author       Your Name
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define your blacklist of websites and their corresponding redirect URLs
    let redirectSet = new Set([
        //"google.com": "things:///show?id=today",
        "youtube.com",
        "facebook.com",
        "twitter.com",
        "instagram.com",
        "reddit.com",
        "tumblr.com",
        "pinterest.com",
        "google.com",
        "youtu.be",
        // Add more mappings as needed
    ]);

    let location = "https://things.christen.se";

    // Redirect to the appropriate URL if the current website is blacklisted
    function redirectIfNeeded(url) {
        var hostname = (new URL(url)).hostname.split('.').slice(-2).join('.');
        if (redirectSet.has(hostname)) {
            setInterval(function() {
                window.location.href = location;
            }, 10000);
            window.location.href = location;
        }
    }

    // Check if the current website is in the blacklist and redirect if necessary
    redirectIfNeeded(window.location.href);
})();