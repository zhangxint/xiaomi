
window.onload = function(){
    // 获取  -- 手机登录--元素
    var login_messTxt = document.querySelector('.login_messtxt');
    // 获取到用户名输入框
    var $username = document.querySelector('#username');
    var $userpwd = document.querySelector('#userpwd');
    // 获取手机登陆的文本框
    var $text_code = document.querySelector('.text_code');
    var $send_mess = document.querySelector('.send_mess');
    var $usertel = document.querySelector('#usertel');
    var $countrynum = document.querySelector('.countrynum');

    // 获取手机号码输入框
    var $usertel = document.querySelector('#usertel');

    login_messTxt.onclick = function(){
        //点击手机验证码登录时隐藏
        if(login_messTxt.innerHTML == "手机短信登录"){
            $username.style.display = "none";
            $userpwd.style.display = "none";
            //点击手机验证码登录时显示
            $text_code.style.display = "inline-block";
            $send_mess.style.display = "inline-block";
            $usertel.style.display = "inline-block";
            $countrynum.style.display = "inline-block";
            login_messTxt.innerHTML = "用户名密码登录";
        }else if(login_messTxt.innerHTML == "用户名密码登录"){
            login_messTxt.innerHTML = "手机短信登录";
            $username.style.display = "inline-block";
            $userpwd.style.display = "inline-block";
            //点击手机验证码登录时显示
            $text_code.style.display = "none";
            $send_mess.style.display = "none";
            $usertel.style.display = "none";
            $countrynum.style.display = "none";
        }
    }
    // 扫码登录  账号登录切换
    var $userid_login = document.querySelector('.userid_login');
    var $code_login = document.querySelector('.code_login');
    var $login_input = document.querySelector('.login_input');
    var $login_code = document.querySelector('.login_code');
    var $login_way = document.querySelector('.login_way');
    $code_login.onclick = function(){
        $login_input.style.display = "none";
        $login_code.style.display = "block";
        $login_way.style.display = "none";
    }
    $userid_login.onclick = function(){
        $login_input.style.display = "block";
        $login_code.style.display = "none";
        $login_way.style.display = "block";
    }

    // 获取验证码倒计时
    var $send_mess = document.querySelector('.send_mess');
    $send_mess.onclick = function(){
        var timer = null;
        var count = 60;
        timer = setInterval(function(){
            count-- ; 
            $send_mess.value = `重新发送(${count})`;
            $send_mess.style.color = "#999";
            if(count <= 0){
                timer = null;
                $send_mess.value = `重新发送`;
                $send_mess.style.color = "blue";
            }
        },1000);
    }

    //检测手机号码是否格式正确
    $usertel.onchange = function(){
        var tel_Reg =/^1[34578]\d{9}$/;
        if(!(tel_Reg.test($usertel.value))){
            alert("手机格式不对")
        }
    }
}

