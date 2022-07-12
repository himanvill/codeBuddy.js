// level 2
// Write a function to remove all even numbers from an Array.
let arrNum = [1, 3, 4, 6, 7, 8];

function removeEven(arr) {
  arr = arr.filter((el) => {
    return el % 2 != 0;
  });
  return arr;
}

console.log(removeEven(arrNum));

//2. Replace all the vowels in a string with uppercase vowels.

let name = "Elie";

function convertVowel(nameStr) {
  nameStr = nameStr.split("");
  let N = nameStr.length;
  for (let i = 0; i < N; i++) {
    if (
      nameStr[i] === "a" ||
      nameStr[i] === "e" ||
      nameStr[i] === "i" ||
      nameStr[i] === "o" ||
      nameStr[i] === "u"
    ) {
      console.log(nameStr[i]);
      nameStr[i] = nameStr[i].toUpperCase();
    }
  }
  return nameStr.join("");
}
console.log(convertVowel(name));

// 3. Write a function to find the maximum number in an array.
let numArr = [1, 3, 4, 6, 7, 8, 2, 5];

function maxNum(arr) {
  arr.sort((a, b) => {
    return b - a;
  });
  return arr[0];
}
maxNum(numArr);
