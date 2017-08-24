userName= prompt("Hi. What's your name");
var userGuess="";
var correctGuesses=0;

//holds letters grabbed from onkeyup listener
lettersGuessed = [];

// Define "startGame" function
function startGame (){
    var confirmGame = confirm("Would you like to play a game "+ userName);

    if(confirmGame){
        wordSelect();
    }
    else{
        confirmGame2= confirm("Come on "+userName+" play.");

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

    // Define Wordbank Object
    wordBank =["Westworld", "The Magicians", "Iron Fist", "Star Trek", "Stranger Things", "Legion", "Game of Thrones", "Archer", "Simpsons","Bobs Burgers","Jane the Virgin","SeinFeld","Rachel Maddow"];

    // Pick random word from Wordbank
    currentWord = wordBank[(Math.floor(Math.random()*wordBank.length+1))];
    console.log(currentWord);

    selectDashes=[];
    selectedWord=[];


        selectedWord=currentWord.split("");

        $( "#currentword" ).empty();
        for(var i=0; i<currentWord.length; i++) {
            selectDashes[i]="_";
            // selectDashes.push("_");
            $("#currentword").prepend(selectDashes[i]+" ");
        }

        console.log(selectedWord);
        console.log(selectDashes);

    lettersRemaining=selectedWord.length;
    document.getElementById("lettersNWord").innerHTML=lettersRemaining;   
    guessesRemaining=5;
    document.getElementById("guessCounter").innerHTML=guessesRemaining;

    // putDashes();
};



//function that takes each entry from selectdashes array and sets the html of "currentWord" to it
function putDashes(){
    // for(var i=0; i<selectDashes.length; i++) {
    // document.getElementById("currentword").innerHTML=selectDashes[i];
    // }
    $("#currentword").empty();
    selectDashes.toString();
    document.getElementById("currentword").innerHTML=selectDashes;
};

letterGuess();

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


//loop over selected word array with guess and change index in dashes array, then update dashes on screen
function findLetter(){
    for(var i=0; i<selectedWord.length; i++) {
        if(userGuess==selectedWord[i]){
            alert("Good guess!");
            selectDashes[i]=selectedWord[i];
            correctGuesses++;
        }
    };

    putDashes(selectDashes);

    lettersRemaining -=correctGuesses;
    correctGuesses=0;
    // guessesRemaining -=1;
    document.getElementById("guessCounter").innerHTML=guessesRemaining;
    document.getElementById("lettersNWord").innerHTML=lettersRemaining; 
    // putDashes();
    lettersGuessed.push(userGuess);
    document.getElementById("lettersguessed").innerHTML=lettersGuessed;

    winCheck(lettersRemaining, guessesRemaining);
    console.log(lettersGuessed);

};

function winCheck(num1, num2) {
    if(num1=0){
        alert(userName+ ", You Win!");
        startGame();
        console.log("you win!");
    };
    // if(num1>0){
    //     letterGuess();
    //     }
        
    //     else if (num1=0){
    //         alert(userName+ ", You Win!");
    //         startGame();
    //     }
        
    //     else if (num2=0){
    //         alert("Sorry "+userName+". You lose :(");
    //         startGame();
    //     }
};




// loop over "selectedWord" array to compare "currentGuess". If "currentGuess" is equal to "selectedWord"[i], alert "Good Guess",  change
// "selectDashes[i]" = selectedWord[i], decrease "lettersRemaining" by "1", else decrease "guessesRemaining" by "1"

// if "guessesRemaining"=0, alert "You Lose!", then run "startGame" function

// else if "lettersRemaining"=0, alert "You Win!", then run "startGame" function





