function doesUrlMatchBlackList(urlToMatch, dictionary){
    if(urlToMatch.indexOf('http') == -1){
        return false;
    }
    if(dictionary.urls[urlToMatch]){
        return true;
    }
    
}

module.exports.doesUrlMatchBlackList = doesUrlMatchBlackList;
