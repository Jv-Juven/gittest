
$(document).ready(function(){

	//重置相关容器的大小
	var resizeDimensions=function(){
		var w=window.screen.width;
		var h=window.screen.height;
		var wT=w/320.0;
		var hT=h/504.0;
		var minT=wT>hT?hT:wT;
		var maxT=wT>hT?wT:hT;

		$(".page-bg").css({
			position:"absolute",
			width:maxT*320.0+"px",
			height:maxT*504.0+"px",
			margin:-maxT*252.0+"px "+(-maxT*160)+"px",
			top:"50%",
			left:"50%"
		});
		$(".page-content").css({
			webkitTransform:"scale3d("+minT+","+minT+",999)",
			oTransform:"scale3d("+minT+","+minT+",999)",
			msTransform:"scale3d("+minT+","+minT+",999)",
			mozTransform:"scale3d("+minT+","+minT+",999)"
		});
	}
	resizeDimensions();
	window.onresize=function(){
		resizeDimensions();
	}

	//执行函数

	var transarr=[];
	var disappearall=function(){

		while(transarr.length!=0){
			clearTimeout(transarr.pop());
		}

		//$("").hide();

	}

	function funcs0(){
		
	}
	function funcs1(){
		transarr.push(setTimeout(function(){alert("1")},2000));
	}
	function funcs2(){
		transarr.push(setTimeout(function(){alert("2")},3000));
	}


	//构建整体框架
	var mySwiper=new Swiper(".mycontainer",{

		speed:400,
		spaceBetween:0,
		initialSlide:0,
		direction:"vertical",
		autoplay:false,

		watchSlidesProgress:false,
		watchSlidesVisibility:false,

		freeMode:false,
		effect:"slide",//Could be "slide", "fade", "cube" or "coverflow"
		slidesPerView:1,
		loop:false,

		noSwiping:false,
		noSwipingClass:"swiper-no-swiping",

		onInit:function(swiper){
			disappearall();
			// alert(swiper.activeIndex);
			eval("funcs"+swiper.activeIndex+"()");
		},//框架创建之后的回调函数
		onSlideChangeStart:function(swiper){},
		onSlideChangeEnd:function(swiper){
			disappearall();
			eval("funcs"+swiper.activeIndex+"()");
			// alert(swiper.activeIndex);
		},
		onTransitionStart:function(swiper){},
		onTouchStart:function(swiper, event){},
		onTouchMove:function(swiper, event){},
		onDoubleTap:function(swiper, event){},
		onImagesReady:function(swiper){},
		onProgress:function(swiper, progress){},
	});

});