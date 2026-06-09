// Data de destino
const dataAlvo = new Date("2023-11-19T23:59:59");

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataAlvo;

    if (diferenca <= 0) {
        document.querySelector(".contador").innerHTML =
            "<h1>Tempo encerrado!</h1>";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferenca % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferenca % (1000 * 60)) /
        1000
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

atualizarContador();
setInterval(atualizarContador, 1000);