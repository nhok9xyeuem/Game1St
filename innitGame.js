let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let balls = [];
let x, speedX, speedY;
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let score = 0;
let starTime;
let isGameOver = false;
let number = parseInt(prompt('moi ban nhap co kho tu 1-5: '));


let playeds = new Played(canvas.width / 2, canvas.height / 2, 30, 30, 2, 2);



document.getElementById('diemcao').innerHTML = document.cookie;

document.addEventListener("keydown", movingPlayed);
document.addEventListener("keyup", stoppingPlayed);
if (number <= 5) {
    number = number *2;
    for (let i = 0; i < number; i++) {
        x = Math.floor(Math.random() * (canvas.width - 40) + 40);
        y = Math.floor(Math.random() * (canvas.height - 40) + 40);

        speedX = Math.floor(Math.random() * 7 + (-1));
        speedY = Math.floor(Math.random() * 5 + 1);

        let ball = new Ball(x, y, 15, speedX, speedY);
        balls.push(ball);
    }
    drawPlayed();
    drawBalls();
    setTimeout(drawGame,1000);

}else {
    alert(' cap do ban nhap khong phu hop');
}


