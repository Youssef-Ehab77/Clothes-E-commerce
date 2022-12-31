var timer = 20;
var score = 0;
var finished = false;
////// grass
var grassClass = 'grass'
var grassCount = 50;
////// ball
var ballClass = 'pokeball'
var ballCount = 5;
////// player
var player = document.querySelector('.player');

var playerPosition = {
    x: 0,
    y: 0,
}
var playerVelocity = {
    x: 0,
    y: 0,
}

var playerSpeed = 5;

// player in middle at start
var playerStartPosition = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
}

///sound 
var sound1 = new Audio('../Media/coin.mp3');
var sound2 = new Audio('../Media/GameOver.wav');
var sound3 = new Audio('../Media/congratulation.wav');

// code start with start only
function start() {

    //random grass only on start of game
    generateElements(grassClass, grassCount);
    generateElements(ballClass, ballCount);
    playerPosition = playerStartPosition;
}

//game loop always working during game
function update() {
    document.querySelector('.score').innerHTML = "Your score is : " + score + "<br> Timer:" + timer;
    if (timer === 0) {
        clearInterval(time);
        playerSpeed = 0;
        player.classList.remove("walk");
        document.querySelector('.score').innerHTML = "Game over!";
        sound2.play();
        $(".you-won").css("display", 'block');
        $(".result").html("Game over!");
        return;
    } else if (score === 10) {
        clearInterval(time);
        playerSpeed = 0;
        player.classList.remove("walk");
        sound3.play();

        if (score === 10 && !finished) {
            finished = true;
            let date = new Date();
            date.setMonth(date.getMonth() + 1);
            if (getCookie('pokemon') === '1') {
                $(".you-won").css("display", 'block')
                $(".result").html("No more discounts, but you still can have fun!");
            } else {
                setCookie('pokemon', '1', date);

                if (getCookie('discount')) {
                    $(".you-won").css("display", 'block');
                    if (parseInt(getCookie('discount')) < 10) {
                        let currentDiscount = parseInt(getCookie('discount'));
                        $(".result").html("You won 2% discount\nCurrent total discount is " + (currentDiscount + 2) + "%");
                        setCookie('discount', (currentDiscount + 2), date);
                    }
                }else{
                    $(".you-won").css("display", 'block');
                    $(".result").html("You won 2% discount");
                    setCookie('discount', 2, date);
                }
            }
        }


        return;
    }
    playerPosition.x += playerVelocity.x;  // left = -1 (not moving) = 0 right = 1
    playerPosition.y += playerVelocity.y;  // left = -1 (not moving) = 0 right = 1
    player.style.left = playerPosition.x + 'px';
    player.style.top = playerPosition.y + 'px';
    ifCollision();
    //function and give it call back funtion
    requestAnimationFrame(update);
}

var time = setInterval(function () {
    timer--;
}, 1000)

//////// player movement 
window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp') {
        playerVelocity.y = -1 * playerSpeed;
        player.style.backgroundImage = "url('../Media/player_front.png')";
    }
    if (e.key === 'ArrowDown') {
        playerVelocity.y = playerSpeed;
        player.style.backgroundImage = "url('../Media/player_back.png')";
    }
    if (e.key === 'ArrowLeft') {
        playerVelocity.x = -1 * playerSpeed;
        player.style.backgroundImage = "url('../Media/player_left.png')";
    }
    if (e.key === 'ArrowRight') {
        playerVelocity.x = playerSpeed;
        player.style.backgroundImage = "url('../Media/player_right.png')";
    }
    player.classList.add("walk");
})


window.addEventListener('keyup', function (e) {
    playerVelocity.x = 0;
    playerVelocity.y = 0;
    player.classList.remove("walk");
})


// generate random grass or ball (element)
function generateElements(className, numberOfelements) {
    for (var i = 0; i < numberOfelements; i++) {
        var newElement = document.createElement('div');
        newElement.classList.add(className);
        newElement.style.left = Math.random() * 100 + '%';
        newElement.style.top = Math.random() * 100 + '%';
        document.body.appendChild(newElement);
    }
};

// check the collision of 2 divs ball and player
function collision(div1, div2) {

    //get all position values of the div

    var x1 = div1.getBoundingClientRect().left;
    var y1 = div1.getBoundingClientRect().top;

    var h1 = div1.clientHeight;
    var w1 = div1.clientWidth;

    var b1 = y1 + h1;
    var r1 = x1 + w1;

    //get all position values of the div

    var x2 = div2.getBoundingClientRect().left;
    var y2 = div2.getBoundingClientRect().top;

    var h2 = div2.clientHeight;
    var w2 = div2.clientWidth;

    var b2 = y2 + h2;
    var r2 = x2 + w2;

    //check if collision happens
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}

function ifCollision() {

    var balls = document.querySelectorAll('.pokeball');

    balls.forEach(function (ball) {
        if (collision(ball, player)) {
            score++;
            ball.style.left = Math.random() * 100 + '%';
            ball.style.top = Math.random() * 100 + '%';
            sound1.play()
            document.querySelector('.score').innerHTML = "Your score is : " + score;
        }
    })
};


$(".again").on("click", function () {
    window.location.reload();
})
$(".return").on("click", function () {
    window.location.assign("../index.html");
})

// game

start();
update();

