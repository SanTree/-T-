window.onload = function(){
	var liNav = document.getElementById("liNav").children;
	console.log(liNav);
	var commonDiv = document.getElementsByClassName("common");
	console.log(commonDiv);
	var sevenDot = document.getElementById("sevenDot").children;
	console.log(sevenDot);
    var leader = 0,target = 0,timer = null;
    for (var i = 0; i < commonDiv.length; i++) 
    {
    	sevenDot[i].index = i;
    	sevenDot[i].onclick = function()
    	{
    		clearInterval(timer);
    		target = commonDiv[this.index].offsetTop;
    		var that = this;
    		timer = setInterval(function(){
    			leader = leader + (target-leader)/10;
    			window.scrollTo(0,leader);
    			console.log(commonDiv[that.index].offsetTop);
    		if (leader<commonDiv[that.index].offsetTop) 
    			{
    				leader = Math.ceil(leader);
    			}else{
    				leader = parseInt(leader);
    			}
    			if (leader==commonDiv[that.index].offsetTop) 
    				{
    					clearInterval(timer);
    				};

    		},30)
    	}
   };
 

    // 正则验证
    // 用户名
    var login_id = document.getElementById("login_id");
    login_id.onblur = function(){
        var login_id_01 = /^([a-zA-Z\·]{1,})$|^([\u4e00-\u9fa5]{2,10})$/;
        if (!login_id_01.test(this.value)) 
            {
                this.value = "用户名不正确，请重新输入";
                this.onfocus = function(argument){
                    this.value = ""
                }
            }else{
                this.value = this.value;
            }this.value = this.value;
    }

    // 密码
      var login_password = document.getElementById("login_password");
    login_password.onblur = function(){
        var login_password_01 = /^\d{6}/;
        if (!login_password_01.test(this.value)) 
            {
                this.value = "密码不正确，请重新输入";
                this.onfocus = function(argument){
                    this.value = ""
                }
            }else{
                this.value = this.value;
            }this.value = this.value;
    }

    // 注册用户名
    var register_id = document.getElementById("register_id");
    register_id.onblur = function(){
        var register_id_01 = /^([a-zA-Z\·]{1,})$|^([\u4e00-\u9fa5]{2,10})$/;
        if (!register_id_01.test(this.value)) 
            {
                this.value = "用户名不正确，请重新输入";
                this.onfocus = function(argument){
                    this.value = ""
                }
            }else{
                this.value = this.value;
            }this.value = this.value;
    }


     // 注册密码
      var register_password01 = document.getElementById("register_password01");
    register_password01.onblur = function(){
        var register_password01_01 = /^\d{6}/;
        if (!register_password01_01.test(this.value)) 
            {
                this.value = "格式不正确，请输入6个数字";
                this.onfocus = function(argument){
                    this.value = ""
                }
            }else{
                this.value = this.value;
            }this.value = this.value;
    }

     var register_password02 = document.getElementById("register_password02");
      register_password02.onblur = function(){
        if (register_password02.value!=register_password01.value) 
            {
                this.value = "密码不一致，请重新输入";
                this.onfocus = function(argument){
                    this.value = ""
                }
            }else{
                this.value = this.value;
            }this.value = this.value;
    }


         // 注册邮箱
      var tamp = document.getElementById("tamp");
    tamp.onblur = function(){
        var tamp_01 = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
        if (!tamp_01.test(this.value)) 
            {
                this.value = "格式不正确，请重新输入";
                this.onfocus = function(argument){
                    this.value = ""
                }
            }else{
                this.value = this.value;
            }this.value = this.value;
    }



}

$(function(){
    $(".fresh").click(function(){
        refresh();
    })
})
function refresh(){
    window.location.reload();
}