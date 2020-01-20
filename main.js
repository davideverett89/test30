console.log("Test 30");

// Factory Function

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log("draw");
        }
    }
}

//Constructor Function

const circle = createCircle(1);

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}

const another = new Circle(7);
console.log(circle);
console.log(another);

let x = { value: 10};
let y = x;

x.value = 20;

console.log(y);
console.log(x);

let number = 10;
function increase(number) {
    number++;
}

increase(number);
console.log(number);