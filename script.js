// Part 1: Area of a triangle
var base = 30;
var height = 40;
var area = 1 / 2 * (base * height);

var Area = {
    base: 30,
    height: 40,
    area: function()
        return (1 / 2 * (base * height));
    }
};

console.log("The area of a triangle with a base of " + Area.base + "and a height of " + Area.height + "is " + Area.area());

