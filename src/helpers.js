"use sctrict"

let currentExercise = 0;
const exercises = document.getElementsByClassName('ejercicio');

showExercise(currentExercise);
function showExercise(index) {
    for (let i = 0; i < exercises.length; i++) {
        exercises[i].style.display = 'none';
    }
    resultDiv.innerText = '';
    exercises[index].style.display = 'block';

    document.getElementById('btn_anterior').disabled = index === 0;
    document.getElementById('btn_siguiente').disabled = index === exercises.length - 1;
}

function nextExercise() {
    showExercise(currentExercise + 1);
    currentExercise++;
}

function previousExercise() {
    showExercise(currentExercise - 1);
    currentExercise--;
}