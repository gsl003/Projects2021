//JS 仅供页面交互体验使用

$(function(){

	$(".player-info .manage").click(function(){
		$(".site-room").show();
	})
	$(".btn-close").click(function(){
		$(".ui-dialog").hide();
	})

	$(".btn-share").hover(function(){
		$(this).find(".spr-btn").addClass("active");
		$(this).find(".share-box").show();
	},function(){
		$(this).find(".spr-btn").removeClass("active");
		$(this).find(".share-box").hide();
	})

	$(".tabs-nav li").click(function(){
		$(this).addClass("active");
		$(this).siblings("li").removeClass("active");
	})

	$(".gift-list").each(function(){

		$(this).children(".ele").hover(function(){
			$(this).addClass("active");
		},function(){
			$(this).removeClass("active");
			$(".select .bd").hide();
			$(".i-arrow-select").removeClass("t");
		})	

		$(".select .btn").click(function(){
			$(".select .bd").show();
			$(this).find(".i-arrow-select").addClass("t");
		})
	})
	
	$(".side-remain").each(function(){
		
			$(".rank-box .btn").click(function(){
				if($(".i-arrow-rank").hasClass("t"))
				{

					$(this).find("span").text("展开榜单");
					$(this).find(".i-arrow-rank").removeClass("t");
					$(".rank-box").removeClass("open");
					$(".speak-box").addClass("open");
				}else{
					$(this).find("span").text("收起榜单");
					$(this).find(".i-arrow-rank").addClass("t");
					$(".rank-box").addClass("open");
					$(".speak-box").removeClass("open");	
				}
				$(".side-remain .tips-box").hide();
			})
		
			
	})

		$(".speak-list .name").click(function(){
			$(this).find(".set-box").show();
		})

	//扩展
	$(".gsl-rank").each(function(){
		$(this).find(".big").click(function(){
			$("body").addClass("big");
		})
		$(this).find(".skin").click(function(){
			$("body").addClass("purple");
		})
		$(this).find(".tips").click(function(){
			$(".tips-box").show();
		})
	})
})