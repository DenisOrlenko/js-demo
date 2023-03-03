// console.log(true || (false && false));
// true || false

///////////////////////////////////////////

// Значення за замовчуванням та оператор нульового злиття ?? (nullish coalescing operator)

// Відрефактори код так, щоб у змінну value привласнилося значення змінної incomingValue, якщо воно не дорівнює undefined або null.
// Інакше має привласнитися значення defaultValue.
// Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false.
// Використовуй оператор ??

const incomingValue = undefined;

const defaultValue = 10;

const value = incomingValue ?? defaultValue;

console.log('1) ?? - Опрератор нулевого слития - запинается на NULL, UNDERFINED - невалидные значения - т.е. условие не выполняется (все остальные значения валидны - т.е условие выполняется) -',value);
console.log(' 0 ?? 10 =>', 0 ?? 10)
console.log(' 1 ?? 10 =>', 1 ?? 10)
console.log(' null ?? 10 =>', null ?? 10)
console.log(' undefined ?? 10 =>', undefined ?? 10)
console.log('')
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

////////////////////////////////////////////

// Опертор % и методи рядків

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

const totalMinutes = 65;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log('2) Минуты - число:', minutes)

// 1 - Привожу строку к числовому типу данных - String()
const hoursToString = String(hours)
const minutesToString = String(minutes)
console.log(' Минуты - строка:', minutesToString)


// 2 - Добавляю символы, в случае, если в строке менее указанного кол-ва символов
const hoursFull = hoursToString.padStart(2, 0)
const minutesFull = minutesToString.padStart(2, 0)
console.log('minutesFull:', minutesFull)

const time = `${hoursFull}:${minutesFull}`;
console.log('Полное время 00:00 =>', time)
console.log('padStart(2, 0) - в начало строки добавляет допонительный символ, если в ней не хватает до указанного кол-ва: 2 => указываю кол-во символов, которое должно быть, 0 => указываю символ, который добавлю при необходимости')

console.log('padStart(2, 0) - 0 в начало строки - 5 =>', minutesToString.padStart(2, 0))
console.log('padEnd(2, 0) - 0 в конец строки - 5 =>', minutesToString.padEnd(2, 0))
console.log('50 % 60 = 50 - осаток от целого деления')
console.log('')






// const hours = Math.floor(totalMinutes / 60);
// const mins = totalMinutes % 60;

// const hoursFull = String(hours).padStart(2, 0);
// const minsFull = String(mins).padStart(2, 0);

// console.log(`${hoursFull}:${minsFull}`);
