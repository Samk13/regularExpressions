// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


function titleCase(str) {
    str = str.toLowerCase();
    var result=[];
    str = str.split(" ");
    result = str.map(capitalize);
    result = result.join(" ");
    return result;
  }

  function capitalize(x){
      let originalLetter = x.charAt(0);
      let capitalLetter = originalLetter.toUpperCase();
      x = x.replace(originalLetter, capitalLetter);
      return x;

  }
  
  console.log(
  
  titleCase("I'm a little tea pot"));