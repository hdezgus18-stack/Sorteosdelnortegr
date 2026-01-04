let seleccionados = [];
const precio = 250;

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("boletos");
  const cantidadSpan = document.getElementById("cantidad");
  const totalSpan = document.getElementById("total");

  for (let i = 1; i <= 1000; i++) {
    const btn = document.createElement("button");
    const numero = i.toString().padStart(3, "0");

    btn.textContent = numero;
    btn.className = "boleto";

    btn.addEventListener("click", () => {
      if (seleccionados.includes(numero)) {
        seleccionados = seleccionados.filter(n => n !== numero);
        btn.style.background = "";
        btn.style.color = "";
      } else {
        seleccionados.push(numero);
        btn.style.background = "green";
        btn.style.color = "white";
      }

      cantidadSpan.textContent = seleccionados.length;
      totalSpan.textContent = seleccionados.length * precio;
    });

    contenedor.appendChild(btn);
  }
});

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

🎟️ Boletos: ${lista}
💰 Total a pagar: $${total} MXN

¿Me puedes enviar los métodos de pago?
`;

  const telefono = "5218135535711";
  const url = https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)};

  window.open(url, "_blank");
}
