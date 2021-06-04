/*JS Document
	Author:	guosl
*/
 var $j=jQuery.noConflict();
var ZMoDo = {};
$j(function(){
	ZMoDo.onLoad();
	})
	
ZMoDo.onLoad = function(){
	menuNav ();//导航高亮
	proHover();//产品按钮
	footLink();	//foot连接
	footLanguage();//foot语言
	goTops();//返回顶部
	productListJs();//产品列表刷选+瀑布流
	downTime();//倒计时
	moDal();//弹出框
	serSfq();//问答手风琴
	carListClose();//购物车列表删除
	carScro();//产品左右滚动
//	recalc();//购物车加减关联价格
	orderAdress();//订单地址增加删除修改
	focusImg();//产品详细焦点图
	productType();//产品类型选择
	onloadErw();//下载二维码
	floatNav();//产品导航浮动
	helpNav();//帮助中心导航
	tabHeight();//订单表格高度取最高值
	carBox();//头部购物车展示
	pastext();//密码框效果
	}
	$j('.code-mok h4').click(function(){
         $j('.code-box').show();
      })
	
    $j('.items dd').click(function(){
        $j(this).addClass('on');
        $j(this).siblings().removeClass('on');

    })
	proHover = function(){
		$j('.prolist').find('a').hover(function(){
			$j(this).find('.pro-hover').show();
			},
			function(){
			$j(this).find('.pro-hover').hide();
				}
			)
		}
	footLink = function(){
				$j('.link-nav .foot-btn').click(function(){
				 if($j(this).parent('h3').hasClass("on")){
					 $j(this).parent('h3').removeClass('on');
					  $j(this).parent().siblings('.link-con').removeClass('on');
					 $j(this).parent().siblings('.link-con').css("height",0);
					 }
				else{
					$j(this).parent('h3').addClass('on');
					$j(this).parent().siblings('.link-con').addClass('on')
					$j(this).parents().siblings('li').find('.link-con').removeClass('on')
					$j(this).parents().siblings('li').find('h3').removeClass('on');
					$j(this).parent().siblings('.link-con').css("height","auto");
			  	   $j(this).parents().siblings('li').find('.link-con').css("height",0);
					}
				 })

			}

		
		footLanguage = function(){
			$j('.language').each(function(){
				$j(this).hover(function(){
					$j(this).find('ul').stop(true,true);
					$j(this).find('ul').animate({height:"55px"});
					},
					function(){
					$j(this).find('ul').animate({height:"27px"});
						}
					)
				})
			
			}
			
	goTops = function(){		
	 //判断是否宽屏
		  var winWide = window.screen.width;
		  var wideScreen = false;
		  var mainWidth = 1340;
		  if(wideScreen){
			  mainWidth = 1340;
		  }else{
			  mainWidth = 1340;
		  }	
		  goTopInit(mainWidth);
	  function goTopInit(mainWidth){
		  var winWide = $j(window).width();
		  if(winWide>1490){
			  $j("#goTop").css({
			  "left":(winWide-mainWidth)/2+mainWidth+10
		  });
			  }
		  else{
			  $j("#goTop").css({
			  "right":0
		  });
			  }
	  $j(".totop").click(function() {
			 $j("html, body").animate({ scrollTop: 0 }, 120);
		});
			}
			scrollTops = function(){
		var st = $j(document).scrollTop();
		(st > 0)? $j(".totop").show(): $j(".totop").hide(); 
					  }
					scrollTops();
	 	 $j(window).bind("scroll", scrollTops);

				  }
				
				  
				  
		productListJs = function(){
			$j('#prolayout').each(function(){
	 var liwidth = $j('#prolayout li').width();
      var options = {
        autoResize: true, 
        container: $j('#prolayout'), 
        offset: 2, 
        itemWidth: liwidth 
      }; 
	    var liLenght = $j('#prolist li').length;
		   var liThis =$j("#prolist li");
		  $j('#prolistNav .abtn').click(function(){
			  $j(this).addClass('on');
			  $j(this).siblings('.abtn').removeClass('on');
			  $j(this).find('.o').show();
			  $j(this).find('.y').hide();
			  $j(this).siblings('.abtn').find('.o').hide();
			  $j(this).siblings('.abtn').find('.y').show();
		  var daTa = $j(this).attr('data');
		  for( var i=0; i<liLenght; i++)
		  {		    
			  var proL =$j(liThis[i]) .attr('data');

			  if(proL!=daTa)
			  {			 
				  $j(liThis[i]).fadeOut("slow");
				  }
				else{
					$j(liThis[i]).fadeIn("slow");
					}
			  }
		  })
		
    })
	    $j('.buy-btn').hover(function(){  
		  $j(this).children('span').stop(true,true);
			 $j(this).children('span').animate({right:"-5px"},100);
			  },
			  function(){
				  $j(this).children('span').animate({right:"0px"}); 
				  }
			  )
			}
			
			menuNav  = function(){
				var parameter = $j('#content').attr('parameter');
				$j('#webmenu li:eq('+parameter+') ').addClass('on');
				 if( parameter == 'login'){
					 $j('#loginnav a:eq(0) ').addClass('on');
					 }
				 if( parameter == 'reg'){
					 $j('#loginnav a:eq(1) ').addClass('on');
					 }
				//if( parameter == 'car'){
					// $j('#carnav a').addClass('on');
					// }
				if( parameter == 'loginin'){
					 $j('#login-ok a:eq(0)').addClass('on');
					 }
				}
			
			downTime = function(){
						  function Watch() {
						 var span = document.createElement("span");
				span.innerHTML = "59"+'秒后';
					 	 var s = 59;
					 	 var w = setInterval(function () {
						  s--;
						  if (s == 0) {
							  $j('#timedown').removeAttr("disabled");
							  $j('#timedown').removeClass('dis');
							  $j('#timedown').children(span).remove();
							  clearInterval(w);
						  }
						  span.innerHTML = s+'秒后' }, 1000); 
						  document.getElementById("timedown").appendChild(span);
					 }
				
				$j('#timedown').each(function(){
				Watch();
				$j(this).click(function(){
					$j('#timedown').attr("disabled",true);
					$j('#timedown').addClass('dis');
					Watch();					
										})
					})
				}
				
				moDal = function(){
					$j('#close-btn').click(function(){
					$j('#popbox').fadeOut(function(){ $j('#screen').hide(); });
					return false;
				});
				
				$j('.popbox-link').click(function(){
					var h = $j(document).height();
					$j('#screen').css({ 'height': h });	
					$j('#screen').show();
					$j('.popbox').center();
					$j('.popbox').fadeIn();
					return false;
				});
				jQuery.fn.center = function(loaded) {
				var obj = this;
				body_width = parseInt($j(window).width());
				body_height = parseInt($j(window).height());
				block_width = parseInt(obj.width());
				block_height = parseInt(obj.height());
				
				left_position = parseInt((body_width/2) - (block_width/2)  + $j(window).scrollLeft());
				if (body_width<block_width) { left_position = 0 + $j(window).scrollLeft(); };
				
				top_position = parseInt((body_height/2) - (block_height/2) + $j(window).scrollTop() );
				if (body_height<block_height) { top_position = 0 + $j(window).scrollTop(); };
				
				if(!loaded) {
					
					obj.css({'position': 'absolute'});
					obj.css({ 'top': top_position, 'left': left_position });
					$j(window).bind('resize', function() { 
						obj.center(!loaded);
					});
					$j(window).bind('scroll', function() { 
						obj.center(!loaded);
					});
					
				} else {
					obj.stop();
					obj.css({'position': 'absolute'});
					obj.animate({ 'top': top_position }, 200, 'linear');
				}
			}
					}
		serSfq = function(){
			$j('.ser-dqus li').click(function(){
				if($j(this).hasClass('on')){
					$j(this).removeClass('on');
					$j(this).children('.cont').slideUp(300);
					}
				else{
					$j(this).addClass('on');
					$j(this).children('.cont').slideDown(300);
					}
				})
			
			}
			carListClose = function(){
				$j('.car-prolist').find('.close-btn').click(function(){
					$j(this).parents('.car-prolist dd').remove();
					})
				}
