// Listen for network requests to https://c12.qbo.intuit.com/qbo12/v4/entities.
chrome.webRequest.onCompleted.addListener(function(details) {
  if (details.url === "https://c12.qbo.intuit.com/qbo12/v4/entities") {
    // Get the JSON data.
    var jsonData = JSON.parse(details.responseData);

    // Copy the JSON data to the clipboard.
    chrome.clipboard.writeText(JSON.stringify(jsonData));
  }
});
