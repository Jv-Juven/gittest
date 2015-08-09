var dataForWeixin={
 
   appId: "",
 
   MsgImg: "http://myteamproject.oss-cn-beijing.aliyuncs.com/zlsj/12-30/logo.jpg",
 
   TLImg: "http://myteamproject.oss-cn-beijing.aliyuncs.com/zlsj/12-30/logo.jpg",
 
   url: "http://maka.im/zlsj",
 
   title: "这些故事《舌尖上的中国》也没告诉你",
 
   desc: "",
 
   fakeid: "",
 
   callback:function(){
    // window.open("http://maka.im/menu");
   }
 
};
 
(function(){

    var onBridgeReady = function() {

        WeixinJSBridge.on('menu:share:appmessage', function(argv) {

            WeixinJSBridge.invoke('sendAppMessage', {

                "appid": dataForWeixin.appId, 

                "img_url": dataForWeixin.MsgImg, 

                "img_width": "120", 

                "img_height": "120", 

                "link": dataForWeixin.url, 

                "desc": dataForWeixin.desc, 

                "title": dataForWeixin.title

            }, function(res) {
                (dataForWeixin.callback)();
            });
        });

        WeixinJSBridge.on('menu:share:timeline', function(argv) {

            (dataForWeixin.callback)();

            WeixinJSBridge.invoke('shareTimeline',{

                "img_url": dataForWeixin.TLImg, 

                "img_width": "120", 

                "img_height": "120", 

                "link": dataForWeixin.url, 

                "desc": dataForWeixin.desc, 

                "title": dataForWeixin.title

            }, function(res) {
            });
        });

        WeixinJSBridge.on('menu:share:weibo', function(argv) {

            WeixinJSBridge.invoke('shareWeibo',{

                "content": dataForWeixin.title, 

                "url": dataForWeixin.url

            }, function(res){
                (dataForWeixin.callback)();
            });
        });

        WeixinJSBridge.on('menu:share:facebook', function(argv) {

            (dataForWeixin.callback)();

            WeixinJSBridge.invoke('shareFB', {

                "img_url": dataForWeixin.TLImg, 

                "img_width": "120", 

                "img_height": "120", 

                "link": dataForWeixin.url, 

                "desc": dataForWeixin.desc, 

                "title": dataForWeixin.title

            }, function(res) {
            });
        });
    };
 
    if (document.addEventListener) {

        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
     
    } else if (document.attachEvent) {

        document.attachEvent('WeixinJSBridgeReady'   , onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);
    }
})();