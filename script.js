// Task 1: Create a variable called `newYearsResolutions` and set it's value to be a new array with at
// least 3 strings inside of it.

const newYearsResolutions = [
  "Learn a new language",
  "Exercise regularly",
  "Travel more",
];

// Task 2: Create a new variable called `nextNewYearsResolution` and set it's value to the first
// item from the newYearsResolutions array (see the docs above for a hint on how to select items
// from arrays).

const nextNewYearsResolution = newYearsResolutions[0];

// Task 3: Use console.log() to print the 3rd item in the newYearsResolutions array without setting
// any variables.

console.log(newYearsResolutions[2]);

// Here's an array which the next few tasks will build upon. Don't change it here!
const months = [
  "Jon",
  "Feb",
  "Mar",
  "Apr",
  "Jun",
  "May",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
];

// You can modify arrays in a similar way to how you fetched a single value, and then using
// assignment to give it a new value. For example, there's a typo in the first month of the
// months array. It says "Jon" but it should say "Jan". To fix this, we can find the 1st
// item (counting from 0) and assign it a new value:
months[0] = "Jan";

// Task 1: Use console.log() to print the months array. Notice how the first month is fixed!

console.log(months);

// Task 2: The array of months above has another mistake; "Jun" comes before "May". Without
// modifying the line above, use assignment to fix the mistake by re-assigning the 5th
// and 6th items in the array. After you've done that, use console.log() to log the
// months array.

months[4] = "May";
months[5] = "Jun";

// Task 3: Arrays have a property which you can use to find the number of items it contains.
// Try to find it in the docs and then use it in a console.log() below to print the number
// of items in the months array. (Docs: https://www.w3schools.com/js/js_arrays.asp)

console.log(months.length);

// Task 4: There's another problem with the array! It's missing December.. No christmas!!! Fix it
// by using months.push() to add a new item to the end of the array and then use console.log()
// to print the array to the console. Check the docs for more information on .push().

months.push("December");
console.log(months);

// Task 5: There's another function which can be called to remove an item from the array
// (it was in the lecture on JavaScript, or try to find it in the docs). Use it to remove
// the last item from the array and then print the months array using console.log()

months.pop(); 
console.log(months);

// Task 6: Using splice(), you can remove items from the middle of arrays. It requires two
// arguments; first, the index from where you'd like to start deleting, and second, the
// number of items you'd like to delete. Use .splice() to remove "Jul" from the months array.

months.splice(5, 1);

// This array of dog breeds will be used for the examples below. Don't modify it here!
const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"];

// When invoked, this function will print "The {dogName} barks." You'll use this below. Don't modify it here!
const printDogName = (dogName) => {
  console.log("The " + dogName + " barks.");
};

// Task 1: Pass the printDogName function into a .forEach call on the `dogs` array, to
// make it print "The {dogName} barks." for each item in the array.

dogs.forEach(printDogName);


// Task 2: Create a new function called `printDogNameUppercase` which works similarly
// to the `printDogName` function but makes the string uppercase. (See https://www.w3schools.com/jsref/jsref_touppercase.asp
// for how to make a string uppercase). Use .forEach to run the function for each
// dog in the dogs array.

const printDogNameUppercase = (dogName) => {
    console.log("The " + dogName.toUpperCase() + " barks.");
  };
  
  dogs.forEach(printDogNameUppercase);

// Task 3: Write a forEach function which uses an anonymous function instead of defining a
// named function like the examples above (hint; the lecture material used anonymous functions)
// and uses console.log to print "The {dogName} needs to go for a walk!".

dogs.forEach(function(dogName) {
    console.log("The " + dogName + " needs to go for a walk!");
  });

// The last examples used forEach to iterate over an array. .forEach() invoked
// a function for each item in an array, but doesn't actually return anything.

const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"];

// This function is similar to the last task of the iteration challenges, except
// it returns a string from the function instead of using console.log().
const doggieWalks = dogs.forEach((dogName) => {
  return "The " + dogName + " needs to go for a walk!";
});

// Task 1: Use console.log to log the `doggieWalks` variable below to see what was
// actually returned from .forEach()

const doggieWalks = dogs.map((dogName) => {
    return "The " + dogName + " needs to go for a walk!";
  });
  
  console.log(doggieWalks);

// Task 2: Now change .forEach to .map on line 9 and run the code again.
// See the difference? .map() returns the values from the function. The `return`
// in the mapping function is very important. Try removing it to see what happens.

const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"];

const doggieWalks = dogs.map((dogName) => {
  "The " + dogName + " needs to go for a walk!";
});

console.log(doggieWalks);
doggieWalks will be an array of undefined values because the function no longer returns anything, and .map() captures the return value of the function for each element.



// Task 3: Create a new variable called `shoutyDogNames` and assign it to a new
// dogs.map() call. Inside the dogs.map() call, write a function which returns a
// dog's name in uppercase. Finally, log the `shoutyDogNames` variable.

const shoutyDogNames = dogs.map((dogName) => {
    return dogName.toUpperCase();
  });
  
  console.log(shoutyDogNames);

// Objects allow you to store data and functions. Unlike arrays,
// they are not ordered, and so do not use indexes at all for
// retrieving or modifying their values. Instead they use keys and values
// to store pointers to data.
//
// Have a read through the documentation here before you begin: https://www.w3schools.com/js/js_objects.asp
// The documentation mentions methods, which is where you assign a
// function to a key in the object. We'll be focusing entirely on the more simple
// version it mentioned; properties.

// Task 1: Below is a variable called person which has an object assigned to it.
// The object has one property with the key (studentAt) which has a string "Chas" as its
// value. Add two more properties (keys and values) to the object; one called name which
// should store your name as a string, and one called age which should store
// your age as a number.

const person = {
    studentAt: "Chas",
    name: "Julia", 
    age: 28, 
  };
  
  console.log(person);

// Task 2: Add a fourth property to the object using the key `favoriteFoods`. Its value
// should be an array of strings with some foods you like.

const person = {
    studentAt: "Chas",
    name: "Julia",
    age: 28,
    favoriteFoods: ["Sushi", "crawfish", "ostrich"] 
  };
  
  console.log(person);

// Task 3: Use the dot notation to print the name and age properties from the person
// object using console.log.

console.log(person.name);
console.log(person.age); 

// Task 4: You can add a property to an object using the dot notation and using assignment to
// set a its value. Do this to add a new property to the person object with the key `eyeColor`
// and value being a string with the color of your eyes.

person.eyeColor = "brown";

// Task 5: Objects can be nested within other objects. To fetch a value, you must chain
// the dot notation. For example, you could select the entire `adult` object from the
// `dog` object below using the notation `dog.labrador.adult`. Using the dog object below,
// use console.log() to print the name of the puppy (so it should print "Buster").
const dogs = {
  labrador: {
    adult: {
      name: "Marley",
    },
    puppy: {
      name: "Buster",
    },
  },
};
console.log(dogs.labrador.puppy.name);
