
// REGEX
/* let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
console.log(result) */
// ***************

// Match a Literal String with Different Possibilities


/* Using regexes like /coding/, you can look for the pattern "coding" in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted to match "yes" or "no", the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/. 
Complete the regex petRegex to match the pets "dog", "cat", "bird", or "fish".

//--------------

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
console.log(result); */




//***************** */



//You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i
/* 
let myString = "freeCodeCamp";
let fccRegex = /FREECodeCamp/i; // Change this line
let result = fccRegex.test(myString);
console.log(result); */



// ********************



// You can also extract the actual matches you found with the .match() method.

/* let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result); */



//********************* 


// To search or extract a pattern more than once, you can use the g flag.

/* 
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line
// console.log(result); 
*/

//********************* 
/* 
you can save time using the wildcard character: .
The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words. */

/* let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /et./; // Change this line
let result = unRegex.test(exampleStr);
console.log(result);

 */

 // **********************



/* 
 ou can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match "bag", "big", and "bug" but not "bog". You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters "a", "i", or "u". */

/* let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[ab]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result) */



//***********************




/* 
Inside a character set, you can define a range of characters to match using a hyphen character: -.

//For example, to match lowercase letters a through e you would use [a-e]. */


/* let quoteSample = "The Quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result); */



//**************


// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

 // Also, it is possible to combine a range of letters and numbers in a single character set.


// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result);


// **************************


// To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

// For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.


// let quoteSample = "3 blind @ {{mice.";
// let myRegex = /[^aeiou0-9]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result);


//  ********************


/*
Match Characters that Occur One or More Times
You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
//For example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a single match in "aabc" and return ["aa"].
*/ 

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/ig; // Change this line
// let result = difficultSpelling.match(myRegex);

// console.log(result);






// ************************




// an option that matches characters that occur zero or more times.

// The character to do this is the asterisk or star: *.

// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/; // Change this line
// let result = chewieQuote.match(chewieRegex);
// console.log(result);



// *******************

/*
Find Characters with Lazy Matching
In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].



*/ 

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/ig; // Change this line
// let result = text.match(myRegex);

// console.log(result);





// example crowd gathering
// let crowd = 'P1P2P3P4P5P6CCCP7P8P9P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3';

// let reCriminals = /C+/g; // Change this line

// let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);




//  ***********************


// Match Beginning String Patterns
// Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

// In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.
// string start:

// let rickyAndCal = "Cal and Ricky both Cal like racing.";
// let calRegex = /^cal/ig; // Change this line
// let result = calRegex.test(rickyAndCal);
// let result2 = rickyAndCal.match(calRegex);
// console.log(result);
// console.log(result2);



//   *******************




// Match Ending String Patterns
// In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

// You can search the end of strings using the dollar sign character $ at the end of the regex.

// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);
// console.log(result);


// ************************









// Match All Letters and Numbers
// Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

// let longHand = /[A-Za-z0-9_]+/;
// let shortHand = /\w+/;
// let numbers = "42";
// let varNames = "important_var";
// longHand.test(numbers); // Returns true
// shortHand.test(numbers); // Returns true
// longHand.test(varNames); // Returns true
// shortHand.test(varNames); // Returns true
// These shortcut character classes are also known as shorthand character classes.


// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.


// let quoteSample = "How vexingly qu123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2);
// console.log(result.length +"\n" + result);



//  *************************





// Match Everything But Letters and Numbers
// You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

// let shortHand = /\W/;
// let numbers = "42%";
// let sentence = "Coding!";
// numbers.match(shortHand); // Returns ["%"]
// sentence.match(shortHand); // Returns ["!"]

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.



// let quoteSample = "The five boxing wizards jump quickly.//.,[]{}@£dfdsdfg";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex);
// console.log(result.length +"\n" + result);



//  ******************************



// Match All Numbers
// You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.

// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

// let numString = "Your sandwich will be $5.00";
// let numRegex = /\d/g; // Change this line
// let result = numString.match(numRegex).length;
// console.log(result);




// *****************************


// Match All Non-Numbers
// The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

// The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.



// let numString = "Your sandwich will be $5.00";
// let noNumRegex = /\D/g; // Change this line
// let result = numString.match(noNumRegex).length;
// console.log(result);

// or 


// let username = "JackOfAllTrades";
// let userCheck = /[\w{2,}$\d+?]\D/g; // Change this line
// let result = userCheck.test(username);
// console.log(result);




// ***************************

// great website to test your regex
// https://regex101.com/



// ****************************



// Match Whitespace
// The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.

// You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].


// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);
// console.log(result);


// ****************************





// Regular Expressions: Match Non-Whitespace Characters
// You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace.

// Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let nonSpaceRegex = /\S/g;
// whiteSpace.match(nonSpaceRegex).length; // Returns 32

// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g; // Change this line
// let result = sample.match(countNonWhiteSpace);
// console.log(result);




// *************************************

// Specify Upper and Lower Number of Matches
// Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

// You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

// For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.

// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/;
// multipleA.test(A4); // Returns true
// multipleA.test(A2); // Returns false

