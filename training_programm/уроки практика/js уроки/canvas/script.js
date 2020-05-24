let cnv = document.querySelector('#cnv');
let ctx = cnv.getContext('2d');


ctx.fillStyle = 'red';

ctx.beginPath()
ctx.moveTo(260,350)
ctx.bezierCurveTo(330,220,270,525,350,370)
ctx.bezierCurveTo(330,220,270,525,100,100)
ctx.closePath()
ctx.stroke();