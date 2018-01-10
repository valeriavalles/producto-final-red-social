/*------------ FUNCIONALIDAD PARA POSTEAR ---------*/
$(document).ready(function() {
    var btn = $('#btn-publicar');
		// btn.prop("disabled", true);
	var textarea = $('#textarea');
	
	textarea.keyup(function(e){
		validation();
	});
	
	function validation(){
		var long = textarea.val().length;
		var onlyText = textarea.val().replace(/\s/g,'');
		if (long == 0 || onlyText == 0) {
		//	btn.removeAttr('disabled');
		}
		else {
		//	 btn.prop("disabled", true);
		}
	}
	btn.click(function() {
		newCont();
		textarea.val('');
		//  btn.prop("disabled", true);
	});
	function newCont() {
		var textContent = textarea.val();
		var containerToDo = $('#content-post');
    	var newTask = $('<div>');
		newTask.addClass('stylo-cont');
		containerToDo.append(newTask);
		var label = $('<div>');
		newTask.append(label);
		var text = $(document.createTextNode(textContent));
		label.append(text);
		var icon = $('<i>');
		icon.addClass('glyphicon glyphicon-trash icon');
		newTask.append(icon);
    
    textarea.val('');

		check.click(function() {
			labeledTask();
		});
		function labeledTask(){
			label.toggleClass('labeled');
		}
		icon.click( function() {
			deleteTask();
    });
    
		function deleteTask(){
			newTask.remove()
		}
	}
});
/* -----------  Fin ---------*/

   