// search for buttons and store in variable
const btns = document.querySelectorAll("button");
// search for class userInput and store in variable
const inps = document.querySelectorAll(".userInput");
let count = 0;

// add eventListener to each button
btns.forEach(function (btn) {
  btn.addEventListener("click", function (eventObj) {
    // Trigger input event on each input field
    inps.forEach(function (inp) {
      const event = new Event("input");
      inp.dispatchEvent(event);
    });
  });
});

// add event listener to each input field
inps.forEach(function (inp) {
  inp.addEventListener("input", function (eventObj) {
    console.log(inp.checked);
    const trgt = eventObj.target;
    console.dir(trgt.checked);
  });
});