carScro = function(){
    $j('.ibox').each(function(){
        $j(this).find('li').hover(function(){
                $j(this).addClass('on');
            },
            function(){
                $j(this).removeClass('on');
            }
        )
        liwidth =($j('.warp').width()-90)/4;
        $j('.ibox').find('li').width(liwidth-2);

        var $jcur = 1;
        var $ji = 4;
        var $jlen = $j('.showbox>ul>li').length;
        var $jpages = Math.ceil($jlen / $ji);
        var $jw = $j('.warp').width()-90;
        var $jshowbox = $j('.showbox');
        var $jpre = $j('.btnbox span.pre')
        var $jnext = $j('.btnbox span.next');
        var $jautoFun;
        if ($jpages > 1) {
            $j('.btnbox span.next').addClass('s');
        }
        //向前滚动
        $jpre.click(function(){
            if (!$jshowbox.is(':animated')) {
                if ($jcur == 1) {
                    $j('.btnbox span.pre').removeClass('s');
                    $jshowbox.animate({
                        left: 0
                    }, 500);
                }
                else {
                    $j('.btnbox span.next').addClass('s');
                    $jshowbox.animate({
                        left: '+=' + $jw
                    }, 500);
                    $jcur--;
                }

            }
            if($jcur == 1){
                $j('.btnbox span.pre').removeClass('s');
            }
        });
        //向后滚动
        $jnext.click(function(){
            if (!$jshowbox.is(':animated')) {
                if ($jcur == $jpages) {
                    $j('.btnbox span.next').removeClass('s');
                    $jshowbox.animate({
                        left: '=' + $jw * ($jpages - 1)
                    }, 500);
                }
                else {
                    $j('.btnbox span.pre').addClass('s');
                    if($jcur == $jpages-1){
                        $j('.btnbox span.next').removeClass('s');
                    }
                    $jshowbox.animate({
                        left: '-=' + $jw
                    }, 500);
                    $jcur++;
                }
            }
        });
    })

}
		recalc = function () {
		$j('.ar_btn').each(function(){
			 $j("input[id^=qty_item_]").bind("keyup", recalc);
				//产品价格统计
				$j("[id^=total_item]").calc(
					"qty * price",	
					{
						qty: $j("input[id^=qty_item_]"),
						price: $j("[id^=price_item_]")				
					},
					function (s) {		
						return "￥" + s.toFixed(2);
					}
				);
				//更新按钮定位
				$j("input[id^=qty_item_]").change(function(){
					var t = $j(this).offset().top+35;
					var l = $j(this).offset().left;
					var w =$j(this).width();
					$j('#update').show();
					$j('#update').css('left',l);
					$j('#update').css('top',t);
					$j('#update').css('width',w);
					}
				)
				})
			}
		orderAdress = function(){
			$j('.adress-list li .remove .clo').click(function(){
				$j(this).parents('.qd').hide();
				})
			$j('.adress-list li .remove em').click(function(){
				$j('.qd').hide();
				$j(this).next('.qd').show();
				})
				$j('.adress-list li .remo').click(function(){
				$j(this).parents('li').remove();
				})
			
			
			var addAd = $j('#add-adrebox').html();
			var modifyAd = $j('#modify-adrebox').html();
			
			
			$j('.adress-list li .modify').click(function(){
				if($j(this).parents('li').find('.adressbox').length==0){
					$j(this).parents('li').append(modifyAd);
					}
					$j('.cancel').on("click",function(){
					$j(this).parents('.adressbox').remove();
					})		
				})
				$j('.add-adress').click(function(){
					if($j(this).next('.adressbox').length==0){
						$j('.order-adress').append(addAd);
						}
						$j('.cancel').on("click",function(){
					$j(this).parents('.adressbox').remove();
					})		
					})
				
				
			}
			
