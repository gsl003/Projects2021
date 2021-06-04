/**
menu随屏幕滚动定位
 */
(function($, undefined) {
$(function($){
	//begin
$(".cp_menuitempanel")
.css("display","block")
.css("float","left")
.each(function(i,o){
$(o).attr("data-height",$(o).outerHeight());
})
;

$("#cp_menu").bind("vscroll",function(e){
if($(document).scrollTop()<$(".topbox").outerHeight()){
	$(this).css({"position":""});
	$("#offset-ph").slideUp();
	return;
}
$(".cp_menu").css({"position":"fixed","top":"78px","width":"100%","z-index":999});
$(this).css("cssText","width:100% !important");
$(this).css({"position":"fixed","top":"0","left":"0","width":"100% !important","z-index":1000});
		});
$(".cp_menu").find("> div > div").css("clear","both").css("width","600%").css("overflow","hidden")
.parent().css("position","relative")
.end().children().css("width","16.6667%").css("margin","auto 0").css("display","inline")//.css("border","1px solid #F00")
.end().end().css("overflow","hidden").css("display","none")
.bind("vscroll",function(e){
if($(document).scrollTop()<$(".topbox").outerHeight()){
$(this).css({"position":""});return;
}

});

	$(window).bind("scroll",function(e){
$("#cp_menu, .cp_menu").trigger("vscroll");
});


$(".cp_nav > ul > li > a").hover(function(e){
	$('.header').addClass('nobg')
	var i=$(".cp_nav > ul > li > a").index($(e.currentTarget));
if(!$(e.currentTarget).is(".menu-active")&&!$(".cp_menu").is(":hidden")){
$(".cp_menu").find(" > div > div").animate({"margin-left":-i*100+"%"},{queue:false,duration:500});
$(".cp_nav > ul > li > a").removeClass("menu-active hover");	
$(e.currentTarget).addClass("menu-active hover");
return;
}

$(".cp_nav > ul > li > a").removeClass("menu-active hover");	
	
var $ph=$("#offset-ph").length?$("#offset-ph"):$("<div/>").insertAfter(".cp_menu").attr("id","offset-ph").hide();

$ph.css("height",$(".cp_menuitempanel").eq(1).attr("data-height")+"px");
$(e.currentTarget).addClass("menu-active hover");
var druration=$(".cp_menu").is(":hidden")?0:0;
$(".cp_menu").slideDown(500)
	.find(" > div > div").animate({"margin-left":-i*100+"%"},druration)
;
		if($("#cp_menu").css("position")!="fixed")return;
if(!druration)	$ph.slideDown(500);


});

var closePanel=null;

$(".cp_menu,#cp_menu").hover(
	function(e){
if(closePanel)
	clearTimeout(closePanel);
},function(e){
closePanel=window.setTimeout(function(){
$(".cp_menu").slideUp(500);
$("#offset-ph").slideUp(500);
$(".cp_nav > ul > li > a").removeClass("menu-active hover");
$('.header').removeClass('nobg');	
},500);
}
	)
	
;

});
})(jQuery);
