$(function(){
	//点赞功能
	var flag = true;
	$(".personal .Fabulous").on("click",function(){
		if(flag){
		  $(this).parents("li").find(".Num").text("1");
		  flag = false;
		}
		else{	
		  $(this).parents("li").find(".Num").text("0");
		  flag = true;
		}
	});
	//查看全部评论
	slidUp();
	//点击展开评论
	$(".commentDetalis dd em").on("click",function(){
		if($(this).text()=="查看全部10条评论"){
			$(this).text("收起");
			$(this).parents(".commentDetalis").children("dt").show();
			$(this).siblings("span").children("img").attr("src","img/xiangshang.jpg");
		}else{
			$(this).text("查看全部10条评论");
			$(this).siblings("span").children("img").attr("src","img/down_arrow_26.823529411765px_1205407_easyicon.net.png");
			$(this).parents(".commentDetalis").children("dt").eq(3).hide();
			$(this).parents(".commentDetalis").children("dt").eq(4).hide();
			$(this).parents(".commentDetalis").children("dt").eq(5).hide();
			$(this).parents(".commentDetalis").children("dt").eq(6).hide();
			$(this).parents(".commentDetalis").children("dt").eq(7).hide();
			$(this).parents(".commentDetalis").children("dt").eq(8).hide();
			$(this).parents(".commentDetalis").children("dt").eq(9).hide();
		}
	});
	
	
	
	
	
	
	
	
})

function slidUp(){
		$(".commentDetalis dt").each(function(){
			if($(this).index()>2){
				$(this).hide();
			}
		});
	}