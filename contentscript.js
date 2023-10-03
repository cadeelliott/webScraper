// contentscript.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.type === "copy-network-request-response") {
    const url = message.url;
    const request = chrome.devtools.network.getHAR()[url];
    const response = request.response;
    const responseText = response.content.text;
    chrome.clipboard.writeText(responseText);
  }
});
