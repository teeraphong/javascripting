var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


var filtered = numbers.filter(function(numbers) {
    return (numbers % 2 === 0);
});
console.log(filtered);


/*
var filteredForLoop = [];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        filteredForLoop.push(numbers[i]);
    }
}
console.log(filteredForLoop);
*/

/*
function isEvenNumber(number) {
    return (number % 2 === 0);
}
var filteredForLoop = [];
for (var i = 0; i < numbers.length; i++) {
    if (isEvenNumber(numbers[i])) {
        filteredForLoop.push(numbers[i]);
    }
}
console.log(filteredForLoop);
*/
