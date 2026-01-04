alert("SCRIPT CARGADO");

const contenedor = document.getElementById("boletos");
const cantidadSpan = document.getElementById("cantidad");
const totalSpan = document.getElementById("total");

let seleccionados = [];
const precio = 250;

for (let i = 1; i <= 1000; i++) {
  const btn = document.createElement("button");
  btn.className = "boleto";

  const numero = i.toString().padStart(3, "0");
  btn.textContent = numero;

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

    cantidadSpan.textContent = seleccionados.length;
    totalSpan.textContent = seleccionados.length * precio;
  };

  contenedor.appendChild(btn);
}

function confirmarCompra() {
  if (seleccionados.length === 0) {
    alert("Selecciona al menos un boleto");
    return;
  }

  const mensaje =
    Hola, quiero comprar los boletos ${seleccionados.join(", ")} del sorteo Sorteos del Norte GR.\n +
    Precio por boleto: $250 MXN\n +
    Total: $${seleccionados.length * precio} MXN;

  const url = https://wa.me/528135535711?text=${encodeURIComponent(mensaje)};
  window.open(url, "_blank");
}
