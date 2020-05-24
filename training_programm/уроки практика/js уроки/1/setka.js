var cnv = document.getElementById("cnv");
var context = cnv.getContext("2d");

for (var x = 0.5; x < cnv.width; x += 10) {
  context.moveTo(x, 0);
  context.lineTo(x, cnv.height);
}

for (var y = 0.5; y < cnv.height; y += 10) {
  context.moveTo(0, y);
  context.lineTo(cnv.width, y);
}

context.strokeStyle = "#888";
context.stroke();