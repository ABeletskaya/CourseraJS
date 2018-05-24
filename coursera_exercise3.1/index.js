/**
 * @param {String} date
 * @returns {Object}
 */

module.exports = function (date) {

    return {
        add: function (count, unit) {
            var objDate = new Date(Date.parse(date));
            checkParameters(count, unit);
            if (unit === 'years') {
                objDate.setFullYear(objDate.getFullYear() + count);
            }
            if (unit === 'months') {
                objDate.setMonth(objDate.getMonth() + count);
            }
            if (unit === 'days') {
                objDate.setDate(objDate.getDate() + count);
            }

            if (unit === 'hours') {
                objDate.setHours(objDate.getHours() + count);
            }

            if (unit === 'minutes') {
                objDate.setMinutes(objDate.getMinutes() + count);
            }
            date = dateToStringFormat(objDate);
            return this;
        },
        subtract: function (count, unit) {
            var objDate = new Date(Date.parse(date));
            checkParameters(count, unit);
            if (unit === 'years') {
                objDate.setFullYear(objDate.getFullYear() - count);
            }
            if (unit === 'months') {
                objDate.setMonth(objDate.getMonth() - count);
            }
            if (unit === 'days') {
                objDate.setDate(objDate.getDate() - count);
            }

            if (unit === 'hours') {
                objDate.setHours(objDate.getHours() - count);
            }

            if (unit === 'minutes') {
                objDate.setMinutes(objDate.getMinutes() - count);
            }
            date = dateToStringFormat(objDate);
            return this;
        }
    }
};

function checkParameters(count, unit) {
    var regExCount = /^\d+$/;
    var regExUnits = /^years$|^months$|^days$|^hours$|^minutes$/;
    if (count.toString().match(regExCount) === null
            || unit.match(regExUnits) === null) {
        throw new TypeError('Неверный тип параметров');
    }
}

function dateToStringFormat(objDate) {
    // format "2017-05-16 13:45"
    var year = objDate.getFullYear();
    var month = numTo2DigitFormat(objDate.getMonth());
    var day = numTo2DigitFormat(objDate.getDate());
    var hour = numTo2DigitFormat(objDate.getHours());
    var minutes = numTo2DigitFormat(objDate.getMinutes());

    var string = `${year}-${month}-${day} ${hour}:${minutes}`;

    return string;
}

function numTo2DigitFormat(num) {
    return (num > 9) ? num : '0' + num;
}

