const CanvasTeste = () => {

  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
    
    ctx.rotate((45*Math.PI)/180);
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(100, 100);
    ctx.fill();   
/*
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
*/

}
