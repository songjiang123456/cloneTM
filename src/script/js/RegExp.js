
			  var oinput = document.querySelectorAll('.input input');
			  var ospan = document.querySelectorAll('span');
			  var Form = document.querySelector('form');
			  var flag1 = true;
			  var flag2 = true;
			  var flag3 = true;
			  var flag4 = true;
			  //验证用户名
			  console.log(oinput);
			oinput[0].onfocus = function(){
					  oinput[0].value = '';
					  ospan[0].innerHTML = '请输入2-10位汉字组成的用户名';
					 ospan[0].style.color = 'green';
					 flag1 = false;
			 }
			 oinput[0].onblur = function(){
				 if(oinput[0].value != ''){
					  var reg = /^[\u4e00-\u9fa5]{2,10}$/g;
					 if(reg.test(this.value )){
						 ospan[0].innerHTML = '√';
						 ospan[0].style.color = 'darkgreen';
						 flag1 = true;
					 }else{
						ospan[0].innerHTML = '请输入正确的用户名' ;
						ospan[0].style.color = 'red';
						flag1 = false;
					 }
				 }else{
					 ospan[0].innerHTML = '用户名不能为空' ;
					 ospan[0].style.color = 'red';
					 flag1 = false;
				 }
			 }
			 
			 
			 
			 
			 //手机号的验证
			 oinput[1].onfocus = function(){
			 					  oinput[1].value = '';
			 					  ospan[1].innerHTML = '请输入11位格式的手机号';
			 					 ospan[1].style.color = 'green';
								 flag3 = false;
			 }
			 oinput[1].onblur = function(){
			 				 if(oinput[1].value != ''){
			 					  var reg =/^1[3578]\d{9}$/;
			 					 if(reg.test(this.value )){
			 						 ospan[1].innerHTML = '√';
			 						 ospan[1].style.color = 'darkgreen';
									 flag3 = true;
			 					 }else{
			 						ospan[1].innerHTML = '请输入正确的手机号' ;
			 						ospan[1].style.color = 'red';
									flag3 = false;
			 					 }
			 				 }else{
			 					 ospan[1].innerHTML = '手机号不能为空' ;
			 					 ospan[1].style.color = 'red';
								 flag3 = false;
			 				 }
			 }
			 
			 
			 //密码的验证
			 oinput[2].onfocus = function(){
			 					  ospan[2].innerHTML = '请输入6-18位密码';
			 					 ospan[2].style.color = 'green';
								 flag4 = false;
			 }
			 oinput[2].onblur = function(){
			 				 if(oinput[2].value != ''){
			 					  var reg =/^[a-zA-Z]\w{5,17}$/;
			 					 if(reg.test(this.value )){
			 						 ospan[2].innerHTML = '√';
			 						 ospan[2].style.color = 'darkgreen';
									 flag4 = true;
			 					 }else{
			 						ospan[2].innerHTML = '请输入正确的密码' ;
			 						ospan[2].style.color = 'red';
									flag4 = false;
			 					 }
			 				 }else{
			 					 ospan[2].innerHTML = '密码不能为空' ;
			 					 ospan[2].style.color = 'red';
								 flag4 = false;
			 				 }
			 
			 }
			 //重复输入密码的验证
			 oinput[3].onfocus = function(){
			 					 
			 					  ospan[3].innerHTML = '请输入6-18位密码';
			 					 ospan[3].style.color = 'green';
								 flag5 = false;
			 }
			 oinput[3].onblur = function(){
			 				 if(oinput[3].value != ''){
			 					
			 					 if(oinput[3].value == oinput[3].value){
			 						 ospan[3].innerHTML = '√';
			 						 ospan[3].style.color = 'darkgreen';
									  flag5 = true;
			 					 }else{
			 						ospan[3].innerHTML = '请输入正确的密码' ;
			 						ospan[3].style.color = 'red';
									 flag5 = false;
			 					 }
			 				 }else{
			 					 ospan[3].innerHTML = '密码不能为空' ;
			 					 ospan[3].style.color = 'red';
								  flag5 = false;
			 				 }
			}
	
	 //提交按钮
	 Form.onsubmit = function(){
		 if (ospan[0].innerHTML == "") {
		     ospan[0].innerHTML = "输入的用户名不能为空";
		    ospan[0].style.color = "red";
		     flag1 = false;
		 }
		 if (ospan[1].innerHTML == "") {
		     ospan[1].innerHTML = "输入的手机号不能为空";
		    ospan[1].style.color = "red";
		     flag2 = false;
		 }
		 if (ospan[2].innerHTML == "") {
		     ospan[2].innerHTML = "输入的密码不能为空";
		    ospan[2].style.color = "red";
		     flag3 = false;
		 }
		 if (ospan[3].innerHTML == "") {
		     ospan[3].innerHTML = "确认密码不能为空";
		    ospan[3].style.color = "red";
		     flag4 = false;
		 }
		 
		  if (!flag1 || !flag2 || !flag3 || !flag4) {
		     return false;
		 }
	 }