var elForm = document.querySelector("[data-money-form]");
var elMoney = document.querySelector("[data-input-amount]");
var elCurrency = document.querySelector("[data-select-currency]");
var elCalculatedMoney = document.querySelector("[data-text-calculated-money]");

var ONE_USD = 11328;
var ONE_RUBL = 151;
var ONE_EURO = 12030;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var moneyAmount = +elMoney.value;
  var currecy = elCurrency.value;
  var calculatedMoney;

  console.log(moneyAmount, currecy);

  if (currecy === "USD") {
    calculatedMoney = moneyAmount / ONE_USD;
  }
  if (currecy === "RUBL") {
    calculatedMoney = moneyAmount / ONE_RUBL;
  }
  if (currecy === "EURO") {
    calculatedMoney = moneyAmount / ONE_EURO;
  }

  console.log(calculatedMoney);
  elCalculatedMoney.textContent = `${calculatedMoney.toFixed(2)} ${currecy}`;
});
