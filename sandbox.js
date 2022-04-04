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
