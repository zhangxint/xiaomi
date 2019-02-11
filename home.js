'use strict'
window.onload = function(){
    

    //将json数据插入到html中
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var data = JSON.parse(xhr.responseText); 
                
                // 获取到手机产品的数据
                var phonelist = data.phone; 
        
                // 将获取到的商品数据信息插入到页面中
                var $list = document.querySelector('.list');
                
                for(var i = 0;i < phonelist.length; i++){
                    var $li = document.createElement('li');
                    $li.className = "phone_item";
                    $li.innerHTML = `
                    <a href="">
                        <img src="${phonelist[i].imgurl}" alt="">
                        <div class="Intro">
                            <h3 class="product_name">${phonelist[i].phone}</h3>
                            <p class="product_intro">${phonelist[i].info}</p>
                            <p class="product_price">
                                <span class="discount_pri">${phonelist[i].price}元</span>
                                <del class="origin_pri">${phonelist[i].oldprice}元</del>
                            </p>
                            <span class="salespromotion">${phonelist[i].salespromotion}</span>
                        </div>
                    </a>
                    `;
                    $list.appendChild($li);
                }
                //判断如果是新品则背景颜色为绿色
                var $new = document.querySelectorAll('.salespromotion');
                for(let j = 0;j < $new.length ; j++){
                    if($new[j].innerHTML == "新品"){
                        $new[j].style.backgroundColor = "green";
                    }
                }   
            }
        }
    }
    xhr.open("GET","js/shop.json",true);
    xhr.send();

    // 家电 配件 周边 搭配 智能 选项卡制作
    var tabs = (function(){
        //获取tabs 元素
        var $hotpro = document.querySelector('.hotpro');
        var $tv_flim = document.querySelector('.tv_flim');
        var computero = document.querySelector('.computer');
        var $house_mac = document.querySelector('.house_mac');
        return {
            init : function(){
                this.event();
            },
            event : function(){
                var _this  = this;
                $hotpro.onclick = function(){
                    _this.hide();
                }
            },
            show : function(){
                alert("我是显示");
            },
            hide : function(){
                alert("我是隐藏");
            }
        }
    }());
    tabs.init();
}