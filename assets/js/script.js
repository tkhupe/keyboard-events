

function keydownAction(event) {
  // TODO: Complete keydown function
  
  var keyPress = event.key;
  let keycode = event.code;
  document.querySelector("#status").textContent = "KEYDOWN Event";
  document.querySelector("#code").textContent = keycode;
  document.querySelector("key").textContent =keyPress
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

let text = "la"


console.log(text.charCodeAt(1));