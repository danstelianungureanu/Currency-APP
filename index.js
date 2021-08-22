var currency = {
	'USD': {
		'GBP': 0.71,
		'EUR': 0.8,
		'MDL': 20
	},
	'EUR': {
		'GBP': 1.12,
		'USD': 1.25,
		'MDL': 25
	},
	
	'GBP': {
		'USD': 1.4,
		'EUR': 1.11,
		'MDL': 28.17
	},
	'MDL': {
		'USD': 0.05,
		'EUR': 0.04,
		'GBP': 0.28,
	}
}


var btn = document.querySelector('.calculate-btn');
//var onClick = document.querySelector('#amount');
var baseCurrencyInput = document.getElementById('currency-1');
var secondCurrencyInput = document.getElementById('currency-2');
var amountInput = document.getElementById('amount');
var toShowAmount = document.querySelector('.given-amount');
var toShowBase = document.querySelector('.base-currency');
var toShowSecond = document.querySelector('.second-currency');
var toShowResult = document.querySelector('.final-result');

const amount = document.querySelector('#amount');
const errorMessage = document.querySelector('#errorMessage');
const handleChange = () => {

	if (!isNaN(amount.value)) {
		errorMessage.style.display = "none";
	} else {
		errorMessage.style.display = "block";
	}
}
const updateAll = () => {
	setCurrencies()
	handleChange()
}
amount.oninput = handleChange;
errorMessage.style.display = 'none';


const inputHandler = function (e) {
	result.innerHTML = e.target.value;
}



function convertCurrency(event) {
	event.preventDefault();
	var amount = amountInput.value;
	var from = baseCurrencyInput.value;
	var to = secondCurrencyInput.value;
	var result = 0;


		if (from == to) {
			result = amount;
			toShowAmount.innerHTML = amount;
			toShowBase.textContent = from + ' = ';
			toShowSecond.textContent = to;
			toShowResult.textContent = amount;

		} else {
			result = amount * currency[from][to];
			toShowAmount.innerHTML = amount;
			toShowBase.textContent = from + ' = ';
			toShowSecond.textContent = to;
			toShowResult.textContent = result.toFixed(2);
		}
}

function reload() {
	var amountInput = "";
	var elem = document.getElementById("amount");
	elem.value = amountInput;
};


amountInput.addEventListener('click', convertCurrency);
amountInput.addEventListener('input', convertCurrency);
baseCurrencyInput.addEventListener('input', convertCurrency);
secondCurrencyInput.addEventListener('input', convertCurrency);
