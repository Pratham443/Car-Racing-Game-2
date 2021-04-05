canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

var car1_width = 70;
var car1_height = 120;
var car1_X = 300;
var car1_Y = 500;
var car1_image = "car1.png";

var car2_width = 70;
var car2_height = 120;
var car2_X = 500;
var car2_Y = 500;
var car2_image = "car2.jpg";

var background_image = "canvas-background.jpg";

function add() {
    backgroundImg = new Image();
    backgroundImg.onload = uploadBackground;
    backgroundImg.src = background_image;

    car1Img = new Image();
    car1Img.onload = uploadcar1;
    car1Img.src = car1_image;

    car2Img = new Image();
    car2Img.onload = uploadcar2;
    car2Img.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1Img, car1_X, car1_Y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2Img, car2_X, car2_Y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "38") {
        car1_up();
        console.log("up arrow key was pressed");
    }

    if(keyPressed == "40") {
        car1_down();
        console.log("down arrow key was pressed");
    }

    if(keyPressed == "37") {
        car1_left();
        console.log("left arrow key was pressed");
    }

    if(keyPressed == "39") {
        car1_right();
        console.log("right arrow key was pressed");
    }

    if(keyPressed == "87") {
        car2_up();
        console.log("W key was pressed");
    }

    if(keyPressed == "83") {
        car2_down();
        console.log("S key was pressed");
    }

    if(keyPressed == "65") {
        car2_left();
        console.log("A key was pressed");
    }

    if(keyPressed == "68") {
        car2_right();
        console.log("D key was pressed");
    }

    if(car1_Y <= 0) {
        console.log("Car 1 Won!!");
        document.getElementById("game_status").innerHTML = "Car 1 Won!!";
    }

    if(car2_Y <= 0) {
        console.log("Car 2 Won!!");
        document.getElementById("game_status").innerHTML = "Car 2 Won!!";
    }
}

function car1_up() {
    if(car1_Y >= -30) {
        car1_Y = car1_Y - 10;
        console.log("When up arrow key was pressed: X: " + car1_X + " | Y: " + car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down() {
    if(car1_Y <= 500) {
        car1_Y = car1_Y + 10;
        console.log("When down arrow key was pressed: X: " + car1_X + " | Y: " + car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {
    if(car1_X >= 0) {
        car1_X = car1_X - 10;
        console.log("When left arrow key was pressed: X: " + car1_X + " | Y: " + car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right() {
    if(car1_X <= 700) {
        car1_X = car1_X + 10;
        console.log("When right arrow key was pressed: X: " + car1_X + " | Y: " + car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up() {
    if(car2_Y >= -30) {
        car2_Y = car2_Y - 10;
        console.log("When W key was pressed: X: " + car2_X + " | Y: " + car2_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down() {
    if(car2_Y <= 500) {
        car2_Y = car2_Y + 10;
        console.log("When S key was pressed: X: " + car2_X + " | Y: " + car2_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left() {
    if(car2_X >= 0) {
        car2_X = car2_X - 10;
        console.log("When A key was pressed: X: " + car2_X + " | Y: " + car2_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right() {
    if(car2_X <= 700) {
        car2_X = car2_X + 10;
        console.log("When D key was pressed: X: " + car2_X + " | Y: " + car2_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}