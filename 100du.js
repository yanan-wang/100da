$(function(){
		//搜索框切换
		(function(){
			var aLi = $('#menu li');
			var oText = $('#search').find('.form .text');

			var arrText = [
				'例如： 1荷塘鱼坊烧鱼and樱花日本料理',
				'例如： 2超文本标记语言，标准通用标',
				'例如： 3支持不同数据格式的文件镶入',
				'例如： 4通用的全置标记语',
				'例如： 5HTML是网络的通用语言'
			];
			var iNow = 0;
			oText.val(arrText[iNow]);


			aLi.each(function(index){
				$(this).click(function(){
					aLi.attr('class','gradient');
					$(this).attr('class','active');
					iNow = index;
					oText.val(arrText[iNow]);
				});
			});  

			oText.focus(function(){
				$(this)
				if ($(this).val('') == arrText[iNow]) {
					$(this).val('');

				}
			});

			oText.blur(function(){
				$(this)
				if ($(this).val() == '') {
					oText.val(arrText[iNow]);
				}
			});
		})();
		//信息轮播
		(function(){
			var oDiv = $('.update');
			var oUl = oDiv.find('ul');
			var iH = 0;
			var iNow = 0;
			var arrData = [
				{'name':'萱萱','time':5,'title':'那些灿烂华美的瞬间','url':'http://www.baidu.com'}	,
				{'name':'娜娜','time':10,'title':'超文本标记语言，标准通用标','url':'http://www.baidu.com'}	,
				{'name':'沐沐','time':15,'title':'3支持不同数据格式的文件镶入','url':'http://www.baidu.com'}	,
				{'name':'楠楠','time':20,'title':'5HTML是网络的通用语言','url':'http://www.baidu.com'}
			];	
			var str = '	';
			var oBtnUp = $('#updateUpBtn');
			var oBtnDown = $('#updateDownBtn');
			var timer =null;

			for (var i = 0; i < arrData.length; i++) {
				str +='<li><a href="'+ arrData[i].url+'"><strong>'+arrData[i].name+'</strong><span>'+arrData[i].time+'分钟前</span>'+ arrData[i].title+'...</a></li>';
				}
			oUl.html(str);
			iH = oUl.find('li').height();
			oBtnUp.click(function(){
				doMove(-1);
			});
			oBtnDown.click(function(){
				doMove(1);
			});

			oDiv.hover(function(){
				clearInterval(timer);
			},autoPlay);

			function autoPlay(){
				timer = setInterval(function(){
					doMove(-1);
				},2000);
			}
			autoPlay();
			function doMove(num){
				iNow += num;
				if (Math.abs(iNow) > arrData.length-1) {
					iNow = 0;
				}

				if (iNow > 0) {
					iNow = -(arrData.length-1);
				}

				oUl.stop().animate({'margin-top':iH*iNow},1000);
				}		
		})();
		//选项卡切换
		(function(){
			fnTab($('.tabNav1'),$('.tabCon1'));
			fnTab($('.tabNav2'),$('.tabCon2'));
			fnTab($('.tabNav3'),$('.tabCon3'));
			fnTab($('.tabNav4'),$('.tabCon4'));

			function fnTab(oNav,aCon){
				var aElem = oNav.children();
				aCon.hide().eq(0).show();

				aElem.each(function(index){
					$(this).click(function(){
						aElem.removeClass('active').addClass('gradient');
					$(this).removeClass('gradient').addClass('.active');
					aElem.find('a').attr('class','triangle_down_gray');
					$(this).find('a').attr('class','triangle_down_red');

					aCon.hide().eq(index).show();

					})
				})
			}
		})();
		//自动播放焦点图
		(function(){
			var oDiv = $('#fade');
			var aUlLi = oDiv.find('ul li');
			var aOlLi = oDiv.find('ol li');
			var oP = oDiv.find('p');
			var arr  = ['爸爸去哪儿','人影中的光影','美女写真图'];
			var iNow = 0;
			var timer = null;
			fnFade();

			oDiv.hover(function(){
				clearInterval(timer);
			},autoPlay);
			function autoPlay(){
				timer = setInterval(function(){
					iNow++;
					iNow%=arr.length;
					fnFade();
				},2000);
			}
			autoPlay();

			aOlLi.click(function(){
				iNow = $(this).index();
				fnFade();
			});
			function fnFade(){
				aUlLi.each(function(i){
					if (i != iNow) {
						aUlLi.eq(i).fadeOut().css('Zindex',1);
						aOlLi.eq(i).removeClass('active1');
					}else{
						aUlLi.eq(i).fadeIn().css('Zindex',2);
						aOlLi.eq(i).addClass('active1');

					}
					oP.text(arr[iNow]);
				});
			}	
		})();
		//日历提示说明
		(function(){
			var aSpan = $('.calendar h3 span');
			var aImg = $('.calendar .img');
			var oPrompt = $('.today_info');
			var oImg =  oPrompt.find('img');
			var oStrong =  oPrompt.find('strong');
			var oP =  oPrompt.find('p');
			var index = $(this).parent().index()%aSpan.size();

			aImg.hover(function(){
				var iTop = $(this).parent().position().top-30;
				var iLeft = $(this).parent().position().left+50;
				oPrompt.show().css({'left':iLeft,'top':iTop}); 
				oP.text($(this).attr('info'));
				oImg.attr('src',$(this).attr('src'));
				oStrong.text(aSpan.eq(index).text());
			},function(){
				oPrompt.hide();
			});
		})();
		//bbs切换
		(function(){
			$('.bbs ol li').mouseover(function(){
				$('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active');
			});
		})();
		//hot鼠标提示效果
		(function(){
			var arr =[
				'',
				'用户1<br />人气1',
				'用户：性感宝贝<br />区域：朝阳CBD<br />人气123424',
				'用户3<br />人气3',
				'用户4<br />人气4',
				'用户5<br />人气5',
				'用户6<br />人气6',
				'用户7<br />人气7',
				'用户8<br />人气8',
				'用户9<br />人气9',
				'用户10<br />人气10'

			];
			$('.hot_area li').mouseover(function(){
				if ($(this).index() == 0) return;
				$('.hot_area li p').remove();
				$(this).append('<p style="width:'+($(this).width())+'px;height:'+($(this).height())+'px;">'+arr[$(this).index()]+'</p>');
			})
		})();
	});