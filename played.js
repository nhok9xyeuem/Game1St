function Played(playedX, playedY, playedWidth, playedHeight,) {
    this.playedX = playedX;
    this.playedY = playedY;
    this.playedWidth = playedWidth;
    this.playedHeight = playedHeight;

    this.drawPlayed = function () {
        ctx.beginPath();
        ctx.rect(this.playedX, this.playedY, this.playedWidth, this.playedHeight);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    };
    this.movingPlayed = function () {

        if (rightPressed) {
            this.playedX += 5;
            if (this.playedX + this.playedWidth > canvas.width) {
                this.playedX = canvas.width - this.playedWidth;
            }
        } else if (leftPressed) {
            this.playedX -= 5;
            if (this.playedX < 0) {
                this.playedX = 0;
            }
        }
        if (upPressed) {
            this.playedY -= 5;
            if (this.playedY < 0) {
                this.playedY = 0;
            }
        } else if (downPressed) {
            this.playedY += 5;

            if (this.playedY + this.playedHeight > canvas.height) {
                this.playedY = canvas.height - this.playedHeight;
            }
        }

    };
}

function movingPlayed(event) {

    if (event.keyCode == 37) {

        leftPressed = true;
    } else if (event.keyCode == 38) {
        upPressed = true;
    } else if (event.keyCode == 39) {
        rightPressed = true;
    } else if (event.keyCode == 40) {
        downPressed = true;
    }
}

function stoppingPlayed(event) {
    if (event.keyCode == 37) {
        leftPressed = false;
    } else if (event.keyCode == 38) {
        upPressed = false;
    } else if (event.keyCode == 39) {
        rightPressed = false;
    } else if (event.keyCode == 40) {
        downPressed = false;
    }

}

function drawPlayed() {
    playeds.drawPlayed();
    playeds.movingPlayed();
}