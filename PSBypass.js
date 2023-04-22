// ==UserScript==
// @name         Bypass PS Store Transaction Verification
// @version      beta0
// @namespace    https://greasyfork.org/en/users/950672-bnlos
// @description  This Script Should Bypass Transaction Verification and returns Success Code
// @match        https://store.playstation.com/*
// ==/UserScript==
function disableTransactionVerification() {
  var form = document.getElementById('transaction-verification-form');
  var submitButton = document.querySelector('button[type="submit"][name="verify-purchase-submit"]');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    submitButton.disabled = false;
    form.submit = function() {
      return true;
    };
  });
  
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    form.submit();
  });
  
  var orderAndPayButton = document.querySelector('button[type="submit"][name="place-order"]');
  orderAndPayButton.addEventListener('click', function() {
    disableTransactionVerification();
  });
}

disableTransactionVerification();
