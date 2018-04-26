/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var obj = objHashtags(hashtags);
    var arr = objKeysInArray(obj);
    var string = arrayInSring(arr);
    return string;
};

function objHashtags(hashtags) {
    var obj = {};

    for (var i = 0; i < hashtags.length; i++) {
        var prop = hashtags[i].toLowerCase();
        if (obj[prop] === undefined) {
            obj[prop] = true;
        }
    }
    return obj;
}

function objKeysInArray(obj) {
    var arr = [];
    for (key in obj) {
        arr.push(key);
    }
    return arr;
}

function arrayInSring(arr) {
    var string = '';
    if (arr.length > 0) {
        string = arr.join(', ');
    }
    return string;
}
