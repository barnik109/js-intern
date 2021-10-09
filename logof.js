var cxt;
var fvalue=1;
var ftfam = "65px 'Gill Sans Ultra Bold', sans-serif";
function drit()
{
    cxt=document.getElementById('canvas').getContext('2d');
    cxt.font=ftfam;
    cxt.save();
    dlogo();
}
function dlogo()
{
 var oty=80;
    cxt.restore();
    cxt.save();
    cxt.clearRect(0,0,600,400);
    cxt.scale(fvalue,fvalue);
    cxt.fillText("HTML",31,60);
    cxt.translate(0,oty);
    ctx.fillStyle = "#E34C26"; 
ctx.beginPath(); 
ctx.moveTo(39, 250); 
ctx.lineTo(17, 0); 
ctx.lineTo(262, 0); 
ctx.lineTo(239, 250);
ctx.lineTo(139, 278);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "#F06529"; 
ctx.beginPath(); 
ctx.moveTo(139, 257); 
ctx.lineTo(220, 234); 
ctx.lineTo(239, 20); 
ctx.lineTo(139, 20); 
ctx.closePath(); 
ctx.fill();

ctx.fillStyle = "#EBEBEB"; 
ctx.beginPath(); 
ctx.moveTo(139, 113);
ctx.lineTo(98, 113); 
ctx.lineTo(96, 82); 
ctx.lineTo(139, 82); 
ctx.lineTo(139, 51); 
ctx.lineTo(62, 51);
ctx.lineTo(70, 144);
ctx.lineTo(139, 144);
ctx.closePath(); 
ctx.fill(); 
ctx.beginPath(); 
ctx.moveTo(139, 193);
ctx.lineTo(105, 184);
ctx.lineTo(103, 159); 
ctx.lineTo(72, 159); 
ctx.lineTo(76, 207); 
ctx.lineTo(139, 225); 
ctx.closePath(); 
ctx.fill();

ctx.fillStyle = "#FFFFFF"; 
ctx.beginPath(); 
ctx.moveTo(139, 113); 
ctx.lineTo(139, 144); 
ctx.lineTo(177, 144);
ctx.lineTo(173, 184); 
ctx.lineTo(139, 193); 
ctx.lineTo(139, 225); 
ctx.lineTo(202, 207); 
ctx.lineTo(210, 113); 
ctx.closePath(); 
ctx.fill();

ctx.beginPath(); 
ctx.moveTo(139, 51); 
ctx.lineTo(139, 82); 
ctx.lineTo(213, 82);
ctx.lineTo(216, 51); 
ctx.closePath(); 
ctx.fill();
}
function csc(val)
{
    fvalue=val/100;
    dlogo();
}
