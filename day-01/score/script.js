// const form = document.querySelector("#frm");

const result = document.querySelector(".result");
const total = document.querySelector(".total");
const inputJava = document.querySelector(".java");
const inputJS = document.querySelector(".js");
const inputPy = document.querySelector(".python");
const btn = document.querySelector(".btn");
const sco = document.querySelector(".sco");

btn.addEventListener("click", function () {
  const java = parseInt(inputJava.value);
  const js = parseInt(inputJS.value);
  const py = parseInt(inputPy.value);

  if (isNaN(java) || isNaN(js) || isNaN(py)) {
    alert("입력되지 않은 칸이 있음");
    return false;
  }

  const sum = java + js + py;
  const avg = sum / 3;

  if (avg >= 90 && avg <= 100) {
    score = "A";
  } else if (avg >= 80 && avg < 90) {
    score = "B";
  } else if (avg >= 70 && avg < 80) {
    score = "C";
  } else if (avg >= 60 && avg < 70) {
    score = "D";
  } else if (avg >= 0 && avg < 60) {
    score = "F";
  } else {
    score = "입력값 오류";
  }

  result.textContent = score;
  total.textContent = sum;
});
