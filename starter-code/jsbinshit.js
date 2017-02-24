//write your answers below

var contactsArr = ["Matt Smith","Sam Davis","Ashley Jones"];

var findContact = function(index) {
  return contactsArr[index];
}

var addContact = function(name) {
  contactsArr.push(name);
  return contactsArr;
}

var updateLastContact = function(newName) {
  addContact(newName);
  return contactsArr;
}