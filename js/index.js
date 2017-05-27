/*$(function ()
{
	setInterval("rotateImg()", 2800);
	//setInterval("rotateImg2()", 5000);
});
	
function rotateImg()
{
	var currImg = $('#logoWrapper li.currentLogo');
	var currNext = currImg.next();
	if(currNext.length == 0)
	currNext = $('#logoWrapper li:first');
	currImg.removeClass('currentLogo').addClass('previousLogo');
	currNext.css({opacity: 0.0}).addClass('currentLogo').animate({opacity: 1.0}, 1000, 
	function()
	{
		currImg.removeClass('previousLogo');
	});
};*/

/*function rotateImg2()
{
	var currImg2 = $('#testDivWrapper li.currentTest');
	var currNext2 = currImg2.next();
	if(currNext2.length === 0)
	currNext2 = $('#testDivWrapper li:first');
	currImg2.removeClass('currentTest').addClass('previousTest');
	currNext2.addClass('currentTest').stop().animate({"opacity": "1"}, 1000, 
	function()
	{
		currImg2.stop().removeClass('previousTest');
	});
};*/


var preloader = $("#preloader");
var loadImag = $("#loadImag");
var particleClass = $(".particleClass");
var particle1 = $("#particle1");
var particle2 = $("#particle2");
var particle3 = $("#particle3");
var loadTxt = $("#loadTxt");
var homePage = $("#home");
var uiux = $("#uiux");
var contact = $("#contact");
var linkHome = $("#linkHome");
var linkUiux = $("#linkUiux");
var linkContact = $("#linkContact");
var thumbsNthchild = $("#uiux div:nth-child(3) .thumbs a:nth-child(1) li");
var thumbsNthchild2 = $("#uiux div:nth-child(3) .thumbs a:nth-child(2) li");
var thumbsNthchild3 = $("#uiux div:nth-child(3) .thumbs a:nth-child(3) li");
var thumbsNthchild4 = $("#uiux div:nth-child(3) .thumbs a:nth-child(4) li");
var thumbsNthchild5 = $("#uiux div:nth-child(4) .thumbs a:nth-child(1) li");
var thumbsNthchild6 = $("#uiux div:nth-child(4) .thumbs a:nth-child(2) li");
var thumbsNthchild7 = $("#uiux div:nth-child(4) .thumbs a:nth-child(3) li");
var thumbsNthchild8 = $("#uiux div:nth-child(4) .thumbs a:nth-child(4) li");
var overlay1 = $("#overlay1");
var overlay2 = $("#overlay2");
var overlay3 = $("#overlay3");
var overlay4 = $("#overlay4");
var overlay5 = $("#overlay5");
var overlay6 = $("#overlay6");
var overlay7 = $("#overlay7");
var overlay8 = $("#overlay8");
var uiuxThumbs1 = $("#uiux div:nth-child(3) .thumbs");
var uiuxThumbs2 = $("#uiux div:nth-child(4) .thumbs");
var uiuxThumbs3 = $("#uiux div:nth-child(5) .thumbs");
var uiuxThumbs4 = $("#uiux div:nth-child(6) .thumbs");
var thumb1 = $("#thumb1");
var thumb2 = $("#thumb2");
var thumb3 = $("#thumb3");
var thumb4 = $("#thumb4");
var thumb5 = $("#thumb5");
var thumb6 = $("#thumb6");
var thumb7 = $("#thumb7");
var thumb8 = $("#thumb8");
var uiTxt = $(".uiTxt");
var mobileWrap = $("#mobileWrapper");
var designWrap = $("#designWrapper");

