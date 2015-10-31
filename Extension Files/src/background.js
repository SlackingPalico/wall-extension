var googleURL = 'https://www.google.com/?gws_rd=ssl',
googleURL2 = 'https://www.google.com/';

chrome.browserAction.onClicked.addListener(function(tab) {
  if (tab.url !== googleURL || tab.url !== googleURL2){
    chrome.tabs.update(tab.id, {
        url: googleURL
    });
  }
});