// popup.js
document.getElementById("copy-button").addEventListener("click", function() {
  const url = document.getElementById("url").value;
  chrome.runtime.sendMessage({
    type: "copy-network-request-response",
    url: url
  });
});
