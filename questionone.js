
let number = [1,3,2,7,4,6]
let p = 3; // p is the number of positions to shift the array
let d = 0; // d is the direction to shift the array

function shiftArray(number, p, d) {
    
    if (d === 0) {
        return number.slice(p).concat(number.slice(0, p));
    } else {
        return number.slice(-p).concat(number.slice(0, -p));
    }
}
console.log(shiftArray(number, p, d));