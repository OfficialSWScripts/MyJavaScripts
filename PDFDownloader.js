// ==UserScript==
// @name        PDF Downloader
// @description    Add a button to the website to download pdf files
// @version     beta1
// @author      BNLOS
// @match       http*://*/*
// @updateURL   https://raw.githubusercontent.com/OfficialSWScripts/MyJavaScripts/main/PDFDownloader.js
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    const downloadPDFs = async () => {
        const url = window.location.href;
        const response = await fetch(url);
        const html = await response.text();
        const regex = /href="(.*?\.pdf)"/g;
        const matches = html.matchAll(regex);
        for (const match of matches) {
            const pdfUrl = new URL(match[1], url).href;
            const pdfName = pdfUrl.substring(pdfUrl.lastIndexOf("/") + 1);
            const pdfResponse = await fetch(pdfUrl);
            const pdfBlob = await pdfResponse.blob();
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(pdfBlob);
            link.download = pdfName;
            link.click();
        }
    };

    GM_registerMenuCommand('Download PDFs', downloadPDFs);

    const checkForUpdates = () => {
        const scriptName = GM_info.script.name;
        const scriptVersion = GM_info.script.version;
        const scriptLastUpdate = GM_getValue('scriptLastUpdate', 0);
        const currentTime = new Date().getTime();
        const oneDay = 24 * 60 * 60 * 1000;
        if (currentTime - scriptLastUpdate > oneDay) {
            GM_xmlhttpRequest({
                method: 'GET',
                url: '', // Replace xxxxx with your script ID on GreasyFork
                onload: (response) => {
                    const regex = /@version\s+([0-9.]+)/;
                    const newVersion = response.responseText.match(regex)[1];
                    if (newVersion !== scriptVersion) {
                        if (confirm(`A new version (${newVersion}) of ${scriptName} is available. Do you want to update now?`)) {
                            window.location.href = 'https://greasyfork.org/scripts/xxxxx/code/PDF%20Downloader.user.js'; // Replace xxxxx with your script ID on GreasyFork
                        }
                    }
                }
            });
            GM_setValue('scriptLastUpdate', currentTime);
        }
    };

    checkForUpdates();

})();
