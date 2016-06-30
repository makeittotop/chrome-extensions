/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.browserAction.onClicked.addListener(function(tab) {
  /*chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });*/
  console.log("Unblocking " + tab.url);
  chrome.tabs.executeScript(null, {file: "custom.js"});
});