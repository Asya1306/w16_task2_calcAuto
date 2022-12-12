"use strict";
let sumMassive = []; // массив для будущей суммы
const massiveBrand = document.querySelectorAll('[name="brandmassive"]'); //марка автомобиля
const massiveFuel = document.querySelectorAll('input[name="fuel"]'); // топливо
const massiveAge = document.querySelectorAll('input[name="age"]'); // время использования авто
const blockSumResult = document.getElementById('sumResult'); // див для вывода итоговой суммы
const button = document.querySelector('button');
let result = 0;

//добавление value из массива марка авто
function isItSelected() {
    for (let i = 0; i < massiveBrand.length; i++){
        if(massiveBrand[i].selected) {
            sumMassive[0] = +massiveBrand[i].value;
        } else continue
        console.log(sumMassive);
    }
}
//добавление value из массива топливо
function isItCheckedFuel() {
    for (let i = 0; i < massiveFuel.length; i++){
        if(massiveFuel[i].checked) {
            sumMassive[1] = +massiveFuel[i].value;
        } else continue
        console.log(sumMassive);
    }
}
//добавление value из массива время исп авто
function isItCheckedAge() {
    for (let i = 0; i < massiveAge.length; i++){
        if(massiveAge[i].checked) {
            sumMassive[2] = +massiveAge[i].value;
        } else continue
        console.log(sumMassive);
    }
}
// подсчет итоговой суммы
function getSumNumber() {
    result = 0;
    for (let i = 0; i < sumMassive.length; i++) {
        result += sumMassive[i];
        console.log(result);
    }
    return result
}

button.addEventListener('click', function () {
    isItSelected();
    isItCheckedFuel();
    isItCheckedAge();
    getSumNumber();
    blockSumResult.innerHTML = result;
})



