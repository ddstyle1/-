window.addEventListener('load',function(){
	var tel=document.querySelector('.inp-1');
	var icon=document.querySelector('.icon');
	var remind=document.querySelector('.remind-ipt');
	
	tel.addEventListener('change',function(){
		// console.log(this);
		if(tel.value.length==11){
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
	
	// 2. 
	var forget=document.querySelector('.forget');
	var lis=document.querySelectorAll("li");
	 forget.addEventListener('click',function(){
		 // console.log(this.parentNode);
		 this.parentNode.style.display="none";
		 console.log(this.parentNode.nextElementSibling);
		 this.parentNode.nextElementSibling.style.display="block";
	 })
	 var send=document.querySelector('.send');
	 var ipt=document.querySelector('.inp-3');
	 send.addEventListener('click' ,function(){
		 alert("验证码为1234");
		 this.style.display="none";
	 })
	 // 改善一下
	 ipt.addEventListener('change',function(){
		 if(ipt.value!="1234"){
			alert("验证码错误")
		 }
	 })
	 // 3.. 
	 
	 
})