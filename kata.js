/** @format */
// Sum by factoor --------------
let I = [
  -4, -92, -51, 77, 185, -34, 78, -35, -38, -23, -13, 64, 170, -37, 116, -15,
  191, 33, 25, 155, -43, 163,
];
const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
};
const primesToN = (n) => {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
};
function sumByFactor(I) {
  let res = [];
  let newList = I.map((number) => {
    return Math.abs(number);
  });
  const primes = primesToN(Math.max(...newList));
  primes.forEach((prime) => {
    let sum = (counter = 0);
    I.forEach((i) => {
      if (i % prime == 0) {
        counter++;
        sum += i;
      }
    });
    if (counter != 0) res.push([prime, sum]);
  });
  console.log(res);
}
// sumByFactor(I);
// Fibonacci square
function fibonacci(n) {
  let fibo = [1, 1];
  for (let i = 1; i < n; i++) {
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  return fibo;
}
function perimeter(n) {
  return fibonacci(n).reduce((prev, curr) => prev + curr) * 4;
}

// Twice Lineare
function dblLineare(n) {
  let res = [1];
  let i = 0;
  while (res.length/2 < n) { 
    // console.log(`${res[i]} Generates => ${2 * res[i] + 1} && ${3 * res[i] + 1}`)
    if(!res.includes(2 * res[i] + 1)) res.push(2 * res[i] + 1);
    if(!res.includes(3 * res[i] + 1)) res.push(3 * res[i] + 1);
    // res.sort((a,b) => a - b)
    i++
  }
  // res.pop()
  console.log(res);
  return res[n];
}
console.log(dblLineare(10));
console.log(dblLineare(20));
console.log(dblLineare(30));
console.log(dblLineare(50));
console.log(dblLineare(100));
