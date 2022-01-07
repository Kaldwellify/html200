let favoriteFood = ['Chicken Wings', 'Ramen', 'Rice', 'Pork Belly', 'Gosari']; //Create an array that has at least 5 strings
let i = 1; // Variable that will be used for the index starting at 1 instead of 0.

favoriteFood.forEach(function(food) {
  console.log((i++) + ',' + food);
}) // Use a for loop to console log all of the elements plus the index and a comma.
