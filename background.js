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
    let hours = convertedDate.getHours();
    let minutes = convertedDate.getMinutes();

    return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
  }


  let activeElement = document.activeElement;
  if (activeElement) {
    activeElement.innerHTML = convertDate(new Date());
  }
}