var K=Object.defineProperty;var O=(i,e,t)=>e in i?K(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var l=(i,e,t)=>(O(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(c){if(c.ep)return;c.ep=!0;const o=t(c);fetch(c.href,o)}})();const m=700,H=400,y=50,s={canvasWidth:H,canvasHeight:m,paddleHeight:10,paddleWidth:75,ballRadius:20,brickRowCount:Math.floor(H/y),brickColumnCount:Math.floor(m/y),brickWidth:y,brickHeight:y,brickPadding:0,brickOffsetTop:0,brickOffsetLeft:0,chickensPerCell:5,levelResolution:1,maxPlacedObsticales:6,ballSpeed:1.5,brickRejectForce:4};var a=(i=>(i.Snake="snake",i.Brick1="brick1",i.Brick2="brick2",i.Brick3="brick3",i.BrickInvisible="invisble_brick",i.RoundChicken="roundChicken",i.Lava="lava",i.Chair="chair",i))(a||{});function E(i,e){for(var t=0;t<s.brickColumnCount;t++)for(var n=0;n<s.brickRowCount;n++){let c=a.BrickInvisible;i.bricks[t][n].isVisible==!0&&(c=a.Brick1),i.bricks[t][n].cellType=="goal"&&(c=a.Brick2),i.bricks[t][n].cellType=="lava"&&(c=a.Lava),i.bricks[t][n].cellType=="chair"&&i.bricks[t][n].isVisible==!0&&(c=a.Chair),e.image({source:c,center:[i.bricks[t][n].x+s.brickWidth/2,i.bricks[t][n].y+s.brickHeight/2],width:s.brickWidth,height:s.brickHeight})}}function B(i,e){switch(i.end){case"won":e.title("Game Won",[s.canvasWidth/2,s.canvasHeight/2]),e.textWithArgs({value:"Click to Continue",pos:[s.canvasWidth/2,s.canvasHeight/2+50],center:!0});return;case"lost":e.title("Game Lost",[s.canvasWidth/2,s.canvasHeight/2]),e.textWithArgs({value:"Click to Continue",pos:[s.canvasWidth/2,s.canvasHeight/2+50],center:!0});return;case"finished":e.title("Thanks",[s.canvasWidth/2,s.canvasHeight/2-50]),e.title("for",[s.canvasWidth/2,s.canvasHeight/2]),e.title("playing",[s.canvasWidth/2,s.canvasHeight/2+50]);return}E(i,e),i.placed.length===0&&e.textWithArgs({value:"Click to place",pos:[s.canvasWidth/2,s.canvasHeight-75],size:24,center:!0}),i.snakes.forEach(t=>{t.isVisible&&e.image({source:a.Snake,center:[t.x,t.y],width:s.ballRadius*2,height:s.ballRadius*2})}),i.balls.forEach(t=>{t.isVisible&&e.image({source:a.RoundChicken,center:[t.x,t.y],width:s.ballRadius*2,height:s.ballRadius*2})})}class _{constructor(){l(this,"pressed");l(this,"mousePos");l(this,"mouseDown");l(this,"clicked");this.pressed=new Set,this.mousePos=[0,0],this.mouseDown=!1,this.clicked=!1}mouseInArea(e){const[t,n]=this.mousePos,[c,o]=e.center,r=c-e.width/2,f=o-e.height/2,p=c+e.width/2,b=o+e.height/2;return r<=t&&t<=p&&f<=n&&n<=b}keyDownHandler(e){console.log(e.code),e.code=="ArrowRight"||e.code=="KeyD"?this.pressed.add("Right"):e.code=="ArrowLeft"||e.code=="KeyA"?this.pressed.add("Left"):e.code=="ArrowUp"||e.code=="KeyW"?this.pressed.add("Up"):(e.code=="ArrowDown"||e.code=="KeyS")&&this.pressed.add("Down")}keyUpHandler(e){e.code=="ArrowRight"||e.code=="KeyD"?this.pressed.delete("Right"):e.code=="ArrowLeft"||e.code=="KeyA"?this.pressed.delete("Left"):e.code=="ArrowUp"||e.code=="KeyW"?this.pressed.delete("Up"):(e.code=="ArrowDown"||e.code=="KeyS")&&this.pressed.delete("Down")}mouseMoveHandler(e){return t=>{var n=t.clientX-e.offsetLeft,c=t.clientY-e.offsetTop;n>0&&n<e.width&&c>0&&c<e.height&&(this.mousePos=[n,c])}}touchMoveHandler(e){return t=>{var n=t.touches[0].clientX-e.offsetLeft,c=t.touches[0].clientY-e.offsetTop;n>0&&n<e.width&&c>0&&c<e.height&&(this.mousePos=[n,c])}}}var h=(i=>(i.Collide="collide",i.SnakeCollide="snakeBounce",i.Win="win",i.Die="die",i.Chicken1="chicken1",i.Chicken2="chicken2",i.Chicken3="chicken3",i.Song="song",i))(h||{});function X(i){return[Y,z,U,q,G,N,S,F,I,j,J][i]}const Y=["🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐤🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱"],z=["🧱🧱🧱🧱🧱🔲🔲🧱","🧱🧱🧱🧱🧱🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🧱🧱🧱🧱🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🧱🧱🧱🧱🔲🔲🧱","🧱🔲🐤🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🧱🧱🧱🧱🧱🧱🧱"],U=["🧱🔲🧱🧱🧱🧱🔲🧱","🧱🔲🧱🧱🧱🧱🔲🧱","🧱🔲🧱🧱🧱🧱🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐤🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱"],F=["🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐤🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🧱🧱🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🌋🌋🌋🌋🌋🌋🌋🌋","🌋🌋🌋🌋🌋🌋🌋🌋","🌋🌋🌋🌋🌋🌋🌋🌋"],I=["🔲🔲🔲🔲🔲🔲🔲🔲","🌋🔲🔲🔲🔲🔲🔲🌋","🌋🔲🔲🔲🔲🔲🔲🌋","🌋🔲🔲🔲🔲🔲🔲🌋","🔲🔲🔲🔲🔲🔲🔲🔲","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🐤🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱"],j=["🌋🔲🔲🔲🔲🔲🔲🔲","🌋🔲🔲🔲🔲🔲🔲🔲","🌋🔲🔲🔲🔲🔲🔲🔲","🌋🔲🔲🔲🔲🔲🔲🔲","🌋🔲🔲🔲🔲🔲🔲🔲","🧱🔲🔲🔲🧱🧱🧱🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🧱🧱🧱🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🐤🔲🔲🔲🔲🔲🧱","🧱🧱🧱🧱🧱🧱🧱🧱"],q=["🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🧱🔲🔲🧱🧱🧱🧱🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐤🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🧱🧱🧱🧱🔲🔲🧱","🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🐍🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲"],G=["🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🧱🧱🧱🔲🔲🧱🧱🧱","🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🐍🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🧱🔲🔲🧱🧱🧱🧱🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐤🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🧱🧱🧱🧱🧱🧱🧱"],N=["🧱🔲🧱🔲🔲🧱🔲🧱","🧱🔲🧱🔲🔲🧱🔲🧱","🧱🔲🧱🔲🔲🧱🔲🧱","🧱🔲🧱🔲🔲🧱🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐍🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🧱🧱🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐤🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🧱🧱🧱🧱🧱🧱🧱"],S=["🧱🔲🧱🧱🧱🔲🔲🧱","🧱🐍🧱🧱🧱🔲🔲🧱","🧱🔲🧱🧱🧱🔲🔲🧱","🧱🔲🧱🧱🧱🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐤🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🧱🧱🧱🔲🧱","🧱🔲🔲🧱🧱🧱🔲🧱","🧱🔲🔲🧱🧱🧱🐍🧱","🧱🔲🔲🧱🧱🧱🔲🧱"],J=["🧱🧱🧱🔲🔲🧱🧱🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐍🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐤🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🧱🧱🧱🧱🧱🧱🧱"];function Q(i,e,t){const[n,c]=e;switch(i){case"🌋":t.bricks[c][n]={x:n*s.brickWidth,y:c*s.brickHeight,isVisible:!0,lastClicKTick:0,cellType:"lava"};return;case"🐍":t.snakes.push(te([n*s.brickWidth,c*s.brickHeight])),t.bricks[c][n]={x:n*s.brickWidth,y:c*s.brickHeight,isVisible:!1,lastClicKTick:0,cellType:"chair"};return;case"🐤":for(var o=0;o<s.chickensPerCell;o++)t.balls.push(ee([n*s.brickWidth,c*s.brickHeight]));t.bricks[c][n]={x:n*s.brickWidth,y:c*s.brickHeight,isVisible:!1,lastClicKTick:0,cellType:"chair"};return;case"🧱":t.bricks[c][n]={x:n*s.brickWidth,y:c*s.brickHeight,isVisible:!0,lastClicKTick:0,cellType:"obstacle"};return;case"🏁":t.bricks[c][n]={x:n*s.brickWidth,y:c*s.brickHeight,isVisible:!0,lastClicKTick:0,cellType:"goal"};return;default:t.bricks[c][n]={x:n*s.brickWidth,y:c*s.brickHeight,isVisible:!1,lastClicKTick:0,cellType:"chair"};return}}function Z(i,e){const t=X(i);return t?t.map(n=>Array.from(n).flatMap(c=>Array(s.levelResolution).fill(c))).flatMap(n=>Array(s.levelResolution).fill(n)).forEach((n,c)=>{n.forEach((o,r)=>{Q(o,[r,c],e)})}):e.end="finished",e}function k(i){const[e,t]=i,n=C(i);return[e/n,t/n]}function C(i){const[e,t]=i;return Math.sqrt(e*e+t*t)}function A(i,e){const[t,n]=i;return[t+(Math.random()*2-1)*e,n+(Math.random()*2-1)*e]}function W(i,e){const[t,n]=i;return[t*e,n*e]}function L(i,e){const[t,n]=i,[c,o]=e;return[t+c,n+o]}function R(i,e){const[t,n]=i,[c,o]=e.pos;return t>c-e.width/2&&t<c+e.width/2&&n>o-e.height/2&&n<o+e.height/2}function w(i){const e={paddle:{x:(s.canvasWidth-s.paddleWidth)/2},bricks:$(),score:0,lives:3,balls:[],snakes:[],end:void 0,currentTick:0,placed:[],level:i};return Z(i,e)}function $(){let i=[];for(var e=0;e<s.brickColumnCount;e++){i[e]=[];for(var t=0;t<s.brickRowCount;t++){var n=t*(s.brickWidth+s.brickPadding)+s.brickOffsetLeft,c=e*(s.brickHeight+s.brickPadding)+s.brickOffsetTop;let o="obstacle";e==0&&t<5&&(o="goal"),i[e][t]={x:n,y:c,isVisible:!1,lastClicKTick:0,cellType:o}}}return i}function ee(i){const[e,t]=i,[n,c]=W(k(A([0,0],1)),s.ballSpeed);return{dx:n,dy:c,x:e,y:t,isVisible:!0}}function te(i){const[e,t]=i,[n,c]=k([2+Math.random(),-2+Math.random()]);return{dx:n,dy:c,x:e,y:t,isVisible:!0}}function ie(i){return i.balls.filter(e=>e.isVisible).length==0}function T(i,e){i.end="lost",e.play(h.Die)}function se(i,e){console.log("won"),i.end="won",e.play(h.Win)}function P(i,e,t,n){for(var c=0;c<s.brickColumnCount;c++)for(var o=0;o<s.brickRowCount;o++){var r=i.bricks[c][o];if(t.x>r.x-s.ballRadius&&t.x<r.x+s.brickWidth+s.ballRadius&&t.y>r.y-s.ballRadius&&t.y<r.y+s.brickHeight+s.ballRadius&&(r.cellType=="goal"&&!n&&(t.isVisible=!1),r.cellType=="lava"&&!n&&T(i,e),r.isVisible==!0)){const f=r.x+s.brickWidth/2,p=r.y+s.brickHeight/2,[b,M]=A(W(k(L(oe([f,p],i),k([t.x-f,t.y-p]))),s.ballSpeed),.1);if(t.dx=b,t.dy=M,n)e.play(h.SnakeCollide);else{const x=Math.random();x<.85?e.play(h.Collide):x<.9?e.play(h.Chicken1):x<.95?e.play(h.Chicken2):e.play(h.Chicken3)}}}}function ne(i,e,t){i.snakes.forEach(n=>{if(!n.isVisible)return;const c=[e.x-n.x,e.y-n.y];C(c)<2*s.ballRadius&&T(i,t)})}function ce(i,e){e.balls.forEach(t=>{t.isVisible&&(V(t,!1),P(e,i,t,!1),ne(e,t,i),t.x+=t.dx,t.y+=t.dy)})}function V(i,e){(i.x+i.dx>s.canvasWidth-s.ballRadius||i.x+i.dx<s.ballRadius)&&(e?i.dx=-i.dx:i.isVisible=!1),(i.y+i.dy>s.canvasHeight-s.ballRadius||i.y+i.dy<s.ballRadius)&&(e?i.dy=-i.dy:i.isVisible=!1)}function oe(i,e){const[t,n]=i;return e.placed.map(c=>{const o=e.bricks[c.y][c.x],r=[t-o.x,n-o.y];return W(k(r),s.brickRejectForce/C(r))}).reduce(L,[0,0])}function re(i,e){i.pressed.size==0?e.paddle.x=i.mousePos[0]-s.paddleWidth/2:i.pressed.has("Right")&&e.paddle.x<s.canvasWidth-s.paddleWidth?e.paddle.x+=7:i.pressed.has("Left")&&e.paddle.x>0&&(e.paddle.x-=7)}function le(i,e){i.snakes.forEach(t=>{t.isVisible&&(V(t,!0),P(i,e,t,!0),t.x+=t.dx,t.y+=t.dy)})}function de(i,e){for(var t=0;t<s.brickColumnCount;t++)for(var n=0;n<s.brickRowCount;n++){if(i.bricks[t][n].isVisible)continue;const c=i.bricks[t][n].x+s.brickWidth/2,o=i.bricks[t][n].y+s.brickHeight/2;if(e.mouseInArea({center:[c,o],width:s.brickWidth,height:s.brickHeight})&&he([c,o],s.brickWidth,s.brickHeight,i)&&e.mouseDown&&i.currentTick>30&&(i.bricks[t][n].isVisible=!0,i.placed.push({y:t,x:n}),i.placed.length>s.maxPlacedObsticales)){const r=i.placed.shift();i.bricks[r.y][r.x].isVisible=!1}}}function he(i,e,t,n){return n.balls.filter(c=>R([c.x,c.y],{pos:i,width:e+s.ballRadius*2,height:t+s.ballRadius*2})).length==0&&n.snakes.filter(c=>R([c.x,c.y],{pos:i,width:e+s.ballRadius*2,height:t+s.ballRadius*2})).length==0}let g=!1;function ae(i,e,t){return i.mouseDown&&!g&&(e.playSong(),g=!0),t.end?(t.end==="lost"&&i.mouseDown?t=w(t.level):t.end==="won"&&i.mouseDown&&(t=w(t.level+1)),t):(t.currentTick++,re(i,t),ce(e,t),le(t,e),de(t,i),ie(t)&&se(t,e),t)}class ue{constructor(){l(this,"pool",new Map);l(this,"ctx",new AudioContext);l(this,"amountLoaded",0);Object.values(h).map(e=>this.pool.set(e,this.newAudio(e)))}newAudio(e){const t=new Audio;return this.ctx.createMediaElementSource(t).connect(this.ctx.destination),t.src="assets/sounds/"+e+".mp3",t.oncanplay=()=>this.amountLoaded++,t}play(e){this.ctx.state==="suspended"&&this.ctx.resume();const t=this.pool.get(e);t.load(),t.play()}playSong(){const e=this.pool.get(h.Song);e.load(),e.play()}}class fe{constructor(){l(this,"pool",new Map);l(this,"amountLoaded",0);Object.values(a).map(e=>this.pool.set(e,this.newImage(e)))}get(e){return this.pool.get(e)}isLoading(){return this.amountLoaded<this.pool.size}newImage(e){const t=new Image;return t.src="assets/images/"+e+".png",t.onload=()=>this.amountLoaded++,t}}class ke{constructor(e){l(this,"imagePool",new fe);l(this,"ctx");this.ctx=e}image(e){const[t,n]=e.center;return this.ctx.drawImage(this.imagePool.get(e.source),t-e.width/2,n-e.height/2,e.width,e.height),this}circle(e){const[t,n]=e.center;return this.ctx.beginPath(),this.ctx.arc(t,n,e.radius,0,Math.PI*2),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.closePath(),this}rect(e){const[t,n]=e.center;return this.ctx.beginPath(),this.ctx.rect(t-e.width/2,n-e.height/2,e.width,e.height),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.closePath(),this}text(e,t){return this.textWithArgs({pos:t,value:e})}title(e,t){return this.textWithArgs({pos:t,value:e,size:64,center:!0})}textWithArgs(e){const[t,n]=e.pos,c=e.font??"Arial",o=e.size??16,r=e.color??"#000000",f=e.center??!1;return this.ctx.font=o+"px "+c,this.ctx.fillStyle=r,f&&(this.ctx.textAlign="center"),this.ctx.fillText(e.value,t,n),f&&(this.ctx.textAlign="left"),this}}const pe=document.querySelector("#app"),u=document.createElement("canvas");u.width=s.canvasWidth;u.height=s.canvasHeight;pe.append(u);let v=w(0),d=new _,ye=new ue;document.addEventListener("keydown",be,!1);document.addEventListener("keyup",xe,!1);document.addEventListener("mousemove",d.mouseMoveHandler(u),!1);document.addEventListener("mousedown",()=>d.mouseDown=!0);document.addEventListener("mouseup",()=>d.mouseDown=!1);document.addEventListener("click",()=>d.clicked=!0);u.ontouchmove=d.touchMoveHandler(u);u.ontouchstart=()=>d.mouseDown=!0;u.ontouchend=()=>d.mouseDown=!1;function be(i){d.keyDownHandler(i)}function xe(i){d.keyUpHandler(i)}const ve=u.getContext("2d"),we=new ke(ve);function D(){v=ae(d,ye,v),B(v,we),d.clicked=!1,requestAnimationFrame(D)}D();
