var intervalId

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

function Space(id, top, left, width, height, openingDir, orientation) {
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

parkingSpaces.push(new Space(0, 67, 63, 200, 100, 4));
parkingSpaces.push(new Space(1, 178, 63, 200, 100, 4));
parkingSpaces.push(new Space(2, 289, 63, 200, 100, 4));
parkingSpaces.push(new Space(3, 400, 63, 200, 100, 4));
parkingSpaces.push(new Space(4, 511, 63, 200, 100, 4));
parkingSpaces.push(new Space(5, 622, 63, 200, 100, 4));
parkingSpaces.push(new Space(6, 733, 63, 200, 100, 4));
parkingSpaces.push(new Space(7, 844, 63, 200, 100, 4));
parkingSpaces.push(new Space(8, 955, 63, 200, 100, 4));

//Top center set of spaces index 0-8)

parkingSpaces.push(new Space(9, 125, 531, 100, 200, 1));
parkingSpaces.push(new Space(10, 125, 642, 100, 200, 1));
parkingSpaces.push(new Space(11, 125, 753, 100, 200, 1));
parkingSpaces.push(new Space(12, 125, 864, 100, 200, 1));

//Middle middle set of spaces

parkingSpaces.push(new Space(13, 505, 420, 100, 200, 3));
parkingSpaces.push(new Space(14, 505, 531, 100, 200, 3));
parkingSpaces.push(new Space(15, 505, 642, 100, 200, 3));
parkingSpaces.push(new Space(16, 505, 753, 100, 200, 3));
parkingSpaces.push(new Space(17, 505, 864, 100, 200, 3));

//Middle bottom set of spaces

parkingSpaces.push(new Space(18, 900, 420, 100, 200, 3));
parkingSpaces.push(new Space(19, 900, 531, 100, 200, 3));
parkingSpaces.push(new Space(20, 900, 642, 100, 200, 3));
parkingSpaces.push(new Space(21, 900, 753, 100, 200, 3));
parkingSpaces.push(new Space(22, 900, 864, 100, 200, 3));

// Right set of spaces

parkingSpaces.push(new Space(23, 70, 1205, 200, 100, 2));
parkingSpaces.push(new Space(24, 181, 1205, 200, 100, 2));
parkingSpaces.push(new Space(25, 292, 1205, 200, 100, 2));
parkingSpaces.push(new Space(26, 403, 1205, 200, 100, 2));
parkingSpaces.push(new Space(27, 514, 1205, 200, 100, 2));
parkingSpaces.push(new Space(28, 625, 1205, 200, 100, 2));
parkingSpaces.push(new Space(29, 736, 1205, 200, 100, 2));
parkingSpaces.push(new Space(30, 847, 1205, 200, 100, 2));


var space1Left = parkingSpaces[1].left; 

console.log(space1Left);

// unusedSpaces.push(new ParkingLot(i));

console.dir(parkingSpaces);