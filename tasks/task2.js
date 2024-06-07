

function wieksza() {
const liczba1 = parseFloat (document.getElementById("firstNumberToCompare").value);
const liczba2 = parseFloat (document.getElementById("secondNumberToCompare").value);
const wynik = document.getElementById('resultContainer2');
    
if(liczba1 === liczba2) 
wynik.innerHTML = '<span>Liczby są równe.</span>';
     
else{
const wieksza = liczba1 > liczba2 ? liczba1 : liczba2;
        
          
        wynik.innerHTML = `<span>Większą liczbą jest: ${wieksza}</span>`
    }  
}

        

