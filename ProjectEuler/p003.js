function isPrime(num) {
  if (num == 2 || num == 3) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function largestPrimeFactor(number) {
  let ans = -9999999999;
  for (let i = 2; i <= number; i++) {
    if (isPrime(i) && number % i === 0) {
      while (number % i === 0) {
        number = number / i;
      }
      ans = Math.max(ans, i);
    }
  }

  return ans;
}

largestPrimeFactor(3);
