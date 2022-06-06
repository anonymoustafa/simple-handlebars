list = {
    arr : [
        {num:1},{num:2},{num:3},{num:4},{num:5}
    ]
}


$(document).ready(function(){
	var B = $("#list-template").html();
	var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
	$(".character-list-container").html(compiledCharacterTemplate(cast));
});