/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var words = stringToWordsArray(tweet);
    var hashtags = words.filter(hashtagFilter)
                        .map(removeFirstSymbol);
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

function removeFirstSymbol(word, index){
    return word.slice(1, word.length);
}
