document.getElementById("btn_1").addEventListener("click", clickCounter);
document.getElementById("btn_2").addEventListener("click", clickCounter2);

function clickCounter() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML =
      "Result : " + localStorage.clickcount;
  }
}

function clickCounter2() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) - 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML =
      "Result :" + localStorage.clickcount;
  }
}
