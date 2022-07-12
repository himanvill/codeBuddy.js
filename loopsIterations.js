// level 2

//Write a function in Javascript to print the sum of the first n fibonacci numbers.

function sum(x) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  let series = [];
  for (let i = 0; i < x; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    series.push(n1);
  }
  let sum = series.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  console.log(series);
  console.log("Sum:", sum);
}
sum(6);
