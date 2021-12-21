(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[422],{40669:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return p}});var n=e(67294),s=e(29163),o=function(){};o.prototype.init=function(t,i){return this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.particleNetwork=new a(this,i),this};var c=function(t,i,e){this.isFocus=!1,this.network=t,this.canvas=t.canvas,this.ctx=t.ctx,this.particleColor=r(this.network.options.particleColors),this.radius=h(1.5,2.5),this.opacity=0,this.x=i||Math.random()*this.canvas.width,this.y=e||Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*t.options.velocity,y:(Math.random()-.5)*t.options.velocity}};c.prototype.update=function(){this.opacity<1?this.opacity+=.01:this.opacity=1,(this.x>this.canvas.width+100||this.x<-100)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+100||this.y<-100)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},c.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle=this.particleColor,this.ctx.globalAlpha=this.opacity,this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill()};var a=function(t,i){this.options={velocity:.5,density:13e3,netLineDistance:220,netLineDistanceFocus:300,netLineColor:"#999999",netLineColorFocus:"#999999",particleColors:["#888888"]},this.canvas=t.canvas,this.ctx=t.ctx,this.et=i,this.init()};a.prototype.init=function(){this.createParticles(!0),this.animationFrame=requestAnimationFrame(this.update.bind(this)),this.bindUiActions()},a.prototype.createParticles=function(t){var i=this;this.particles=[];var e=this.canvas.width*this.canvas.height/this.options.density;if(t){var n=0;clearInterval(this.createIntervalId);for(var s=0;s<e;s++)this.particles.push(new c(this));this.createIntervalId=setInterval(function(){n<e-1?this.particles.push(new c(this)):clearInterval(i.createIntervalId),n++}.bind(this),250)}else for(var o=0;o<e;o++)this.particles.push(new c(this))},a.prototype.createInteractionParticle=function(){return this.interactionParticle=new c(this),this.interactionParticle.isFocus=!0,this.interactionParticle.velocity={x:0,y:0},this.particles.push(this.interactionParticle),this.interactionParticle},a.prototype.removeInteractionParticle=function(){var t=this.particles.indexOf(this.interactionParticle);t>-1&&(this.interactionParticle=void 0,this.particles.splice(t,1))},a.prototype.update=function(){if(this.canvas){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.globalAlpha=1;for(var t=0;t<this.particles.length;t++)for(var i=this.particles[t],e=this.particles.length-1;e>t;e--){var n,s=this.particles[e],o=i.isFocus||s.isFocus,c=o?this.options.netLineDistanceFocus:this.options.netLineDistance,a=o?this.options.netLineColorFocus:this.options.netLineColor,h=Math.abs(i.x-s.x),r=Math.abs(i.y-s.y);Math.max(h,r)>c||((n=Math.sqrt(Math.pow(h,2)+Math.pow(r,2)))>c||(this.ctx.beginPath(),this.ctx.strokeStyle=a,this.ctx.globalAlpha=(c-n)/c*i.opacity*s.opacity,this.ctx.lineWidth=.7,this.ctx.moveTo(i.x,i.y),this.ctx.lineTo(s.x,s.y),this.ctx.stroke()))}for(var l=0;l<this.particles.length;l++)this.particles[l].update(),this.particles[l].draw();0!==this.options.velocity&&(this.animationFrame=requestAnimationFrame(this.update.bind(this)))}else cancelAnimationFrame(this.animationFrame)},a.prototype.bindUiActions=function(){this.spawnQuantity=3,this.mouseIsDown=!1,this.touchIsMoving=!1,this.onMouseMove=function(t){this.interactionParticle||this.createInteractionParticle(),this.interactionParticle.x=t.clientX,this.interactionParticle.y=t.clientY}.bind(this),this.onTouchMove=function(t){this.touchIsMoving=!0,this.interactionParticle||this.createInteractionParticle(),this.interactionParticle.x=t.changedTouches[0].clientX,this.interactionParticle.y=t.changedTouches[0].clientY}.bind(this),this.onMouseDown=function(t){this.mouseIsDown=!0;var i=0,e=this.spawnQuantity,n=setInterval(function(){if(this.mouseIsDown){1===i&&(e=1);for(var t=0;t<e;t++)this.interactionParticle&&this.particles.push(new c(this,this.interactionParticle.x,this.interactionParticle.y))}else clearInterval(n);i++}.bind(this),50)}.bind(this),this.onTouchStart=function(t){setTimeout(function(){if(!this.touchIsMoving)for(var i=0;i<this.spawnQuantity;i++)this.particles.push(new c(this,t.changedTouches[0].clientX,t.changedTouches[0].clientY))}.bind(this),200)}.bind(this),this.onMouseUp=function(t){this.mouseIsDown=!1}.bind(this),this.onMouseOut=function(t){this.removeInteractionParticle()}.bind(this),this.onTouchEnd=function(t){this.touchIsMoving=!1,this.removeInteractionParticle()}.bind(this),console.info("---setMouseLis--\x3e",this.et),this.et.addEventListener("mousemove",this.onMouseMove),this.et.addEventListener("touchmove",this.onTouchMove),this.et.addEventListener("mouseup",this.onMouseUp),this.et.addEventListener("mouseout",this.onMouseOut),this.et.addEventListener("touchend",this.onTouchEnd)},a.prototype.unbindUiActions=function(){this.et&&(this.et.removeEventListener("mousemove",this.onMouseMove),this.et.removeEventListener("touchmove",this.onTouchMove),this.et.removeEventListener("mouseup",this.onMouseUp),this.et.removeEventListener("mouseout",this.onMouseOut),this.et.removeEventListener("touchend",this.onTouchEnd))};var h=function(t,i,e){var n=Math.random()*(i-t)+t;return e&&(n=Math.round(n)),n},r=function(t){return t[Math.floor(Math.random()*t.length)]},l=new o;var u=e(85893);function v(){var t=(0,n.useRef)(),i=(0,n.useRef)();return(0,n.useEffect)((function(){var t,e,n;return i.current&&(e=i.current,n=document.body,t=l.init(e,n),window.__bgAnim=t,console.info("---initBgAnim--\x3e")),function(){console.info("---DestroyAnim--\x3e"),function(t){t&&t.particleNetwork.unbindUiActions()}(t)}}),[i.current]),(0,n.useEffect)((function(){if(t.current&&i.current){var e=i.current.offsetWidth,n=i.current.offsetHeight,s=setInterval((function(){var i,s,o=e!==t.current.offsetWidth||n!==t.current.offsetHeight;o&&(e=t.current.offsetWidth,n=t.current.offsetHeight,i=e,s=n,l.particleNetwork.removeInteractionParticle(),l.ctx.clearRect(0,0,l.canvas.width,l.canvas.height),l.canvas.width=i,l.canvas.height=s,l.particleNetwork.createParticles(),console.info("---\x3e",o))}),1e3);return function(){clearInterval(s)}}}),[t.current,i.current]),(0,u.jsx)("div",{ref:t,style:{position:"absolute",width:"100vw",height:"100vh",zIndex:-1,background:"rgb(45,45,45)"},children:(0,u.jsx)("canvas",{ref:i})})}var p=n.memo((0,s.ZP)((function(t){var i=t.className;return(0,u.jsxs)("div",{className:i,children:[(0,u.jsx)(v,{}),(0,u.jsx)("div",{className:"flex1"}),(0,u.jsx)("img",{className:"tipIcon",src:"/images/crust_box2x.png"}),(0,u.jsx)("div",{className:"tips",children:"Crust Files is currently not available on mobile devices. Please visit on PC/Desktop devices. Thank you!"}),(0,u.jsx)("div",{className:"flex1"})]})})).withConfig({displayName:"mobile",componentId:"sc-15lrdcz-0"})(["color:white;display:flex;width:100%;height:100vh;flex-direction:column;align-items:center;overflow:auto;.flex1{flex:1;}.tipIcon{width:15.7rem;height:auto;flex-shrink:0;}.tips{margin-top:2.3rem;max-width:22.3rem;font-size:1.7rem;line-height:2.36rem;}"]))},96998:function(t,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mobile",function(){return e(40669)}])}},function(t){t.O(0,[774,888,179],(function(){return i=96998,t(t.s=i);var i}));var i=t.O();_N_E=i}]);