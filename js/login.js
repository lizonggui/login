$(document).ready(function(){
	//点击注册
	$("#register_mod").click(function(){
		$("#register_mod").addClass("method_current");
		$("#login_mod").removeClass("method_current");
		$(".sign-in-box").hide();
		$(".sign-up").show();
	})
	//点击登录
	$("#login_mod").click(function(){
		$("#login_mod").addClass("method_current");
		$("#register_mod").removeClass("method_current");
		$(".sign-in-box").show();
		$(".sign-up").hide();
	})
	//点击选择登录方式
	var clicktime=1;
	$(".login_style").click(function(){
		clicktime=clicktime+1;
		if(clicktime%2==0){
			$(this).css("background","url(img/login/upload_ifrdcojvgftdmmbqhazdambqmeyde_52x53.png)");
			$(".right_barcodes").show();
			$(".right_login").hide();		
		}else{
			$(this).css("background","url(img/login/upload_ie4tmnzrmuydmmbqhazdambqgqyde_46x46.png) no-repeat");
			$(".right_login").show();
			$(".right_barcodes").hide();			
		}		
	})
    //手机号码正则
	 var regExp=/^1[35789]\d{9}$/;
	 $(".sign-in-user input").blur(function(){	 	
	 	if(regExp.test($(".sign-in-user input").val())){
	 		$(".login_alert").hide();	
	 	}else{
	 		$(".login_alert").show();	 
	 	}
	 })
	 $("#phone-number").blur(function(){	 	
	 	if(regExp.test($("#phone-number").val())){	
	 		$(".login_alert").hide();
	 	}else{
	 		$(".login_alert").show();
	 	}
	 })
	  
	  
	 $(".eye").mouseover(function(){
	 		$("#check_code").attr("type","text");	 	 		 		 	
	 })
	 $(".eye").mouseleave(function(){
	 		 $("#check_code").attr("type","password");	 	 		 		 	
	 })
		
})

