	// youtube control
	var player;
	// this function gets called when API is ready to use
	function onYouTubePlayerAPIReady() {
	  // create the global player from the specific iframe (#video)
	  player = new YT.Player('youtube-field-player', {
	    events: {
	      // call this function when player is ready to use
	      'onReady': onPlayerReady
	    }
	  });
	}

	function onPlayerReady(event) {
	  
	  // bind events
	  var playButton = document.getElementById("play-button");
	  playButton.addEventListener("click", function() {
	    // alert('test');
	    document.getElementById("node_front_page_story_teaser_group_youtube_player").classList.add("video-play");
	    player.playVideo();
	  });
	  
	  var pauseButton = document.getElementById("pause-button");
	  pauseButton.addEventListener("click", function() {
	    player.pauseVideo();
	    document.getElementById("node_front_page_story_teaser_group_youtube_player").classList.remove("video-play");
	  });
	}

	// Inject YouTube API script
	var tag = document.createElement('script');
	tag.src = "//www.youtube.com/player_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


(function ($) {
 //...

 	// inital heights
	var dessert = ".block-views-desserts-block .item-list >ul li.views-row .node-dessert"

	// function fixed top navigation
	function fixedTopNavigation(targetElement){
	    clearTimeout($.data(this, 'scrollTimer'));
		var height = $(window).scrollTop();
		var targetHeight = $(".site-identity").offset().top;
		$(targetElement).addClass('scroll');
		$(targetElement).removeClass('scroll-stop');
		$.data(this, 'scrollTimer', setTimeout(function() {
			// do something
			if(height>targetHeight){
				$(targetElement).addClass('scroll-stop');
				$(targetElement).removeClass('scroll');
			}
			if(height<targetHeight || height==targetHeight){
				$(targetElement).removeClass('scroll-stop');
				$(targetElement).removeClass('scroll');
			}
		}, 600));
	}


	// background image animation
 	function titleHover(){
 		$(dessert).find("a").hover( 
 			function(){
 				$(this).parent().parent().find(".field-collection-item-field-dessert-background-image").addClass("hover-states");
 			},
 			function(){
 				$(this).parent().parent().find(".field-collection-item-field-dessert-background-image").removeClass("hover-states");
 			}
 		);
 	}

 	// youtube play scroll to
 	function youtubePlay(targetButton){
 		// youtube position
 		var targetPos = $("#youtube-field-player").offset().top ;
 		var extraMenuPadding = $('.block-system-main-menu .menu').outerHeight();
 		$(targetButton).on(
 			"click", function(){
 				$('body').animate({ 
 					scrollTop: targetPos - extraMenuPadding - 10 + "px"
 				});
 				console.log(extraMenuPadding);
 			}
 		);
 	}

	$( document ).ready(function() {
		var targetHeight = $(window).height()*0.5;
	 	$(dessert).find("h2").css("padding-top", targetHeight);
	 	titleHover();
	 	fixedTopNavigation(".block-system-main-menu");
	 	youtubePlay("#play-button");
	 	youtubePlay("#pause-button");
	});
	$( window ).resize(function() {
		var targetHeight = $(window).height()*0.5;
		$(dessert).find("h2").css("padding-top", targetHeight);
	});

	$(window).scroll(function() {
		fixedTopNavigation(".block-system-main-menu");
	});



})(jQuery);
