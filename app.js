var input = document.querySelector("#textArea")
var button = document.querySelector("#translateBtn")
var output = document.querySelector("#textArea2")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function translationURL(text){
return serverURL + "?" + "text=" + text  
}

function eventhandler(){
    var inputText = input.value
fetch(translationURL(inputText))
.then(response=>response.json())
.then(json=>{
    var translated = json.contents.translated
    output.innerText=translated
})
}


button.addEventListener("click", eventhandler)


