const numbers = document.getElementsByClassName("number");
const operations = document.getElementsByClassName("operation");
const screen = document.getElementById("screen");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const unique = ["/", "+", ".", "*", "-"];

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    let num = numbers[i].innerText;
    console.log(screen.value.at(-1));
    if (unique.includes(num) && unique.includes(screen.value.at(-1))) {
      return;
    }
    screen.value += num;
  });
}

for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", function () {
    let num = operations[i].innerText;
    if (
      (unique.includes(num) && unique.includes(screen.value.at(-1))) ||
      !screen.value
    ) {
      return;
    }

    screen.value += num;
    console.log(screen.value.at(-1));
  });
}

equal.addEventListener("click", function () {
  let eq = screen.value;
  screen.value = eval(eq);
});

clear.addEventListener("click", function () {
  let cl = screen.value;
  screen.value = "";
});
