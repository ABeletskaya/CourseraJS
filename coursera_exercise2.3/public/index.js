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
        return addContact(param[1], param[2]);
    }

    if (commandName === 'SHOW') {
        return showContacts();
    }

    if (commandName === 'REMOVE_PHONE') {
        return removePhone(param[1]);
    }
};

function addContact(name, phones) {
    if (!phoneBook.hasOwnProperty(name)) {
        phoneBook[name] = phones;
        return phoneBook;
    }

    phoneBook[name] += "," + phones;
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
    var contacts = [];
    for (var key in phoneBook) {
        if (phoneBook[key].indexOf(phone) != -1) {
             contacts = phoneBook[key].split(',')
                .filter(function (number) {
                    return number !== phone;
                })
            if (contacts.length > 1) {
                phoneBook[key] = contacts.join(',');
            }
            else {
                phoneBook[key] = contacts[0];
            }
            return true;
        }
    }
    return false;
}
