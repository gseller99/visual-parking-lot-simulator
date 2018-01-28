// These are all the arrays and variables needed at onset to assist in calculations.


var unparkedCars = [];
var parkedCars = [];

var unusedSpaces = [];
var usedSpaces = [];

var carInTransit = null;

var carInStart = null;

var intervalId;

//**************CARS*****************
//These are variables that will help cycle through to make unique cars

var vehicleImage = ["Cars/car-lime-green.png", "Cars/car-orange.png", "Cars/car-yellow.png", "Cars/car-aqua.png", "Cars/car-dragon.png", "Cars/car-purple.png"];
var licensePlate = ["fbs201", "stss2211", "lock325"]

//object constructor for a car
function Car(image, plate) {
    this.image = image;
    this.plate = plate;
    this.parked = false;
    this.space = null;

}

//for loop to create a collection of unparked cars
for (var i = 0; i < 20; i++) {
    var imageIndex = i % vehicleImage.length;
    var image = vehicleImage[imageIndex];
    var plateIndex = i % licensePlate.length;
    var plate = licensePlate[plateIndex];
unparkedCars.push(new Car(image, i + "-" + plate));
}
//displays array of unparkedCars
console.log("first display of cars");
console.dir(unparkedCars);


// var unusedSpaces = [];

// This is an object constructor for making unused spaces

function Spaces(id, top, left, width, height, openingDir, orientation) {
    this.id = id;
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
    this.openingDir = openingDir;
    this.orientation = orientation;

    // this.projection = calculateProjection();
    // function calculateProjection( ){
    // 	//use orientation and openingDirection to calculate projection properties
    // }
}


//*********SPACES************
// This creates objects for spaces to be put in array called UnusedSpaces. 
//OpeningDir (the direction you will continue to travel to enter space) is 
//1 = North (top be minused), 2 = East (left will be plused), 
//3 = South (top will be plused), 4 = West (left will be minused). 


//Left set of unused spaces index 0-8)

unusedSpaces.push(new Spaces(0, 67, 63, 200, 100, 4));
unusedSpaces.push(new Spaces(1, 178, 63, 200, 100, 4));
unusedSpaces.push(new Spaces(2, 289, 63, 200, 100, 4));
unusedSpaces.push(new Spaces(3, 400, 63, 200, 100, 4));
unusedSpaces.push(new Spaces(4, 511, 63, 200, 100, 4));
unusedSpaces.push(new Spaces(5, 622, 63, 200, 100, 4));
unusedSpaces.push(new Spaces(6, 733, 63, 200, 100, 4));
unusedSpaces.push(new Spaces(7, 844, 63, 200, 100, 4));
unusedSpaces.push(new Spaces(8, 955, 63, 200, 100, 4));

//Top center set of unspaces index 0-8)

unusedSpaces.push(new Spaces(9, 125, 531, 100, 200, 1));
unusedSpaces.push(new Spaces(10, 125, 642, 100, 200, 1));
unusedSpaces.push(new Spaces(11, 125, 753, 100, 200, 1));
unusedSpaces.push(new Spaces(12, 125, 864, 100, 200, 1));

//Middle middle set of unspaces

unusedSpaces.push(new Spaces(13, 505, 420, 100, 200, 3));
unusedSpaces.push(new Spaces(14, 505, 531, 100, 200, 3));
unusedSpaces.push(new Spaces(15, 505, 642, 100, 200, 3));
unusedSpaces.push(new Spaces(16, 505, 753, 100, 200, 3));
unusedSpaces.push(new Spaces(17, 505, 864, 100, 200, 3));

//Middle bottom set of unspaces

unusedSpaces.push(new Spaces(18, 900, 420, 100, 200, 3));
unusedSpaces.push(new Spaces(19, 900, 531, 100, 200, 3));
unusedSpaces.push(new Spaces(20, 900, 642, 100, 200, 3));
unusedSpaces.push(new Spaces(21, 900, 753, 100, 200, 3));
unusedSpaces.push(new Spaces(22, 900, 864, 100, 200, 3));

// Right set of unspaces