focusImg = function(){   
$j('#index-focus').each(function(){
$j(this).hover(function(){
$j(this).find('.prevArrow').stop(true,true);
$j(this).find('.nextArrow').stop(true,true);
$j(this).find('.prevArrow').fadeIn();
$j(this).find('.nextArrow').fadeIn();
},
function(){
$j(this).find('.prevArrow').fadeOut();
$j(this).find('.nextArrow').fadeOut();
}
)
$j('#index-focus #main-banner').oneByOne({            
			easeType: 'random',
			enableDrag: false,
			slideShow: true,
			slideShowDelay: 3000
		});  
})   
$j('#function #banner-con').each(function(){
  $j('#function #banner').oneByOne({         
			easeType: 'fadeInDown'
		});  
var btn1 = '分辨率对比';
var btn2 = '色彩对比';
var btn3 = '运动画面对比';
var btn =$j(this).find('.buttonCon').children('a');
$j(btn).eq(0).html(btn1);
$j(btn).eq(1).html(btn2);
$j(btn).eq(2).html(btn3);	
})	
$j('#function #banner-con2').each(function(){
  $j('#function #banner2').oneByOne({            
			easeType: 'random'
		});  
var btn4 = '实时监控';
var btn5 = '视频报警';
var btn6 = '录像回放';
var btn7 = '监控直录';
var btns =$j(this).find('.buttonCon').children('a');
$j(btns).eq(0).html(btn4);
$j(btns).eq(1).html(btn5);
$j(btns).eq(2).html(btn6);
$j(btns).eq(3).html(btn7);		
})	
	
	}
	
	productType = function(){
    $j('.popbox.pro_box .pro_type li:eq(0)').addClass('on');
	$j('.popbox.pro_box .pro_type li').click(function(){
	$j(this).addClass('on');
	$j(this).siblings('li').removeClass('on');
	})
	
	}
	
	onloadErw = function(){
		$j('.service .ser-tab .onload-er').hover(function(){
		$j(this).children('span').show();
		},
		function(){
		$j(this).children('span').hide();
		}
		)
	}
	
	floatNav = function(){
	$j(".affix-top").each(function(){
	var htop= $j(".prodetail-tab").offset().top;
	scrollnav = function(){
		var xsWidth = $j('.affix-top').width();
		var sts = $j(document).scrollTop();
		if(sts > htop){
		$j(".affix-top").addClass('float-navi');
		(xsWidth>768)?$j(".affix-top .bt").show(): $j(".affix-top .bt").hide();
		}
		else{
		$j(".affix-top").removeClass('float-navi');
		$j(".affix-top .bt").show();
		}
		
					  }
					scrollnav();
	 	 $j(window).bind("scroll", scrollnav);
})
	}
	
	helpNav = function(){
	$j('.help-nav span').click(function(){
		$j(this).next('p').slideToggle();
		if($j(this).hasClass('on')){
		$j(this).removeClass('on');
	}
	else{
	$j(this).addClass('on');
	}
	})
	}
	
	tabHeight = function(){	
		$j('.myorder-box dd').each(function(){
		var h = $j(this).find('p.td').height();
		var n = $j(this).find('.order-g').length;
		var zh = h*n;
		$j(this).find('.tdheight .td').css('height',zh);
		$j(this).find('.tdheight .td').css('line-height',zh+'px');
		$j(this).find('.tdheight .td.end').css('padding-top',zh*0.33+'px');
		})
		}
		
	carBox = function(){
		$j('#carnav').hover(function(){
			$j(this).find('.top-car-box').show();	
			},
			function(){
				$j(this).find('.top-car-box').hide();	
				}
			)
		}

