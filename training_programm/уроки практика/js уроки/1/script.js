let cnv = document.querySelector('#cnv');
let ctx = cnv.getContext('2d');




ctx.fillStyle = '#000'


// основной контур
ctx.strokeStyle = 'blue'
ctx.beginPath();
ctx.arc(200,200,50,0.2,Math.PI*0.94,false);
ctx.lineTo(100,210);
ctx.quadraticCurveTo(155,205,154,180); 
ctx.arc(200,200,50,Math.PI*1.13,-0.3,false);
ctx.quadraticCurveTo(250,205,300,210); 
ctx.lineTo(248,210)
ctx.stroke();



// верхняя окружность
ctx.strokeStyle = 'red'
ctx.fillStyle = 'red'
ctx.beginPath();
ctx.arc(200,200,30,0,Math.PI,true);
ctx.closePath();
ctx.stroke();



// нижняя окружность
ctx.strokeStyle = 'orange'
ctx.beginPath();
ctx.arc(200,200,30,0.2,Math.PI*0.94,false);
ctx.closePath();
ctx.stroke();


// детали
ctx.strokeStyle = 'green'
ctx.beginPath();
ctx.moveTo(257,188);
ctx.quadraticCurveTo(260,198,280,202); 
ctx.stroke();