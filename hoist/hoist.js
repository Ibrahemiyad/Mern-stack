// 1.
var hello;
console.log(hello);

// undefined

// 2.
var needle;
needle = "haystack";
test();
function test() {
    var needle;
    needle = "magnet";
    console.log(needle);
}
// magnet

// 3.
var brendan;
brendan = "super cool";
function print() {
    brendan = "only okay";
    console.log(brendan);
}
console.log(brendan);

// super cool


// 4.
var food;
food = "chicken";
console.log(food);
eat();
function eat() {
    var food;
    food = "half-chicken";
    console.log(food);
    food = "gone";
}
// chicken
// half-chicken

// 5.
mean();
console.log(food);
var mean;
mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}

console.log(food);

// error

// 6.
var genre;
console.log(genre); // undefined
genre = "disco";

rewind();

function rewind() {
    var genre;
    genre = "rock";
    console.log(genre); // 'rock'
    genre = "r&b";
    console.log(genre); // 'r&b'
}

console.log(genre); // 'disco'

// undefined
// rock
// r&b
// disco


// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo); 
    dojo = "burbank";
    console.log(dojo); 
}
console.log(dojo);
// san jose
// seattle
// burbank
// san jose




