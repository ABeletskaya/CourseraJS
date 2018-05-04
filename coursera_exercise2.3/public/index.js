// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var param = command.split(' ');
    var commandName = param[0];

    if (commandName === 'ADD') {
        param.shift();
        return addContact(param);
    }

    if (commandName === 'SHOW') {
        return showContacts();
    }

    if (commandName === 'REMOVE_PHONE') {
        return removePhone(param[1]);
    }
};

function addContact(arr) {
    if (!phoneBook.hasOwnProperty(arr[0])) {
        phoneBook[arr[0]] = arr[1];
        return phoneBook;
    }

    phoneBook[arr[0]] += "," + arr[1];
    return phoneBook;
}

function showContacts() {
    var contacts = [];
    for (var key in phoneBook) {
        if (phoneBook[key] !== undefined) {
            contacts.push(`${key}: ${phoneBook[key].split(',').join(', ')}`);
        }
    }
    return contacts.sort();
}

function removePhone(phone) {
    var phones = [];
    var isRemoved = false;
    for (var key in phoneBook) {
        if (phoneBook[key].indexOf(phone) != -1) {
            var contacts = phoneBook[key].split(',')
                .filter(function (number) {
                    return number !== phone;
                })
            if (contacts.length > 1) {
                phoneBook[key] = contacts.join(',');
            }
            else {
                phoneBook[key] = contacts[0];
            }
            return isRemoved = true;
        }
    }

    return isRemoved;
}
