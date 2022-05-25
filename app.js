var translateBtn = document.querySelector("#translateBtn")
var txtInput = document.querySelector("#textArea")
var output = document.querySelector("#textArea2")


function EventHandler(){
output.innerText="it is " + txtInput.value

}

translateBtn.addEventListener("click",EventHandler)

