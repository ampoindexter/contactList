'use strict';

$(document).ready(init);
var contactList = localStorage.contacts ? JSON.parse(localStorage.contacts) : [];

function init() {
	updateTable();
	$('#add').click(addContact);
	$('.remove').click(removeContact);
	$('table').on('click', 'th', sortContacts);
	// $('td').dblclick(editContact);

}

function addContact() {
	var contact = {};
	contact.name = $('#name').val();
	contact.email = $('#email').val();
	contact.phone = $('#phone').val();
	contact.address = $('#address').val();
	contactList.push(contact);
	saveToStorage();
	window.location.reload();
	updateTable();
	$('#name').val('');
	$('#email').val('');
	$('#phone').val('');
	$('#address').val('');
}

function updateTable() {
	$('#list').empty();
	var rows = contactList.map(function(contact, index) {
		return $('<tr>')
		.append($('<td>').text(contact.name))
		.append($('<td>').text(contact.email))
		.append($('<td>').text(contact.phone))
		.append($('<td>').text(contact.address))
		.append($('<td>').append('<a href="#"><i class = "fa fa-trash-o remove person'+index+' '+index+'"></i></a>'))        
	});
	$('#list').append(rows);
}

function removeContact() {
	var $targetRow = this.closest('tr');
	var i = this.classList[4];
	i = parseInt(i);
	contactList.splice(i, 1);
	saveToStorage();
	window.location.reload();
	updateTable();
}

function editContact(event) {
	var $target = $(event.target)
	var $targetCell = $target.find('td');
	
}

function saveToStorage() {
	localStorage.contacts = JSON.stringify(contactList)
}


function sortContacts(e) {
  var $targetId = $(e.target).attr('id');
  if ($targetId == 'names') {
    contactList = _.sortBy(contactList, function(o) {
      return o.name;
    });
  }  if ($targetId == 'emails') {
    contactList = _.sortBy(contactList, function(o) {
      return o.email;
    });
  }
  if ($targetId == 'phoneNumbers') {
    contactList = _.sortBy(contactList, function(o) {
      return o.phone;
    });
  }
  if ($targetId == 'addresses') {
    contactList = _.sortBy(contactList, function(o) {
      return o.address;
    });
  }
  saveToStorage();
  updateTable();
}
