const sentence = "The movie is not that bad, I like it"; // Example sentence

// Find the positions of "not" and "bad" using indexOf()
const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");

// Check if "bad" comes after "not" and replace if necessary
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  const newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(newSentence);
} else {
  console.log(sentence); // Print original sentence if not applicable
}
