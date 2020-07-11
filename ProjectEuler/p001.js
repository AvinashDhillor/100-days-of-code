function multiplesOf3and5(number) {
  let sum = 0;
  for (let x = 1; x < number; x++) {
    if (x % 15 == 0) sum += x;
    else if (x % 3 == 0 || x % 5 == 0) sum += x;
  }
  console.log(sum);

  return sum;
}

multiplesOf3and5(1000);
