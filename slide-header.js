(function(){var t,s=function(t,s){return function(){return t.apply(s,arguments)}};this.SlideHeader=t=function(){function t(t,o){this.onScroll=s(this.onScroll,this),this.mouseMove=s(this.mouseMove,this),this.last=0,this.shown=!0,this.height=t.getBoundingClientRect().height,this.supports3d=null!=t.style.transform||null!=t.style["-webkit-transform"]||null!=t.style["-moz-transform"],this.options={speed:(null!=o?o.speed:void 0)||"300ms",selector:t,mouseTrigger:(null!=o?o.mouseTrigger:void 0)||!0},this.setStyle(),window.onscroll=this.onScroll,this.options.mouseTrigger&&(window.onmousemove=this.mouseMove)}return t.prototype.destroy=function(){return this.showHeader(),window.onmousemove=null,window.onscroll=null},t.prototype.setStyle=function(){var t;return t=this.options.selector.style,t.position="fixed",t.top="0px",t.left="0px",t.transition="transform "+this.options.speed+", top "+this.options.speed,t.webkitTransition="-webkit-transform "+this.options.speed+", top "+this.options.speed,t.mozTransition="-moz-transform "+this.options.speed+", top "+this.options.speed},t.prototype.mouseMove=function(t){return this.shown?void 0:t.pageY-window.pageYOffset<1.4*this.height?this.showHeader():void 0},t.prototype.onScroll=function(){return this.last+100>(new Date).getTime()||window.pageYOffset<0?void 0:(this.last=(new Date).getTime(),window.pageYOffset>this.scrollYPosition?this.hideHeader():this.showHeader(),this.scrollYPosition=window.pageYOffset)},t.prototype.hideHeader=function(){var t;if(this.shown)return this.shown=!1,t=this.options.selector.style,this.supports3d?(t.transform="translate3d(0, -"+this.height+"px, 0)",t["-webkit-transform"]="translate3d(0, -"+this.height+"px, 0)",t["-moz-transform"]="translate3d(0, -"+this.height+"px, 0)"):this.options.selector.style.top="-"+this.height+"px"},t.prototype.showHeader=function(){var t;if(!this.shown)return this.shown=!0,t=this.options.selector.style,this.supports3d?(t.transform="translate3d(0, 0px, 0)",t["-webkit-transform"]="translate3d(0, 0px, 0)",t["-moz-transform"]="translate3d(0, 0px, 0)"):this.options.selector.style.top="0"},t}()}).call(this);