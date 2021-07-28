/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let a = '',
    b = '';
for (let i = 0; i < 2; i++) {
    a = prompt('Один из последних просмотренных фильмов?', '');

    if (a == '') {
        a = prompt('Даное поле пустое. Заполните пожалуйста его', '');
    } else if (a == null) {
        a = prompt('Даное обязательно к заполению. Заполните его', '');
    } else if (a.length > 50) {
        a = prompt('Слишком большое название попробуйте ещё', '');
    }

    b = prompt('На сколько оцените его?', '');

    if (b == '') {
        b = prompt('Даное поле пустое. Заполните пожалуйста его', '');
    } else if (b == null) {
        b = prompt('Даное обязательно к заполению. Заполните его', '');
    } else if (b.length > 50) {
        b = prompt('Слишком большое название попробуйте ещё', '');
    }
    personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);
// Код возьмите из предыдущего домашнего задания
