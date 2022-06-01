const ligar = document.getElementById('liga');
const desligar = document.getElementById('desliga');
const lamp = document.getElementById('lamp');

function lampOn(){
   lamp.src = "./img/acesa.png";
}
function lampOf(){
    lamp.src = "./img/apagada.png";
}

ligar.addEventListener('click', lampOn);
desligar.addEventListener('click', lampOf);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOf);
