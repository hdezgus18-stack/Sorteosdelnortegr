// ===== CONFIGURACIÓN =====
const PRECIO_BOLETO = 250;
const TELEFONO_ADMIN = "528135535711";

// ===== ELEMENTOS =====
const contenedor = document.getElementById("boletos");
const cantidadSpan = document.getElementById("cantidad");
const totalSpan = document.getElementById("total");
const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");

// ===== VARIABLES =====
let seleccionados = [];

// ===== VALIDACIÓN BÁSICA =====
if (!contenedor) {
  alert("Error: no se encontró el contenedor de boletos");
}

// ===== GENERAR BOLETOS 001 - 1000 =====
for (let i = 1; i <= 1000; i++) {
  const numero = i.toString().padStart(3, "0");

  const boleto = document.createElement("div");
  boleto.className = "boleto";
  boleto.textContent = numero;

  boleto.addEventListener("click", () => {
    if (seleccionados.includes(numero)) {
      // Quitar selección
      seleccionados = seleccionados.filter(n => n !== numero);
      boleto.classList.remove("seleccionado");
    } else {
      // Agregar selección
      seleccionados.push(numero);
      boleto.classList.add("seleccionado");
    }

    cantidadSpan.textContent = seleccionados.length;
    totalSpan.textContent = seleccionados.length * PRECIO_BOLETO;
  });

  contenedor.appendChild(boleto);
}

// ===== COMPRA POR WHATSAPP =====
function confirmarCompra() {
  const nombre = nombreInput ? nombreInput.value.trim() : "";
  const telefono = telefonoInput ? telefonoInput.value.trim() : "";

  if (seleccionados.length === 0) {
    alert("Selecciona al menos un boleto");
    return;
  }

  if (!nombre || !telefono) {
    alert("Ingresa tu nombre y teléfono");
    return;
  }

  const mensaje =
    Hola, quiero comprar boletos del sorteo *Sorteos del Norte GR*.\n\n +
    👤 Nombre: ${nombre}\n +
    📞 Teléfono: ${telefono}\n\n +
    🎟 Boletos: ${seleccionados.join(", ")}\n +
    💲 Precio por boleto: $${PRECIO_BOLETO} MXN\n +
    💰 Total: $${seleccionados.length * PRECIO_BOLETO} MXN\n\n +
    💳 Pago por transferencia o depósito;

  const url = https://wa.me/${TELEFONO_ADMIN}?text=${encodeURIComponent(mensaje)};
  window.open(url, "_blank");
}

// ===== HACER FUNCIÓN GLOBAL =====
window.confirmarCompra = confirmarCompra;