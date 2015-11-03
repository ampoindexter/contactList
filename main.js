'use strict';

$(document).ready(init);
var contactList = localStorage.contacts ? JSON.parse(localStorage.contacts) : [];

function init() {
	updateTable();
	$('#add').click(addContact);
	$('.remove').click(removeContact);
	$('td').dblclick(editContact);

}

function addContact() {
	var contact = {};
	contact.name = $('#name').val();
	contact.email = $('#email').val();
	contact.phone = $('#phone').val();
	contact.address = $('#address').val();
	console.log(contact);
	console.log(contactList);
	contactList.push(contact);
	console.log(contactList);
	localStorage.contacts = JSON.stringify(contactList);
	updateTable();
}

function updateTable() {
	$('#list').empty();
	var rows = contactList.map(function(contact, index) {
		return $('<tr>')
		.append($('<td>').text(contact.name))
		.append($('<td>').text(contact.email))
		.append($('<td>').text(contact.phone))
		.append($('<td>').text(contact.address))
		.append($('<td>').append('<a href="#"><i class = "fa fa-trash-o remove person'+index+'"></i></a>'))        
	});
	$('#list').append(rows);
}

function removeContact(event) {
	var $target = $(event.target);
	var $targetRow = $target.closest('tr');
	var i = $targetRow.index();
	contactList.splice(i, 1);
	$targetRow.empty();
}

function editContact(event) {
	var $target = $(event.t)
}








