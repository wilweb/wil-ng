function homeTween(animateMainNav){
	// lettering.js to split up letters for animation
	$('#title-line0').lettering();
	
	var tl = new TimelineLite();
	
	$('#title-line0 span').each(function() {
			TweenLite.from(this, 1, {css:{top: Math.random()*-500-600, 
										left: (Math.random()*3000)-500, 
										rotation:Math.random()*3720-360, 
										'font-size': Math.random()*300+150}, ease:Quad.easeOut});
	});
	
	tl.from($('#title-line1'), 1, {css:{left: -1000}, ease:Quad.easeOut});
	tl.from($('#title-line2'), 1, {css:{left: 1000}, ease:Quad.easeOut},-1);
	tl.from($('#title-line4'), 3, {css:{opacity:0, top:-300}, ease:Elastic.easeOut},0);
	tl.from($('#title-line5'), 1, {css:{opacity:0, left:1000}, ease:Quad.easeOut}, -4);
	
};


// Implement sticky navbar-float on document scroll 
// dependencies: jquery.js --> 
function stickyNavbarFloatOnScroll() {
    var navbarFixedTopOffset = $('.navbar-fixed-top').height();
    var navbarFloatTopOffset = $('.navbar-float')[0].offsetTop;
    var totalOffset = navbarFloatTopOffset - navbarFixedTopOffset;

    $(window).scroll(function() {
        var docScroll = $(document).scrollTop();

        if (docScroll >= totalOffset) {
            $('.navbar-float').addClass('navbar-float-sticky');
        } else {
            $('.navbar-float').removeClass('navbar-float-sticky');  
        }
    });
}


/*

// show mobile version scripts
$(function(event) {
	$('a.show-mobile').bind('click',function(event){
	  console.log("facebook icon clicked");
	  //window.location = $menu_clicked_href + "?from=homepage"; 
	  event.preventDefault;
	  sizeToMobile();
	  return false;
	});
});

function sizeToMobile() {
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1; 
	newwindow=window.open('http://wyan.htpwebdesign.ca/portfolio','mobile_version','height=547,width=390,screenX=350,screenY=100,scrollbars=yes'); 
	if (is_chrome) {newwindow.parent.blur();} 
	newwindow.focus(); 
}

*/



  $(document).ready(function() {
//quick and dirty scroll, remove later:
/*        $('html, body').stop().animate({
           scrollTop: '450px'
        }, 200,'easeInOutExpo');
*/

    //homeTween(true);
    stickyNavbarFloatOnScroll();
  });


