// Part 1: Area of a triangle

var base = 30;
var height = 40;
var area = 1 / 2 * (base * height);
var message = "The area of a triangle with a base of " + base + " and a height of " + height + " is " + area + ".";

document.getElementById("one").innerHTML = message;

// Part 2: Hypotenuse of a triangle

function calcHypotenuse (b,h) {
  var hypotenuse = Math.sqrt((b*b) + (h * h));
  return hypotenuse;
};

console.log(calcHypotenuse(base, height));
var hypotenuse = calcHypotenuse(base, height);
var message = "The hypotenuse of a triangle with a base of " + base + " and a height of " + height + " is " + hypotenuse + "."; 

document.getElementById("two").innerHTML = message;

// Part 3: Triangle object

var triangle = {
    base: 30,
    height: 40,
    canvasId: "canvas",
    calcArea: function() {
        return 0.5 * this.base * this.height;    
    },
    calcHypotenuse: function() {
        return Math.sqrt(this.base * this.base + this.height * this.height);
    },
    drawIt: function() {               
        drawTriangle(this.base, this.height, this.canvasId);
    }
};

var message1 = "The area of a triangle with a base of " + base + " and a height of " + height + " is " + area + ".";
var message2 = "The hypotenuse of a triangle with a base of " + base + " and a height of " + height + " is " + hypotenuse + ".";

document.getElementById("three").innerHTML = message1 + "<br>" + message2;

triangle.drawIt();

// Part 4: User entered base and height

var userBase = prompt("Enter a value for the base that is at least 10.");

if (userBase < 10) {
  alert("Error!")
}
else 
  var userHeight = prompt("Enter a value for the height that is greater than 0.");
    if (userHeight <= 0) {
      alert("Error!")
    }
    else 
      triangle.base = userBase; 
      triangle.height = userHeight;
    

var message1 = "The area of a triangle with a base of " + userBase + " and a height of " + userHeight + " is " + triangle.calcArea() + ".";
var message2 = "The hypotenuse of a triangle with a base of " + userBase + " and a height of " + userHeight + " is " + triangle.calcHypotenuse() + ".";

document.getElementById("four").innerHTML = message1 + "<br>" + message2;

triangle.canvasId = "canvas2";

triangle.drawIt();

//Part 5: Lots of triangles

document.getElementById("five").innerHTML = "Growing Triangles";

for (var i=1; i<6; i++) {
  triangle.base = 30 * i; 
  triangle.height = 20 * i;
  triangle.canvasId = "canvas3";
  triangle.drawIt();
}

