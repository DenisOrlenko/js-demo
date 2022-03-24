// console.log(true || (false && false));
// true || false

///////////////////////////////////////////

// Значення за замовчуванням та оператор нульового злиття ?? (nullish coalescing operator)

// Відрефактори код так, щоб у змінну value привласнилося значення змінної incomingValue, якщо воно не дорівнює undefined або null.
// Інакше має привласнитися значення defaultValue.
// Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false.
// Використовуй оператор ??

// const incomingValue = undefined;

// const defaultValue = 10;

// const value = incomingValue ?? defaultValue;

// console.log(value);

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

////////////////////////////////////////////

// Опертор % и методи рядків

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 50;

// const hours = Math.floor(totalMinutes / 60);
// const mins = totalMinutes % 60;

// const hoursFull = String(hours).padStart(2, 0);
// const minsFull = String(mins).padStart(2, 0);

// console.log(`${hoursFull}:${minsFull}`);