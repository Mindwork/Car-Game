var canvas=document.getElementById("my_Canvas");
var ctx=canvas.getContext("2d");
var car1_height= 120;
var car1_width= 70;
var car1_image= "car1.png";
var car1_x= 10;
var car1_y= 10;
var car2_height= 120;
var car2_width= 70;
var car2_image= "car2.png";
var car2_x= 10;
var car2_y= 100;
function add() {
    background_imgTag = new Image();
    background_imgTag.onlod = uploadBackground;
    background_imgTag.src = background_image;
    car1_imageTag = new Image();
    car1_imageTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;
    car2_imageTag = new Image();
    car2_imageTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag , 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_c , car1_y , car1_width , car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_c , car2_y , car2_width , car2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        car1_up();
        console.log("up arrow key");
    }
    if (keyPressed == '40'){
        car1_down();
        console.log("down arrow key")
    }
    if (keyPressed == '37'){
        car1_left();
        console.log("left arrow key");
    }
    if (keyPressed == '39'){
        car1_right();
        console.log("right arrow key");
    }
    if(keyPressed == '87'){
        car2_up();
        console.log("up w key");
    }
    if (keyPressed == '65'){
        car2_down();
        console.log("left s key")
    }
    if (keyPressed == '37'){
        car1_left();
        console.log("down arrow key");
    }
    if (keyPressed == '68'){
        car2_right();
        console.log("right arrow key");
    }
}