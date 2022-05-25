var translateBtn = document.querySelector("#translateBtn")
var txtInput = document.querySelector("#textArea")

function EventHandler(){
    console.log("clicked")
console.log("input",txtInput.value)
}

translateBtn.addEventListener("click",EventHandler)
