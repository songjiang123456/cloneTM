define(['config'],function(){
	return{
		banner:(function(){//轮播图
			class banner{
				constructor(){
					this.$bannImage = $('.bann-image');
					this.$circle = $('.circle li');
					this.timer = null;
					this.num = 0;
				}
				init(){
					this.opcity();//小圆圈
					this.enter();//鼠标移入停止定时器
					this.out();//鼠标移出开始定时器
					this.autoplay();//定时器
				}
				opcity(){//小圆圈
					let _this = this;
					this.$circle.on('mouseenter',function(){
						$(this).addClass('active').siblings('li').removeClass('active');//小圆圈
						_this.$bannImage.eq($(this).index()).addClass('opcity').siblings().removeClass('opcity');//对应的图片
						
					})
					
				}
				enter(){//鼠标移入停止定时器
					let _this = this;
					this.$bannImage.mouseover(function(){
						clearInterval(_this.timer);
					})
				}
				out(){
					let _this = this;
					this.$bannImage.mouseout(function(){
						_this.autoplay();
					})
				}
				autoplay(){//定时器
					this.timer =setInterval(()=>{//定时器
						this.num++
						if(this.num>=this.$circle.length){
							this.num= 0;
						}
						this.$circle.eq(this.num).addClass('active').siblings('li').removeClass('active');
						this.$bannImage.eq(this.num).addClass('opcity').siblings().removeClass('opcity');
					},2000)
				}
				
			}
			let $banner = new banner();
			$banner.init();
		})(),
		
		tab:(function(){//tab切换
		    class tab{
				constructor(){
					this.tabLi = $('.tab-floor ul li');
					this.tabItemOne = $('.tab-item-one');
					this.timer = null;
					this.num = 0;
				}
				init(){
				   this.taggleHidden();
				    this.autoplay();
					this.enter();
					this.out();
				}
				taggleHidden(){//鼠标移入显示与隐藏
					let _this = this;
					this.tabLi.on('mouseenter',function(){
						$(this).addClass('liactive').siblings('li').removeClass('liactive');
						_this.tabItemOne.eq($(this).index()).addClass('tab-hidden').siblings().removeClass('tab-hidden');
					})
					
				}
				autoplay(){//定时器
					this.timer = setInterval(()=>{
						this.num++;
						if(this.num>=this.tabLi.length){
							this.num = 0;
						}
						this.tabLi.eq(this.num).addClass('liactive').siblings('li').removeClass('liactive');
						this.tabItemOne.eq(this.num).addClass('tab-hidden').siblings().removeClass('tab-hidden');
					},2000)
				}
				enter(){//鼠标移入停止定时器
					let _this = this;
					this.tabItemOne.mouseover(function(){
						clearInterval(_this.timer);
					})
				}
				out(){
					let _this = this;
					this.tabItemOne.mouseout(function(){
						_this.autoplay();
					})
				}
				
			}
			let $tab = new tab();
			$tab.init();
			
		})(),
	}
})