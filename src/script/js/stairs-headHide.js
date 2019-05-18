define(['config'], function() {
	return {
		stair: (function() {
			class stairs {
				constructor() {
					this.last = $('.last');
					this.stairsList = $('.stairs-left ul li'); //左侧导航 单个楼梯
					this.stairsLeft = $('.stairs-left');//左侧导航
					this.louceng = $('.stairway');
					
				}

				init() {
					this.returnTop(); //回到顶部
					this.beyondShow();
                    this.distance();
				}

				returnTop() { //回到顶部
					this.last.on('click', function() {
						$('html,body').animate({
							scrollTop: 0
						});
					});
				}

				beyondShow() { //左侧楼梯超出显示
					let _this = this;
					$(window).on('scroll', function() {
						let $top = $(window).scrollTop();
						if ($top >= 500) {
							_this.stairsLeft.show();
						} else {
							_this.stairsLeft.hide();
						}

						_this.louceng.each(function(index, value) {
							let $loucentTop = $(value).offset().top; //每个楼层的top值。
							// console.log($loucentTop);
							if ($loucentTop > $top) {
								_this.stairsList.removeClass('stairactive'); //每次触发滚轮事件，移除所有楼梯的类。
								_this.stairsList.eq(index-1).addClass('stairactive');
								return false; //遍历一次，终止循+1
							}
						})
					})
				}

				distance() {
					let _this = this;
					this.stairsList.on('click', function() {
						//$(this).index():当前点击的楼梯的索引。
						$(this).addClass('stairactive').siblings().removeClass('stairactive'); //当前的元素添加类，其他的兄弟元素移除类。
						var $top = _this.louceng.eq($(this).index()-1).offset().top;
						$('html,body').animate({ //赋值注意内部的属性。
							scrollTop: $top
						});
					});
				}



			}
			let $stair = new stairs();
			$stair.init();
		})(),
	}
})
