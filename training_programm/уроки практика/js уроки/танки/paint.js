let cnv = document.getElementById('cnv');
let ctx = cnv.getContext("2d");
let xp = 0;
let yp = 0;
let speed = 10;
let items = [];
let boxn = 0;
let blockn = 0;
for(let i=0; i<=1000; i+=30){
  block(i,0,"#FF952B","#E8641C");
}
for(let i=0; i<=1000; i+=30){
  block(0,i,"#FF952B","#E8641C");
}
for(let i=0; i<=1000; i+=30){
  block(i,960,"#FF952B","#E8641C");
}
for(let i=0; i<=1000; i+=30){
  block(960,i,"#FF952B","#E8641C");
}
tank(90,90,"#FFF938","#FFA738",4);


block(180,180,"#FF952B","#E8641C");


function box(x,y,st,sf,){
  ctx.fillStyle = sf;
  ctx.fillRect(x,y,30,30);
  ctx.fillStyle = st;
 ctx.fillRect(x+1,y+1,28,28);
  ctx.fillStyle = sf;
  ctx.fillRect(x+8,y+8,15,15);
  ctx.beginPath();
  ctx.strokeStyle = sf;
  ctx.lineWidth = 3;
  ctx.moveTo(x,y);
  ctx.lineTo(x+30,y+30);
  ctx.moveTo(x+30,y);
  ctx.lineTo(x,y+30);
  ctx.stroke();
  let box = {type:"box", id:boxn, x:x, y:y};
  boxn += 1;
  items.push(box);
}

function block(x,y,st,sf,){
  ctx.fillStyle = sf;
  ctx.fillRect(x,y,30,30);
  ctx.fillStyle = st;
  ctx.fillRect(x+1,y+1,28,28);
  ctx.fillStyle = sf;
  ctx.fillRect(x+8,y+8,15,15);
  ctx.fillStyle = st;
  ctx.fillRect(x+12,y+12,7,7);
  let block = {type:"block", id:blockn, x:x, y:y};
  blockn += 1;
  items.push(block);
}

function tank(x,y,st,sf,r){
  let deg;
  switch(r){
    case 1:
      deg = Math.PI*3/2;
      xp = x;
      yp = y;
      break;
    case 2:
      deg = Math.PI*2;
      xp = x;
      yp = y;
      break;
    case 3:
      deg = Math.PI/2;
      xp = x;
      yp = y;
      break;
    case 4:
      deg = Math.PI;
      xp = x;
      yp = y;
      break;
  }
  ctx.save();
  ctx.translate(x+15,y+15);
  ctx.rotate(deg);
    ctx.fillStyle = st;
    ctx.fillRect(-15,-15,15,30);
    ctx.fillRect(0,-5,15,10);
    ctx.fillRect(10,-10,5,20);
  ctx.restore();
}
document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyW') {
    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((xp - items[i].x) < 30 && (xp - items[i].x)> -30 ) && (((yp - items[i].y) <=30)) && (yp - items[i].y)>= 0)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {
      ctx.clearRect(xp,yp,30,30);
      yp -= speed;
      tank(xp,yp,"#FFF938","#FFA738",1);  
    }
    else{
      ctx.clearRect(xp,yp,30,30);
      tank(xp,yp,"#FFF938","#FFA738",1);  
    }  
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyA') {
    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((xp - items[i].x) <= 30 && (xp - items[i].x)>= 0 ) && (((yp - items[i].y) <30)) && (yp - items[i].y)> -30)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {
      ctx.clearRect(xp,yp,30,30);
      xp -= speed;
      tank(xp,yp,"#FFF938","#FFA738",4);
    }
    else{
      ctx.clearRect(xp,yp,30,30);
      tank(xp,yp,"#FFF938","#FFA738",4);
    }
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyS') {
    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((xp - items[i].x) < 30 && (xp - items[i].x)> -30 ) && (((items[i].y - yp) <=30)) && (items[i].y - yp)>= 0)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {
      ctx.clearRect(xp,yp,30,30);
      yp += speed;
      tank(xp,yp,"#FFF938","#FFA738",3);
    }
    else{
      ctx.clearRect(xp,yp,30,30);
      tank(xp,yp,"#FFF938","#FFA738",3);
    }
  }
});
document.addEventListener('keydown', function(event) {  
  if (event.code == 'KeyD') {
    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((items[i].x - xp) <= 30 && (items[i].x - xp)>= 0 ) && (((yp - items[i].y) <30)) && (yp - items[i].y)> -30)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {
    ctx.clearRect(xp,yp,30,30);
    xp += speed;
    tank(xp,yp,"#FFF938","#FFA738",2);
  }
  else{ 
    ctx.clearRect(xp,yp,30,30);
    tank(xp,yp,"#FFF938","#FFA738",2);

  }
  }
});

console.log(items);
