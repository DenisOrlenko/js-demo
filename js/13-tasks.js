// Напишіть код, який запитуватиме логін за допомогою prompt і логуватиме результат у консоль браузера.
// - Якщо відвідувач вводить "admin", то prompt запитує пароль
// - Якщо нічого не введено або натиснуто клавішу Esc – вивести рядок "Cancelled"
// - В іншому випадку вивести рядок "I don't know you"
// Пароль перевіряти так:
// - Якщо введено пароль "boss", вивести рядок "Welcome!"
// - Інакше виводити рядок "Wrong password"

// const login = prompt('Enter login');

// if (login === 'admin') {
//   const password = prompt('Enter password');
//   alert(password === 'boss' ? 'Welcome' : 'Wrong password');
// } else if (login === null || login === '') {
//   alert('Cancelled');
// } else {
//   alert("I don't know you");
// }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/////////////////////////////////////////

// FIZZBAZZ

// Напишіть програму, яка виводить через console.log усі цифри від 1 до 100, з трьома винятками:
// виводити Fizz замість чисел, кратних 3;
// виводити Buzz замість чисел, кратних 5;
// виводити Fizzbuzz замість чисел, кратних як 3, так і 5.

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

///////////////////////////////

/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

// let balance = 10000;
// const payment = 2000;

// 'Все хорошо, снимаем деньги... Спасибо за покупку!'
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/////////////////////////////////////

/*
 * Напиши скрит подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// 'Бронзовый партнер, скидка 2%'
// 'Серебрянный партнер, скидка 5%'
// 'Золотой партнер, скидка 10%'
// 'У вас еще нет партнерской скидки'