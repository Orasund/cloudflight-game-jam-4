var v=Object.defineProperty;var w=(e,t,i)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var d=(e,t,i)=>(w(e,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();const o={canvasWidth:700,canvasHeight:400,paddleHeight:10,paddleWidth:75,ballRadius:10,brickRowCount:11,brickColumnCount:4,brickWidth:50,brickHeight:50,brickPadding:10,brickOffsetTop:30,brickOffsetLeft:30};var u=(e=>(e.Ball="ball",e.Brick1="brick1",e.Brick2="brick2",e.Brick3="brick3",e))(u||{});class k{constructor(){d(this,"pool",new Map);d(this,"amountLoaded",0);Object.values(u).map(t=>this.pool.set(t,this.newImage(t)))}get(t){return this.pool.get(t)}isLoading(){return this.amountLoaded<this.pool.size}newImage(t){const i=new Image;return i.src="assets/images/"+t+".png",i.onload=()=>this.amountLoaded++,i}}class W{constructor(t){d(this,"imagePool",new k);d(this,"ctx");this.ctx=t}image(t){const[i,n]=t.center;return this.ctx.drawImage(this.imagePool.get(t.source),i-t.width/2,n-t.height/2,t.width,t.height),this}circle(t){const[i,n]=t.center;return this.ctx.beginPath(),this.ctx.arc(i,n,t.radius,0,Math.PI*2),this.ctx.fillStyle=t.color,this.ctx.fill(),this.ctx.closePath(),this}rect(t){const[i,n]=t.center;return this.ctx.beginPath(),this.ctx.rect(i-t.width/2,n-t.height/2,t.width,t.height),this.ctx.fillStyle=t.color,this.ctx.fill(),this.ctx.closePath(),this}text(t,i){return this.textWithArgs({pos:i,value:t})}title(t,i){return this.textWithArgs({pos:i,value:t,size:64})}textWithArgs(t){const[i,n]=t.pos,s=t.font?t.font:"Arial",l=t.size?t.size:16,r=t.color?t.color:"#0095DD";return this.ctx.font=l+"px "+s,this.ctx.fillStyle=r,this.ctx.fillText(t.value,i,n),this}}function m(e,t){for(var i=0;i<o.brickColumnCount;i++)for(var n=0;n<o.brickRowCount;n++)e.bricks[i][n].status==1&&t.image({source:u.Brick1,center:[e.bricks[i][n].x+o.brickWidth/2,e.bricks[i][n].y+o.brickHeight/2],width:o.brickWidth,height:o.brickHeight})}function L(e,t){t.clearRect(0,0,o.canvasWidth,o.canvasHeight);const i=new W(t);switch(e.end){case"won":i.title("Game Won",[o.canvasWidth/2-150,o.canvasHeight/2]);return;case"lost":i.title("Game Lost",[o.canvasWidth/2-150,o.canvasHeight/2]);return}m(e,i),i.circle({center:[e.ball.x,e.ball.y],radius:o.ballRadius,color:"#0095DD"}).rect({center:[e.paddle.x+o.paddleWidth/2,o.canvasHeight-o.paddleHeight/2],width:o.paddleWidth,height:o.paddleHeight,color:"#0095DD"}),i.text("Score: "+e.score,[8,20]),i.text("Lives: "+e.lives,[o.canvasWidth-65,20])}class H{constructor(){d(this,"pressed");d(this,"mousePos");d(this,"mouseDown");d(this,"clicked");this.pressed=new Set,this.mousePos=[0,0],this.mouseDown=!1,this.clicked=!1}mouseInArea(t){const[i,n]=this.mousePos,[s,l]=t.center,r=s-t.width/2,b=l-t.height/2,x=s+t.width/2,y=l+t.height/2;return r<=i&&i<=x&&b<=n&&n<=y}keyDownHandler(t){console.log(t.code),t.code=="ArrowRight"||t.code=="KeyD"?this.pressed.add("Right"):t.code=="ArrowLeft"||t.code=="KeyA"?this.pressed.add("Left"):t.code=="ArrowUp"||t.code=="KeyW"?this.pressed.add("Up"):(t.code=="ArrowDown"||t.code=="KeyS")&&this.pressed.add("Down")}keyUpHandler(t){t.code=="ArrowRight"||t.code=="KeyD"?this.pressed.delete("Right"):t.code=="ArrowLeft"||t.code=="KeyA"?this.pressed.delete("Left"):t.code=="ArrowUp"||t.code=="KeyW"?this.pressed.delete("Up"):(t.code=="ArrowDown"||t.code=="KeyS")&&this.pressed.delete("Down")}mouseMoveHandler(t){return i=>{var n=i.clientX-t.offsetLeft,s=i.clientY-t.offsetTop;n>0&&n<t.width&&s>0&&s<t.height&&(this.mousePos=[n,s]),n>0&&n<t.width}}}var a=(e=>(e.Bounce="bounce",e))(a||{});function A(){let e=[];for(var t=0;t<o.brickColumnCount;t++){e[t]=[];for(var i=0;i<o.brickRowCount;i++){var n=i*(o.brickWidth+o.brickPadding)+o.brickOffsetLeft,s=t*(o.brickHeight+o.brickPadding)+o.brickOffsetTop;e[t][i]={x:n,y:s,status:1}}}return{paddle:{x:(o.canvasWidth-o.paddleWidth)/2},bricks:e,score:0,lives:3,ball:{dx:2,dy:-2,x:o.canvasWidth/2,y:o.canvasHeight-30},end:void 0}}function P(e){e.ball.x=o.canvasWidth/2,e.ball.y=o.canvasHeight-30,e.ball.dx=2,e.ball.dy=-2,e.paddle.x=(o.canvasWidth-o.paddleWidth)/2}function C(e){e.end="lost"}function D(e){e.end="won"}function R(e,t){for(var i=0;i<o.brickColumnCount;i++)for(var n=0;n<o.brickRowCount;n++){var s=e.bricks[i][n];s.status==1&&e.ball.x>s.x&&e.ball.x<s.x+o.brickWidth&&e.ball.y>s.y&&e.ball.y<s.y+o.brickHeight&&(e.ball.dy=-e.ball.dy,s.status=0,e.score++,t.play(a.Bounce),e.score==o.brickRowCount*o.brickColumnCount&&D(e))}}function O(e,t){(e.ball.x+e.ball.dx>o.canvasWidth-o.ballRadius||e.ball.x+e.ball.dx<o.ballRadius)&&(e.ball.dx=-e.ball.dx,t.play(a.Bounce)),e.ball.y+e.ball.dy<o.ballRadius?(e.ball.dy=-e.ball.dy,t.play(a.Bounce)):e.ball.y+e.ball.dy>o.canvasHeight-o.ballRadius&&(e.ball.x>e.paddle.x&&e.ball.x<e.paddle.x+o.paddleWidth?(e.ball.dy=-e.ball.dy,t.play(a.Bounce)):(e.lives--,e.lives?P(e):C(e))),e.ball.x+=e.ball.dx,e.ball.y+=e.ball.dy}function B(e,t){e.pressed.size==0?t.paddle.x=e.mousePos[0]-o.paddleWidth/2:e.pressed.has("Right")&&t.paddle.x<o.canvasWidth-o.paddleWidth?t.paddle.x+=7:e.pressed.has("Left")&&t.paddle.x>0&&(t.paddle.x-=7)}function K(e){e.game.end||(B(e.control,e.game),R(e.game,e.sound),O(e.game,e.sound))}class E{constructor(){d(this,"pool",new Map);d(this,"ctx",new AudioContext);d(this,"amountLoaded",0);Object.values(a).map(t=>this.pool.set(t,this.newAudio(t)))}newAudio(t){const i=new Audio;return this.ctx.createMediaElementSource(i).connect(this.ctx.destination),i.src="assets/sounds/"+t+".mp3",i.oncanplay=()=>this.amountLoaded++,i}play(t){this.ctx.state==="suspended"&&this.ctx.resume();const i=this.pool.get(t);i.load(),i.play()}}const S=document.querySelector("#app"),h=document.createElement("canvas");h.width=o.canvasWidth;h.height=o.canvasHeight;S.append(h);let f=A(),c=new H,M=new E;document.addEventListener("keydown",z,!1);document.addEventListener("keyup",U,!1);document.addEventListener("mousemove",c.mouseMoveHandler(h),!1);document.addEventListener("mousedown",()=>c.mouseDown=!0);document.addEventListener("mouseup",()=>c.mouseDown=!1);document.addEventListener("click",()=>c.clicked=!0);function z(e){c.keyDownHandler(e)}function U(e){c.keyUpHandler(e)}const I=h.getContext("2d");function p(){K({control:c,game:f,sound:M}),L(f,I),c.clicked=!1,requestAnimationFrame(p)}p();
