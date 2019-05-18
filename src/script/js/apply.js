define(['config'], function() {
    return {
        apply: (function() { //主页商品的渲染

            $.ajax({
                url: 'http://10.31.163.54/jsmulu/taobao/php/picdata.php',
                dataType: 'json',
                success: function(data) {
                    console.log(data);
                    var $htmlStr = '';
                    $.each(data, function(index, value) {
                        $htmlStr += `<div class="img-box"><a href="details.html?sid=${value.sid}"><img src="${value.imgurl}" class="lazy"/><p>${value.title}</p><div class="price">￥${value.price}</div></a></div> `
                    });
                    $('.apply').html($htmlStr);
                }
            })

        })(),

        detalis: (function() { //详情页的渲染
            var $sid = location.search.substring(1).split('=')[1];
            $.ajax({
                url: "http://10.31.163.54/jsmulu/taobao/php/detail.php",
                data: {
                    sid: $sid
                },
                dataType: 'json',
                success: function(data) {
                    // console.log(data);
                    var $listarr = data.smallurl.split(',');
                    var $urllist = data.urllist.split(',');
                    var $contantHtml = '';
                    var $listStr = '';
                    $.each($listarr, function(index, value) {
                        $listStr += '<li class="liclick"><img src="' + value + '"></li>';
                    });
                    $contantHtml += `
						   <div class="sbox">
						   	<img src="${$urllist[0]}" class="spic" />
						   	<div class="moveBox"></div>
						   </div>
						   <div class="bbox">
						   	<img src="${$urllist[0]}" class="bpic" />
						   </div>
						   
						   <ul>
						   	      ${$listStr}
						   </ul>
						   <div class="fangdajing-right">
						   	<h1><a href="#">${data.title}</a> </h1>
						   	<div class="detail-price">
						   		<span>价格</span>
						   		<span>￥${data.price}</span>
						   	</div>
						   	<div class="detail-num">
						   		<p><label>数量</label><input type="text" value="1" /><span class="detail-up">^</span><span class="detail-dowm">v</span> </p>
						   	</div>
						   	
						   	<div class="detail-btn">
						   		<a href="javascript:;"><button>立即购买</button></a>
						   		<a href="javascript:;"><button class="add-sart">加入购物车</button><div class="sart-box"></div></a>
								
						   	</div>
						</div>	
						`
                    $('.content').html($contantHtml)
                },
            })
        })()
    }
})