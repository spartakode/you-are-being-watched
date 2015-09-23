chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if (changeInfo.status == "complete"){
        if(tab.url.toString() == "https://www.heroku.com/"){
            var result = window.confirm("Warning. This site or its owners may support Government surveillance. Click ok to continue or cancel to close tab");
            if (result === false){
                chrome.tabs.remove(tabId);
            }
        }
    }
});
