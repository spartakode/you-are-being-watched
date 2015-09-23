describe("Matcher", function(){
    matcher = require('../matcher.js');
    var dictionary = {urls:
        {"https://www.heroku.com/": {
            "isDirect": false,
            "parent": "https://salesforce.com/",
            "source": "",
            "description": "",
            },
        "https://www.salesforce.com/": {
            "isDirect": true,
            "parent": "",
            "source": "",
            "description": "",
            }
        }
    };
    it("should return false for any url that doesn't contain http: at the start", function(){
        expect(matcher.doesUrlMatchBlackList('ftp://abc.com/9.jpg', {})).toBe(false);
        expect(matcher.doesUrlMatchBlackList('www.abc.com/9.jpg', {})).toBe(false);
    });
    it("should return true for any url that does match the list", function(){
        expect(matcher.doesUrlMatchBlackList('https://www.heroku.com/', dictionary)).toBe(true);
        expect(matcher.doesUrlMatchBlackList('https://www.salesforce.com/', dictionary)).toBe(true);
    });
});
