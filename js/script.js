$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
	$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.catalog__container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});
$('.catalog-item__link').on('click', function(event) {
	$(this)
		.parents('.catalog-item').find('.catalog-item__wrapper').toggleClass('catalog-item__wrapper_active');
});
// modal
$('[data-modal=consult]').on('click', function(event) {
	$('.overlay, #consultation').fadeIn();
});
$('[data-modal=order]').on('click', function(event) {
	$('.overlay, #order').fadeIn('slow');
});
$('.modal__close').on('click', function(event) {
	$('.overlay, #order, #consultation, #thanks').fadeOut('slow');
});
$('.catalog-item__btn').on('click', function(event) {
	$('.overlay, #order').fadeIn('slow');
});

// $('.modal__btn').on('click', function(event) {
// 	$('.overlay, #order, #consultation').fadeOut();
// 	$('.modal_mini').fadeIn();
// });
$('[data-modal=order]').each(function(i) {
	$(this).on('click', function(event) {
		$('#order .modal__subtitle').text($('.catalog-item__title').eq(i).text());
	});
});

// $(document).ready(function() {
// 	$('form#qwe').validate();
// })



// $(document).ready(function() {

//     $("form#signup").validate({
//         rules: {
//             password: {
//                 required: true,
//                 minlength: 5
//             },
//             passwordConfirm: {
//                 //required: true,
//                 //minlength: 5,
//                 equalTo: "#password"
//             }
//         },
//         messages: {
//             password: {
//                 required: "Please provide a password",
//                 minlength: "Your password must be at least 5 characters long"
//             },
//             passwordConfirm: {
//                 required: "Please provide a password",
//                 minlength: "Your password must be at least 5 characters long",
//                 equalTo: "Please enter the same password as above"
//             }
//         }
//     });

// });


$(document).ready(function() {

	function validateForms(form){
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
				tel: {
					required: true,
				},
				email: {
					required: true,
					email: true,
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите своё имя",
					minlength: jQuery.validator.format("Введите не менее {0} символов")
				},
				tel: {
					required: "Пожалуйста, введите свой номер телефона",
					number: "Неправильно введён номер"
				},
				email: {
					required: "Пожалуйста, введите свой адрес",
					email: "Неправильно введён адрес почты"			
				}
			}
		});
	};

	validateForms("#order form");
	validateForms("#consultation form");
	validateForms("form#consult-form");

	$(".form__tel").mask("+375 (99) 999-99-99");

});