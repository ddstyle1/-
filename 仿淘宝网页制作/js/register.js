window.addEventListener('load',function(){
	// 获取元素
	var tel=document.querySelector('.inp-1');
	var icon=document.querySelector('.icon');
	// var reminds=document.querySelectorAll('.remind-ipt');
	tel.addEventListener('change',function(){
		// console.log(this);
		// 手机号码
		if(tel.value.length==11){
			var remind= this.parentNode.querySelector(".remind-ipt");
			remind.classList.remove("error");
			remind.classList.add("success");
			remind.style.display="inline-block";
			console.log(this.nextElementSibling);
			this.nextElementSibling.classList.remove("error_icon");
			this.nextElementSibling.classList.add("success_icon");
			// console.log(remind.innerText);
			remind.innerText="输入正确";
			
		}
		else{
			remind.classList.remove("success");
			remind.classList.add('error');
			this.nextElementSibling.classList.remove("success_icon");
			this.nextElementSibling.classList.add("error_icon");
			remind.innerText="手机号码格式不正确，请从新输入";
			remind.style.display="inline-block";
		}
	})
	// 2. 密码打开和关闭
	var flag=0;
	var open=document.querySelectorAll("#eye");
	for(var i=0;i<open.length;i++){
		open[i].addEventListener('click',function(){
			console.log(this.src);
			if(flag==0){
				this.src="img/open.png";
				this.parentNode.querySelector('input').type='text';
				flag=1;
			}
			else{
				this.src="img/close.png";
				this.parentNode.querySelector('input').type='password';
				flag=0;
			}
			
		})
	}
	
	// 密码级别
	
	// 3. 两次密码验证
	
	var inps=document.querySelectorAll('input');
	console.log(inps);
	inps[2].addEventListener("change",function(){
		var remind= this.parentNode.querySelector(".remind-ipt");
		if(inps[2].value.length<=6){
			remind.classList.remove("success");
			remind.classList.add("error");
			// this.nextElementSibling.classList.remove("success_icon");
			// this.nextElementSibling.classList.add("error_icon");
			remind.style.display="inline-block";
			remind.innerText="密码必须6位以上";
		}
		else{
			remind.classList.remove("error");
			remind.classList.add("success");
			// this.nextElementSibling.classList.remove("error_icon");
			// this.nextElementSibling.classList.add("success_icon");
			remind.style.display="inline-block";
			remind.innerText="正确";
		}
	})
	
	function changepwd(){
		var remind= this.parentNode.querySelector(".remind-ipt");
		if(inps[2].value!=this.value){
			// var remind= this.parentNode.querySelector(".remind-ipt");
			remind.classList.remove("success");
			remind.classList.add("error");
			// this.nextElementSibling.classList.remove("success_icon");
			// this.nextElementSibling.classList.add("error_icon");
			remind.style.display="inline-block";
			remind.innerText="两次密码不一致，请从新输入";
		}
		else{
			remind.classList.remove("error");
			remind.classList.add("success");
			// this.nextElementSibling.classList.remove("error_icon");
			// this.nextElementSibling.classList.add("success_icon");
			remind.style.display="inline-block";
			remind.innerText="正确";
		}
	}
	inps[3].addEventListener("change",changepwd);
	// inps[2].addEventListener('change',function(){
	// 		var remind= this.parentNode.querySelector(".remind-ipt");
	// 		if(inps[3].value!=this.value){
	// 			// var remind= this.parentNode.querySelector(".remind-ipt");
	// 			remind.classList.remove("success");
	// 			remind.classList.add("error");
	// 			// this.nextElementSibling.classList.remove("success_icon");
	// 			// this.nextElementSibling.classList.add("error_icon");
	// 			remind.style.display="inline-block";
	// 			remind.innerText="两次密码不一致，请从新输入";
	// 		}
	// 		else{
	// 			remind.classList.remove("error");
	// 			remind.classList.add("success");
	// 			// this.nextElementSibling.classList.remove("error_icon");
	// 			// this.nextElementSibling.classList.add("success_icon");
	// 			remind.style.display="inline-block";
	// 			remind.innerText="正确";
	// 		}
	// });
	
	// 4. 登录时
	var li=document.querySelector('.agree');
	var ipt=li.querySelector('input');
	// console.log(ipt);
	var complete=document.querySelector('.over');
	var flag_1=1;
	complete.addEventListener('click',function(event){
		flag_1=1;
		for(var i=0;i<inps.length-1;i++){
			console.log(inps[i].value);
			if(inps[i].value==""){
				flag_1=0;
				alert("表单不能为空");
				event.preventDefault();
				return false;
			}
		}
		console.log(ipt.checked);
		if(ipt.checked&&flag_1==1){
			
		}
		else{
			alert("请勾选同意");
			event.preventDefault();
		}
	})
	
})