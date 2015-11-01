var googleURL = 'https://www.google.com/?gws_rd=ssl',
googleURL2 = 'https://www.google.com/';

chrome.browserAction.onClicked.addListener(function(tab) {
  if (tab.url !== googleURL || tab.url !== googleURL2){
    chrome.tabs.update(tab.id, {
        url: googleURL
    });
  }
});

chrome.tabs.onUpdated.addListener(function(id, info, tab){
  if (tab.status === 'loading' || tab.url === googleURL2){
    chrome.tabs.executeScript({
      file: 'src/addButton.js'
    });
  }
})