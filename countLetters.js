var letterCount = {};

function countLetters(count) {
  count = count.split(" ").join("");
  for(i = 0; i < count.length;i++) {
    if(letterCount[count[i]]) {
      letterCount[count[i]] += 1
    } else {
      letterCount[count[i]] = 1
    }
  }
}
countLetters("lighthouse in the house")
console.log(letterCount);
