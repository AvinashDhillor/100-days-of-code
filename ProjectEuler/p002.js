function fiboEvenSum(n) {
  if (n == 1) return 0;
  let first = 1,
    second = 2,
    sum = 2;
  while (first + second <= n) {
    let tmp = first;
    first = second;
    second += tmp;
    if (!(second & 1)) sum += second;
  }
  console.log(sum);
  return sum;
}

fiboEvenSum(10);
