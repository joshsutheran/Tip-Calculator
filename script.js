"use strict";
//////////////////////////////////////////////////////
// BUGS TO FIX
// 1. ALLOW USERS TO ENTER ANY TIP USING THE CUSTOM BUTTON
//////////////////////////////////////////////////////
// SELECT ELEMENTS
const billInput = document.querySelector(".binput");
const noPeople = document.querySelector(".ninput");
const tipPerPerson = document.querySelector(".tip-amount");
const totalPerPerson = document.querySelector(".total-amount");
const tips = Array.from(document.getElementsByClassName("tips"));
const customTip = document.querySelector(".custom");
const calcBtn = document.querySelector(".cbtn");
const resetBtn = document.querySelector(".reset-btn");
const zeroActive = document.querySelector(".zero-active");

//////////////////////////////////////////////////////
// GLOBAL VARIABLES TO STORE REQUIRED VALUES
let billValue = 0.0;
let peopleValue = 0;
let tipValue = 0;
let tipAmount = 0;
let totalPerson = 0;
let customTipValue = 0;
//////////////////////////////////////////////////////
// STORE BILL AND NO OF PEOPLE VALUES

// FUNCTION TO RETRIEVE DATA INPUT
const billInputFun = function () {
  billValue = Number(parseFloat(billInput.value));
};
const noPeopleFun = function () {
  peopleValue = Number(noPeople.value);
};

// EVENT LISTENER TO INVOKE CALLBACK FUNCTION.
billInput.addEventListener("input", billInputFun);
noPeople.addEventListener("input", noPeopleFun);
// FUNCTION TO RESTRICT VALUES LESS THAN 0 ENTERED FOR NO OF PEOPLE
const zero = noPeople.addEventListener("input", function () {
  if (peopleValue < 1) {
    zeroActive.classList.remove("hidden");
  } else {
    zeroActive.classList.add("hidden");
  }
});

///////////////////////////////////////////////////////
// CONTROL TIP FUNCTIONALITY - CHANGE COLOUR WHEN ACTIVE - STORE TIP VALUE.
// FUNCTION TO ADD EVENT LISTENER TO EACH ITERATED VALUE.
tips.forEach(function (mov) {
  mov.addEventListener("click", handleClick);
});
// FUNCTION TO CALL WHEN TIP BUTTON CLICKED.
function handleClick(event) {
  tips.forEach(function (val) {
    if (val == event.target) {
      val.classList.add("active-tip");
      tipValue =
        Number(Array.from(val.innerHTML.toString()).slice(0, -1).join("")) /
        100;
    } else {
      val.classList.remove("active-tip");
    }
  });
}

///////////////////////////////////////////////////////
// FUNCTION TO CALCULATE TIP WHEN BTN CLICKED

const calcTipInput = document.querySelectorAll(".live").forEach((item) => {
  item.addEventListener("input", function () {
    if (billValue > 0 && peopleValue > 0) {
      tipAmount = Number(((billValue * tipValue) / peopleValue).toFixed(2));
      tipPerPerson.textContent = `$${tipAmount}`;
      totalPerson = Number((billValue / peopleValue + tipAmount).toFixed(2));
      totalPerPerson.textContent = `$${totalPerson}`;
    }
  });
});

const calcTipClick = document
  .querySelector(".tip-select")
  .addEventListener("click", function () {
    if (billValue > 0 && peopleValue > 0) {
      tipAmount = Number(((billValue * tipValue) / peopleValue).toFixed(2));
      tipPerPerson.textContent = `$${tipAmount}`;
      totalPerson = Number((billValue / peopleValue + tipAmount).toFixed(2));
      totalPerPerson.textContent = `$${totalPerson}`;
    }
  });

const calcTipCustom = customTip.addEventListener("input", function () {
  customTipValue = customTip.value / 100;
  if (billValue > 0 && peopleValue > 0) {
    tipAmount = Number(((billValue * customTipValue) / peopleValue).toFixed(2));
    tipPerPerson.textContent = `$${tipAmount}`;
    totalPerson = Number((billValue / peopleValue + tipAmount).toFixed(2));
    totalPerPerson.textContent = `$${totalPerson}`;
  }
});
/*
const calcTip = calcBtn.addEventListener("click", function () {
  tipAmount = Number(((billValue * tipValue) / peopleValue).toFixed(2));
  tipPerPerson.textContent = `$${tipAmount}`;
  totalPerson = Number((billValue / peopleValue + tipAmount).toFixed(2));
  totalPerPerson.textContent = `$${totalPerson}`;
});
*/
///////////////////////////////////////////////////////
// FUNCTION TO RESET DATA WHEN RESET BTN CLICKED
const resetFun = resetBtn.addEventListener("click", function () {
  billValue = 0.0;
  peopleValue = 0;
  tipValue = 0;
  tipAmount = 0;
  totalPerson = 0;
  billInput.value = 0;
  noPeople.value = 0;
  tipPerPerson.textContent = `$0.00`;
  totalPerPerson.textContent = "$0.00";
  tips.forEach(function (mov) {
    mov.classList.remove("active-tip");
  });
});
