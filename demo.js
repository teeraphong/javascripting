var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 12];
var findNumber = 10;
var result = [];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === findNumber) {
        result.push(numbers[i]);
    }
}
console.log(result);
