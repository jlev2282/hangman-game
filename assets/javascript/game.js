confirmGame = confirm("Would you like to test your TV trivia knowledge?");

//..the js for the word array bank..//
main = {
	wordBank: ["Westworld", "StarTrek", "Legion", "GameofThrones", "Archer", "Simpsons","BobsBurgers","JaneTheVirgin","SeinFeld","RachelMaddow"],
	
};



Words= {};
Words.List= [];

Words.List[1] = "westworld";
Words.List[2] = "startrek";
Words.List[3] = "legion";
Words.List[4] = "gameofthrones";
Words.List[5] = "archer";
Words.List[6] = "simpsons";
Words.List[7] = "bobsburgers";
Words.List[8] = "janethevirgin";
Words.List[9] = "seinfeld";
Words.List[10] = "rachelmaddow";

Words.length = Words.List.length;

//..the js for the array ..//
Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Guesses = 7;
Main.Numinwordbank = Words.length;

Main.Word = "";
Main.WordU = "";

Main.PullWord = function() {
	Main.Word = Words.List[(Math.floor(Math.random()*Main.Numinwordbank))];
}

Main.SetUnderline = function(){
	Main.PullWord();
	console.log(Main.Word);
	for (i=0; i<Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i)
		Main.WordUArray[i] = "_ ";
	}

	Main.WordU = Main.WordUArray.join("");
	document.getElementById("currentword").innerHTML= Main.WordU;
	document.getElementById("NumLetters").innerHTML= Main.Word.length;
}

Main.SetUnderline();

document.onkeyup = function(event){
	var userguess=event.key;
	console.log(userguess);
	if (LettersGuessed.indexOf(userguess)===-1){
		LettersGuessed.push(userguess);
		document.getElementById("letters-guessed").innerHTML=LettersGuessed;
	}

};

LettersGuessed = [];

Main.GuessesRemaining = function keyPress(){

}