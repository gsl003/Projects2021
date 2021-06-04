
var HuaWei = {};
HuaWei.page= {};

HuaWei.page.indexFocus = function(){
	$('.banner #focus').each(function(){
		var sWidth = $(".banner #focus").width();
		var len = $("#focus ul li").length; 
		var index = 0;
		var picTimer;
		$(".banner #focus .btn span").click(function(){
			index = $(".banner #focus .btn span").index(this);
			showPics(index);
		}).eq(0).trigger("mouseenter");
		$(".banner #focus ul").css("width",sWidth * (len + 1));
		$(".banner #focus").hover(function(){
		clearInterval(picTimer);
	},function(){
		picTimer = setInterval(function(){
			if(index == len){
				showFirPic();
				index = 0;
			}else{ 
				showPics(index);
			}
			index++;
		},3000); 
	}).trigger("mouseleave");
	function showPics(index){
		var nowLeft = -index*sWidth; 
		$(".banner #focus ul ").stop(true,false).fadeIn("slow").animate({"left":nowLeft},500); 
		$(".banner #focus .btn span").removeClass("on").eq(index).addClass("on"); 
		
	}

	function showFirPic(){
		$(".banner #focus ul").append($(".banner #focus ul li:first").clone());
		var nowLeft = -len*sWidth; 
		$(".banner #focus ul").stop(true,false).animate({"left":nowLeft},500,function(){
			$(".banner #focus ul").css("left","0");
			$(".banner #focus ul li:last").remove();
		}); 
		$(".banner #focus .btn span").removeClass("on").eq(0).addClass("on"); 
	}
	
		})
	}
HuaWei.page.getQueryValue = function(url,key){
	var escapeReg = function(source) {
		return String(source)
				.replace(new RegExp("([.*+?^=!:\x24{}()|[\\]\/\\\\])", "g"), '\\\x241');
	};
    var reg = new RegExp(
                        "(^|&|\\?|#)" 
                        + escapeReg(key) 
                        + "=([^&]*)(&|\x24)", 
                    "");
    var match = url.match(reg);
    if (match) {
		var result=match[2].substring(match[2].length-1,match[2].length);
        return result=='#'?match[2].substring(0,match[2].length-1):match[2];
    }    
    return null;
}

HuaWei.page.indexHeaderSearch = function(){
		$('.search').each(function(){
			$(this).find('input.search_text').focus(function(){
				$(this).animate({width:"150px"});
				$(this).parent().parent('.search').addClass('on')
				});
			$(this).find('input.search_text').blur(function(){
				$(this).animate({width:"85px"});
				$(this).parent().parent('.search').removeClass('on')
				})
			})
		}
	
HuaWei.page.contactUsMapInit = function(){
	var mapcurrent = HuaWei.page.getQueryValue(window.location.href,'map');		
	if(mapcurrent){
		mapcurrent = $('#contactus_map a.maplink:eq('+mapcurrent+')')
		mapcurrent.addClass('mapcurrent');
		$('#'+mapcurrent.attr('formap')).show();
	}
	$('#contactus_map a.maplink').each(function(index, element) {
        var w = $(this).width()/2;
		var x = parseInt($(this).attr('x')) - w;
		$(this).css({left:x+'px',top:$(this).attr('y')+'px',visibility:'visible'});
		$(this).hover(function(){
			if(!$(this).hasClass('mapcurrent')){				
				if(mapcurrent)$('#'+mapcurrent.attr('formap')).hide();
				$('#'+$(this).attr('formap')).fadeIn(400);
			}
		},function(){
			$(this).parent().find('div').stop(true,true);
			if(!$(this).hasClass('mapcurrent')){
				$('#'+$(this).attr('formap')).fadeOut(400);
			}
			if(mapcurrent)$('#'+mapcurrent.attr('formap')).fadeIn(400);
		});
    });
	$('a.hidedetails').each(function(index, element) {
		$(this).attr('index',index);
        $(this).click(function(){
			$('.introduction_contact .country:eq('+$(this).attr('index')+') a:eq(0)').trigger('click');
		});
    });
	$('.introduction_contact .country').each(function(index, element) {
        $(this).find('a:eq(0)').attr('index',index);
		$(this).find('a:eq(0)').click(function(){
			var aindex = $(this).attr('index');
			var cd = $('.introduction_contact .country_details:eq('+aindex+')');
			$('.introduction_contact .country a').removeClass('clicked');			
			$(this).addClass('clicked');
			if(cd.is(':visible')){
				cd.slideUp(400,'easeInOutExpo');
				$('.introduction_contact .country a').removeClass('clicked');
			}else{
				$('.introduction_contact .country_details:visible').slideUp(400,'easeInOutExpo');
				cd.slideDown(400,'easeInOutExpo');
			}
		});
    });
	
	$('#foot_maplink a').each(function(index, element) {
        $(this).hover(function(){
			$('#foot_map div:visible').fadeOut(400);
			$('#foot_map .foot_map'+$(this).attr('backgroundindex')).fadeIn(400);
		},function(){			
			$('#foot_map div').stop(true,true);
			$('#foot_map div:visible').fadeOut(400);
		});
    });
}
	
	
var parameter;
HuaWei.page.onLoad = function(){//增加导航条默认选择某个，和整站搜索框默认文字、默认radio选中的方法，navi:主导航默认选中某个，数字从0开始,searchindex:整站搜索下拉框默认选中某个,searchtext:'产品检索'
	parameter = eval('('+$('#main').attr('parameter')+')');
	//foot地图特效
	HuaWei.page.contactUsMapInit();
	//header搜索的特效
	HuaWei.page.indexHeaderSearch();
	//BANNER特效
	HuaWei.page.indexFocus();
	
	
	}

$(function(){
	HuaWei.page.onLoad();
})