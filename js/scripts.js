// Back End
var validateGuess = function(guess){
  if(guess && (typeof guess === "string") && guess.length==1 && (guess != " ")){
    return true;
  } else{
    return false;
  }
}

var replaceVowelWithDash = function (str){
  var allVowels = ["a", "e", "i", "o", "u", "y"];
  allVowels.forEach(function(vowel){
    // console.log("vowel being tested is " + vowel);
    str = str.split(vowel).join("-");
  });
  return str;
}

String.prototype.replaceAt=function(index, character) {
  return this.substr(0, index) + character + this.substr(index+character.length);
 }

var revealedWord ="Believe you can and you're halfway there. Theodore Roosevelt";
var wordHiddenVowels = replaceVowelWithDash(revealedWord);

// Front End
$(function(){
  // console.log(wordHiddenVowels);
  $("#wordHiddenVowels").text(wordHiddenVowels);
  $("#usrSubmission").submit(function(){
    event.preventDefault();
    var vowelGuess = $("#vowelInput").val();
    if(validateGuess(vowelGuess)){
      // var revealedAsArray = revealedWord.split("");
      // console.log(revealedAsArray);
      for(var i = 0; i<revealedWord.length; i++){
        // $("#hidden-vowel-box").remove();
        // $("#hidden-vowel-box").append("<h4 id="wordHiddenVowels"></h4>");
        if(revealedWord[i] === vowelGuess){
          // you found a match
          // console.log("You found a match");
          // console.log("wordHiddenVowels is " + wordHiddenVowels);
          // console.log("i is " + i);
          // console.log("vowel guess is " + vowelGuess);
          // temporarily make array and then join it back after manipulation
          // wordHiddenVowels = wordHiddenVowels.split();
          // console.log("split wordHiddenVowels is " + wordHiddenVowels);
          wordHiddenVowels[i] = vowelGuess;
          wordHiddenVowels = wordHiddenVowels.replaceAt(i, vowelGuess);
          // wordHiddenVowels = wordHiddenVowels.join();
          // console.log("New current phrase is " + wordHiddenVowels);
          $("#wordHiddenVowels").text(wordHiddenVowels);
        } else {
          // try again
        }
        if(revealedWord === wordHiddenVowels){
          // you won
          // console.log("You've won!");
          // $("#wordHiddenVowels").addClass("turnGreen");
          $("#hidden-vowel-box").css("width", revealedWord.length*10+"px");
          $("#hidden-vowel-box").addClass("turnBorderGreen");

          // $("#hidden-vowel-box").append("<h4>You guessed it!</h4>");

        }
      }
    }
  });
});
