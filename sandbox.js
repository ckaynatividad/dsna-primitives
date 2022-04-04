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
