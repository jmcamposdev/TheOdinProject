function eratosthenesSieve (number) {
  const sieve = new Array(number)
  .fill(1)
  .map((e,i) => i+1)
  .slice(1);

  for (let i = 0; i < sieve.length; i++) {
    const base = sieve[i];
    let multiple = 2;
    console.log(base);
    let numberToRemove = 0;
    for (let j = 0; j < sieve.length && numberToRemove < number; j++) {
      numberToRemove = base * multiple;
      multiple++;
      const index = sieve.indexOf(numberToRemove);
      if (index > 0) {
        sieve.splice(index, 1);
        console.log(sieve);
      }
    }

    multiple = 2;
    numberToRemove = 0;
  }

  return sieve;
}

console.log(eratosthenesSieve(13195)); // Should return 2, 3, 5, 7, 11, 13, 17, 19, 23, 29