unusedSpaces.push(new Spaces(23, 70, 1205, 200, 100, 2));
unusedSpaces.push(new Spaces(24, 181, 1205, 200, 100, 2));
unusedSpaces.push(new Spaces(25, 292, 1205, 200, 100, 2));
unusedSpaces.push(new Spaces(26, 403, 1205, 200, 100, 2));
unusedSpaces.push(new Spaces(27, 514, 1205, 200, 100, 2));
unusedSpaces.push(new Spaces(28, 625, 1205, 200, 100, 2));
unusedSpaces.push(new Spaces(29, 736, 1205, 200, 100, 2));
unusedSpaces.push(new Spaces(30, 847, 1205, 200, 100, 2));


var space1Left = unusedSpaces[0].left;

console.log(space1Left + ' = left position of first index position');

// unusedSpaces.push(new ParkingLot(i));

console.log('first display of unused spaces');
console.dir(unusedSpaces);



//Functions for buttons
//*** reset runs when page loads ***

// resetCars();

// function resetCars() {}

//Initial start of car


function startCar1() {
    intervalId = setInterval(moveCar1North, 50);
}

//Clearing interval of car

function stopCars() {
    clearInterval(gameLoop);

}


//********CAR MOVES*********
// let car1 = document.querySelector('#car1');
// let car1Top = getComputedStyle(car1).top;

// console.log(car1Top);

// //NORTH

// //Move car north

// function moveCar1North () {
// 	// carRunning();
// 	let car1Left = getComputedStyle(car1).left.replace('px', '');
// 	let car1Top = getComputedStyle(car1).top.replace('px', '');

// 	if(car1Top <= 320) {
// 		// carSkid();
// 		stopCars();
// 	// setTimeout(startCar1IntersectionNorth, 200);
// 	} 

// 	console.log(car1.style.left + ' = left');
// 	console.log(car1Left + ' = left');
// 	console.log(car1Top + ' = top');

// 	car1.style.top = `${parseInt(car1Top) - 10}px`;
// }





//***Major code to have program run***






function getCarToPark() {
    console.log("trying to find a car to park");
    if (carInTransit != null) {
        return carInTransit;
    }
    if (carInStart != null) {
        return carInStart;
    }
    if (unparkedCars.length > 0) {
        console.log("shifting out a car");
        return unparkedCars.shift();
    }
    return null;
};


function getAvailableSpace() {
    console.log('the next value is the first index spot of unused spaces');
    console.log(unusedSpaces[0]);
    console.log("looking for an available space");
    if (carInTransit != null) {
        return carInTransit.space;
    }
    if (unusedSpaces.length > 0) {
        return unusedSpaces.shift();
    }
    return null;
}


function driveCarToSpace(car, space) {
    console.log("driving car to space");
    car.space = space;
    if (carInTransit === car) {
        continueDrivingCarToSpace(car);
        return;
    }

    if (carInStart === car) {
    	driveCarForward (car);
    	carInStart = null;
    	carInTransit = car;
    	return;
    }
    console.log("going to draw car at starting line");
    drawCarAtStartingLine(car);
    carInStart = car;
}

function continueDrivingCarToSpace(car) {
    
    console.log("driving to space");
}

function driveCarForward (car) {
	console.log ("moving car forward from start");
}

function drawCarAtStartingLine(car) {
	console.log("attempting to draw image");
    var carImage = createCarImage(car);
    carInStart = carImage;
    return;
	// moveCarImageToStartingLine(carImage);
}

function createCarImage (car) {
console.log("the next value is car for the image");
console.log(car);
var image = car.image
console.log(image);
var carImage = document.createElement('img');
carImage.setAttribute('class', 'carPic');
carImage.setAttribute('src', image);
document.body.appendChild(carImage);
console.dir(carImage);
return; 
}


function tick() {
    var car = getCarToPark();
    console.dir(car);
    if (car !== null) {
        //look for a space to park car
        console.dir(car);
        var space = getAvailableSpace();
        console.dir(space);
        //if a space is available start driving the car toward the space
        if (space !== null) {
         console.log("executing drive Car to Space")   
            driveCarToSpace(car, space);
        }
    } else {
        clearInterval(gameLoop);
        console.log("done parking cars");
    }
}

var gameLoop = setInterval(tick, 50);