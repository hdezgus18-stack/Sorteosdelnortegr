// PRECIO DEL BOLETO
const PRECIO = 250;

// VARIABLES
let seleccionados = [];
let metodoPago = "";

// CUANDO CARGA LA PÁGINA
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("boletos");

  // 🔴 SI ESTE DIV NO EXISTE, NO APARECE NADA
  if (!contenedor) {
    alert("ERROR: No existe el div #boletos");
    return;
  }

  // CREAR BOLETOS 001 - 1000
  for (let i = 1; i <= 1000; i++) {
    const btn = document.createElement("button");
    const numero = String(i).padStart(3, "0");

    btn.textContent = numero;
    btn.className = "boleto";

    btn.onclick = () => toggleBoleto(numero, btn);

    contenedor.appendChild(btn);
  }

  actualizarResumen();
});

// SELECCIONAR / QUITAR BOLETO
function toggleBoleto(numero, btn) {
  if (seleccionados.includes(numero)) {
    seleccionados = seleccionados.filter(n => n !== numero);
    btn.style.background = "white";
    btn.style.color = "black";
  } else {
    seleccionados.push(numero);
    btn.style.background = "green";
    btn.style.color = "white";
  }

  actualizarResumen();
}

// ACTUALIZAR TOTAL
function actualizarResumen() {
  document.getElementById("cantidad").textContent = seleccionados.length;
  document.getElementById("total").textContent = seleccionados.length * PRECIO;
}

// MÉTODO DE PAGO
function seleccionarPago(pago) {
  metodoPago = pago;
  alert("Método de pago: " + pago);
}

// WHATSAPP
function confirmarCompra() {
  if (seleccionados.length === 0) {
    alert("Selecciona al menos un boleto");
    return;
  }

  if (!metodoPago) {
    alert("Selecciona un método de pago");
    return;
  }

  const mensaje =
    Hola, quiero comprar los boletos:\n +
    ${seleccionados.join(", ")}\n +
    Total: $${seleccionados.length * PRECIO} MXN\n +
    Pago: ${metodoPago};

  const telefono = "521XXXXXXXXXX"; // 👈 TU NÚMERO
  const url = https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)};

  window.open(url, "_blank");
}
