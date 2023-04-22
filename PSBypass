// ==UserScript==
// @name         Bypass PS Store Transaction Verification
// @version      beta0
// @namespace    https://greasyfork.org/en/users/950672-bnlos
// @description  This Script Should Bypass Transaction Verification and returns Success Code
// @match        https://store.playstation.com/*
// ==/UserScript==
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            const response = JSON.parse(this.responseText);
            if (response.resultCode === 0) {
                console.log("Transaction successful!");
            } else {
                console.log("Transaction failed. Error code: " + response.resultCode);
            }
        } else {
            console.log("Transaction failed. Server returned status code " + this.status);
        }
    }
};
xhr.open("POST", "https://store.playstation.com/chihiro-api/view/store/v1/tokens/refresh", true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(JSON.stringify({}));