function checkuname(){
    var va = document.getElementById("firstname").value;
	if( va =="用户名"){
	document.getElementById("firstname").value="";
	}
	
}

function checkuser(user){
    if(user==''){
        document.getElementById("unames").innerHTML="<font color='red'>此项为必填项</font>";
		document.getElementById("firstname").value="用户名";
    }else{
        document.getElementById("unames").innerHTML="";
    }
}
function checkmail(){
    var mail=document.getElementById("email_address");
    if(mail.value==''||mail.value==null){
        document.getElementById("mailname").innerHTML="<font color='red'>此项为必填项</font>";
		document.getElementById("email_address").value="邮箱";
    }else{
        var m=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
        if(!m.exec(mail.value)){
            document.getElementById("mailname").innerHTML="<font color='red'>请输入正确的邮箱地址</font>";
        }else{
            document.getElementById("mailname").innerHTML="";
        }
    }
}
function checkmails(){
 var va = document.getElementById("email_address").value;
	if( va =="邮箱"){
	document.getElementById("email_address").value="";
	}

}

function checkpasswords(){
var va = document.getElementById("password").value;
if(va=="设置密码")
{
document.getElementById("password").value="";
}  
    document.getElementById("password").type='password';
}

function checkpasswordss(pwd){
    if(pwd==null||pwd==''){
        document.getElementById("passwname").innerHTML="<font color='red'>请输入6-20位英文字母、数字或符号，区分大小写</font>";
		document.getElementById("password").value="设置密码";
		document.getElementById("password").type='text';
    }else if(pwd.length<6){
        document.getElementById("passwname").innerHTML="<font color='red'>请输入6-20位英文字母、数字或符号，区分大小写</font>";
    }else{
        document.getElementById("passwname").innerHTML="";
    }
}

