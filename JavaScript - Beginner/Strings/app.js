let value;

const firstName = "Louis";
const lastName = "Armstrong";
const langs = "Java, Python, C#";

value = firstName + lastName;
value = firstName + " " + lastName;
value = "Ahmet";
value += " Altioglu";

value = firstName.length; // -> 5 characters
value = firstName.concat(" ", lastName, " ", "Caz"); // -> firstName + " " + lastName + " " + "Caz"
value = firstName.toLowerCase(); // louis
value = firstName.toUpperCase(); // ARMSTRONG
value = firstName[firstName.length - 1];  // last element
value = firstName.indexOf("L");  // -> 0th index 
value = firstName.indexOf("o");  // -> first index 
value = firstName[0];  // -> L
value = lastName[2];   // -> m

value = firstName.charAt(0);  // -> L
value = firstName.charAt(firstName.length - 1 );  // -> s


value = langs.split(",");  // -> [Java, Python, C#]

value = langs.replace("Python", "CSS");  // -> Java, CSS, C#

value = langs.includes("Java");  // -> return true if found or false not found

console.log(value);