// let ohStr = "Ohhh no";
// let ohRegex = /oh{3,6}\sno/i; // Change this line
// let result = ohRegex.test(ohStr);
// console.log(result);



// **********************************


// Specify Exact Number of Matches
// You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.

// To specify a certain number of patterns, just have that one number between the curly brackets.

// For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/.

// let A4 = "haaaah";
// let A3 = "haaah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleHA = /ha{3}h/;
// multipleHA.test(A4); // Returns false
// multipleHA.test(A3); // Returns true
// multipleHA.test(A100); // Returns false

// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/; // Change this line
// let result = timRegex.test(timStr);



// **********************************



// Check for All or None
// Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

// You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

// For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

// let american = "color";
// let british = "colour";
// let rainbowRegex= /colou?r/;
// rainbowRegex.test(american); // Returns true
// rainbowRegex.test(british); // Returns true
// Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);
// console.log(result);


// **********************************


//              Positive and Negative Lookahead
// Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

// There are two kinds of lookaheads: positive lookahead and negative lookahead.

// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

// On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

// Lookaheads are a bit confusing but some examples will help.

// let quit = "qu";
// let noquit = "qt";
// let quRegex= /q(?=u)/;
// let qRegex = /q(?!u)/;
// quit.match(quRegex); // Returns ["q"]
// noquit.match(qRegex); // Returns ["q"]
// A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// checkPass.test(password); // Returns true

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.




// let sampleWord = "astronaut";
// let pwRegex = /(?=\w{5,})(?=\D*\d{2,})/; // Change this line
// let result = pwRegex.test(sampleWord);









// **********************************







// Reuse Patterns Using Capture Groups
// Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.

// You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.

// To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.

// The example below matches any word that occurs twice separated by a space:

// let repeatStr = "regex regex";
// let repeatRegex = /(\w+)\s\1/;
// repeatRegex.test(repeatStr); // Returns true
// repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
// Using the .match() method on a string will return an array with the string it matches, along with its capture group.


// Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.


// let repeatNum = "42 42 42";
// let reRegex = /(\d+)\s\1\s\1/; // Change this line
// let result = repeatNum.match(reRegex);
// console.log(result);


// **********************************




// Use Capture Groups to Search and Replace
// Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

// You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

// let wrongText = "The sky is silver.";
// let silverRegex = /silver/;
// wrongText.replace(silverRegex, "blue");
// // Returns "The sky is blue."
// You can also access capture groups in the replacement string with dollar signs ($).

// "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// // Returns "Camp Code"

// Write a regex so that it will search for the string "good". Then update the replaceText variable to replace "good" with "okey-dokey".




// let huhText = "This sandwich is good.";
// let fixRegex = /good/; // Change this line
// let replaceText = "okey-dokey"; // Change this line
// let result = huhText.replace(fixRegex, replaceText);
// console.log(result)




// **********************************





// Remove Whitespace from Start and End
// Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.


// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

// Note
// The .trim() method would work here, but you'll need to complete this challenge using regular expressions.



// let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g; // Change this line
// let result = hello.replace(wsRegex,""); // Change this line
// console.log(hello);
// console.log(result);










// **********************************



// **********************************




// **********************************




// **********************************




// **********************************





//                  Debugging 













// **********************************







// **********************************









// **********************************








// **********************************



// Understanding the Differences between the freeCodeCamp and Browser Console



// This lends itself to some interesting behavior and might trip you up in the beginning, because a logged value that you expect to see only once may print out many more times depending on the number of tests and the values being passed to those tests.

// If you would like to see only your single output and not have to worry about running through the test cycles, you can use          



//  console.clear().





// ***************************

// JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol (new with ES6) and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.

// let seven = 7;
// let three = "3";
// console.log(seven + three);
// // Add your code below this line
// console.log(typeof seven);
// console.log(typeof three);




// **********************************



// Use Caution When Reinitializing Variables Inside a Loop
// Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.

// Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, or failing to reset a variable.

//  function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    
//     let newArray = [];
//     // let row = []; //before
//     for (let i = 0; i < m; i++) {
//       // Adds the m-th row into newArray
//        let row = []; // after
//       for (let j = 0; j < n; j++) {
//         // Pushes n zeroes into the current row to create the columns
//         row.push(0);
//       }
//       // Pushes the current row, which now has n zeroes in it, to the array
//       newArray.push(row);
//     }
//     return newArray;
//   }
  
//   let matrix = zeroArray(3, 2);
//   console.log(matrix);






// **********************************



// Prevent Infinite Loops with a Valid Terminal Condition
// The final topic is the dreaded infinite loop. Loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends the looping. Infinite loops are likely to freeze or crash the browser, and cause general program execution mayhem, which no one wants.

// There was an example of an infinite loop in the introduction to this section - it had no terminal condition to break out of the while loop inside loopy(). Do NOT call this function!

// function loopy() {
//   while(true) {
//     console.log("Hello, world!");
//   }
// }
// It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached. One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition. Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it.


// The myFunc() function contains an infinite loop because the terminal condition i != 4 will never evaluate to false (and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.


// function myFunc() {
//     for (let i = 0; i <= 4; i += 2) {
//       console.log("Still going!");
//     }
//   }




// **********************************




