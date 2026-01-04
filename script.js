document.addEventListener("DOMContentLoaded", function () {

  const contenedor = document.getElementById("boletos");
  const precioBoleto = 250;

  let seleccionados = [];
  let vendidos = JSON.parse(localStorage.getItem("vendidos")) || [];

  // CREAR BOLETOS 001 AL 1000
  for (let i = 1; i <= 1000; i++) {
    const numero = i.toString().padStart(3, "0");
    const div = document.createElement("div");

    div.className = "boleto";
    div.innerText = numero;

    // BOLETOS VENDIDOS
    if (vendidos.includes(numero)) {
      div.style.background = "#999";
      div.style.color = "white";
      div.style.cursor = "not-allowed";
    } else {
      div.addEventListener("click", function () {
        if (seleccionados.includes(numero)) {
          seleccionados = seleccionados.filter(n => n !== numero);
          div.style.background = "white";
        } else {
          seleccionados.push(numero);
          div.style.background = "#4CAF50";
          div.style.color = "white";
        }
      });
    }

    contenedor.appendChild(div);
  }

  });

});
