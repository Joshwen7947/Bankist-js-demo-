'use strict';

// Data
const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: 'Jessica Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: 'Steven Thomas Williams',
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: 'Sarah Smith',
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const account5 = {
	owner: 'Josh Wenner',
	movements: [10000000, -50000, 350000, -75000, -5200000, 5000],
	interestRate: 5,
	pin: 7947,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
//
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const currencies = new Map([
	['USD', 'United States dollar'],
	['EUR', 'Euro'],
	['GBP', 'Pound sterling'],
]);

const displayMovements = function (movements) {
	containerMovements.innerHTML = '';
	movements.forEach(function (movement, i) {
		const type = movement > 0 ? `deposit` : `withdrawal`;
		const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
			i + 1
		} ${type}</div>
        <div class="movements__value">${movement}</div>
    </div>`;
		containerMovements.insertAdjacentHTML('afterbegin', html);
	});
};

displayMovements(account5.movements);
const calcDisplayTotal = function (movements) {
	const total = movements.reduce(
		(accumulator, movement) => accumulator + movement,
		0
	);
	labelBalance.textContent = `${total} USD`;
};
calcDisplayTotal(account5.movements);

const createUsernames = function (accs) {
	accs.forEach(function (acc) {
		acc.username = acc.owner
			.toLowerCase()
			.split(' ')
			.map((name) => name[0])
			.join('');
	});
};
createUsernames(accounts);

// console.log(accounts);
//FILTER METHOD
const deposits = movements.filter(function (mov) {
	return mov > 0;
});
const withdrawal = movements.filter((mov) => mov < 0);
console.log(movements);
// console.log(deposits);
// console.log(withdrawal);

// REDUCE
// accumulator is like a snowball
const total = movements.reduce(function (accumulator, current, i) {
	console.log(`iteration ${i}: ${accumulator}`);
	return accumulator + current;
}, 0);
console.log(total);
// MAXIMUM VALUE

// const total = movements.reduce(
// 	(accumulator, current) => accumulator + current,
// 	0
// );
// console.log(total);

// ALWAYS NEED A VARIABLE WHEN USING A FOR LOOP (MORE CODE)
// let total2 = 0;
// for (const move of movements) total2 += move;
// console.log(total2);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// OPTION A
const eurToUsd = 1.1;
const movementsUSD = movements.map((mov) => mov * eurToUsd);
// console.log(movementsUSD);
// OPTION B
// const movementsUSD = movements.map(function (mov) {
// 	return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movementsUSD);

// COMBINE THE TWO ARRAYS
const movementsUSDfor = [];
for (const mov of movements) movementsUSD.push(mov * eurToUsd);
// console.log(movementsUSD);
const descriptions = movements.map(
	(move, i) =>
		`Movement ${i + 1}: You ${move > 0 ? `deposited ` : `withdrew `}${Math.abs(
			move
		)}`
	//
	// if (move > 0) {
	// 	return `Movement ${i + 1}: You depositied ${move}`;
	// } else {
	// 	return `Movement ${i + 1}: You withdrew ${Math.abs(move)}`;
	// }
);
