function gameOver() {
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].x > playeds.playedX && balls[i].y > playeds.playedY) {
            if (balls[i].x - (playeds.playedX + playeds.playedWidth) <= balls[i].radius &&
                balls[i].y - (playeds.playedY + playeds.playedHeight) <= balls[i].radius) {
                isGameOver = true;

            }
        }
    }
}
function drawGame() {
    if (!isGameOver) {
        if (!starTime) {
            starTime = new Date().getTime();
        } else {
            let longTime = Math.floor((new Date().getTime() - starTime) / 1000);

            score = longTime*number;
            document.getElementById('diem').innerHTML = score;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBalls();
        drawPlayed();
        gameOver();
        requestAnimationFrame(drawGame);
    } else {
        if (score > document.cookie) {
            document.cookie = score;
        }
        alert('Game Over');
    }
}