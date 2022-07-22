//Create a reference for canvas 
canvas= document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
//Give specific height and width to the car image
height_value = 130
width_value = 100
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
x = 5
y = 255
function add() {
	//upload car, and background images on the canvas.
	background_img = new Image();
	background_img.onload = jk;
	background_img.src = background_image;

	car = new Image();
	car.onload = jkk;
	car.src = greencar_image;
}

function jk() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_img,0,0,canvas.width,canvas.height)
}

function jkk() {
	//Define function ‘jkk’.
ctx.drawImage(car,x,y,height_value,width_value)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if( y > 0)
{
    y = y-10;
    jk()
    jkk()
    
}
}

function down()
{
	//Define function to move the car downward
	if(y < canvas.height-75)
    {
        y = y+10;
        jk()
        jkk()

    }
}

function left()
{
	//Define function to move the car left side
	if(x > 0)
    {
        x= x-10
        jk()
        jkk()
    }
}

function right()
{
	//Define function to move the car right side
	if(x < canvas.width-75)
    {
        x= x+10
        jk()
        jkk()


    }
}
