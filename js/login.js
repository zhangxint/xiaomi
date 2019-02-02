
window.onload = function(){
    var login = (function(){
        var $loginid = document.querySelector(".userid_login");
        return {
            init : function(){
                this.event();
            },
            event : function(){
                $loginid.onclick = function(){
                    alert("sdkfjadlfjksdlaf四大皆空飞虎队");
                }
            }
        }
    })
    login.init();
}