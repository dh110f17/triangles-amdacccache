// Part 1: Area of a triangle
var base = 30;
var height = 40;
var area = 1 / 2 * (base * height);
var message = "The area of a triangle with a base of " + base + " and a height of " + height + " is " + area + ".";

document.getElementById("one").innerHTML = message;

// Part 2: Hypotenuse of a triangle

function calcHypotenuse (b,h) {
  var hypotenuse = Math.sqrt((b*b) + (h * h));
  return hypotenuse
};

console.log(calcHypotenuse(base, height));
var hypotenuse = calcHypotenuse(base, height);
var message = "The hypotenuse of a triangle with a base of " + base + " and a height of " + height + " is " + hypotenuse + "."; 

document.getElementById("two").innerHTML = message;

// Part 3: Triangle object
var triangle = {
  base: 30,
  height: 40,
  canvasID: "canvas",
  calcArea: function() {
    return (1/2) * this.base * this.height;
  },
  calcHypotenuse: function() {
    return Math.sqrt((this.base * this.base) + (this.height * this.height));
  },
  drawIt: function() {
    drawTriangle(this.base, this.height, this.canvasId);
  },
};

var message1 = "The area of a triangle with a base of " + base + " and a height of " + height + " is " + area + ".";
var message2 = "The hypotenuse of a triangle with a base of " + base + " and a height of " + height + " is " + hypotenuse + ".";

document.getElementById("three").innerHTML = message1 + message2;
triangle.drawIt();


 





