$(document).ready(function() {
    var playerOneY;
    var ballSpeed = 1;
    var ballDirection = 1;
    var ballMovementInterval;

    var distanceBetween = $('#p-two').offset().left - ($('#p-one').offset().left+15)
    
    $(document).mousemove(function(e) {
        playerOneY = e.pageY;
        updatePlayerOnePosition();
    })

    $(document).keypress(function(e) {
        var keyID = e.which;
        if (keyID == 32) {
            startBallMovement();
        }
    });

    function startBallMovement() {
        var currentLeft = $('#ball').offset().left;
        ballMovementInterval = setInterval(function() {
            if (currentLeft > ($('#p-two').offset().left - 15) && ballDirection == 1) {
                ballDirection *= -1;
                var newLeft = currentLeft - distanceBetween/(60*ballSpeed);
            }
            else if (currentLeft < ($('#p-one').offset().left + 15) && ballDirection == -1) {
                ballDirection *= -1;
                var newLeft = currentLeft + distanceBetween/(60*ballSpeed);
            }
            else {
                var newLeft = currentLeft + (distanceBetween/(60*ballSpeed) * ballDirection);
            }
            $('#ball').css('left', newLeft);
            currentLeft = newLeft;
        }, 1000/60);
    }

    function updatePlayerOnePosition() {
        if (playerOneY > 20) {
            $('#p-one').css('top', playerOneY-20);
        }
    }
})