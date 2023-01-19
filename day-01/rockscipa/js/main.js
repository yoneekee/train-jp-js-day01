const comItems = document.querySelectorAll("#com ul li");
const playerItems = document.querySelectorAll("#player ul li");
const mainTemp = document.querySelector(".main");
console.log("🚀 ~ file: main.js:3 ~ playerItems", playerItems);
comItems[0].style.display = "none";
comItems[1].style.display = "none";
comItems[2].style.display = "none";

comItems[0].style.display = "block";
let num = 0;
let pick = 0;
const idx = setInterval(function () {
  comItems[0].style.display = "none";
  comItems[1].style.display = "none";
  comItems[2].style.display = "none";
  num++;
  num = num % 3;
  comItems[num].style.display = "block";
  //console.log("화면 위의 num : " + num);
}, 10);

playerItems[0].addEventListener("click", function () {
  clearInterval(idx);
  pick = 0;
  if (num == 0) {
    console.log("비겼음");
    mainTemp.textContent = "비겼음";
  } else if (num == 1) {
    console.log("졌음");
    mainTemp.textContent = "졌음";
  } else if (num == 2) {
    console.log("이겼음");
    mainTemp.textContent = "이겼음";
  }
});
playerItems[1].addEventListener("click", function () {
  clearInterval(idx);
  pick = 1;
  if (num == 0) {
    console.log("이겼음");
    mainTemp.textContent = "이겼음";
  } else if (num == 1) {
    console.log("비겼음");
    mainTemp.textContent = "비겼음";
  } else if (num == 2) {
    console.log("졌음");
    mainTemp.textContent = "졌음";
  }
});
playerItems[2].addEventListener("click", function () {
  clearInterval(idx);
  pick = 2;
  if (num == 0) {
    console.log("졌음");
    mainTemp.textContent = "졌음";
  } else if (num == 1) {
    console.log("이겼음");
    mainTemp.textContent = "이겼음";
  } else if (num == 2) {
    console.log("비겼음");
    mainTemp.textContent = "비겼음";
  }
});
