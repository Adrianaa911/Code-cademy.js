// Forecast today
// const kelvin = 293; initiialy
const kelvin = 0;

// Convert kelvin in celsius
const celsius = kelvin - 273;

// Equation to calculate Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Method to build -in Math object to round down the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);


// Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:
//The temperature is TEMPERATURE degrees Fahrenheit.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


// Challenge: Convert Celsius to Newton scale
// Convert Celsius to Newton scale
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
