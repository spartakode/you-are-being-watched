function doesUrlMatchBlackList(urlToMatch, dictionary){
    if(urlToMatch.indexOf('http') == -1){
        return false;
    }
    urlToMatch = urlToMatch.slice(urlToMatch.indexOf('://')+3);
    if (urlToMatch.indexOf('www.') === 0){
        urlToMatch = urlToMatch.slice(urlToMatch.indexOf('www.') + 4);
    }
    if (urlToMatch.indexOf('/') !== -1){
        urlToMatch = urlToMatch.slice(0, urlToMatch.indexOf('/'));
    }
    console.log(urlToMatch);
    if(dictionary.urls[urlToMatch]){
        return true;
    }
    while ( true ){
        if(urlToMatch.indexOf('.') === -1){
            break;
        }
        if (urlToMatch.indexOf('.') !== urlToMatch.lastIndexOf('.')){
            urlToMatch = urlToMatch.slice(urlToMatch.indexOf('.')+1);
        }
        if(urlToMatch.indexOf('.') === urlToMatch.lastIndexOf('.')){
            break;
        }
    }
    console.log(urlToMatch);
    if(dictionary.urls[urlToMatch]){
        return true;
    }
    return false;
}

module.exports.doesUrlMatchBlackList = doesUrlMatchBlackList;
