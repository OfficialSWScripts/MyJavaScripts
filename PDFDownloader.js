// ==UserScript==
// @name        Twitter Media Downloader
// @name:ja     Twitter Media Downloader
// @name:zh-cn  Twitter 媒体下载
// @name:zh-tw  Twitter 媒體下載
// @description    Save Video/Photo by One-Click.
// @description:ja ワンクリックで動画・画像を保存する。
// @description:zh-cn 一键保存视频/图片
// @description:zh-tw 一鍵保存視頻/圖片
// @version     1.05
// @author      AMANE
// @namespace   none
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
