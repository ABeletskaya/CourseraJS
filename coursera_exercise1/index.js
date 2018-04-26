/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var words = stringToWordsArray(tweet);
    var hashtags = removeFirstSymbol(words.filter(hashtagFilter));
    return hashtags;
};

function stringToWordsArray(tweet) {
    var arr = [];
    arr = tweet.split(' ');
    return arr;
}

function hashtagFilter(word, index) {
    return word.startsWith('#');
}

function removeFirstSymbol(hashtags) {
    var result = [];
    for (var i = 0; i < hashtags.length; i++) {
        result.push(hashtags[i].slice(1, hashtags[i].length));
    }
    return result;
}
