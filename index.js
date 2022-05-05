"use strict";

alert('Здравствуйте');
const imya = prompt ('Как вас зовут?');

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели за последнюю неделю?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false


};

const firstmovie= prompt('Один из последних фильмов?'),
      rating = prompt('На сколько оцените его?'),
      firstmovie1 = prompt('И еще один из последних фильмов?'),
      rating1 = prompt ('Еще один раз оцените его');

personalMovieDB.movies[firstmovie] = rating;
personalMovieDB.movies[firstmovie1] = rating1;

const vopros = prompt(imya+','+'Почему вы оценили первый фильм на такой рейтинг?');
alert('Спасибо,' + imya + ', за ответы!');

console.log(personalMovieDB);

