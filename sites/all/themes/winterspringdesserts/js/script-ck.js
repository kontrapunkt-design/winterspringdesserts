// Youtube API control
function onYouTubePlayerAPIReady(){player=new YT.Player("youtube-field-player",{events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})}function onPlayerReady(e){var t=document.getElementById("play-button");t.addEventListener("click",function(){document.getElementById("node_front_page_story_teaser_group_youtube_player").classList.add("video-play");player.playVideo()});var n=document.getElementById("pause-button");n.addEventListener("click",function(){player.pauseVideo();document.getElementById("node_front_page_story_teaser_group_youtube_player").classList.remove("video-play")})}function onPlayerStateChange(e){e.data===0&&document.getElementById("node_front_page_story_teaser_group_youtube_player").classList.remove("video-play")}var player,tag=document.createElement("script");tag.src="//www.youtube.com/player_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);(function(e){function n(t){if(e("#youtube-field-player").length){var n=e("#youtube-field-player").offset().top,r=e(".block-system-main-menu .menu").outerHeight();e(t).on("click",function(){e("html,body").animate({scrollTop:n-r-10+"px"})})}}var t=".block-views-desserts-block .item-list >ul li.views-row .node-dessert";e(document).ready(function(){n("#play-button");n("#pause-button");var r=e(window).height()*.5;e(t).find("h2").css({paddingTop:r}).find("a").hover(function(){e(this).parent().parent().find(".field-collection-item-field-dessert-background-image").addClass("hover-states")},function(){e(this).parent().parent().find(".field-collection-item-field-dessert-background-image").removeClass("hover-states")});e("#toggle-menu").toggle(function(t){e(".site-identity, .block-system-main-menu, #toggle-menu").addClass("display");t.preventDefault()},function(t){e(".site-identity, .block-system-main-menu, #toggle-menu").removeClass("display");t.preventDefault()})});e(window).resize(function(){var n=e(window).height()*.5;e(t).find("h2").css({paddingTop:n});if(!e("body").hasClass("csstransforms")&&e(window).width()<=768){var r=(e(window).height()-e(this).find("li").length*e(this).find("a").outerHeight())/2;e(".block-system-main-menu ul").css({top:r-80})}}).trigger("resize")})(jQuery);