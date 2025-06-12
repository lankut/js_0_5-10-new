/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(words) {
  let arr = []

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      arr.push(words[0].toUpperCase())
    } else if (words[i - 1] === ' ') {
      arr.push(words[i].toUpperCase());
    } else arr.push(words[i])
  }

  let newStr = arr.join('')
  console.log(newStr);
}