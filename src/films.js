
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  return array.map( movie => movie.director );
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter( movie => movie.director === director)
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let movies = getMoviesFromDirector(array, director)
  let suma = movies.reduce((total, movie) => {
    return total + movie.score
  },0);

  return parseFloat((suma / movies.length).toFixed(2));
}



// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = []
  array.toSorted((a,b) => (a.title.localeCompare(b.title))).forEach(movie => {
    result.push (movie.title)
  });

  return result.slice(0,20)
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  return array.toSorted((a, b) => (a.year - b.year || a.title.localeCompare(b.title)))
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let movies = array.filter(movie => movie.genre.find(e => e == category))
  let suma = movies.reduce((total, movie) => {
    return total + movie.score
  }, 0)
  
  return parseFloat((suma / movies.length).toFixed(2))
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = []

  array.forEach(movie => {
    let finHora = movie.duration.indexOf('h')
    let inicioMin = movie.duration.indexOf(' ')
    let finMin = movie.duration.indexOf('min')
    let hora = finHora != -1 ? parseInt(movie.duration.slice(0, finHora)) * 60 : 0
    let min = finMin != -1 ?  parseInt(movie.duration.slice(inicioMin, finMin)) : 0
    let duracion = hora + min
    let newMovie ={...movie}
    newMovie.duration = duracion
    result.push(newMovie)
    
  })

  return result
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let result = []
  let movies = array.filter(movie => movie.year == year)
  let maxScore = movies.toSorted((a, b) => (b.score - a.score))[0].score
  return movies.filter(movie => movie.score == maxScore)
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
