var userName= prompt("HI. What's your name");

// Define "startGame" function
function startGame (){
    var confirmGame = confirm("Would you like to play a game "+ userName);

    if(confirmGame){
        wordSelect();
    }
    else{
        alert("Come on "+userName+" play");
        var confirmGame2 = confirm("Would you like to play a game "+userName+"....pleaaaase");

        if(confirmGame2){
        wordSelect();
        }
        else{
            alert("Too bad. You're playing -_-");
            wordSelect();
        }
    }
};

// Run "StartGame" function
startGame();

// Store random wordbank as "currentWord". Break "currentword" into an array of letters called "selectedWord"
// Assign number of dashes on screen equal to length of "selectedWord" array
// Define "selectDashes" array
// loop over "selectedWord" and push "_" into "selectDashes" array
// Define counter for guesses remaining as "guessesRemaining". Set equal to "5"
// Define "lettersRemaining" as an array equal to "selectedWord.length"


function wordSelect(){
    alert("Press Enter to Begin");

    // Define Wordbank Object
    wordBank =["Westworld", "StarTrek", "Legion", "GameofThrones", "Archer", "Simpsons","BobsBurgers","JaneTheVirgin","SeinFeld","RachelMaddow"];

    // Pick random word from Wordbank
    currentWord = wordBank[(Math.floor(Math.random()*wordBank.length+1))];
    console.log(currentWord);

        selectedWord=[];
        selectDashes=[];

        selectedWord=currentWord.split("");

        for(var i=0; i<currentWord.length; i++) {

            selectDashes[i]="_";
        }

        console.log(selectedWord);
        console.log(selectDashes);

    lettersRemaining=selectedWord.length;
    document.getElementById("lettersNWord").innerHTML=lettersRemaining;   
    guessesRemaining=5;
    document.getElementById("guessCounter").innerHTML=guessesRemaining;

    // putDashes();
};

letterGuess();

// function putDashes(selectDashes){
//     document.getElementById("currentWord").innerHTML=selectDashes;
// };

var userGuess="";

// Event listener to capture upkeys.
function letterGuess(){
    document.onkeypress = function(event){
	userGuess=event.key;
	console.log(userGuess);
    findLetter(userGuess);
	// if (LettersGuessed.indexOf(userGuess)===-1){
	// 	LettersGuessed.push(userGuess);
	// 	document.getElementById("letters-guessed").innerHTML=LettersGuessed;
	}
};

//holds letters grabbed from onkeyup listener
lettersGuessed = [];

//loop over selected word array with guess and change index in dashes array, then update dashes on screen
function findLetter(){
    for(var i=0; i<selectedWord.length; i++) {
        if(userGuess==selectedWord[i]){
            alert("Good guess");
            selectDashes[i]=selectedWord[i];
        }
    }
    guessesRemaining -=1;
    document.getElementById("guessCounter").innerHTML=guessesRemaining;
    // putDashes();
    lettersGuessed.push(userGuess);
    console.log(lettersGuessed);
    letterGuess();
};

// Store upkey event as "currentGuess"

// loop over "selectedWord" array to compare "currentGuess". If "currentGuess" is equal to "selectedWord"[i], alert "Good Guess",  change
// "selectDashes[i]" = selectedWord[i], decrease "lettersRemaining" by "1", else decrease "guessesRemaining" by "1"

// if "guessesRemaining"=0, alert "You Lose!", then run "startGame" function

// else if "lettersRemaining"=0, alert "You Win!", then run "startGame" function





