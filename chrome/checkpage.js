chrome.tabs.onCreated.addListener(function(tab){
    console.log(tab.id.toString() + tab.url.toString());
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    //alert(tab.url.toString());
    //alert(changeInfo.status + " : "  + tab.url.toString());
    if (changeInfo.status == "complete"){
        if(tab.url.toString() == "https://www.heroku.com/"){
            alert("Warning. This site or its owners may support Government surveillance");
        }
    }
});
