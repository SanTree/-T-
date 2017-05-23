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
}