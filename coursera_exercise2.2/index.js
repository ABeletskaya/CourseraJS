/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {   
    var arr = distinctFromArray(hashtags.map(toLowerCaseMap));    
    return arrayInString(arr);
};

function toLowerCaseMap(string, index){
    return string.toLowerCase();
}

function distinctFromArray(arr) {
    var distinctArr = [];
    distinctArr.push(arr[0]);
    var isExist;
    for (var i = 1; i < arr.length; i++) {
        isExist = false;
        var element = arr[i];
        for (j = 0; j < distinctArr.length; j++) {
            if (distinctArr[j] == element) {
                isExist = true;
                break;
            }
        }
        if (!isExist) {
            distinctArr.push(element);
        }
    }
    return distinctArr;
}

function arrayInString(arr) {
    var string = '';
    if (arr.length > 0) {
        string = arr.join(', ');
    }
    return string;
}
