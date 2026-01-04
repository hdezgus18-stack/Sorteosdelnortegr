// ===== CONFIGURACIÓN =====
const contenedor = document.getElementById("boletos");
const cantidadSpan = document.getElementById("cantidad");
const totalSpan = document.getElementById("total");

const PRECIO = 250;
let seleccionados = [];
let metodoPago = "";

// ===== GENERAR BOLETOS 001 AL 1000 =====
for (let i = 1; i <= 1000; i++) {
  const btn = document.createElement("button");
  const numero = i.toString().padStart(3, "0");

  btn.textContent = numero;
  btn.className = "boleto";

  btn.onclick = () => {
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
  };

  contenedor.appendChild(btn);
}

// ===== ACTUALIZAR RESUMEN =====
function actualizarResumen() {
  cantidadSpan.textContent = seleccionados.length;
  totalSpan.textContent = seleccionados.length * PRECIO;
}

// ===== MÉTODO DE PAGO =====
function seleccionarPago(pago) {
  metodoPago = pago;
  alert("Método de pago seleccionado: " + pago);
}

// ===== CONFIRMAR COMPRA =====
function confirmarCompra() {
  if (seleccionados.length === 0) {
    alert("Selecciona al menos un boleto");
    return;
  }

  if (!metodoPago) {
    alert("Selecciona un método de pago");
    return;
  }

  const mensaje = `
Hola, quiero comprar boletos.

Boletos: ${seleccionados.join(", ")}
Cantidad: ${seleccionados.length}
Total: $${seleccionados.length * PRECIO} MXN
Método de pago: ${metodoPago}
`;

  const telefono = "52TU_NUMERO_AQUI";
  const url = https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)};
  window.open(url, "_blank");
}
