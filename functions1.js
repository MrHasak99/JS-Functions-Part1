function printName(name) {
  console.log(name);
}
printName("Hamad AlKhalaf");

function printAge(birthYear) {
  age = 2024 - birthYear;
  console.log(age);
}
printAge(1999);

function printAgeAndName(name, birthYear) {
  age = 2024 - birthYear;
  console.log(`Hello ${name}, you are ${age} years old`);
}
printAgeAndName("Hamad", 1999);

function printHello(name, language) {
  if (language == "en") {
    console.log(`Hello ${name}`);
  } else if (language == "es") {
    console.log(`Hola ${name}`);
  } else if (language == "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language == "tr") {
    console.log(`Merhaba ${name}`);
  } else {
    console.log("Language not recognized, please try again");
  }
}
printHello("Hamad", "es");

function printMax(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    console.log(firstNumber);
  } else {
    console.log(secondNumber);
  }
}
printMax(36, 25);
