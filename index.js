"use strict";

//elements

//inputs

const billInput = document.getElementById("bill");
const customInput = document.getElementById("custom");
const numPeople = document.getElementById("people__number");

// buttons
const btns = document.querySelectorAll(".tips");
const btn5 = document.querySelector(".div5");
const btn10 = document.querySelector(".div10");
const btn15 = document.querySelector(".div15");
const btn25 = document.querySelector(".div25");
const btn50 = document.querySelector(".div50");
const reset = document.querySelector(".reset");

//label
const errorLabel = document.querySelector(".error");

//dashboard
const value = document.querySelectorAll(".amount");
const tipAmount = document.querySelector(".tip__amount");
const perPerson = document.querySelector(".per__person");

//global
let billAmount = 0;
let tipValue = 0;
let personAmount;
billInput.value = billAmount;
let activeBtn = null;

//functions

const resetAll = function () {
  billInput.value = "";
  billInput.style.opacity = "0.35";
  billInput.classList.remove("active__custom");

  numPeople.value = "";
  numPeople.style.opacity = "0.35";

  tipAmount.textContent = "0.00";
  perPerson.textContent = "0.00";

  btns.forEach((el) => el.classList.remove("active"));

  reset.classList.add("disabled");
  customInput.value = "Custom";
  customInput.classList.remove("active__custom");
};

resetAll();

const startAll = function () {
  billInput.style.opacity = "1";
  numPeople.style.opacity = "1";
  reset.classList.remove("disabled");
};

const inputDisable = function () {
  if (billInput.value == "" || billInput.value == 0) {
    resetAll();
  } else {
    billInput.classList.add("active__custom");
  }
};

const billValue = function () {
  billAmount = billInput.value;
  calcTip();
  startAll();
  inputDisable();
};

const numPeopleValue = function () {
  personAmount = numPeople.value;
  if (numPeople.value == 0 || numPeople.value == "") {
    numPeople.classList.add("error__outline");
    errorLabel.style.visibility = "visible";
  } else {
    numPeople.classList.remove("error__outline");
    errorLabel.style.visibility = "hidden";
  }
  calcTip();
  startAll();
};

const customValue = function () {
  tipValue = +customInput.value;

  if (activeBtn) {
    activeBtn.classList.remove("active");
  }

  if (customInput.value !== "") {
    customInput.classList.add("active__custom");
  } else {
    customInput.classList.remove("active__custom");
  }

  calcTip();
  startAll();
};

const calcTip = function () {
  const tipPerPerson = (billAmount * tipValue) / 100 / personAmount;
  const billPerPerson = billAmount / personAmount + tipPerPerson;

  if (personAmount >= 1) {
    tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
    perPerson.textContent = `$${billPerPerson.toFixed(2)}`;
  }
};

const btnValue = function () {
  btns.forEach((btn) =>
    btn.addEventListener("click", function (ev) {
      if (activeBtn) {
        activeBtn.classList.remove("active");
      }

      btn.classList.add("active");
      activeBtn = btn;
      if (ev.target.textContent === btn.textContent) {
        tipValue = parseFloat(ev.target.textContent);
      }
    })
  );
  calcTip();
};

btnValue();

// Event listeners

billInput.addEventListener("input", billValue);
numPeople.addEventListener("input", numPeopleValue);
customInput.addEventListener("input", customValue);
reset.addEventListener("click", resetAll);

btns.forEach(function (value) {
  value.addEventListener("click", btnValue);
});

// let btnValue;

// const btnValues = function () {
//   btns.forEach((el) => {
//     el.addEventListener("click", function (ev) {
//       const value = parseFloat(ev.currentTarget.textContent);
//       console.log(`Clicked button value: ${value}`);
//       btnValue = value;
//       console.log(`btnValue after click: ${btnValue}`);
//       resetActive();
//     });
//   });
//     console.log(`dat ${btnValue}`);
//   return btnValue
// };
