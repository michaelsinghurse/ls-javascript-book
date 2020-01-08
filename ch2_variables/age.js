const ageInDecades = (currentAge, numDecades) => {
  console.log(`You are ${currentAge} years old.`);
  for (let i = 1; i <= numDecades; i++) {
    console.log(`In ${i * 10} years, you will be ${currentAge + i * 10} years old.`);
  }
};

console.log('Zofia:');
ageInDecades(3, 5);

console.log('Michael:');
ageInDecades(39, 5);