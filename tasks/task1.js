

/*function losuj() { 
    const luckyNumber = "7"; 
    const num = document.getElementById('randomNumber').value;  
    const wynik = document.getElementById('resultContainer1'); 
    
    if (num === luckyNumber)  
         wynik.innerHTML = '<span style="color:green">Gratulacje wygrałeś.</span>';  
    else 
         wynik.innerHTML = '<span style="color.red">Niestety przegrałeś</span>';

}*/
    function losuj(){
const luckyNumber = "7";
const numer = document.getElementById('randomNumber').value;
const wynik = document.getElementById('resultContainer1');  


if(numer === luckyNumber)
    wynik.innerHTML = '<span style="color:green">Gratulacje, wygrałeś!</span>';
else if(!numer)
  wynik.innerHTML = '<span style="color:red">Wpisz liczbę.</span>';  
else
    wynik.innerHTML = '<span style="color:red">Niestety przegrałeś.</span>';
} 
