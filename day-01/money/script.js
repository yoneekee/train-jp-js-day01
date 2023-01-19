const inputMoney = document.querySelector(".money");
const btn = document.querySelector(".btn");
const mon50000 = document.querySelector(".mon50000");
const mon10000 = document.querySelector(".mon10000");
const mon5000 = document.querySelector(".mon5000");
const mon1000 = document.querySelector(".mon1000");
const mon500 = document.querySelector(".mon500");
const mon100 = document.querySelector(".mon100");
const mon50 = document.querySelector(".mon50");
const mon10 = document.querySelector(".mon10");

const howMuch = function () {
  let money = parseInt(inputMoney.value);

  const money50000 = money / 50000;
  money %= 50000;

  const money10000 = money / 10000;
  money %= 10000;

  const money5000 = money / 5000;
  money %= 5000;

  const money1000 = money / 1000;
  money %= 1000;

  const money500 = money / 500;
  money %= 500;

  const money100 = money / 100;
  money %= 100;

  const money50 = money / 50;
  money %= 50;

  const money10 = money / 10;
  money %= 10;

  mon50000.textContent = parseInt(money50000);
  mon10000.textContent = parseInt(money10000);
  mon5000.textContent = parseInt(money5000);
  mon1000.textContent = parseInt(money1000);
  mon500.textContent = parseInt(money500);
  mon100.textContent = parseInt(money100);
  mon50.textContent = parseInt(money50);
  mon10.textContent = parseInt(money10);

  // console.log(parseInt(money50000));
  // console.log(parseInt(money10000));
  // console.log(parseInt(money5000));
  // console.log(parseInt(money1000));
  // console.log(parseInt(money500));
  // console.log(parseInt(money100));
  // console.log(parseInt(money50));
  // console.log(parseInt(money10));
};

btn.addEventListener("click", howMuch);
