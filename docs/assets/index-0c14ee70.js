var _=Object.defineProperty;var B=(i,e,t)=>e in i?_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var d=(i,e,t)=>(B(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const r of c)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(c){const r={};return c.integrity&&(r.integrity=c.integrity),c.referrerPolicy&&(r.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?r.credentials="include":c.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(c){if(c.ep)return;c.ep=!0;const r=t(c);fetch(c.href,r)}})();const m=700,R=400,y=50,n={canvasWidth:R,canvasHeight:m,paddleHeight:10,paddleWidth:75,ballRadius:20,brickRowCount:Math.floor(R/y),brickColumnCount:Math.floor(m/y),brickWidth:y,brickHeight:y,brickPadding:0,brickOffsetTop:0,brickOffsetLeft:0,chickensPerCell:5,levelResolution:1,maxPlacedObsticales:6,ballSpeed:1.5,brickRejectForce:4};var l=(i=>(i.Snake="snake",i.Brick1="brick1",i.Brick2="brick2",i.Brick3="brick3",i.BrickInvisible="invisble_brick",i.RoundChicken="roundChicken",i.Lava="lava",i.Furniture1="furniture1",i.Furniture2="furniture2",i.Furniture3="furniture3",i.Furniture4="furniture4",i))(l||{});let w=0,C=!1,T="Your time 0";function Y(){C||(w+=1),T="Your time "+w}setInterval(Y,1e3);function X(){w=0,C=!1}function z(){C=!0}function G(i,e){var c;for(var t=0;t<n.brickColumnCount;t++)for(var s=0;s<n.brickRowCount;s++){let r=l.BrickInvisible;i.bricks[t][s].isVisible==!0&&(r=l.Brick1),i.bricks[t][s].cellType=="goal"&&(r=l.Brick2),i.bricks[t][s].cellType=="lava"&&(r=l.Lava),i.bricks[t][s].cellType=="chair"&&i.bricks[t][s].isVisible==!0&&(r=((c=i.placed.find(o=>o.y===t&&o.x===s))==null?void 0:c.image)??l.Furniture1),e.image({source:r,center:[i.bricks[t][s].x+n.brickWidth/2,i.bricks[t][s].y+n.brickHeight/2],width:n.brickWidth,height:n.brickHeight})}}function U(i,e){switch(i.end&&e.rect({center:[n.canvasWidth/2,n.canvasHeight/2],width:n.canvasWidth,height:n.canvasHeight,color:i.end==="lost"?"#DF603E":"#FFDE59"}),i.end){case"won":e.title("Level Won",[n.canvasWidth/2,n.canvasHeight/2]),e.textWithArgs({value:"Click to Continue",pos:[n.canvasWidth/2,n.canvasHeight/2+50],center:!0});return;case"lost":e.title("Game Lost",[n.canvasWidth/2,n.canvasHeight/2]),e.textWithArgs({value:"Click to Continue",pos:[n.canvasWidth/2,n.canvasHeight/2+50],center:!0});return;case"newGame":e.title("Help the",[n.canvasWidth/2,n.canvasHeight/2-150]),e.title("Chickens",[n.canvasWidth/2,n.canvasHeight/2-75]),e.title("Escape!",[n.canvasWidth/2,n.canvasHeight/2]),e.textWithArgs({value:"Click to Continue",pos:[n.canvasWidth/2,n.canvasHeight/2+50],center:!0});return;case"finished":e.title("Thanks",[n.canvasWidth/2,n.canvasHeight/2-50]),e.title("for",[n.canvasWidth/2,n.canvasHeight/2]),e.title("playing",[n.canvasWidth/2,n.canvasHeight/2+50]);return}G(i,e),i.placed.length===0&&e.textWithArgs({value:"Click to place",pos:[n.canvasWidth/2,n.canvasHeight-75],size:24,center:!0}),i.snakes.forEach(t=>{t.isVisible&&e.image({source:l.Snake,center:[t.x,t.y],width:n.ballRadius*2,height:n.ballRadius*2})}),i.balls.forEach(t=>{t.isVisible&&e.image({source:l.RoundChicken,center:[t.x,t.y],width:n.ballRadius*2,height:n.ballRadius*2})}),e.rect({center:[20,n.canvasHeight-20],width:170,height:17,color:"white"}),e.textWithArgs({value:T,pos:[5,n.canvasHeight-15],color:"black"})}class j{constructor(){d(this,"pressed");d(this,"mousePos");d(this,"mouseDown");d(this,"clicked");this.pressed=new Set,this.mousePos=[0,0],this.mouseDown=!1,this.clicked=!1}mouseInArea(e){const[t,s]=this.mousePos,[c,r]=e.center,o=c-e.width/2,f=r-e.height/2,p=c+e.width/2,b=r+e.height/2;return o<=t&&t<=p&&f<=s&&s<=b}keyDownHandler(e){console.log(e.code),e.code=="ArrowRight"||e.code=="KeyD"?this.pressed.add("Right"):e.code=="ArrowLeft"||e.code=="KeyA"?this.pressed.add("Left"):e.code=="ArrowUp"||e.code=="KeyW"?this.pressed.add("Up"):(e.code=="ArrowDown"||e.code=="KeyS")&&this.pressed.add("Down")}keyUpHandler(e){e.code=="ArrowRight"||e.code=="KeyD"?this.pressed.delete("Right"):e.code=="ArrowLeft"||e.code=="KeyA"?this.pressed.delete("Left"):e.code=="ArrowUp"||e.code=="KeyW"?this.pressed.delete("Up"):(e.code=="ArrowDown"||e.code=="KeyS")&&this.pressed.delete("Down")}mouseMoveHandler(e){return t=>{var s=t.clientX-e.offsetLeft,c=t.clientY-e.offsetTop;s>0&&s<e.width&&c>0&&c<e.height&&(this.mousePos=[s,c])}}touchMoveHandler(e){return t=>{var s=t.touches[0].clientX-e.offsetLeft,c=t.touches[0].clientY-e.offsetTop;s>0&&s<e.width&&c>0&&c<e.height&&(this.mousePos=[s,c])}}}var a=(i=>(i.Collide="collide",i.SnakeCollide="snakeBounce",i.Win="win",i.Die="die",i.Chicken1="chicken1",i.Chicken2="chicken2",i.Chicken3="chicken3",i.Song="song",i))(a||{});function q(i){return[I,N,S,$,ee,te,ie,J,Q,Z,ne][i]}const I=["🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🪑🔲🔲🔲🔲🔲🧱","🧱🪑🔲🔲🔲🔲🪑🧱","🧱🔲🔲🔲🐤🔲🪑🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🪑🔲🔲🔲🔲🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱"],N=["🧱🧱🧱🧱🧱🔲🔲🧱","🧱🧱🧱🧱🧱🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🪑🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🧱🧱🧱🧱🧱","🧱🔲🔲🔲🔲🪑🔲🧱","🧱🪑🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🧱🧱🧱🧱🔲🔲🧱","🧱🔲🐤🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🪑🔲🔲🔲🪑🧱","🧱🧱🧱🧱🧱🧱🧱🧱"],S=["🧱🔲🧱🧱🧱🧱🔲🧱","🧱🔲🧱🧱🧱🧱🔲🧱","🧱🔲🧱🧱🧱🧱🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🪑🔲🔲🐤🔲🔲🧱","🧱🪑🔲🔲🔲🔲🪑🧱","🧱🔲🔲🪑🔲🔲🪑🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱"],J=["🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🪑🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐤🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🪑🪑🧱🧱🪑🪑🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🌋🌋🌋🌋🌋🌋🌋🌋","🌋🌋🌋🌋🌋🌋🌋🌋","🌋🌋🌋🌋🌋🌋🌋🌋"],Q=["🔲🔲🔲🔲🔲🔲🔲🔲","🌋🔲🔲🔲🔲🔲🔲🌋","🌋🔲🔲🔲🔲🔲🔲🌋","🌋🔲🔲🔲🔲🔲🔲🌋","🔲🔲🔲🔲🔲🔲🔲🔲","🧱🧱🧱🪑🪑🧱🧱🧱","🧱🧱🧱🪑🪑🧱🧱🧱","🧱🧱🧱🪑🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🐤🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🔲🔲🧱🧱🧱","🧱🧱🧱🧱🧱🧱🧱🧱"],Z=["🌋🔲🔲🔲🔲🔲🔲🔲","🌋🔲🔲🔲🔲🔲🔲🔲","🌋🔲🔲🔲🔲🔲🔲🔲","🌋🔲🔲🔲🔲🔲🔲🔲","🌋🔲🔲🔲🔲🔲🔲🔲","🧱🔲🔲🔲🧱🧱🧱🧱","🧱🔲🔲🔲🔲🪑🔲🧱","🧱🪑🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🧱🧱🧱🪑🔲🔲🧱","🧱🔲🔲🔲🪑🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🐤🔲🔲🔲🔲🪑🧱","🧱🧱🧱🧱🧱🧱🧱🧱"],$=["🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🧱🔲🔲🧱🧱🧱🧱🧱","🧱🔲🔲🔲🔲🔲🪑🧱","🧱🔲🔲🔲🐤🔲🪑🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🪑🪑🪑🔲🔲🔲🧱","🧱🧱🧱🧱🧱🔲🔲🧱","🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🐍🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲"],ee=["🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🧱🧱🧱🔲🔲🧱🧱🧱","🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🔲🔲🔲🐍🔲🔲🔲🔲","🔲🔲🔲🔲🔲🔲🔲🔲","🧱🔲🔲🧱🧱🧱🧱🧱","🧱🔲🔲🔲🔲🔲🪑🧱","🧱🔲🔲🔲🐤🔲🪑🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🪑🪑🪑🔲🔲🔲🧱","🧱🧱🧱🧱🧱🧱🧱🧱"],te=["🧱🔲🧱🔲🔲🧱🔲🧱","🧱🔲🧱🔲🔲🧱🔲🧱","🧱🔲🧱🔲🔲🧱🔲🧱","🧱🔲🧱🔲🔲🧱🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐍🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🪑🧱","🧱🔲🪑🧱🧱🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐤🔲🔲🧱","🧱🔲🔲🔲🔲🔲🪑🧱","🧱🔲🪑🔲🔲🔲🪑🧱","🧱🧱🧱🧱🧱🧱🧱🧱"],ie=["🧱🔲🧱🧱🧱🔲🔲🧱","🧱🐍🧱🧱🧱🔲🔲🧱","🧱🔲🧱🧱🧱🔲🔲🧱","🧱🔲🧱🧱🧱🔲🔲🧱","🧱🔲🔲🔲🪑🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐤🔲🔲🧱","🧱🪑🔲🔲🔲🔲🔲🧱","🧱🪑🔲🔲🔲🔲🔲🧱","🧱🪑🔲🔲🔲🪑🔲🧱","🧱🔲🔲🧱🧱🧱🔲🧱","🧱🔲🔲🧱🧱🧱🔲🧱","🧱🔲🔲🧱🧱🧱🐍🧱","🧱🔲🔲🧱🧱🧱🔲🧱"],ne=["🧱🧱🧱🔲🔲🧱🧱🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🐍🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🪑🔲🔲🔲🔲🔲🧱","🧱🪑🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🔲🔲🔲🔲🔲🪑🧱","🧱🔲🔲🔲🔲🔲🪑🧱","🧱🔲🔲🔲🔲🔲🪑🧱","🧱🔲🔲🔲🐤🔲🔲🧱","🧱🔲🔲🔲🔲🔲🔲🧱","🧱🧱🧱🧱🧱🧱🧱🧱"];function se(i,e,t){const[s,c]=e;switch(i){case"🪑":t.bricks[c][s]={x:s*n.brickWidth,y:c*n.brickHeight,isVisible:!0,lastClicKTick:0,cellType:"chair"},D(e,t),console.log(t.placed);return;case"🌋":t.bricks[c][s]={x:s*n.brickWidth,y:c*n.brickHeight,isVisible:!0,lastClicKTick:0,cellType:"lava"};return;case"🐍":t.snakes.push(le([s*n.brickWidth,c*n.brickHeight])),t.bricks[c][s]={x:s*n.brickWidth,y:c*n.brickHeight,isVisible:!1,lastClicKTick:0,cellType:"chair"};return;case"🐤":for(var r=0;r<n.chickensPerCell;r++)t.balls.push(oe([s*n.brickWidth,c*n.brickHeight]));t.bricks[c][s]={x:s*n.brickWidth,y:c*n.brickHeight,isVisible:!1,lastClicKTick:0,cellType:"chair"};return;case"🧱":t.bricks[c][s]={x:s*n.brickWidth,y:c*n.brickHeight,isVisible:!0,lastClicKTick:0,cellType:"obstacle"};return;case"🏁":t.bricks[c][s]={x:s*n.brickWidth,y:c*n.brickHeight,isVisible:!0,lastClicKTick:0,cellType:"goal"};return;default:t.bricks[c][s]={x:s*n.brickWidth,y:c*n.brickHeight,isVisible:!1,lastClicKTick:0,cellType:"chair"};return}}function ce(i,e){const t=q(i);return t?t.map(s=>Array.from(s).flatMap(c=>Array(n.levelResolution).fill(c))).flatMap(s=>Array(n.levelResolution).fill(s)).forEach((s,c)=>{s.forEach((r,o)=>{se(r,[o,c],e)})}):e.end="finished",e}function k(i){const[e,t]=i,s=H(i);return[e/s,t/s]}function H(i){const[e,t]=i;return Math.sqrt(e*e+t*t)}function V(i,e){const[t,s]=i;return[t+(Math.random()*2-1)*e,s+(Math.random()*2-1)*e]}function g(i,e){const[t,s]=i;return[t*e,s*e]}function P(i,e){const[t,s]=i,[c,r]=e;return[t+c,s+r]}function A(i,e){const[t,s]=i,[c,r]=e.pos;return t>c-e.width/2&&t<c+e.width/2&&s>r-e.height/2&&s<r+e.height/2}function W(i){const e={paddle:{x:(n.canvasWidth-n.paddleWidth)/2},bricks:re(),score:0,lives:3,balls:[],snakes:[],end:"newGame",currentTick:0,placed:[],level:i};return ce(i,e)}function re(){let i=[];for(var e=0;e<n.brickColumnCount;e++){i[e]=[];for(var t=0;t<n.brickRowCount;t++){var s=t*(n.brickWidth+n.brickPadding)+n.brickOffsetLeft,c=e*(n.brickHeight+n.brickPadding)+n.brickOffsetTop;let r="obstacle";e==0&&t<5&&(r="goal"),i[e][t]={x:s,y:c,isVisible:!1,lastClicKTick:0,cellType:r}}}return i}function oe(i){const[e,t]=i,[s,c]=g(k(V([0,0],1)),n.ballSpeed);return{dx:s,dy:c,x:e,y:t,isVisible:!0}}function D(i,e){const[t,s]=i,c=Math.floor(Math.random()*4);let r;switch(c){case 0:r=l.Furniture1;break;case 1:r=l.Furniture2;break;case 2:r=l.Furniture3;break;default:r=l.Furniture4;break}if(e.placed.push({y:s,x:t,image:r}),e.placed.length>n.maxPlacedObsticales){const o=e.placed.shift();e.bricks[o.y][o.x].isVisible=!1}}function le(i){const[e,t]=i,[s,c]=k([2+Math.random(),-2+Math.random()]);return{dx:s,dy:c,x:e,y:t,isVisible:!0}}function de(i){return i.balls.filter(e=>e.isVisible).length==0}function M(i,e){i.end="lost",e.play(a.Die)}function he(i,e){console.log("won"),i.end="won",e.play(a.Win)}function E(i,e,t,s){for(var c=0;c<n.brickColumnCount;c++)for(var r=0;r<n.brickRowCount;r++){var o=i.bricks[c][r];if(t.x>o.x-n.ballRadius&&t.x<o.x+n.brickWidth+n.ballRadius&&t.y>o.y-n.ballRadius&&t.y<o.y+n.brickHeight+n.ballRadius&&(o.cellType=="goal"&&!s&&(t.isVisible=!1),o.cellType=="lava"&&!s&&M(i,e),o.isVisible==!0)){const f=o.x+n.brickWidth/2,p=o.y+n.brickHeight/2,[b,O]=V(g(k(P(fe([f,p],i),k([t.x-f,t.y-p]))),n.ballSpeed),.1);if(t.dx=b,t.dy=O,s)e.play(a.SnakeCollide);else{const x=Math.random();x<.85?e.play(a.Collide):x<.9?e.play(a.Chicken1):x<.95?e.play(a.Chicken2):e.play(a.Chicken3)}}}}function ae(i,e,t){i.snakes.forEach(s=>{if(!s.isVisible)return;const c=[e.x-s.x,e.y-s.y];H(c)<2*n.ballRadius&&M(i,t)})}function ue(i,e){e.balls.forEach(t=>{t.isVisible&&(K(t,!1),E(e,i,t,!1),ae(e,t,i),t.x+=t.dx,t.y+=t.dy)})}function K(i,e){(i.x+i.dx>n.canvasWidth-n.ballRadius||i.x+i.dx<n.ballRadius)&&(e?i.dx=-i.dx:i.isVisible=!1),(i.y+i.dy>n.canvasHeight-n.ballRadius||i.y+i.dy<n.ballRadius)&&(e?i.dy=-i.dy:i.isVisible=!1)}function fe(i,e){const[t,s]=i;return e.placed.map(c=>{const r=e.bricks[c.y][c.x],o=[t-r.x,s-r.y];return g(k(o),n.brickRejectForce/H(o))}).reduce(P,[0,0])}function ke(i,e){i.pressed.size==0?e.paddle.x=i.mousePos[0]-n.paddleWidth/2:i.pressed.has("Right")&&e.paddle.x<n.canvasWidth-n.paddleWidth?e.paddle.x+=7:i.pressed.has("Left")&&e.paddle.x>0&&(e.paddle.x-=7)}function pe(i,e){i.snakes.forEach(t=>{t.isVisible&&(K(t,!0),E(i,e,t,!0),t.x+=t.dx,t.y+=t.dy)})}function ye(i,e){for(var t=0;t<n.brickColumnCount;t++)for(var s=0;s<n.brickRowCount;s++){if(i.bricks[t][s].isVisible)continue;const c=i.bricks[t][s].x+n.brickWidth/2,r=i.bricks[t][s].y+n.brickHeight/2;e.mouseInArea({center:[c,r],width:n.brickWidth,height:n.brickHeight})&&be([c,r],n.brickWidth,n.brickHeight,i)&&e.mouseDown&&i.currentTick>30&&(i.bricks[t][s].isVisible=!0,D([s,t],i))}}function be(i,e,t,s){return s.balls.filter(c=>A([c.x,c.y],{pos:i,width:e+n.ballRadius*2,height:t+n.ballRadius*2})).length==0&&s.snakes.filter(c=>A([c.x,c.y],{pos:i,width:e+n.ballRadius*2,height:t+n.ballRadius*2})).length==0}let L=!1;function xe(i,e,t){return i.mouseDown&&!L&&(e.playSong(),L=!0),t.end?(z(),t.end==="lost"&&i.mouseDown?t=W(t.level):t.end==="won"&&i.mouseDown?(t=W(t.level+1),X()):t.end==="newGame"&&i.mouseDown&&(t.end=void 0),t):(t.currentTick++,ke(i,t),ue(e,t),pe(t,e),ye(t,i),de(t)&&he(t,e),t)}class ve{constructor(){d(this,"pool",new Map);d(this,"ctx",new AudioContext);d(this,"amountLoaded",0);Object.values(a).map(e=>this.pool.set(e,this.newAudio(e)))}newAudio(e){const t=new Audio;return this.ctx.createMediaElementSource(t).connect(this.ctx.destination),t.src="assets/sounds/"+e+".mp3",t.oncanplay=()=>this.amountLoaded++,t}play(e){this.ctx.state==="suspended"&&this.ctx.resume();const t=this.pool.get(e);t.load(),t.play()}playSong(){const e=this.pool.get(a.Song);e.load(),e.play()}}class we{constructor(){d(this,"pool",new Map);d(this,"amountLoaded",0);Object.values(l).map(e=>this.pool.set(e,this.newImage(e)))}get(e){return this.pool.get(e)}isLoading(){return this.amountLoaded<this.pool.size}newImage(e){const t=new Image;return t.src="assets/images/"+e+".png",t.onload=()=>this.amountLoaded++,t}}class We{constructor(e){d(this,"imagePool",new we);d(this,"ctx");this.ctx=e}image(e){const[t,s]=e.center;return this.ctx.drawImage(this.imagePool.get(e.source),t-e.width/2,s-e.height/2,e.width,e.height),this}circle(e){const[t,s]=e.center;return this.ctx.beginPath(),this.ctx.arc(t,s,e.radius,0,Math.PI*2),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.closePath(),this}rect(e){const[t,s]=e.center;return this.ctx.beginPath(),this.ctx.rect(t-e.width/2,s-e.height/2,e.width,e.height),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.closePath(),this}text(e,t){return this.textWithArgs({pos:t,value:e})}title(e,t){return this.textWithArgs({pos:t,value:e,size:64,center:!0})}textWithArgs(e){const[t,s]=e.pos,c=e.font??"Arial",r=e.size??16,o=e.color??"#000000",f=e.center??!1;return this.ctx.font=r+"px "+c,this.ctx.fillStyle=o,f&&(this.ctx.textAlign="center"),this.ctx.fillText(e.value,t,s),f&&(this.ctx.textAlign="left"),this}}const Ce=document.querySelector("#app"),u=document.createElement("canvas");u.width=n.canvasWidth;u.height=n.canvasHeight;Ce.append(u);let v=W(0),h=new j,He=new ve;document.addEventListener("keydown",ge,!1);document.addEventListener("keyup",me,!1);document.addEventListener("mousemove",h.mouseMoveHandler(u),!1);document.addEventListener("mousedown",()=>h.mouseDown=!0);document.addEventListener("mouseup",()=>h.mouseDown=!1);document.addEventListener("click",()=>h.clicked=!0);u.ontouchmove=h.touchMoveHandler(u);u.ontouchstart=()=>h.mouseDown=!0;u.ontouchend=()=>h.mouseDown=!1;function ge(i){h.keyDownHandler(i)}function me(i){h.keyUpHandler(i)}const Re=u.getContext("2d"),Ae=new We(Re);function F(){v=xe(h,He,v),U(v,Ae),h.clicked=!1,requestAnimationFrame(F)}F();