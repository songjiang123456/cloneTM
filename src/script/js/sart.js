define(['config'], function() {
	require(['jquery', 'jqcookie'], function() {
		sart: (function() { //购物车
			class sart {
				constructor() {

				}
				init() {
					this.cookie();
					this.inputchioce();
					this.delete();
				}
               cookie(){
				   let _this=this;
				   if ($.cookie('arr') && $.cookie('num')) {
				       var arr1 = $.cookie('arr').split(',');//转数组
				       var num1 = $.cookie('num').split(',');
				       $.each(num1, function(index, value) {
				           _this.method(arr1[index], num1[index]);
				       });
				   }
			   }
				method(picid,count) {
					$.ajax({
						url: "http://10.31.163.54/jsmulu/taobao/php/detail.php",
						data: {
							sid:picid
						},
						dataType: 'json',
						success: function(data) {
							var strhtml = '';
							strhtml +=
								`
							 <ol class="ol-cart" sign="${data.sid}">
							  <li><input type="checkbox" class="checkbox" /> </li>
							  <li>
							     <img src="${data.imgurl}" />
							  	<span>${data.title}</span> 
							  </li>
							  <li>${data.price}</li>
							   <li>${picid}</li>
							   <li>￥${data.price*count}</li>
							   <li class="delete">删除</li>
							   </ol>
							`
							$('.cart-box').append(strhtml);
						}
					})
				}

				inputchioce() {
					$('.checkboxall').on('click', function() {//全选
						if ($(this).prop('checked')) {
							$('input').not('.checkboxall').prop('checked', true);
						} else {
							$('input').not('.checkboxall').prop('checked', false);
						}
					});
					$('.cart-box').on('click','.checkbox',function(){
					    if($('input').not('.checkboxall').length == $('input:checked').not('.checkboxall').length){
					        $('.checkboxall').prop('checked',true);
					    }else{
					        $('.checkboxall').prop('checked',false);
					    }
						
					});
				
				}
				delete(){//删除
					$('.cart-box').on('click','.delete',function(){
						// alert($(this).parent('ol').length)
						if(window.confirm('确定要删除此项吗？')){
							var sign = $(this).parent('ol').attr('sign');
							var picid = $.cookie('arr').split(',')
							console.log($.cookie('arr').split(','));
							$(picid).each(function(index,value){
								if(value == sign){
									var i = picid.indexOf(value);
									picid.splice(i,1)
									$.cookie('arr',picid);
								}
							})
							
							$(this).parent('ol').empty();
							
							
						}
                          
					})
				}
				
			}
			new sart().init();
		})();
	})
})
