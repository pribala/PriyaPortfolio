$('document').ready(function(){

	// data for modal
	var projects = [{
		name: "Neighborhood Map",
		main: "A single page application featuring a map of New York City\
			with prominent New York landmarks highlighted. The application utilizes the \
			Google Maps API for displaying a fullscreen map and the MediaWiki API to provide \
			unique information for the highlighted locations.",
		sub: "KnockoutJS is used to \
					 implement a dynamic UI update.",
		repo: "https://github.com/pribala/Neighborhood-Map",
		demo: "https://pribala.github.io/Neighborhood-Map/"			 			 
	},
	{
		name: "Yore Bazaar",
		main: "A daily planning aid that helps users to view their friends /colleagues /instructor's \
				calendar and schedule appointment with them. All the group members publish their public \
				google calendars which can be accessed from a single dashboard making it simple to \
				schedule time with any member.",
		sub: 	"The event is added to the member's calendar and notification is sent by email to \
				all the attendees.",
		repo: "https://github.com/pribala/YoreBazaar",
		demo: "https://infinite-hamlet-30446.herokuapp.com/"		
	},
	{
		name:  "Meeting Assistant",
		main: "A daily planning aid that helps users to view their friends /colleagues /instructor's \
			   calendar and schedule appointment with them. All the group members publish their public \
			   google calendars which can be accessed from a single dashboard making it simple to \
			   schedule time with any member.",
		sub:  "The event is added to the member's calendar and notification is sent by email to \
		       all the attendees.",
		repo:  "https://github.com/pribala/Project-Scheduler",
		demo: "https://pribala.github.io/Project-Scheduler/"
	},
	{
		name: "Trivia Fun",
		main: "Trivia game using JavaScript for the logic and jQuery to manipulate HTML.",
		sub:  "Trivia questions with multiple choice. The player has a limited amount of time \
			   to finish the quiz.The game ends when the time runs out. The page reveals the \
			   number of questions that players answer correctly and incorrectly.",
		repo:  "https://github.com/pribala/TriviaGame",
		demo: "https://pribala.github.io/TriviaGame/"
	},
	{	
		name: "En Route",
		main: "The app displays a list of trains with \
				their destination, frequency, next arrival time and minutes \
				till the next train. Authentication is done through Google SignIn.\
				Only an authenticated user can edit data.",
		sub: 	"The train time updates every minute to reflect realtime data.The app uses \
				Firebase database for persistent data storage and authentication.",
		repo: "https://github.com/pribala/TrainScheduler", 
		demo: "https://pribala.github.io/TrainScheduler/" 

	},
	{
		name: "Hangman",
		main: "Classic Hangman game in Javascript where the player is given a word\
			   and has 12 chances to guess the word one letter at a time.",
		sub:  "For each wrong guess, the chances are decreased by 1 and \
		       hangman image is drawn on the canvas part by part till all the twelve\
		       chances are used up.", 	
		repo:  "https://github.com/pribala/hangman",
		demo:  "https://pribala.github.io/Hangman-Game/"
	}
	];

	$(".flip-container").hover(function(e){
		if($(window).width() >= 1024){
  	   		$(this).toggleClass("flipper");
	   	}else{
	   	   	$(this).removeClass("flipper");
	   	}
	});

	$('.flip-container').on('touchstart', function(){
		if($(window).width() >= 1024){
			$(this).toggleClass("flipper");
		}else{
			$(this).removeClass("flipper");
			var id = $(this).attr("id");
			switch(id){
				case "mapProject":	
					$("#infoModalLabel").text(projects[0].name);
					$(".modal-body").html("<p>"+projects[0].main+"</p><p>"+projects[0].sub+"</p>");
					$(".repo").attr("href", projects[0].repo);
					$(".demo").attr("href", projects[0].demo);
					break;

				case "shoppingSite":
					$("#infoModalLabel").text(projects[1].name);
					$(".modal-body").html("<p>"+projects[1].main+"</p><p>"+projects[0].sub+"</p>");
					$(".repo").attr("href", projects[1].repo);
					$(".demo").attr("href", projects[1].demo);
					break;	
				
				case "scheduler":
					$("#infoModalLabel").text(projects[2].name);
					$(".modal-body").html("<p>"+projects[2].main+"</p><p>"+projects[2].sub+"</p>");
					$(".repo").attr("href", projects[2].repo);
					$(".demo").attr("href", projects[2].demo);
					break;	
				
				case "trivia":
					$("#infoModalLabel").text(projects[3].name);
					$(".modal-body").html("<p>"+projects[3].main+"</p><p>"+projects[3].sub+"</p>");
					$(".repo").attr("href", projects[3].repo);
					$(".demo").attr("href", projects[3].demo);
					break;		

				case "trainProj":
					$("#infoModalLabel").text(projects[4].name);
					$(".modal-body").html("<p>"+projects[4].main+"</p><p>"+projects[4].sub+"</p>");
					$(".repo").attr("href", projects[4].repo);
					$(".demo").attr("href", projects[4].demo);
					break;	

				case "hangman":
					$("#infoModalLabel").text(projects[5].name);
					$(".modal-body").html("<p>"+projects[5].main+"</p><p>"+projects[5].sub+"</p>");
					$(".repo").attr("href", projects[5].repo);
					$(".demo").attr("href", projects[5].demo);
					break;				
			}
			$('#infoModal').modal('toggle')
		}	
	});

	// $('.nav-link').click(function(){
	// 	$('.nav-link').removeClass('active');
	// 	$(this).addClass("active");
	// });

	$(".navbar-toggler").click(function(){
		if($(window).width() < 700){
			$(".cover-heading").toggleClass("changeTextColor");
		}
	})
});