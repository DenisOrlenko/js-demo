// const condition = false;

// if (condition) {
//   console.log('Evrika!');
// }

/////////////////////////////////////////////

// const condition = 5;

// if (condition) {
//   console.log('Evrika!');
// } else {
//   console.log('Nope');
// }

///////////////////////////////////////////////////

// Використовуючи конструкцію if..else, напишіть код, який запитуватиме: "What is the official name of JavaScript?". Якщо користувач вводить "ECMAScript", то показати: "Yep!", інакше – відобразити: "Don't you know? ECMAScript!"

// const userAnswer = prompt('What is the official name of JavaScript?');

// if (userAnswer.toLowerCase() === 'ECMAScript'.toLowerCase()) {
//   alert('Yep!');
// } else {
//   alert("Don't you know? ECMAScript!");
// }

let countryQuestion = 'Where do you live?';
const countryUserAnswer = prompt(countryQuestion);

if (countryUserAnswer.toLowerCase() === 'Ukraine'.toLowerCase()) {
  alert('you are right');
} else {
  // alert('you are wrong');
}
// Напиши скрипт для відображення годин та хвилин у консолі
// браузера у вигляді рядка формату "14 год. 26 хв.".
// Якщо значення змінної minutes дорівнює 0,
// то виводь рядок "14 год.", без хвилин.

///////////////////////////////////////////////

// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 год. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 год.", без хвилин.

const hours = 14;
const minutes = 10;
// 1 способ
//
// let timestring;

// if (minutes === 0) {
//   timestring = `${hours} hours`;
// } else {
//   timestring = `${hours} hours ${minutes} minutes`;
// }
// console.log('timestring:', timestring)

// 2 способ - Делаю рефакторинг кода
//
let timestring = `${hours} hours`;

if (minutes > 0) {
  // timestring = timestring + ` ${minutes} minutes`;
  timestring += ` ${minutes} minutes`;

}
console.log('3) задача - timestring:', timestring)
console.log('')
console.log('4) typeof - определение типа данных переменной - typeof timestring:', typeof timestring)







// if (minutes === 0) {
//   timestring = `${hours} год.`;
// } else {
//   timestring = `${hours} год. ${minutes} хв.`;
// }

///////

// const hours = 14;
// const minutes = 0;
// let timestring = `${hours} год.`;

// if (minutes > 0) {
//   timestring += ` ${minutes} хв.`;
// }

// console.log(timestring);

//////////////////////////////////////////////////

// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо в prompt користувач ввів число більше за нуль.
// Якщо введено нуль, виводь у консоль рядок "Це нуль".
// Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число".

// const userInput = Number(prompt('Введіть число'));

// if (userInput > 0) {
//   console.log('Це позитивне число');
// } else if (userInput === 0) {
//   console.log('Це нуль');
// } else {
//   console.log("Це від'ємне число");
// }

//////////////////////////////////////////////////

// Напиши скрипт, який порівнює числа змінних a і b.
// Якщо обидва значення більше 100, виведи в консоль максимальне з них.
// Інакше у консолі має бути сума значення b та числа 512.

// const a = 120;
// const b = 180;

// // if (a > 100 && b > 100) {
// //   if (a > b) {
// //     console.log(a);
// //   } else {
// //     console.log(b);
// //   }
// // } else {
// //   console.log(b + 512);
// // }

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

/////////////////////////////////////////////////////

// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
// Якщо ні, додай до кінця значення link цей символ.
// Використовуй конструкцію if...else.

let link = 'https://my-site.com/about';

if (!link.endsWith('/')) {
  link += '/';
}

console.log(link);
console.log('')

console.log('5) Метод endsWith("/") => проверяет на совпадение последнего символ - возвращает БУЛЬ', link.endsWith('/'));
console.log('Метод startsWith("https") => проверяет на совпадение первого символ - возвращает БУЛЬ', link.startsWith('https'));
console.log('')
///////////////////////////////////////////////////

// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
// Якщо ні, додай у кінець значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site".
// Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';

if (!link.endsWith('/') && link.includes('my-site')) {
  link += '/';
}

console.log('6) Метод .includes("http") - проверяет содержтся ли в строке указанная подстрока, подстрочные символы("http")', link.includes('http'));
console.log('link:', link)
console.log('link.includes("http"):' ,link.includes('my-site'))

console.log('');

///////////////////////////////////////////////////

// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

// Якщо значення змінної hours:
// - менше 17, виводь рядок "Pending"
// - більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24, виводь рядок "Overdue"

// const hours = 30;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }
