var canvas=document.getElementById("myCanvas");
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
    background_image = "racing.jpg";
    background_imgTag = new Image();
    background_imgTag.onlod = uploadBackground;
    background_imgTag.src = background_image;
    car1_imageTag = new Image();
    car1_imageTag.onload = uploadcar1();
    car1_imageTag.src = car1_image;
    car2_imageTag = new Image();
    car2_imageTag.onload = uploadcar2();
    car2_imgTag.src = car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag , 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag, car2_x , car1_y , car1_width , car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x , car2_y , car2_width , car2_height);
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
function car1_up(){
    if (car1_y>=0){
        car1_y=car1_y-10;
        console.log("When up arrow is pressed, x="+ car1_x+"| y = "+car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_down(){
    if (car1_y<=500){
        car1_y=car1_y+10;
        console.log("When down arrow is pressed, x="+ car1_x+"| y = "+car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_left(){
    if (car1_x>=0){
        car1_x=car1_x-10;
        console.log("When left arrow is pressed, x="+ car1_x+"| y = "+car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_right(){
    if (car1_y<=500){
        car1_y=car1_y+10;
        console.log("When right arrow is pressed, x="+ car1_x+"| y = "+car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_up(){
    if (car2_y>=0){
        car2_y=car2_y-10;
        console.log("When w is pressed, x="+ car2_x+"| y = "+car2_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_down(){
    if (car2_y<=500){
        car2_y=car2_y+10;
        console.log("When s is pressed, x="+ car2_x+"| y = "+car2_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_left(){
    if (car2_x>=0){
        car2_x=car2_x-10;
        console.log("When d is pressed, x="+ car2_x+"| y = "+car2_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_right(){
    if (car2_y<=500){
        car2_y=car2_y+10;
        console.log("When a is pressed, x="+ car2_x+"| y = "+car2_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
if (car1_x>700){
    console.log("Car1 won");
    document.getElementById('game_status').innerHTML = "Car 1 Won!!";
}
if (car2_x>700){
    console.log("Car2 won");
    document.getElementById('game_status').innerHTML = "Car 2 Won!!";
}