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
        actualizarResumen();
      });
    }

    // 🔴 ESTA LÍNEA ES LA QUE FALTABA
    contenedor.appendChild(div);
  }

  function actualizarResumen() {
    document.getElementById("cantidad").innerText = seleccionados.length;
    document.getElementById("total").innerText = seleccionados.length * precioBoleto;
  }

});

function confirmarCompra() {
  const cantidad = document.getElementById("cantidad").innerText;
  const total = document.getElementById("total").innerText;

  if (cantidad == 0) {
    alert("Selecciona al menos un boleto");
    return;
  }

  const mensaje = Hola, quiero comprar ${cantidad} boletos.\nTotal: $${total} MXN;
  const telefono = "5218135535711";

  window.open(https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}, "_blank");
}
