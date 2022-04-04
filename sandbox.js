// 'node sandbox.js' for logs
function reverseWords(str) {
  const split = str.split("");
  const reverse = split.reverse();
  const join = reverse.join("");

  return join;
}
console.log(reverseWords("meows meower meah"));

function titleCase(str) {
  const meow = str.split(" ").map((w) => w.toUpperCase() + w.slice(1));

  return meow;
}
console.log(titleCase("kujibiki unbalance"));

function oddOrEven(number) {
  const split = number.toString().split("");
  const toNumber = split.map(Number);
  const sum = toNumber.reduce((a, b) => a + b);
  return sum % 2 === 0 ? "even" : "odd";
}
console.log(oddorEven(121));

function at(arr, index) {
  return index > -1 ? arr[index] : arr[arr.length + index];
}
console.log(at(["a", "b", "c", "d", "e"], 1));

function fizzBuzz(num) {
  const results = [];
  for (let i = 1; i <= num; i++) {
    results.push(i);
  }
  const final = results.map((item, i) => {
    if (item % 3 === 0 && item % 5 === 0) {
      return (item = "FizzBuzz");
    } else if (item % 5 === 0) {
      return (item = "Buzz");
    } else if (item % 3 === 0) {
      return (item = "Fizz");
    }
    return item;
  });

  return final;
}

console.log(fizzBuzz(16));

function anagrams(wordOne, wordTwo) {
  if (wordOne.length != wordTwo.length) {
    return false;
  }
  const wordOneEdited = wordOne.split("").sort().join("");
  const wordTwoEdited = wordTwo.split("").sort().join("");

  if (wordOneEdited === wordTwoEdited) {
    return true;
  }
  return false;
}
console.log(anagrams("superintended", "unpredestined"));
console.log(anagrams("pictorialness", "documentarily"));
console.log(anagrams("noodles", "meow"));
