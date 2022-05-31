var translateBtn = document.querySelector("#translateBtn")
var txtInput = document.querySelector("#textArea")
var output = document.querySelector("#textArea2")

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function translateURL(text){
return url+"?"+"text:"+text
}
function EventHandler(){
var inputText=txtInput.value
fetch(translateURL(inputText))
.then(response=>response.json())
.then(json=>console.log(json))
};

translateBtn.addEventListener("click",EventHandler)