function checkpasswords2(){
	var va = document.getElementById("confirmation").value;
if(va=="确认密码")
{
document.getElementById("confirmation").value="";
}  
    document.getElementById("confirmation").type='password';
}

function checkpassword2(pwd2){
    if(pwd2==null||pwd2==''){
        document.getElementById("passname2").innerHTML="<font color='red'>请再次输入密码</font>";
		document.getElementById("confirmation").value="确认密码";
		document.getElementById("confirmation").type='text';
    }else if(pwd2.length<6){
        document.getElementById("passname2").innerHTML="<font color='red'>密码输入不一致，请重新输入</font>";
    }else{
        var pwd=document.getElementById("password").value;

        if(pwd!=pwd2){
            document.getElementById("passname2").innerHTML="<font color='red'>密码输入不一致，请重新输入</font>";
        }else{
            document.getElementById("passname2").innerHTML="";
        }
    }
}

function check(){
    var mail=document.getElementById("email_address").value;
    var pwd=document.getElementById("password").value;
    var pwd2=document.getElementById("confirmation").value;
    var username=document.getElementById("firstname").value;
    var m=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
    var patrn=/^[a-zA-Z][a-zA-Z0-9]*$/;
    var user=/^[A-Za-z\u4E00-\u9fa5]*$/;

    if(username==''){
        document.getElementById("unames").innerHTML="<font color='red'>此项为必填项</font>";
        return false;
    }else if(username=='用户名'){
        document.getElementById("unames").innerHTML="<font color='red'>此项为必填项</font>";
        return false;
    }
    else if(mail==''){
        document.getElementById("mailname").innerHTML="<font color='red'>此项为必填项</font>";
        return false;
    }else if(!m.exec(mail)){
        document.getElementById("mailname").innerHTML="<font color='red'>请输入正确的邮箱地址</font>";
        return false;
    }else if(pwd==''){
        document.getElementById("passwname").innerHTML="<font color='red'>此项为必填项</font>";
        return false;
    }else if(pwd.length<6){
        document.getElementById("passwname").innerHTML="<font color='red'>请输入6-20位英文字母、数字或符号，区分大小写</font>";
        return false;
    }else if(pwd2==''){
        document.getElementById("passname2").innerHTML="<font color='red'>此项为必填项</font>";
        return false;
    }else if(pwd2.length<6){
        document.getElementById("passname2").innerHTML="<font color='red'>密码输入不一致，请重新输入</font>";
        return false;
    }else if(pwd!=pwd2){
        document.getElementById("passname2").innerHTML="<font color='red'>密码输入不一致，请重新输入</font>";
        return false;
    }else{
        return true;
    }
}
pastext = function(){
	$j('.pas').click(function(){
	$j(this).children('.tz').hide();
	$j(this).children('.f-text').focus();
	})
	$j('.pas .f-text').blur(function(){
	if($j(this).val() == ''){
	$j(this).prev('.tz').show();
	}
	})
	
	
}