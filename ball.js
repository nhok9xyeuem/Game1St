function Ball(x, y, radius, speedX, speedY) {
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
    this.x = x;
    this.y = y;

    this.getRandomHex = function () {
        return Math.floor(Math.random() * 255);
    };

    this.getRandomColor = function () {
        let red = this.getRandomHex();
        let green = this.getRandomHex();
        let blue = this.getRandomHex();
        return "rgb(" + red + "," + blue + "," + green + ")";
    };

    this.drawBall = function () {
        color = this.getRandomColor();
        this.moveBall();
        ctx.beginPath();
        ctx.arc(this.x - this.radius, this.y - this.radius, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    };
    this.moveBall = function () {
        if (this.x > canvas.width - this.radius || this.x < this.radius) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height - this.radius || this.y < this.radius) {
            this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
    }

}
function drawBalls() {

    for (let i = 0; i < balls.length; i++) {
        balls[i].drawBall();
        balls[i].moveBall();
    }
}