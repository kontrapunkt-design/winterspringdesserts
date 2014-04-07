   // Youtube API control
   var player;
   function onYouTubePlayerAPIReady(){
      player = new YT.Player("youtube-field-player", {
         events: {
            "onReady": onPlayerReady,
            "onStateChange": onPlayerStateChange
         }
      });
   }
   function onPlayerReady(event){
      // Play
      var playButton = document.getElementById("play-button");
      playButton.addEventListener("click", function(){
         document.getElementById("node_front_page_story_teaser_group_youtube_player").classList.add("video-play");
         player.playVideo();
      });
      // Pause
      var pauseButton = document.getElementById("pause-button");
      pauseButton.addEventListener("click", function(){
         player.pauseVideo();
         document.getElementById("node_front_page_story_teaser_group_youtube_player").classList.remove("video-play");
      });
   }
   function onPlayerStateChange(event){
      if (event.data === 0)
         document.getElementById("node_front_page_story_teaser_group_youtube_player").classList.remove("video-play");
   }

   // Inject YouTube API script
   var tag = document.createElement("script");
   tag.src = "//www.youtube.com/player_api";
   var firstScriptTag = document.getElementsByTagName("script")[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


(function($){
   var dessert = ".block-views-desserts-block .item-list >ul li.views-row .node-dessert";

   // YouTube click on play scrolls to the video
   function youtubePlay(targetButton){
      if ($("#youtube-field-player").length){
         var targetPos = $("#youtube-field-player").offset().top;
         var extraMenuPadding = $(".block-system-main-menu .menu").outerHeight();
         $(targetButton).on("click", function(){
            $("html,body").animate({
               scrollTop: ((targetPos - extraMenuPadding) - 10) + "px"
            });
         });
      }
   }

   $(document).ready(function(){
      // Youtube video
      youtubePlay("#play-button");
      youtubePlay("#pause-button");

      // Desserts areas
      var targetHeight = $(window).height() * 0.5;
      $(dessert)
         .find("h2").css({paddingTop: targetHeight})
         .find("a").hover(function(){
            $(this).parent().parent().find(".field-collection-item-field-dessert-background-image").addClass("hover-states");
         }, function(){
            $(this).parent().parent().find(".field-collection-item-field-dessert-background-image").removeClass("hover-states");
         });

      // Display the menu
      $("#toggle-menu").toggle(function(e){
         $(".site-identity, .block-system-main-menu, #toggle-menu").addClass("display");
         e.preventDefault();
      }, function(e){
         $(".site-identity, .block-system-main-menu, #toggle-menu").removeClass("display");
         e.preventDefault();
      });
   });

   $(window)
      // On resize
      .resize(function(){
         var targetHeight = $(window).height() * 0.5;
         $(dessert).find("h2").css({paddingTop: targetHeight});

         // Reponsive nav
         if (!$("body").hasClass("csstransforms") && $(window).width() <= 768){
            var centerY = ($(window).height() - $(this).find("li").length * $(this).find("a").outerHeight()) / 2;
            $(".block-system-main-menu ul").css({
               top: centerY - 80
            });
         }
      }).trigger("resize");

})(jQuery);