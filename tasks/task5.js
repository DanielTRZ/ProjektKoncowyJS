
//HTMLButtonElement.addEventListener('click', div_add, false);
function div_add() {
for(i=0; i<5;i++){
let element = document.createElement('div');
element.id = 'bloczek';
element.style.width = '100px';
element.style.height = '100px';
        element.style.backgroundColor = getRandomColor();
        var cont = document.getElementById("squaresContainer");
        cont.appendChild(element);}           
}
 function getRandomColor() {
    let color = '#' + Math.floor(Math.random() * 1000000);
    return color;
  }
