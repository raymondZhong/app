
var Canvas = function(){
	   
	 this.stroke=function(canvasid){
		 var mCanvas=canvasid;
!function(){function a(a){return document.getElementById(a)}function b(){function f(){"number"==typeof window.orientation&&0!==window.orientation||"function"!=typeof b||location.reload()}if(window.onorientationchange=f,"number"==typeof window.orientation&&0!==window.orientation)console.log(n.a1||"请旋转您的手机为竖立状态，在横屏界面下无法操作！"),f();else{b=null;var g=document.body.clientWidth*1.3,i=g/640;document.body.style.fontSize=32*i+"px";var o=a(mCanvas);var p=new e(o);p.b=g,window.PENSIZE&&(p.c=window.PENSIZE),window.redrawBrush=function(a){var b=!0,c=0,d=function(){var e=h[c],f=e.a,g=e.b;b&&(p.a.moveTo(f.x-p.i.left,f.y-p.i.top),p.e=null,p.s=0,p.d=[],p.lineWidth=p.c/2*(p.b/320),p.m=p.l=0,b=!1),e.bp?b=!0:p.q(f,g,!0),c++,c<h.length&&(a?setTimeout(d,f?f.r*a:60*a):d())};d()},window.getBrushTracks=function(){return h},window.setBrushTracks=function(a){h=a},document.ontouchmove=function(a){"CANVAS"==a.target.tagName&&a.preventDefault()};{a("palette")}}}

function d(){}function e(a){if(a.nodeType)this.canvas=a;else{if("string"!=typeof a)return;this.canvas=document.getElementById(a)}this.D()}function f(a,b,c,d){if(!c.p.complete||!c.o.complete)return"";d=d||520,a=a||"png",b=b||.7;var e=document.createElement("canvas");e.width=e.height=d;var f,g,h,i,j=c.canvas.width,k=c.canvas.height;if(j/d>1.8)for(f=document.createElement("canvas"),g=document.createElement("canvas"),h=f.getContext("2d"),i=g.getContext("2d"),f.width=j,f.height=k,h.drawImage(c.canvas,0,0,j,k);j/d>1.8;)j=Math.round(.6*j),k=Math.round(.6*k),g.width=j,g.height=k,i.drawImage(f,0,0,j,k),f.width=j,f.height=k,h.drawImage(g,0,0,j,k);else f=c.canvas;return g=e.getContext("2d"),g.drawImage(c.o,0,0,d,d),g.drawImage(f,0,0,d,d),e.toDataURL("image/"+a,b)}var g="",h=[],i=navigator.userAgent.match(/ OS (\d+).*? Mac OS/)||!1,j="",k=0,l=-1!==navigator.userAgent.indexOf("NetType/WIFI"),m=-1!==navigator.userAgent.indexOf("Messenger"),n=window.LANG||{};m&&window.console&&window.console.log,e.prototype={lineWidth:1,color:"rgba(0,0,0, .6)",c:7,b:320,v:"./images/paper.jpg",k:0,D:function(){var a=this;if(this.canvas.getContext){this.a=this.canvas.getContext("2d"),this.a.strokeStyle=this.color,this.a.fillStyle=this.color,this.h(this.canvas,"selectstart",function(){return!1}),this.o=new Image,this.o.src=this.v,this.p=new Image,this.p.src="data:image/png;base64,"+g;var b=function(c){var d,e;if("touchstart"==c.type){if(2<=c.touches.length)return;d=c.touches[0].pageX,e=c.touches[0].pageY,a.f(a.canvas,"mousedown",b)}else d=c.pageX,e=c.pageY;a.F(d,e,c.type),c.preventDefault()};this.h(this.canvas,"touchstart",b),this.h(this.canvas,"mousedown",b)}},F:function(a,b,c){var d=this;this.i=this.canvas.getBoundingClientRect(),this.i={left:this.i.left+(window.scrollX||window.pageXOffset),top:this.i.top+(window.scrollY||window.pageYOffset)},window.getSelection()?window.getSelection().removeAllRanges():document.selection.empty(),this.a.moveTo(a-this.i.left,b-this.i.top),this.e=null,this.s=0,this.d=[],this.lineWidth=this.c/2*(this.b/320),this.g&&(this.f(document,"mousemove",this.g),this.f(document,"touchmove",this.g)),this.g=function(a){var b,c;if("touchmove"==a.type){if(2<=a.touches.length)return;b=a.touches[0].pageX,c=a.touches[0].pageY}else b=a.pageX,c=a.pageY;d.t(b,c),a.preventDefault()},this.j=function(){d.G(),h.push({bp:!0})},"touchstart"==c?(this.h(document,"touchmove",this.g),this.h(document,"touchend",this.j)):(this.h(document,"mousemove",this.g),this.h(document,"mouseup",this.j)),this.w(),this.t(a,b)},t:function(a,b){var c;c=0,a-=this.i.left,b-=this.i.top,this.d.length&&(c=this.d[this.d.length-1],c=Math.sqrt((c.x-a)*(c.x-a)+(c.y-b)*(c.y-b)),0==c)||(this.k++,this.d.push({x:a,y:b,r:c}),3<=this.d.length&&(c=this.d.shift(),this.q(c)))},q:function(a,b,c){c||h.push({a:a,b:b});var d=a.x,e=a.y,f=a.r,g=i?4:2;if(!this.e||0!==f){var j=this.d.length?this.d[0]:null;if(f){if(this.a.moveTo(this.e.x,this.e.y),!this.s&&(this.s=1,j&&f>j.r*g))for(f/=4,g=1;4>=g;g++)this.u(d+g/4*(this.e.x-d),e+g/4*(this.e.y-e));b||(b=f<.003125*this.b?this.b/320*this.c*1.625:f<.00625*this.b?this.b/320*this.c*1.375:f<.009375*this.b?this.b/320*this.c*1.25:f<.015625*this.b?this.b/320*this.c*1.125:f<.021875*this.b?this.b/320*this.c:f<.028125*this.b?this.b/320*this.c*.875:f<.034375*this.b?this.b/320*this.c*.75:f<.046875*this.b?this.b/320*this.c*.625:f<.0625*this.b?this.b/320*this.c*.5:this.b/320*this.c*.375),this.n=b,Math.abs(this.lineWidth-this.n)>this.b/320*this.c*.025&&(this.lineWidth-=(this.lineWidth-this.n)/8,this.a.lineWidth=this.lineWidth)}this.e=a,this.u(d,e)}},G:function(){this.f(document,"mousemove",this.g),this.f(document,"touchmove",this.g),this.f(document,"mouseup",this.j),this.f(document,"touchend",this.j),--this.a.lineWidth;for(var a;this.d.length;)a=this.d.shift(),this.q(a,this.b/320*this.c/4)},A:function(){this.e=null,this.k=0,this.a.beginPath()},u:function(a,b){var c,d,e;if(this.a.fillStyle=this.color,this.a.strokeStyle=this.color,this.a.lineTo(this.e.x,this.e.y),this.a.stroke(),this.a.beginPath(),this.a.strokeStyle="rgba(0, 0, 0, 0)",(this.l||this.m)&&(c=this.l-a,d=this.m-b,e=Math.sqrt((this.l-a)*(this.l-a)+(this.m-b)*(this.m-b)),Math.abs(e)>this.lineWidth/3)){e=Math.floor(Math.abs(e)/(this.lineWidth/3));for(var f=1;e>=f;f++)Math.abs(this.lineWidth-this.n)>this.b/320*this.c*.025&&(this.lineWidth-=Math.round(this.lineWidth-this.n)/8,this.a.lineWidth=this.lineWidth),this.a.arc(this.l-f/e*c,this.m-f/e*d,this.lineWidth,0,2*Math.PI),this.a.fill(),this.a.stroke(),this.a.beginPath()}this.a.arc(a,b,this.lineWidth,0,2*Math.PI),this.a.fill(),this.a.stroke(),this.a.beginPath(),this.l=a,this.m=b},w:function(){this.m=this.l=0},h:function(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c,!1)},f:function(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener(b,c,!1)},B:function(a,b){return f(a,b,this,590)},C:function(a,b){return f(a,b,this,80)}},b()}();

		 }
	
	this.clear=function(canvasid){
		     var context=document.getElementById(canvasid).getContext("2d");
			 var w = document.getElementById(canvasid).width;
			 var h = document.getElementById(canvasid).height;
              context.clearRect(0,0,w,h);
		}
	

 

	}