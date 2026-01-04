document.addEventListener("DOMContentLoaded", function () {

  const PRECIO = 250;
  const TELEFONO = "528135535711";

  const boletosDiv = document.getElementById("boletos");
  const cantidad = document.getElementById("cantidad");
  const total = document.getElementById("total");
  const nombreInput = document.getElementById("nombre");
  const telefonoInput = document.getElementById("telefono");

  let seleccionados = [];

  for (let i = 1; i <= 1000; i++) {
    const num = i.toString().padStart(3, "0");
    const div = document.createElement("div");
    div.className = "boleto";
    div.textContent = num;

    div.onclick = () => {
      if (seleccionados.includes(num)) {
        seleccionados = seleccionados.filter(b => b !== num);
        div.classList.remove("seleccionado");
      } else {
        seleccionados.push(num);
        div.classList.add("seleccionado");
      }
      cantidad.textContent = seleccionados.length;
      total.textContent = seleccionados.length * PRECIO;
    };

    boletosDiv.appendChild(div);
  }

  window.confirmarCompra = function () {
    if (seleccionados.length === 0) {
      alert("Selecciona al menos un boleto");
      return;
    }

    const nombre = nombreInput.value;
    const telefono = telefonoInput.value;

    if (!nombre || !telefono) {
      alert("Completa tu nombre y teléfono");
      return;
    }

    const mensaje =
      Hola, quiero participar en *Sorteos del Norte GR* 🎟️\n\n +
      👤 Nombre: ${nombre}\n +
      📞 Teléfono: ${telefono}\n\n +
      🎟 Boletos: ${seleccionados.join(", ")}\n +
      💲 Total: $${seleccionados.length * PRECIO} MXN\n\n +
      💳 Pago por transferencia o depósito;

    window.open(https://wa.me/${TELEFONO}?text=${encodeURIComponent(mensaje)});
  };

});