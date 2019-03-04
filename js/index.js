//	表单验证
			var userName = function(){
				//获取用户名框
				var inp1 = document.getElementById("inp1");
				//获取span
				var sp1= document.getElementById("insp");
				//判断用户名是否为空
				if(inp1.value==""){
					sp1.innerHTML = "<font size='2px' color='red' style='position: relative;top: -20px;'>姓名不能为空</font>";
					return false;
				}else{
					sp1.innerHTML = "";
					return true;
				}
			};
			var tel = function(){
				//获取用户名框
				var inp2 = document.getElementById("inp2");
				//获取span
				var sp1= document.getElementById("insp1");
				//判断用户名是否为空
				if(inp2.value==""){
					sp1.innerHTML = "<font size='2px' color='red' style='position: relative;top: -10px;'>电话不能为空</font>";
					return false;
				}else{
					sp1.innerHTML = "";
					return true;
				}
			};
			var xiaoyan = function(){
				//调用输入框
				var xy1 = userName();
				var xy2 = tel();
				//判断输入框是否为true
				if(xy1&&xy2){
					return true;
				}else{
					return false;
				}
				
			}
//			导航隐藏
			$(document).ready(function(){
				$('.li-1').mouseover(function() {
	    			$('#ul01').show();
	            });
	             $('.li-1').mouseout(function() {
    				$('#ul01').hide();
           		 });
			});
//			侧边栏
    		
			function yincang(){

				var cer = document.getElementById("cer");

				var hid=cer.hidden;

				var cel = document.getElementById("cel");

				if (hid) {

					cer.hidden=false; 

				} else{
					cer.hidden=true;

				}
		}	

      
		