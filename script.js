const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');
const closeBtn = document.getElementById('closeBtn');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

const fechaCarrera = new Date("2025-02-26T00:00:00");
const diasElem = document.getElementById("dias");
const horasElem = document.getElementById("horas");
const minutosElem = document.getElementById("minutos");
const segundosElem = document.getElementById("segundos");

function actualizarCuentaRegresiva() {
    const ahora = new Date();
    const tiempoRestante = fechaCarrera - ahora;

    if (tiempoRestante <= 0) {
        clearInterval(cuentaRegresiva);
        diasElem.textContent = "0d";
        horasElem.textContent = "0h";
        minutosElem.textContent = "0m";
        segundosElem.textContent = "0s";
        return;
    }

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    diasElem.textContent = `${dias}d`;
    horasElem.textContent = `${horas}h`;
    minutosElem.textContent = `${minutos}m`;
    segundosElem.textContent = `${segundos}s`;
}

const cuentaRegresiva = setInterval(actualizarCuentaRegresiva, 1000);