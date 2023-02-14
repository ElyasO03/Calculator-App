const output = document.querySelector("#output");
const buttons = document.querySelectorAll("button");
let currentVal = "0";
let equation = "";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(e) {
    let btnVal = e.target.innerText;

    if (btnVal === "C") {
      currentVal = "0";
      equation = "";
    } else if (btnVal === "=") {
      equation = eval(equation);
      currentVal = equation;
      equation = "";
    } else {
      if (currentVal === "0") {
        currentVal = "";
      }
      currentVal += btnVal;
      equation += btnVal;
    }

    output.textContent = currentVal;
  });
}
