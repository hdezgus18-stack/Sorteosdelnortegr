document.addEventListener("DOMContentLoaded", function () {

  // ===== CONFIGURACIÓN =====
  const PRECIO = 250;
  const TELEFONO = "528135535711";

  // ===== ELEMENTOS =====
  const boletosDiv = document.getElementById("boletos");
  const cantidadSpan = document.getElementById("cantidad");
  const totalSpan = document.getElementById("total");
  const nombreInput = document.getElementById("nombre");
  const telefonoInput = document.getElementById("telefono");

  // ===== VARIABLES =====
  let seleccionados = [];
  let vendidos = JSON.parse(localStorage.getItem("vendidos")) || [];

  if (!boletosDiv) {
    alert("ERROR: No se encontró el contenedor de boletos");
    return;
  }

  // ===== GENERAR BOLETOS =====
  for (let i = 1; i <= 1000; i++) {
    const num = i.toString().padStart(3, "0");
    const div = document.createElement("div");
    div.className = "boleto";
    div.textContent = num;

    // 🔴 BLOQUEAR BOLETOS VENDIDOS
    if (vendidos.includes(num)) {
      div.style.background = "#999";
      div.style.color = "white";
      div.style.cursor = "not-allowed";
      boletosDiv.appendChild(div);
      continue;
    }

    // 🟢 SELECCIONAR / DESELECCIONAR
    div.onclick = () => {
      if (seleccionados.includes(num)) {
        seleccionados = seleccionados.filter(b => b !== num);
        div.classList.remove("seleccionado");
      } else {
        seleccionados.push(num);
        div.classList.add("seleccionado");
      }

      cantidadSpan.textContent = seleccionados.length;
      totalSpan.textContent = seleccionados.length * PRECIO;
    };

    boletosDiv.appendChild(div);
  }

  // ===== CONFIRMAR COMPRA POR WHATSAPP =====
  window.confirmarCompra = function () {

    if (seleccionados.length === 0) {
      alert("Selecciona al menos un boleto");
      return;
    }

    const nombre = nombreInput.value.trim();
    const telefono = telefonoInput.value.trim();

    if (!nombre || !telefono) {
      alert("Ingresa tu nombre y teléfono");
      return;
    }

    const mensaje =
      Hola, quiero participar en *Sorteos del Norte GR* 🎟️\n\n +
      👤 Nombre: ${nombre}\n +
      📞 Teléfono: ${telefono}\n\n +
      🎟 Boletos: ${seleccionados.join(", ")}\n +
      💲 Total: $${seleccionados.length * PRECIO} MXN\n\n +
      💳 Pago por transferencia o depósito;

    const url = https://wa.me/${TELEFONO}?text=${encodeURIComponent(mensaje)};
    window.open(url, "_blank");
  };

});
