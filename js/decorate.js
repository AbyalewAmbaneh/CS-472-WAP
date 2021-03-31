window.onload = function (){
	var okBigger = document.getElementById("bigger");
	okBigger.onclick = myFunction;
	var okCheck = document.getElementById("myCheck");
	okCheck.onchange = newFunction;

	var pigLatin = document.getElementById("igpay-atinlay");
    pigLatin.onclick = changeTextToPigLatin;

    var malkovitch = document.getElementById("malkovitch");
    malkovitch.onclick = replaceTextByWordLength;
}
timer = null;
function myFunction() {
	if(timer === null){
	timer = setInterval(bigger, 1000);
	}else{
	clearInterval(timer);
	timer = null;
	}	
}

function bigger() {
	var fSizeElem = document.getElementById("text").style.fontSize;
	
	/*if(fSizeElem == "")
		var fSize = 24;
	else var fSize = parseInt(fSizeElem);

	document.getElementById("text").style.fontSize = (fSize * 2) + "pt";
	*/
	if(fSizeElem == "")
		var fSize = 12;
	else var fSize = parseInt(fSizeElem);
	document.getElementById("text").style.fontSize = (fSize + 2) + "pt";
	
}

function newFunction() {
	var box = document.getElementById("myCheck");
	document.getElementById("text").style.fontWeight = "bold";
	
	if(box.checked) {
		document.getElementById("text").style.color = "green";
		document.getElementById("text").style.textDecoration = "underline";	
		document.body.style.backgroundImage = "url('./img/hundred.jpg')";
	}
	else {
		document.getElementById("text").style.fontWeight = "normal";
		document.getElementById("text").style.fontSize = "12pt";
		document.getElementById("text").style.color = "black";
		document.getElementById("text").style.textDecoration = "none";	
		document.body.style.backgroundImage = "none";
	}
}

function changeTextToPigLatin(){
    var myTextArea=document.getElementById("text");
    var textAreaValue=myTextArea.value;
    var pigLatinText=pigLatin(textAreaValue);
    myTextArea.value=pigLatinText;

}

function pigLatin(str) {
    // Convert string to lowercase
    str = str.toLowerCase()
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
  
    if (vowels.includes(str[0])) {
      // If first letter is a vowel
      return str + "ay";
    } else {
      // If the first letter isn't a vowel i.e is a consonant
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
          // Store the index at which the first vowel exists
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      // Compose final string
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
  }

  function replaceTextByWordLength(){
    var myTextArea=document.getElementById("text");
    var textAreaValue=myTextArea.value;
    var textAreaValueArray=textAreaValue.split(' ');

    var newarray = textAreaValueArray.map(replaceTextFunction);
    myTextArea.value=newarray.join(' ')
  }

  function replaceTextFunction(str){

    if(str.length >= 5){
        return "Malkovitch";
    }else{
        return str;
    }

  }
