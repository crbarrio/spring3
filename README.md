# Sprint 3 IT Academy | Video management tool

## Solución (entrega)

- Repositorio: https://github.com/crbarrio/spring3
- Live demo: https://it-springs.crbarrio.es/assets/demos/spring3/

## Resolución de ejercicios

La lógica solicitada se implementa en `src/films.js` usando métodos ES6 (map/filter/reduce/sort) y procurando no mutar el array original.

1. **getAllDirectors**: obtiene un listado de directores a partir del array de películas.
2. **getMoviesFromDirector**: filtra las películas de un director concreto.
3. **moviesAverageOfDirector**: calcula la media de puntuación de un director (con 2 decimales).
4. **orderAlphabetically**: ordena por título y devuelve los 20 primeros (solo los títulos).
5. **orderByYear**: ordena por año ascendente y, en caso de empate, por título.
6. **moviesAverageByCategory**: calcula la media de puntuación por género/categoría (con 2 decimales).
7. **hoursToMinutes**: convierte la duración de formato string (e.g. `2h 34min`) a minutos (number) en un nuevo array.
8. **bestFilmOfYear**: devuelve la(s) película(s) con mejor puntuación de un año dado.

## Introduction

A company in the audiovisual sector has asked us for a web application that will allow their employees to quickly find movies from a large database they have, since the process is currently done manually.

You will be in charge of setting up the core of the application: all the logic of filtering and sorting of movies. You have 2 weeks to finish, which is how long this sprint lasts.

<br>

## Requirements


1. Clone this repo
```bash
$ git clone https://github.com/IT-Academy-BCN/starter-code-frontend-sprint-3-movies
```

2. Unlink your repo from the itacademy repository
```bash
$ git remote rm origin
```

3. Link your repo to the repository you have to create in your github account
```bash
$ git remote add origin <your repo name!>
```

<br>

## Submission

1. Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "Sprint Solution"
$ git push origin master
```

2. Create Pull Request.

3. Upload the link to the virtual campus so that your mentor can correct it and give you feedback.



<br>

## Introduction

The statement of the exercise is available on the virtual campus.

<br>

## Tests!


```shell
$ npm install
$ npm run test:watch
```

And last, open the generated `test-results.html` file with the "Live Server" VSCode extension to see test results.

Apart from the statement, you will know exactly what you are asked to do by looking at the file `tests/films.spec.js`, all tests are already defined here!

<br>

## Instructions

You have the following indications from the frontend responsible:

- It is mandatory to implement all loops in ES6 (using map, reduce, filter and sort to manipulate arrays).

- As at the moment we don't consume data from a server using an API, we will work with data from the src/data.js archive. For the moment we will implement the logic using
an array of information about 250 movies.

- The implementation is about processing this array of movies, to display it as requested in each exercise.

- The logic to implement will be placed in the src/films.js file.

- You don't need to show the result of each function on the screen. Your goal is to pass the tests.  More information on how to program oriented to pass tests at the end of the document.

- Don't forget to include the capture of the test results in the virtual campus.


