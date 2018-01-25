var unparkedCars = [];
var parkedCars = [];

var unusedSpaces = [];
var usedSpaces = [];

var carInTransit = null;

console.log(carInTransit);

var carInStart = null;

var vehicleMakes = ["Toyota", "Mercedes", "Oldsmobile", "Buick", "Ford", "Kia"];
var vehicleYears = [2000, 2005, 2010, 2015, 2017];
var licensePlate = ["fbs201", "stss2211", "lock325"]


//object constructor for a car
function Car(make, year, plate) {
    this.make = make;
    this.year = year;
    this.plate = plate;
    this.parked = false;
    this.space = null;

}
// create an instance of a vehicle
// var vehicle = new Car("ford", 2017, "1");
// console.log(vehicle);


//for loop to create a collection of unparked cars
for (var i = 0; i < 20; i++) {
    var makeIndex = i % vehicleMakes.length;
    var make = vehicleMakes[makeIndex];
    var yearIndex = i % vehicleYears.length;
    var year = vehicleYears[yearIndex];
    var plateIndex = i % licensePlate.length;
    var plate = licensePlate[plateIndex];

    unparkedCars.push(new Car(make, year, i + "-" + plate));
}
console.dir(unparkedCars);

function getCarToPark() {
    console.log ("trying to find a car to park");
    if (carInTransit != null) {
        return carInTransit;
    }
    if (carInStart != null) {
        return carInStart;
    }
    if (unparkedCars.length > 0) {
        return unparkedCars.shift();
    }
    return null;
};


function tick() {
    var car = getCarToPark();
    if (car !== null) {
        //look for a space to park car
        var space = getAvailableSpace();
        //if a space is available start driving the car toward the space
        if (space !== null) {
        	driveCarToSpace(car,space);
        }
    }
    else {
    	clearInterval(gameLoop);
    	console.log("done parking cars");
    }
}

function getAvailableSpace () {
	console.log("looking for an available space");
	//if car in transit return its assigned space
	//look in unused spaces array and shift out first one
	//otherwise return null

}

function driveCarToSpace (car, space) {
	console.log("driving car to space");
	// Am I at an intersection
	// 
}



var gameLoop = setInterval(tick, 50);


resetCars();

function resetCars() {
    // car1.style.top = "80px";
    // car1.style.left = "60px";
    // car2.style.top = "120px";
    // car2.style.left = "100px";
    // car3.style.top = "160px";
    // car3.style.left = "140px";

}

//Initial start of car


function startCar1() {
    // intervalId = setInterval(moveCar1East, roadSpeed);
}


//Clearing interval of car

function stopCars() {
    clearInterval(intervalId);

}

let car = document.querySelector('#car1');
let carTop = getComputedStyle(car).top;

console.log(carTop);

var parkingSpaces = [];

// constructor for spaces to be put in array called parkingSpaces. OpeningDir (the direction you will continue to travel to enter space) is 1 = North (top be minused), 2 = East (left will be plused), 3 = South (top will be plused), 4 = West (left will be minused). 

function UnusedSpaces(id, top, left, width, height, openingDir, orientation) {
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

//Left set of spaces index 0-8)

parkingSpaces.push(new UnusedSpaces(0, 67, 63, 200, 100, 4));
parkingSpaces.push(new UnusedSpaces(1, 178, 63, 200, 100, 4));
parkingSpaces.push(new UnusedSpaces(2, 289, 63, 200, 100, 4));
parkingSpaces.push(new UnusedSpaces(3, 400, 63, 200, 100, 4));
parkingSpaces.push(new UnusedSpaces(4, 511, 63, 200, 100, 4));
parkingSpaces.push(new UnusedSpaces(5, 622, 63, 200, 100, 4));
parkingSpaces.push(new UnusedSpaces(6, 733, 63, 200, 100, 4));
parkingSpaces.push(new UnusedSpaces(7, 844, 63, 200, 100, 4));
parkingSpaces.push(new UnusedSpaces(8, 955, 63, 200, 100, 4));

//Top center set of spaces index 0-8)

parkingSpaces.push(new UnusedSpaces(9, 125, 531, 100, 200, 1));
parkingSpaces.push(new UnusedSpaces(10, 125, 642, 100, 200, 1));
parkingSpaces.push(new UnusedSpaces(11, 125, 753, 100, 200, 1));
parkingSpaces.push(new UnusedSpaces(12, 125, 864, 100, 200, 1));

//Middle middle set of spaces

parkingSpaces.push(new UnusedSpaces(13, 505, 420, 100, 200, 3));
parkingSpaces.push(new UnusedSpaces(14, 505, 531, 100, 200, 3));
parkingSpaces.push(new UnusedSpaces(15, 505, 642, 100, 200, 3));
parkingSpaces.push(new UnusedSpaces(16, 505, 753, 100, 200, 3));
parkingSpaces.push(new UnusedSpaces(17, 505, 864, 100, 200, 3));

//Middle bottom set of spaces

parkingSpaces.push(new UnusedSpaces(18, 900, 420, 100, 200, 3));
parkingSpaces.push(new UnusedSpaces(19, 900, 531, 100, 200, 3));
parkingSpaces.push(new UnusedSpaces(20, 900, 642, 100, 200, 3));
parkingSpaces.push(new UnusedSpaces(21, 900, 753, 100, 200, 3));
parkingSpaces.push(new UnusedSpaces(22, 900, 864, 100, 200, 3));

// Right set of spaces

parkingSpaces.push(new UnusedSpaces(23, 70, 1205, 200, 100, 2));
parkingSpaces.push(new UnusedSpaces(24, 181, 1205, 200, 100, 2));
parkingSpaces.push(new UnusedSpaces(25, 292, 1205, 200, 100, 2));
parkingSpaces.push(new UnusedSpaces(26, 403, 1205, 200, 100, 2));
parkingSpaces.push(new UnusedSpaces(27, 514, 1205, 200, 100, 2));
parkingSpaces.push(new UnusedSpaces(28, 625, 1205, 200, 100, 2));
parkingSpaces.push(new UnusedSpaces(29, 736, 1205, 200, 100, 2));
parkingSpaces.push(new UnusedSpaces(30, 847, 1205, 200, 100, 2));


var space1Left = parkingSpaces[1].left;

console.log(space1Left);

// unusedSpaces.push(new ParkingLot(i));

console.dir(parkingSpaces);