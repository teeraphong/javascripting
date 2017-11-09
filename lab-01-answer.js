function checkFilter(value) {
    return (value < 1500);
}
function checkFilterObj(value) {
    return (value['cost'] < 1500);
}
var restaurants = [
    {
      name: 'Audrey',
      place: 'esplanade',
      cost: 1000
    },
    {
      name: 'Pizza Company',
      place: 'central',
      cost: 1500
    },
    {
      name: 'Jone Salad',
      place: 'esplanade',
      cost: 500
    },
    {
      name: 'Swesens',
      place: 'esplanade',
      cost: 1000
    },
    {
      name: 'Pizza Hut',
      place: 'central',
      cost: 1500
    }
];
// var restaurants = restaurants.filter(function(restaurants) {
//     return checkFilter(restaurants['cost']);
// });
var restaurants = restaurants.filter(checkFilterObj);
console.log(restaurants);