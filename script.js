// ===== CONFIGURACIÓN =====
let seleccionados = [];
const precio = 250; // precio por boleto
const telefono = "5218135535711"; // tu WhatsApp

// ===== CARGA DE BOLETOS =====
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("boletos");
  const cantidadSpan = document.getElementById("cantidad");
  const totalSpan = document.getElementById("total");

  // Seguridad: si no existe el div, no sigue
  if (!contenedor) {
    console.error("No existe el div #boletos");
    return;
  }

  for (let i = 1; i <= 1000; i++) {
    const boton = document.createElement("button");
    const numero = i.toString().padStart(3, "0");

    boton.textContent = numero;
    boton.className = "boleto";

    boton.addEventListener("click", () => {
      if (seleccionados.includes(numero)) {
        // Quitar selección
        seleccionados = seleccionados.filter(b => b !== numero);
        boton.style.background = "";
        boton.style.color = "";
      } else {
        // Agregar selección
        seleccionados.push(numero);
        boton.style.background = "green";
        boton.style.color = "white";
      }

      cantidadSpan.textContent = seleccionados.length;
      totalSpan.textContent = seleccionados.length * precio;
    });

    contenedor.appendChild(boton);
  }
});

// ===== CONFIRMAR COMPRA POR WHATSAPP =====
function confirmarCompra() {
  if (seleccionados.length === 0) {
    alert("Selecciona al menos un boleto");
    return;
  }

  const lista = seleccionados.join(", ");
  const total = seleccionados.length * precio;

  const mensaje = `
Hola 👋
Quiero comprar boletos del sorteo Sorteos del Norte GR.

🎟️ Boletos seleccionados:
${lista}

💰 Total a pagar: $${total} MXN

¿Me puedes enviar los métodos de pago?
`;

  const url = https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)};
  window.open(url, "_blank");
}
