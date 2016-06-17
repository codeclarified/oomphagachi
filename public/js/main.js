$(function() {
	$("button[name='action']").click(function(e) {
		e.preventDefault();
		var form_action = $(this).parent('form').attr('action');
		switch($(this).val()){
			case 'panic':
				alert('Panic jerks!');
				break;
			default:
				$.ajax(form_action, {
					method: 'POST',
					data: {
						action: form_action
					},
					success: function(response, status) {
						console.log(response);
					}
				});
				break;
		}
	});
});
