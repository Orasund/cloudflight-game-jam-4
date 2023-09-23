var g=Object.defineProperty;var L=(i,e,t)=>e in i?g(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var d=(i,e,t)=>(L(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(n){if(n.ep)return;n.ep=!0;const c=t(n);fetch(n.href,c)}})();const x=400,y=700,f=25,o={canvasWidth:y,canvasHeight:x,paddleHeight:10,paddleWidth:75,ballRadius:10,brickRowCount:Math.floor(y/f),brickColumnCount:Math.floor(x/f),brickWidth:f,brickHeight:f,brickPadding:0,brickOffsetTop:0,brickOffsetLeft:0};var h=(i=>(i.Ball="ball",i.Brick1="brick1",i.Brick2="brick2",i.Brick3="brick3",i.BrickInvisible="invisble_brick",i))(h||{});class H{constructor(){d(this,"pool",new Map);d(this,"amountLoaded",0);Object.values(h).map(e=>this.pool.set(e,this.newImage(e)))}get(e){return this.pool.get(e)}isLoading(){return this.amountLoaded<this.pool.size}newImage(e){const t=new Image;return t.src="assets/images/"+e+".png",t.onload=()=>this.amountLoaded++,t}}class C{constructor(e){d(this,"imagePool",new H);d(this,"ctx");this.ctx=e}image(e){const[t,s]=e.center;return this.ctx.drawImage(this.imagePool.get(e.source),t-e.width/2,s-e.height/2,e.width,e.height),this}circle(e){const[t,s]=e.center;return this.ctx.beginPath(),this.ctx.arc(t,s,e.radius,0,Math.PI*2),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.closePath(),this}rect(e){const[t,s]=e.center;return this.ctx.beginPath(),this.ctx.rect(t-e.width/2,s-e.height/2,e.width,e.height),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.closePath(),this}text(e,t){return this.textWithArgs({pos:t,value:e})}title(e,t){return this.textWithArgs({pos:t,value:e,size:64})}textWithArgs(e){const[t,s]=e.pos,n=e.font?e.font:"Arial",c=e.size?e.size:16,r=e.color?e.color:"#0095DD";return this.ctx.font=c+"px "+n,this.ctx.fillStyle=r,this.ctx.fillText(e.value,t,s),this}}function A(i,e){for(var t=0;t<o.brickColumnCount;t++)for(var s=0;s<o.brickRowCount;s++){let n=h.BrickInvisible;i.bricks[t][s].isVisible==!0&&(n=h.Brick1),i.bricks[t][s].cellType=="goal"&&(n=h.Brick2),e.image({source:n,center:[i.bricks[t][s].x+o.brickWidth/2,i.bricks[t][s].y+o.brickHeight/2],width:o.brickWidth,height:o.brickHeight})}}function P(i,e){e.clearRect(0,0,o.canvasWidth,o.canvasHeight);const t=new C(e);switch(i.end){case"won":t.title("Game Won",[o.canvasWidth/2-150,o.canvasHeight/2]);return;case"lost":t.title("Game Lost",[o.canvasWidth/2-150,o.canvasHeight/2]);return}A(i,t),i.balls.forEach(s=>{t.circle({center:[s.x,s.y],radius:o.ballRadius,color:"#0095DD"})}),t.rect({center:[i.paddle.x+o.paddleWidth/2,o.canvasHeight-o.paddleHeight/2],width:o.paddleWidth,height:o.paddleHeight,color:"#0095DD"}),t.text("Score: "+i.score,[8,20]),t.text("Lives: "+i.lives,[o.canvasWidth-65,20])}class R{constructor(){d(this,"pressed");d(this,"mousePos");d(this,"mouseDown");d(this,"clicked");this.pressed=new Set,this.mousePos=[0,0],this.mouseDown=!1,this.clicked=!1}mouseInArea(e){const[t,s]=this.mousePos,[n,c]=e.center,r=n-e.width/2,p=c-e.height/2,k=n+e.width/2,W=c+e.height/2;return r<=t&&t<=k&&p<=s&&s<=W}keyDownHandler(e){console.log(e.code),e.code=="ArrowRight"||e.code=="KeyD"?this.pressed.add("Right"):e.code=="ArrowLeft"||e.code=="KeyA"?this.pressed.add("Left"):e.code=="ArrowUp"||e.code=="KeyW"?this.pressed.add("Up"):(e.code=="ArrowDown"||e.code=="KeyS")&&this.pressed.add("Down")}keyUpHandler(e){e.code=="ArrowRight"||e.code=="KeyD"?this.pressed.delete("Right"):e.code=="ArrowLeft"||e.code=="KeyA"?this.pressed.delete("Left"):e.code=="ArrowUp"||e.code=="KeyW"?this.pressed.delete("Up"):(e.code=="ArrowDown"||e.code=="KeyS")&&this.pressed.delete("Down")}mouseMoveHandler(e){return t=>{var s=t.clientX-e.offsetLeft,n=t.clientY-e.offsetTop;s>0&&s<e.width&&n>0&&n<e.height&&(this.mousePos=[s,n]),s>0&&s<e.width}}}function m(i){const[e,t]=i,s=D(i);return[e/s,t/s]}function D(i){const[e,t]=i;return Math.sqrt(e*e+t*t)}function T(){let i=[];for(var e=0;e<o.brickColumnCount;e++){i[e]=[];for(var t=0;t<o.brickRowCount;t++){var s=t*(o.brickWidth+o.brickPadding)+o.brickOffsetLeft,n=e*(o.brickHeight+o.brickPadding)+o.brickOffsetTop;let r="obstacle";e==0&&t<5&&(r="goal"),i[e][t]={x:s,y:n,isVisible:!1,lastClicKTick:0,cellType:r}}}let c=[l(),l(),l(),l(),l(),l(),l(),l(),l()];return{paddle:{x:(o.canvasWidth-o.paddleWidth)/2},bricks:i,score:0,lives:3,balls:c,end:void 0,currentTick:0}}function l(){const[i,e]=m([2+Math.random(),-2+Math.random()]);return{dx:i,dy:e,x:o.canvasWidth/2,y:o.canvasHeight/2}}function K(i){i.balls.forEach(e=>{(e.x+e.dx>o.canvasWidth-o.ballRadius||e.x+e.dx<o.ballRadius)&&(e.dx=-e.dx),(e.y+e.dy>o.canvasHeight-o.ballRadius||e.y+e.dy<o.ballRadius)&&(e.dy=-e.dy),e.x+=e.dx,e.y+=e.dy;for(var t=0;t<o.brickColumnCount;t++)for(var s=0;s<o.brickRowCount;s++){var n=i.bricks[t][s];if(e.x>n.x-o.ballRadius&&e.x<n.x+o.brickWidth+o.ballRadius&&e.y>n.y-o.ballRadius&&e.y<n.y+o.brickHeight+o.ballRadius&&(n.cellType=="goal"&&(i.end="won"),n.isVisible==!0)){const c=n.x+o.brickWidth/2,r=n.y+o.brickHeight/2,[p,k]=m([e.x-c,e.y-r]);e.dx=p,e.dy=k}}})}function B(i,e){i.pressed.size==0?e.paddle.x=i.mousePos[0]-o.paddleWidth/2:i.pressed.has("Right")&&e.paddle.x<o.canvasWidth-o.paddleWidth?e.paddle.x+=7:i.pressed.has("Left")&&e.paddle.x>0&&(e.paddle.x-=7)}function M(i,e){for(var t=0;t<o.brickColumnCount;t++)for(var s=0;s<o.brickRowCount;s++){let n=i.currentTick-i.bricks[t][s].lastClicKTick;e.mouseInArea({center:[i.bricks[t][s].x+o.brickWidth/2,i.bricks[t][s].y+o.brickHeight/2],width:o.brickWidth,height:o.brickHeight})&&e.mouseDown&&n>3*60&&(i.bricks[t][s].isVisible=!i.bricks[t][s].isVisible,i.bricks[t][s].lastClicKTick=i.currentTick)}}function O(i){i.game.end||(i.game.currentTick++,B(i.control,i.game),K(i.game),M(i.game,i.control))}var v=(i=>(i.Bounce="bounce",i))(v||{});class E{constructor(){d(this,"pool",new Map);d(this,"ctx",new AudioContext);d(this,"amountLoaded",0);Object.values(v).map(e=>this.pool.set(e,this.newAudio(e)))}newAudio(e){const t=new Audio;return this.ctx.createMediaElementSource(t).connect(this.ctx.destination),t.src="assets/sounds/"+e+".mp3",t.oncanplay=()=>this.amountLoaded++,t}play(e){this.ctx.state==="suspended"&&this.ctx.resume();const t=this.pool.get(e);t.load(),t.play()}}const z=document.querySelector("#app"),u=document.createElement("canvas");u.width=o.canvasWidth;u.height=o.canvasHeight;z.append(u);let w=T(),a=new R,S=new E;document.addEventListener("keydown",I,!1);document.addEventListener("keyup",U,!1);document.addEventListener("mousemove",a.mouseMoveHandler(u),!1);document.addEventListener("mousedown",()=>a.mouseDown=!0);document.addEventListener("mouseup",()=>a.mouseDown=!1);document.addEventListener("click",()=>a.clicked=!0);function I(i){a.keyDownHandler(i)}function U(i){a.keyUpHandler(i)}const X=u.getContext("2d");function b(){O({control:a,game:w,sound:S}),P(w,X),a.clicked=!1,requestAnimationFrame(b)}b();