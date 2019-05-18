define(['config'], function() {
	require(['jquery','jqcookie'],function(){//详情页
		return {
			magnifier: (function() {//放大镜
				class magnifier {
					constructor() {
						this.sbox = $('.sbox');
						this.content = $('.content');
						this.moveBox = $('.moveBox');
						this.bbox = $('.bbox');
						this.bpic = $('.bpic');
						this.spic = $('.spic');
						this.sidarr = [];
		
					}
					init() {
						this.enter();
						this.liclick();
						
					}
					enter() {
						let _this = this;
						$('.content').on('mouseenter', '.sbox', function() { //此处的this指向.sbox；
							$('.moveBox').css('display', 'block');
							$('.bbox').css('display', 'block');
							//动态计算moveBox的宽高
							$('.moveBox').width($('.sbox').width() * $('.bbox').width() / $('.bpic').width()) + 'px';
							$('.moveBox').height($('.sbox').height() * $('.bbox').height() / $('.bpic').height()) + 'px';
							_this.move();
							_this.out();
						})
					}
					move() { //鼠标移动 小图 大图 运动
						let _this = this;
						$('.content').on('mousemove', '.moveBox', function(e) {
							_this.common(e);
							$('.moveBox').css('left', _this.l);
							$('.moveBox').css('top', _this.t);
							$('.bpic').css('left', _this.l * (-_this.bili));
							$('.bpic').css('top', _this.t * (-_this.bili));
		
						})
					}
					out() { //移出右侧盒子和小图隐藏
						$('.content').on('mouseleave', '.sbox', function() {
							$('.moveBox').css('display', 'none');
							$('.bbox').css('display', 'none');
						})
					}
					common(e) { //公共的代码
						let _this = this;
						//计算比例
						this.bili = $('.bpic').width() / $('.sbox').width();
						_this.shortx = $('.moveBox').width() / 2;
						_this.shorty = $('.moveBox').width() / 2;
						_this.l = e.pageX - $('.content').offset().left - _this.shortx;
						_this.t = e.pageY - $('.content').offset().top - _this.shortx;
		
						if (_this.l <= 0) {
							_this.l = 0;
						} else if (_this.l >= $('.sbox').width() - $('.moveBox').width()) {
							_this.l = $('.sbox').width() - $('.moveBox').width();
						}
						if (_this.t <= 0) {
							_this.t = 0;
						} else if (_this.t >= $('.sbox').height() - $('.moveBox').height()) {
							_this.t = $('.sbox').height() - $('.moveBox').height();
						}
					}
		
					liclick() {//小图片的点击
						let _this = this;
						var $sid = location.search.substring(1).split('=')[1];
						$.ajax({
							url: "http://10.31.163.54/jsmulu/taobao/php/detail.php",
							data: {
								sid: $sid
							},
							dataType: 'json',
							success: function(data) {
								var $urllist = data.urllist.split(',');
		                        $('.content').on('click', '.liclick', function() {
									console.log($('.liclick').width()*$('.liclick').length);
		                        	this.index = $(this).index();
		                        	$('.spic').attr('src',$urllist[this.index]);
									$('.bpic').attr('src',$urllist[this.index]);
		                        })
							}
						})
						
					}
				}
				
				
				let $magnifier = new magnifier();
				$magnifier.init();
			})(),
			
			detailSart:(function(){//从详情页到购物车
				class detailSart{
					constructor() {
						this.detailNum = $('.detail-num input');
						this.detailUp = $('.detail-up');
						this.detailDown = $('.detail-dowm');
						this.num = 1;
						this.sidarr = [];
						this.arrnum = []
					}
					init(){
						this.inputvalue();
					}
					inputvalue(){
						let _this = this;
						$('.content').on('click','.detail-up',function(){
							++_this.num;
							if(_this.num<=0 && $('.detail-num input').val()<=0){
								_this.num=1;
								$('.detail-num input').val(_this.num)
							}
								$('.detail-num input').val(_this.num)
						})
						
						$('.content').on('click','.detail-dowm',function(){
							_this.num--;
							if(_this.num<=0){
								_this.num=1;
							}
								$('.detail-num input').val(_this.num);
								// $('.stair-num')
								console.log($('.add-sart'))
						})
						
						$('.content').on('click','.add-sart',function(){
								var inputVal = $('.detail-num input').val();
								$('.stair-num').html(inputVal);
								
								var $sid = location.search.substring(1).split('=')[1];
								if($.cookie('arr') && $.cookie('num')){
									  _this.sidarr=$.cookie('arr').split(",");//去重
									   _this.arrnum=$.cookie('num').split(",");//arr  num存入cookie属性名
									  // console.log(_this.sidarr);//_this.sidarr存入cookie的属性值 值为数组。_this.sidarr为数组的名字
									  // console.log(_this.arrnum);
								}else{
									 _this.sidarr=[];
									 _this.arrnum = [];
									 
								}
								if($.inArray($sid, _this.sidarr) == -1){//不存在
									 _this.sidarr.push($sid);
									$.cookie('arr',_this.sidarr);
									 _this.arrnum.push(inputVal);
									 $.cookie('num',_this.arrnum);
								}else{
									var index = _this.sidarr.indexOf($sid);
									 _this.arrnum[index] = inputVal;
									 $.cookie('num',_this.arrnum);
								}
						})
						
					}
				}
				
				new detailSart().init();
			})()
		}
	})
})
