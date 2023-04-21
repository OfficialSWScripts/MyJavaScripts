// ==UserScript==
// @name        PDF Downloader
// @description    Add a button to the website to download pdf files
// @version     beta0
// @author      BNLOS
// @match       http*://*/*
// ==/UserScript==
// Get the PDF url
const pdfUrl = 'https://*.pdf';

// Create a button element
const downloadButton = document.createElement('button');
downloadButton.textContent = 'Download PDF';

// Add a click event listener to the button
downloadButton.addEventListener('click', () => {
  // Create a hidden anchor element
  const downloadLink = document.createElement('a');
  downloadLink.style.display = 'none';
  downloadLink.href = pdfUrl;
  downloadLink.setAttribute('download', '*.pdf');
  
  // Append the anchor element to the document body
  document.body.appendChild(downloadLink);
  
  // Trigger a click event on the anchor element
  downloadLink.click();
  
  // Clean up the anchor element
  document.body.removeChild(downloadLink);
});

// Add the button to the webpage
document.body.appendChild(downloadButton);
