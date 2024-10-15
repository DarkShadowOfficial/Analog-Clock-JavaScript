let c = document.querySelector('#c');
let ctx = c.getContext('2d');
c.width = 250;
c.height = 250;
let cx = c.width/2;
let cy = c.height/2;

function drawClock() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'lightgray';
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, 75, 0, Math.PI*2);
    ctx.fill();
    for (let i = 1; i < 13; i++) {
        ctx.fillStyle = "black";
        let angle = (i%12 - 3)*Math.PI/6;
        ctx.fillText(i, cx + 80*Math.cos(angle) - 4, cy + 80*Math.sin(angle))
    }
    let date = new Date();
    let time = {
        hrs: (date.getHours()%12),
        min: date.getMinutes(),
        sec: date.getSeconds()
    }
    return time;
}
function drawHands() {
    let time = drawClock();
    let hrs = time.hrs + time.min/60 + time.sec/3600 - 3;
    let hAngle = hrs*Math.PI/6;
    let min = time.min - 15 + time.sec/60;
    let mAngle = min*Math.PI/30;
    let sec = time.sec - 15;
    let sAngle = sec*Math.PI/30;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + 80/3*Math.cos(hAngle), cy + 80/3*Math.sin(hAngle))
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + 160/3*Math.cos(mAngle), cy + 160/3*Math.sin(mAngle))
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + 75*Math.cos(sAngle), cy + 75*Math.sin(sAngle))
    ctx.stroke()
    ctx.fillText(`${time.hrs}:${time.min+2}:${time.sec}`, 0, 240)
}
setInterval(drawHands, 1000)