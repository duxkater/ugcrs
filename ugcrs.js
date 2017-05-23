jQuery(document).ready(function($) {

	$('#commerce_option_base_salade_form_group_base1').prepend("<button id='UGCRS'>RANDOM</button>");

	$(document).on('click', '#UGCRS', function(e) {

		e.preventDefault();

		var elements = {
			elBase: $('#commerce_option_base_salade_form_group_base1'),
			el200: $('#edit-field-options-0-field-toppings-2-formule-und'),
			el150: $('#edit-field-options-0-field-toppings-1-50-formule-und'),
			el095: $('#edit-field-options-0-field-toppings-0-95-formule-und'),
			el035: $('#edit-field-options-0-field-toppings-0-35-formule-und'),
			elSauce: $('#edit-field-options-0-field-sauce-und'),
		}

		for (var i in elements) {
			var element = elements[i];
			element.find('input').prop('checked', false);
			var nb = Math.floor((Math.random() * element.find('input').length));
			$(element.find('input')[nb]).prop("checked", true);
		}

	});
});