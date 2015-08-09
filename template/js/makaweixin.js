/*

data={
    title:'标题'，
    desc:'描述'，
    thum:'封面'
    debug:false
}



*/


function setweixin(data)
{

    $.ajax({
          type : "get",
          url : 'http://create.maka.im/ext/api/wx',
          dataType : "json",
      
          success : function(json){
            //
            //clearTimeout(versiontimer);

            var wxjson=json.wx;
            initweixin({
                appid:wxjson.appId, 
                timestamp:wxjson.timestamp,
                nonceStr:wxjson.nonceStr,
                signature:wxjson.signature,
                link:wxjson.url,
                // link:wxjson.url+"?"+data.url,
                title:data.title,
                desc:data.desc,
                imgUrl:data.thum,
                debug:data.debug

            });


          },
          error:function(err){
            //clearTimeout(versiontimer);
           //editor_makaproject.jsonp(function(err){alert(err.error)});
          }
        });




}






function initweixin(data){


    // alert(data['link']);
    wx.config({
      debug:data.debug,
      appId: data.appid,
      timestamp: data.timestamp,
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo']
    });



    wx.ready(function () {
    // 在这里调用 API

    wx.onMenuShareAppMessage({
    title: data['title'], // 分享标题
    desc: data['desc'], // 分享描述
    link: data['link'], // 分享链接
    imgUrl:  data['imgUrl'], // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () { 
        // 用户确认分享后执行的回调函数
        //alert('a');
        
    },
    cancel: function () { 
        // 用户取消分享后执行的回调函数
    }
    });


    wx.onMenuShareTimeline({
    title:  data['title'], // 分享标题
    desc: data['desc'], // 分享描述
    link: data['link'], // 分享链接
    imgUrl: data['imgUrl'], // 分享图标
    success: function () { 
        // 用户确认分享后执行的回调函数
        alert(data['desc']);
    },
    cancel: function () { 
        // 用户取消分享后执行的回调函数
    }
    });



    wx.onMenuShareQQ({
    title: data['title'], // 分享标题
    desc: data['desc'], // 分享描述
    link: data['link'], // 分享链接
    imgUrl:  data['imgUrl'], // 分享图标
    success: function () { 
       // 用户确认分享后执行的回调函数
    },
    cancel: function () { 
       // 用户取消分享后执行的回调函数
    }
    });

    wx.onMenuShareWeibo({
    title: data['title'], // 分享标题
    desc: data['desc'], // 分享描述
    link: data['link'], // 分享链接
    imgUrl:  data['imgUrl'], // 分享图标
    success: function () { 
       // 用户确认分享后执行的回调函数
    },
    cancel: function () { 
        // 用户取消分享后执行的回调函数
    }
});








  });

  



    


}