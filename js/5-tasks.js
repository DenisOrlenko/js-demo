// Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

/////////////////////////////////////////////////

// Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані параметр dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {}

// console.log(getRectArea('8 11'));

/////////////////////////////////////////////////

// Напиши функцію logItems(items), яка отримує масив і використовує цикл for, який для кожного елемента масиву виводитиме в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів має починатися з першого.

// Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

// function logItems(items) {}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//////////////////////////////////////////////////

// Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
// У параметри names і phones будуть передані рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.//// Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {}

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

//////////////////////////////////////////////

// Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.

// Вага та висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми.

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

////////////////////////////////////////////////

// Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers), яка шукає найбільше число в масиві.

// function findLargestNumber(numbers) {}

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

///////////////////////////////////////////////

// Форматування часу
// Напиши функцію formatTime(minutes), яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// function formatTime(minutes) {}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

////////////////////////////////////////////////

/*
 Колекція курсів
Напишіть функції для роботи з колекцією навчальних курсів courses:

   addCourse(courseName) - додає курс до кінця колекції
     - якщо курс не прийшов - виводимо 'Add some course'
     - якщо курс вже є - виводимо 'The course already exists'

   removeCourse(courseName) - видаляє курс із колекції
     - якщо курс не прийшов - виводимо 'Give me course name to delete'
     - якщо такого курсу немає - виводимо 'No course with this name'

   updateCourse(oldName, newName)- змінює ім'я на нове
     - якщо не прийшло старе ім'я - виводимо 'Give me course name to change'
     - якщо такого старого курсу немає - виводимо 'No course with this name'
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express'); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'The course already exists'
// addCourse(); // 'Add some course'
// console.log(courses);

// removeCourse('React'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'No course with this name'
// removeCourse(); // 'Give me course name to delete'
// console.log(courses);

// updateCourse('Express', 'NestJS'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('NestJS'); // 'Give me course names to change'
// updateCourse('Angular', 'NextJS'); // 'No course with this name'
// console.log(courses);

////////////////////////////////////////////////////////////

/*
  Напишіть функцію myConcat(), яка приймає будь-яку кількість рядків. Першим рядком буде роздільник.
  Потрібно повертати всі рядки, крім першого, з'єднані роздільником.
*/

// const str1 = myConcat(', ', 'red', 'orange', 'blue');
// // returns "red, orange, blue"
// console.log(str1);

// const str2 = myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');
// // returns "elephant; giraffe; lion; cheetah"
// console.log(str2);

// const str3 = myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');
// // returns "sage. basil. oregano. pepper. parsley"
// console.log(str3);

///////////////////////////////////////////////////////////

// Напишіть функцію, яка вважає суму цифр у числі та повертає її

// const calcDiditsSum = number => {};

// console.log(calcDiditsSum(123)); // 6
// console.log(calcDiditsSum(258)); // 15
// console.log(calcDiditsSum(1)); // 1
