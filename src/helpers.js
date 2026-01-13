"use sctrict"
let resultDiv = document.getElementById('resultDiv');
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


// Show results
let output = '';
const printFormat = a => {
    if (Array.isArray(a)) {
        for (let i = 0; i < a.length; i++) {
            printFormat(a[i])
        }
        output += '<br><br>'
    } else if (a.constructor === Object) {
        for (const key in a) {
            output += `${key}: ${a[key]}` + '<br>';
        }
        output += '<br><br>'
    } else {
        output += a + '<br> '
    }
}


const showResult = (callback, a, b) => {
    let result = callback(a, b)
    output = '';
    printFormat(result)
    resultDiv.innerHTML = output
}