document.getElementById("copy-button").addEventListener("click", function() {
  const url = document.getElementById("url").value;
  chrome.runtime.sendMessage({
    type: "copy-network-request-response",
    url: "https://c12.qbo.intuit.com/qbo12/v4/entities"
  });
});
