$(document).ready(function(){
	var source = $("#first-template").html();
	var template = Handlebars.compile(source);
	var context = {
		title: "All about Handlebars",
		body: "<p>This is apost about &lt;p&gt; tags</p>",
	}
	var el_html = template(context);  console.log(context);

	$("#render_here").html(el_html);
	$("#render_here_again").html(el_html);

var source = $('.post').html();
var template = Handlebars.compile(source);

var context = {
	author: {
		firstName : "Luffy",
		lastName : "Monkey D"
	},
	body: "Devil Fruit user",
		comments: [{
			author: {
				firstName: "Zorro",
				lastName: "Ronoa"
			},
			body: "Here is the 1st comments"
		}, {
			author: {
				firstName: "Usopp",
				lastName: "Soge King"
			},
			body: "Haki user"
		}]
	};

	Handlebars.registerHelper('fullName', function(person){
		return person.firstName + " " + person.lastName;
	});

	var html = template(context);

	$(".post").html(html);


	var ctx = {
		headers: [{
			id: 1, item: "one"
		}, {
			id: 2, item: "two"
		},{
			id: 3, item: "Three"
		},{
			id: 4, item: "Four"
		}]
	};

	var source = $("#selections").html();
	var template = Handlebars.compile(source);
	var el_html = template(ctx);
	$("#selections").html(el_html);

});