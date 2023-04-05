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
let percentage = 15;

//functions

const resetActive = function () {
  btns.forEach((btn) => btn.classList.remove("active"));
};

const btnValues = function () {
  resetActive();
  btns.forEach((el) => {
    el.addEventListener("click", function (ev) {
      const valuex = parseFloat(ev.target.textContent);
      console.log(valuex);
    });
  });
};



const calcTip = function () {
  btnValues();
  const bill = +billInput.value;
  const personNum = +numPeople.value;
  const tip = (bill * percentage) / 100;
  const finalBill = (bill + tip) / personNum;

  if (personNum < 1) {
    errorLabel.style.visibility = "visible";
    numPeople.classList.add("error__outline");
  } else {
    errorLabel.style.visibility = "hidden";
    numPeople.classList.remove("error__outline");
    perPerson.textContent = `$${finalBill.toFixed(2)}`;
    tipAmount.textContent = `$${(tip / personNum).toFixed(2)}`;
  }

  if (billInput.value !== "" && numPeople.value !== "") {
    billInput.classList.add("outline");
  } else {
    billInput.classList.remove("outline");
  }
};

calcTip();


const resetAll = function() {

}

// reset.addEventListener('click',function(){
//     console.log( customInput.value, numPeople.value);
// })

//Event listeners
billInput.addEventListener("input", calcTip);
numPeople.addEventListener("input", calcTip);
