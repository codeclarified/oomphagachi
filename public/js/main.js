$(function() {
	if ($("#gameContainer").length) {
		var game = new Game();
		game.init(300, 200);
	}

	$("button[name='petaction']").click(function(e) {
		e.preventDefault();
		var form_action = $(this).parent('form').attr('action'),
			pet_action = $(this).val(),
			game_action;

		if(pet_action === 'play'){
			game_action = 'entertain';
		} else if(pet_action === 'feed'){
			game_action = 'eat';
		} else {
			game_action = pet_action;
		}
		switch($(this).val()){
			case 'panic':
				game.changeState('panic');
				break;
			default:
				$.ajax(form_action, {
					method: 'POST',
					data: {
						action: form_action
					},
					success: function(response, status) {
						game.changeState(game_action);
					}
				});
				break;
		}
	});
});
