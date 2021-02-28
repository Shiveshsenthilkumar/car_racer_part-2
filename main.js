Canvas = document.getElementById('myCanvas');
ctx = Canvas.getContext("2d");

background_image = "racing.jpg";

car1_width = 120;
car1_height = 70;
car1_image = "car-1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car-2.png";
car2_x = 10;
car2_y = 110;

function add() {

   background_imgTag = new Image();
   background_imgTag.onload = uploadbackground;
   background_imgTag.src = background_image;


   car1_imgTag = new Image();
   car1_imgTag.onload = uploadcar1;
   car1_imgTag.src = car1_image;

   car2_imgTag = new Image();
   car2_imgTag.onload = uploadcar2;
   car2_imgTag.src = car2_image;

}

function uploadbackground() {

   ctx.drawImage(background_imgTag, 0, 0, Canvas.width, Canvas.height);

}

function uploadcar1() {

   ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);

}

function uploadcar2() {

   ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);

}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
   keyPressed = e.keyCode;

   console.log(keyPressed);
   if (keyPressed == '38') {
      car1_up();
      console.log("up");
   }

   if (keyPressed == '40') {
      car1_down();
      console.log("down");
   }

   if (keyPressed == '37') {
      car1_left();
      console.log("left");
   }
   if (keyPressed == '39') {
      car1_right();
      console.log("right");
   }
   if (keyPressed == '87') {
      car2_up();
      console.log("key w is pressed");
   }

   if (keyPressed == '83') {
      car2_down();
      console.log("key s is pressed");
   }

   if (keyPressed == '65') {
      car2_left();
      console.log("key a is pressed");
   }
   if (keyPressed == '68') {
      car2_right();
      console.log("key d is pressed");


   }

if(car1_x>700){
   console.log('car1 won!!!!!!!!!!');
   document.getElementById('game_status').innerHTML = "car 1 won"

} else if(car2_x>700){
   console.log('car2 won!!!!!!!!!!');
   document.getElementById('game_status').innerHTML = "car 2 won"

}

}


function car1_up() {
   if (car1_y >= 0);
   {
      car1_y = car1_y-10;
      console.log("when up arrow is pressed, x = "+ car1_x + "| y = ", car1_y);
      uploadbackground()
      uploadcar1();
      uploadcar2();
   }
}

function car1_down() {
   if (car1_y <=500);
   {
      car1_y = car1_y+10;
      console.log("when down arrow is pressed, x = "+ car1_x + "| y = ", car1_y);
      uploadbackground()
      uploadcar1();
      uploadcar2();
   }
}

function car1_left() {
   if (car1_x >= 0);
   {
      car1_x = car1_x-10;
      console.log("when up arrow is pressed, x = "+ car1_x + "| y = ", car1_y);
      uploadbackground()
      uploadcar1();
      uploadcar2();
   }
}

function car1_right() {
   if (car1_x <=500);
   {
      car1_x = car1_x+10;
      console.log("when up arrow is pressed, x = "+ car1_x + "| y = ", car1_y);
      uploadbackground()
      uploadcar1();
      uploadcar2();
   }
}

function car2_up() {
   if (car2_y >= 0);
   {
      car2_y = car2_y-10;
      console.log("when up arrow is pressed, x = "+ car2_x + "| y = ", car2_y);
      uploadbackground()
      uploadcar1();
      uploadcar2();
   }
}

function car2_down() {
   if (car2_y <=500);
   {
      car2_y = car2_y+10;
      console.log("when down arrow is pressed, x = "+ car2_x + "| y = ", car2_y);
      uploadbackground()
      uploadcar1();
      uploadcar2();
   }
}

function car2_left() {
   if (car2_x >= 0);
   {
      car2_x = car2_x-10;
      console.log("when up arrow is pressed, x = "+ car2_x + "| y = ", car2_y);
      uploadbackground()
      uploadcar1();
      uploadcar2();
   }
}

function car2_right() {
   if (car2_x <=500);
   {
      car2_x = car2_x+10;
      console.log("when up arrow is pressed, x = "+ car2_x + "| y = ", car2_y);
      uploadbackground()
      uploadcar1();
      uploadcar2();
   }
}