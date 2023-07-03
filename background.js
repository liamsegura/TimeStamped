chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: contentScriptFunc,
    args: ['action'],
  });
});


function contentScriptFunc() {

  function convertDate(date) {
    let convertedDate = new Date(date);
    var options = { hour: '2-digit', minute: '2-digit', hour12: false };
    return convertedDate.toLocaleTimeString("en-US", options);
  }

  let activeElement = document.activeElement;
  activeElement.innerHTML = convertDate(new Date());
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setIcon({ path: "128x128.png" });
});