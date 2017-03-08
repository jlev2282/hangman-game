//..the js for the word array bank..//
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

Words.Length = Words.List.Length;

//..the js for the array ..//
Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Guesses = 7;
Main.Numinwordbank = Words.Length;

Main.Word = "test";
Main.WordU = "";

Main.PullWord = function() {
	Main.Word = Words.List[(Math.floor(Math.random()*Main.Numinwordbank))];
}

Main.SetUnderline = function(){
	Main.Pullword();
	for (i=0; i<Main.Word.Length; i++){
		Main.WordArray[i] = Main.Word.charAt(i)
		Main.WordUArray[i] = "_";
	}

	Main.WordU = Main.WordUArray.join("");
	document.getElementById("currentword").innerHTML= Main.WordU;
	document.getElementById("NumLetters").innerHTML= Main.Word.Length;
}