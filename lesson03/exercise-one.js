let hobbies = ['Video Games', 'Movies', 'Camping', 'Hiking', 'Video Editing']; //Create an array with 5 elements
console.log(hobbies); //Log to console array with 5 elements.

hobbies.push('Cooking'); //Add element to the end of array.
console.log(hobbies); //Log array with 6 elements.

hobbies.splice(2, 1); //Remove 3rd element of array.
console.log(hobbies); //Log array with element removed.

let hobbiesString = hobbies.join(", "); //Create string from array.
console.log(hobbiesString); //Log string to console.
