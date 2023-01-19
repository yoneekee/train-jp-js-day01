let animals_c = ["lion", "tiger", "rabbit"];
console.log(animals_c);

const animals = ["lion", "tiger", "rabbit"];
animals.push("dog");
console.log(animals);
animals.pop();
console.log(animals);

console.log(typeof animals);
console.log(typeof animals_c);

const myAnimals = animals;
console.log(myAnimals);

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
    i++;
  }
}
