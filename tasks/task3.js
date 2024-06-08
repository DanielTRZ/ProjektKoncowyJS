

const numbersArray =  [10, 2 , 5, 11, 20, 100, 5, -8, 7];
const numbersArrayDiv = document.getElementById('numbersArray');
numbersArrayDiv.innerHTML = numbersArray; 

function oblicz() {
let suma = 0;
const wynik = document.getElementById('resultContainer3');
numbersArray.forEach(function(num) {
if(num > 10) suma += num;
})
wynik.innerHTML = `<span>Suma liczb wiekszych od 10 w tablicy wynosi ${suma}`;
}
// Zadanie 4
function dodaj(){
const nowaLiczba = parseInt(numberToAddToArray.value);
    
if(!nowaLiczba) return;
            
    
numbersArray.push(nowaLiczba);
numbersArrayDiv.innerHTML = numbersArray;
    
    
    
}
