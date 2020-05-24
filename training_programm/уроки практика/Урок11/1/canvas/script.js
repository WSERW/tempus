let cnv = document.querySelector('#cnv');

let ctx = cnv.getContext('2d');

ctx.fillStyle = 'black';

ctx.fillRect(50,50,100,100);
ctx.clearRect(75,75,100,100);

ctx.strokeStyle = 'black';

ctx.beginPath();

ctx.moveTo(0,0);
ctx.lineTo(50,50);
ctx.lineTo(50,0);

ctx.moveTo(300,300)
// ctx.arc(300, 300, 50, 0, Math.PI, false);

ctx.stroke();