$(document).ready(function()
{
	/*PRELOADER*/	
	$(".particleClass").stop().animate({"opacity": "1"}, 9000);
	
	$(window).load(
	function()
	{
		loadTxt.stop().animate({"opacity": "0"}, 800);
		particleClass.stop().animate({"opacity": "0"}, 800, 
		function()
		{
			loadImag.stop().animate({"opacity": "0", "margin-top": "10%"}, 300,
			function(){
				preloader.stop().animate({"opacity": "0", "z-index": "-1", "display": "none", "visibility": "hidden"}, 1000);
			});
		});
	});
	
	
	
	/*MOVE SCROLL BAR TO TOP OF PAGE WHEN PAGE RELOADS*/
	$(window).scrollTop(0);
	/**/
	
	
	
	/*LOGO ROTATE*/
	$("#logoWrapper li:gt(0)").hide();
	setInterval(function(){
		$("#logoWrapper li:first").stop().fadeOut(1000).next().stop().fadeIn(1000).end().appendTo("#logoWrapper");
	}, 3200);
	
	
	
	if (navigator.appVersion.indexOf("Win")!= -1)
	{		
		if (navigator.userAgent.indexOf('Safari') > 1)
		{
			$("#homeBCK li:nth-child(1)").css({"margin-left": "72% !important", "margin-top": "20% !important"});
		}
	}
	
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
	{
		$("#loadImag").css("margin-top", "5%");
		$("#particle1, #particle2, #particle3").css("margin-top", "4%");
		particle2.css("-webkit-animation", "orbit-two 2000ms ease-in-out 600ms infinite");
		particle3.css("-webkit-animation", "orbit-three 2000ms ease-in-out 1700ms infinite");
		
		if($(window).width() < 801)
		{
			$("#loadImag").css("margin-top", "9%");
			$("#particle1, #particle2, #particle3").css("margin-top", "2%");
			particle2.css("-webkit-animation", "orbit-two 2000ms ease-in-out 900ms infinite");
			particle3.css("-webkit-animation", "orbit-three 2000ms ease-in-out 1700ms infinite");
			loadTxt.css("margin-top", "56%");
		}
		
		if($(window).width() < 500)
		{
			$("#loadImag").css("margin-top", "12%");
			$("#particle1, #particle2, #particle3").css("margin-top", ".2%");
			particle2.css("-webkit-animation", "orbit-two 2000ms ease-in-out 1200ms infinite");
			particle3.css("-webkit-animation", "orbit-three 2000ms ease-in-out 1800ms infinite");
			loadTxt.css("margin-top", "85%");
		}
	}
	
	if (navigator.userAgent.indexOf('Safari') != -1)
	{		
		$("#home").addClass("safHome").removeClass("homeBck");
		
		/*uiuxThumbs1.find("a:nth-child(1) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb1.jpg)", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs1.find("a:nth-child(2) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb2.jpg) no-repeat", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs1.find("a:nth-child(3) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb3.jpg) no-repeat", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs1.find("a:nth-child(4) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb4.jpg) no-repeat", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs2.find("a:nth-child(1) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb5.jpg) no-repeat", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs2.find("a:nth-child(2) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb6.jpg) no-repeat", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs2.find("a:nth-child(3) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb7.jpg) no-repeat", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs2.find("a:nth-child(4) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb8.jpg) no-repeat", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs3.find("a:nth-child(1) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb1.jpg)", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs3.find("a:nth-child(2) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb2.jpg) no-repeat", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs3.find("a:nth-child(3) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb3.jpg) no-repeat", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs3.find("a:nth-child(4) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb4.jpg) no-repeat", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs4.find("a:nth-child(1) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb5.jpg) no-repeat", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs4.find("a:nth-child(2) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb6.jpg) no-repeat", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs4.find("a:nth-child(3) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb7.jpg) no-repeat", "background-position": "50% 50%", "background-size": "cover"});
		uiuxThumbs4.find("a:nth-child(4) li").css({"background": "url(http://www.explosivedesigns.net/img/thumb8.jpg) no-repeat", "background-position": "50% 50%", "background-size": "cover"});*/
		$("#conBck").addClass("safContact").removeClass("contactBck");
	}
		
	if (navigator.userAgent.indexOf('Firefox') != -1 || navigator.userAgent.indexOf('Chrome') != -1 || navigator.userAgent.indexOf('Opera') != -1)
	{
		$("#home").addClass("homeBck").removeClass("safHome");
		$("#conBck").addClass("contactBck").removeClass("safContact");
	}
	
	if (navigator.userAgent.indexOf('Opera') != -1)
	{
		$("#rwd #mobileWrapper div img, #rwd2 #designWrapper div img").css("width", "100%");
	}
	
	if(navigator.userAgent.indexOf('Firefox') == -1 && navigator.userAgent.indexOf('Chrome') == -1 && navigator.userAgent.indexOf('Opera') == -1 && navigator.userAgent.indexOf('Safari') == -1)
	{
		$("#home").addClass("ieHome").removeClass("safHome, homeBck");
		$("#conBck").addClass("ieContact").removeClass("safContact, contactBck");
		$("#homeBCK li:nth-child(1)").css("margin-left", "80%");
		$("#rwd #mobileWrapper div img, #rwd2 #designWrapper div img").css("width", "100%");
	}
	
	if (navigator.userAgent.indexOf('Firefox') != -1 || navigator.userAgent.indexOf('Chrome') != -1 || navigator.userAgent.indexOf('Opera') != -1 || navigator.userAgent.indexOf('MSIE') != -1 && $(window).width() < 1201)
		{		
			$("#uiux div:nth-child(5) .thumbs a div:nth-child(2) img, #uiux div:nth-child(6) .thumbs a div:nth-child(2) img").css("padding-bottom", "0%");
		}
	
	
	
	/*ANCHOR LINK SCROLLING*/
	jQuery(function()
	{
		jQuery('a[href*=#]:not([href=#])').click(function()
		{
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
			{
				var target = jQuery(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length)
				{
					jQuery('html,body').animate({scrollTop: target.offset ().top}, 2500);
					return false;
				}
			}
		});
	});
	
	
	
	$("#mobileWrapper div:nth-child(2), #mobileWrapper div:nth-child(3)").hide();
	setInterval(function(){
		$("#mobileWrapper div:first").stop().fadeOut(1000).next().stop().fadeIn(1000).end().appendTo("#mobileWrapper");
	}, 10000);
	
	$("#designWrapper div:nth-child(2), #designWrapper div:nth-child(3)").hide();
	setInterval(function(){
		$("#designWrapper div:first").stop().fadeOut(1000).next().stop().fadeIn(1000).end().appendTo("#designWrapper");
	}, 10000);
		
	
	
	/*LINKS IN MENU BAR ARE ACTIVE WHEN SCROLLED TO THEIR ANCHOR*/
	$(window).scroll(function(event)
	{
		if(homePage.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkHome.addClass('currentLink'); 
			linkUiux.removeClass('currentLink');
			linkContact.removeClass('currentLink');
			mobileWrap.stop().animate({"opacity": "0", "margin-top": "-20px"}, 300);
			designWrap.stop().animate({"opacity": "0", "margin-top": "-20px"}, 300);
		}
		
		if(uiux.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkUiux.addClass('currentLink'); 
			linkHome.removeClass('currentLink');
			linkContact.removeClass('currentLink');
			mobileWrap.stop().animate({"opacity": "0", "margin-top": "-20px"}, 300);
			designWrap.stop().animate({"opacity": "0", "margin-top": "-20px"}, 300);
		}
		
		if(mobileWrap.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkUiux.addClass('currentLink'); 
			linkHome.removeClass('currentLink');
			linkContact.removeClass('currentLink');
			mobileWrap.stop().animate({"opacity": "1", "margin-top": "0px"}, 300);
		}
		
		if(designWrap.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkUiux.addClass('currentLink'); 
			linkHome.removeClass('currentLink');
			linkContact.removeClass('currentLink');
			designWrap.stop().animate({"opacity": "5", "margin-top": "0px"}, 300);
		}
		
		if(contact.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkContact.addClass('currentLink');
			linkHome.removeClass('currentLink'); 
			linkUiux.removeClass('currentLink');
			$("#testMoni h1, #testDiv").stop().animate({"opacity": "1", "margin-top": "0px"}, 300);
			mobileWrap.stop().animate({"opacity": "0", "margin-top": "-20px"}, 300);
			designWrap.stop().animate({"opacity": "0", "margin-top": "-20px"}, 300);
		}
	});
	/**/
	
	
	
	/*MAKE LINK ACTIVE WHEN CLICKED*/
	linkHome.click(function()
	{
		linkHome.addClass("currentLink");
		linkUiux.removeClass("currentLink");
		linkContact.removeClass("currentLink");
	});
	
	linkUiux.click(function()
	{
		linkUiux.addClass("currentLink");
		linkHome.removeClass("currentLink");
		linkContact.removeClass("currentLink");
	});
	
	linkContact.click(function()
	{
		linkContact.addClass("currentLink");
		linkHome.removeClass("currentLink");
		linkUiux.removeClass("currentLink");
	});
	/**/
	
	
	var thumbsNthchild9 = $("#uiux div:nth-child(5) .thumbs a:nth-child(1) li");
	var thumbsNthchild10 = $("#uiux div:nth-child(5) .thumbs a:nth-child(2) li");
	var thumbsNthchild11 = $("#uiux div:nth-child(5) .thumbs a:nth-child(3) li");
	var thumbsNthchild12 = $("#uiux div:nth-child(5) .thumbs a:nth-child(4) li");
	var thumbsNthchild13 = $("#uiux div:nth-child(6) .thumbs a:nth-child(1) li");
	var thumbsNthchild14 = $("#uiux div:nth-child(6) .thumbs a:nth-child(2) li");
	var thumbsNthchild15 = $("#uiux div:nth-child(6) .thumbs a:nth-child(3) li");
	var thumbsNthchild16 = $("#uiux div:nth-child(6) .thumbs a:nth-child(4) li");
		
	thumbsNthchild9.removeClass("large-3").addClass("large-6");
		thumbsNthchild10.removeClass("large-3").addClass("large-6");
		thumbsNthchild11.removeClass("large-3").addClass("large-6");
		thumbsNthchild12.removeClass("large-3").addClass("large-6");
		thumbsNthchild13.removeClass("large-3").addClass("large-6");
		thumbsNthchild14.removeClass("large-3").addClass("large-6");
		thumbsNthchild15.removeClass("large-3").addClass("large-6");
		thumbsNthchild16.removeClass("large-3").addClass("large-6");
	
	
	
	thumbsNthchild.mouseover(function()
	{
		thumb1.stop().animate({"opacity": "0", "left": "480px"}, 500);
		overlay1.stop().animate({"left": "480px"}, 500, function(){
			overlay1.css("display", "none");
		});
	});
	
	thumbsNthchild.mouseout(function()
	{
		overlay1.css("display", "block").stop().animate({"left": "0"}, 500);
		thumb1.stop().animate({"left": "0"}, 500, function() {
			thumb1.stop().animate({"opacity": "1"}, 500);
		});
		
		if($(window).width() < 1200)
		{
			$(overlay1).css("display", "none");
			thumb1.css("display", "none");
		}
	});
	
	
	thumbsNthchild2.mouseover(function()
	{
		thumb2.stop().animate({"opacity": "0", "left": "-480px"}, 500);
		overlay2.stop().animate({"left": "-480px"}, 500, function(){
			overlay2.css("display", "none");
		});
	});
	
	thumbsNthchild2.mouseout(function()
	{
		overlay2.css("display", "block").stop().animate({"left": "0"}, 500);
		thumb2.stop().animate({"left": "0"}, 500, function() {
			thumb2.stop().animate({"opacity": "1"}, 500);
		});
		
		if($(window).width() < 1200)
		{
			$(overlay2).css("display", "none");
			thumb2.css("display", "none");
		}
	});
	
	
	thumbsNthchild3.mouseover(function()
	{
		thumb3.stop().animate({"opacity": "0", "left": "480px"}, 500);
		overlay3.stop().animate({"left": "480px"}, 500, function(){
			overlay3.css("display", "none");
		});		
	});
	
	thumbsNthchild3.mouseout(function()
	{
		overlay3.css("display", "block").stop().animate({"left": "0"}, 500);
		thumb3.stop().animate({"left": "0"}, 500, function() {
			thumb3.stop().animate({"opacity": "1"}, 500);
		});
		
		if($(window).width() < 1200)
		{
			$(overlay3).css("display", "none");
			thumb3.css("display", "none");
		}
	});
	
	
	thumbsNthchild4.mouseover(function()
	{
		thumb4.stop().animate({"opacity": "0", "left": "-480px"}, 500);
		overlay4.stop().animate({"left": "-480px"}, 500, function(){
			overlay4.css("display", "none");
		});
	});
	
	thumbsNthchild4.mouseout(function()
	{
		overlay4.css("display", "block").stop().animate({"left": "0"}, 500);
		thumb4.stop().animate({"left": "0"}, 500, function() {
			thumb4.stop().animate({"opacity": "1"}, 500);
		});
		
		if($(window).width() < 1200)
		{
			$(overlay4).css("display", "none");
			thumb4.css("display", "none");
		}
	});
	
	
	thumbsNthchild5.mouseover(function()
	{
		thumb5.stop().animate({"opacity": "0", "top": "500px"}, 500);
		overlay5.stop().animate({"top": "500px"}, 500, function(){
			overlay5.css("display", "none");
		});		
	});
	
	thumbsNthchild5.mouseout(function()
	{
		overlay5.css("display", "block").stop().animate({"top": "0"}, 500);
		thumb5.stop().animate({"top": "0"}, 500, function() {
			thumb5.stop().animate({"opacity": "1"}, 500);
		});
		
		if($(window).width() < 1200)
		{
			$(overlay5).css("display", "none");
			thumb5.css("display", "none");
		}
	});
	
	
	thumbsNthchild6.mouseover(function()
	{
		thumb6.stop().animate({"opacity": "0", "top": "-500px"}, 500);
		overlay6.stop().animate({"top": "-500px"}, 500, function(){
			overlay6.css("display", "none");
		});
	});
	
	thumbsNthchild6.mouseout(function()
	{
		overlay6.css("display", "block").stop().animate({"top": "0"}, 500);
		thumb6.stop().animate({"top": "0"}, 500, function() {
			thumb6.stop().animate({"opacity": "1"}, 500);
		});
		
		if($(window).width() < 1200)
		{
			$(overlay6).css("display", "none");
			thumb6.css("display", "none");
		}
	});
	
	
	thumbsNthchild7.mouseover(function()
	{
		thumb7.stop().animate({"opacity": "0", "left": "-480px"}, 500);
		overlay7.stop().animate({"left": "-480px"}, 500, function(){
			overlay7.css("display", "none");
		});		
	});
	
	thumbsNthchild7.mouseout(function()
	{
		overlay7.css("display", "block").stop().animate({"left": "0"}, 500);
		thumb7.stop().animate({"left": "0"}, 500, function() {
			thumb7.stop().animate({"opacity": "1"}, 500);
		});
		
		if($(window).width() < 1200)
		{
			$(overlay7).css("display", "none");
			thumb7.css("display", "none");
		}
	});
	
	
	thumbsNthchild8.mouseover(function()
	{
		thumb8.stop().animate({"opacity": "0", "left": "480px"}, 500);
		overlay8.stop().animate({"left": "480px"}, 500, function(){
			overlay8.css("display", "none");
		});		
	});
	
	thumbsNthchild8.mouseout(function()
	{
		overlay8.css("display", "block").stop().animate({"left": "0"}, 500);
		thumb8.stop().animate({"left": "0"}, 500, function() {
			thumb8.stop().animate({"opacity": "1"}, 500);
		});
		
		if($(window).width() < 1200)
		{
			$(overlay8).css({"display": "none", "left": "0"});
			thumb8.stop().css({"display": "none"});
		}
	});
	
	
	/*TESTIMONIAL TEXT SLIDER*/
	$("#testDivWrapper li:gt(0)").hide();
	setInterval(function(){
		$("#testDivWrapper li:first").stop().fadeOut(1000).next().stop().fadeIn(3000).end().appendTo("#testDivWrapper");
	}, 7000);
	
	
	
	/*PARLLAX BACKGROUND ANIMATION*/
	/*$(window).bind('scroll',function(e){
    parallaxScroll();
	});
	
	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		$('#home').css('top',(0-(scrolled*.4))+'px');
		$('#uiux').css('top',(0-(scrolled*.8))+'px');
	}*/
	
	
	
	/*AUTOMATIC COPYRIGHT YEAR CHANGE*/
	var today = new Date()
	var year = today.getFullYear()
	$("#copyright div span").html(year);
	
	
	
	
	
	
	
	
	
	
	
	
	/*$(window).bind('scroll',function(e){
    parallaxScroll();
	});
	
	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		$('#home').css('top',(0-(scrolled*.25))+'px');
		$('#uiux').css('top',(0-(scrolled*.5))+'px');
	}*/
	
	/*var ypos, image, image2;
	
			function parallax()
			{
				ypos = window.pageYOffset;
				image = document.getElementById("home");
				image.style.top = ypos * .4 + "px";
				
				ypos = window.pageYOffset;
				image2 = document.getElementById("uiux");
				image2.style.top = ypos * .8 + "px";
			}
			
			window.addEventListener("scroll", parallax);*/
			
			
			
			
			
			
			
	
	/*FOOTER PARTICLE SYSTEM*/
	/*window.onload = function()
	{
		var contactParticle = document.getElementById("contact");
		var canvas = document.createElement("canvas"),
		c = canvas.getContext("2d");
		
		contactParticle.appendChild(canvas);
		
		var bombCount = 1;		
		
		var bomb = new Image();
		var bomb2 = new Image();
		bomb.src = "img/bomb4.png";
		bomb2.src = "img/Logo1.png";
		
		var x;
		var y;
		var vy;
		
		var bombArray = [];
		var bombArray2 = [];
		
		setInterval(function()
		{
			for(var i = 0; i < bombCount; i++)
			{
				bombArray.push(new createBomb);
			}
		}, 500);
		
		setInterval(function()
		{
			for(var j = 0; j < bombCount; j++)
			{
				bombArray2.push(new createBomb);
			}
		}, 500);
		
		function createBomb()
		{
			this.x = Math.round(Math.random() * canvas.width) + 1;
			this.y = Math.round(Math.random() * 1 + canvas.height);
			this.vy = Math.round(Math.random() + bombCount + 1);
		}
		
		function drawBomb()
		{
			c.fillStyle = "#FFFFFF";
			c.clearRect(0, 0, canvas.width, canvas.height);
			c.fill();
			c.mozImageSmoothingEnabled = false;
			c.webkitImageSmoothingEnabled = false;
			c.msImageSmoothingEnabled = false;
			c.imageSmoothingEnabled = false;
			
			for(var i = 0; i < bombArray.length; i++)
			{
				var f = bombArray[i];
				
				c.drawImage(bomb, f.x, f.y);
				
				f.y -= f.vy;
				
				if(f.y > canvas.height)
				{
					f.y = -bomb.height;
					f.splice(i, 1);
				}
			}
			
			for(var j = 0; j < bombArray2.length; j++)
			{
				var g = bombArray2[j];
				
				c.drawImage(bomb2, g.x, g.y);
				
				g.y -= g.vy;
				
				if(g.y > canvas.height)
				{
					g.y = -bomb2.height;
					g.splice(j, 1);
				}
			}
			
			requestAnimationFrame(drawBomb);
		}
		
		drawBomb();
	}*/
	
	
	
	
	
	
	
	
	
	
	/*PARTICLES MOVE FROM TOP TO BOTTOM*/
	/*window.onload = function()
	{
		var footer = document.querySelector("footer");
		var canvas = document.createElement("canvas"),
		c = canvas.getContext("2d");
		
		footer.appendChild(canvas);
				
		canvas.style.width = "1900px";
		canvas.style.height = "500px";
		
		var bombCount = 5;		
		
		var bomb = new Image();
		bomb.src = "img/bomb.png";
		
		var x;
		var y;
		var vy;
		
		var bombArray = [];
		
		for(var i = 0; i < bombCount; i++)
		{
			bombArray.push(new createBomb);
		}
		
		function createBomb()
		{
			this.x = Math.round(Math.random() * canvas.width);
			this.y = Math.round(Math.random() * canvas.height);
			this.vy = Math.round(Math.random() * 4 + 1);			
		}
		
		function drawBomb()
		{
			c.fillStyle = "#C0BEC1";
			c.rect(0, 0, canvas.width, canvas.height);
			c.fill();
			
			for(var i = 0; i < bombArray.length; i++)
			{
				var f = bombArray[i];
				
				c.drawImage(bomb, f.x, f.y);
				
				f.y += f.vy;
				
				if(f.y > canvas.height)
				{
					f.y = -bomb.height;
				}
			}
			
			requestAnimationFrame(drawBomb);
		}
		
		drawBomb();
	}*/
	
	
	
	
	/*window.onload = function()
	{
		var footer = document.querySelector("footer");
		var canvas = document.querySelector("canvas"),
		c = canvas.getContext("2d");
		
		
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		
		footer.appendChild(canvas);
		
		c.fillStyle = "transparent";
		c.fillRect(0,0,canvas.width, canvas.height);
		
		var posX = canvas.width/2;
		var posY = canvas.height/2;
		
		setInterval(function(){
			c.fillStyle = "transparent";
			c.fillRect(0,0,canvas.width, canvas.height);
			posX += 0;
			posY -= 2;
			c.fillStyle = "#3396cb";
			c.fillRect(posX, posY, 10, 10);
		}, 300);
	}*/
});