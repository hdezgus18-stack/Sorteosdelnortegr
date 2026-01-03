const contenedor = document.getElementById("boletos");
const cantidadSpan = document.getElementById("cantidad");
const totalSpan = document.getElementById("total");

let seleccionados = [];
const precio = 250;

for (let i = 1; i <= 1000; i++) {
  const btn = document.createElement("button");
  const numero = i.toString().padStart(3, "0");

  btn.textContent = numero;
  btn.style.margin = "4px";
  btn.style.padding = "10px";
  btn.style.cursor = "pointer";

  btn.onclick = () => {
    if (seleccionados.includes(numero)) {
      seleccionados = seleccionados.filter(n => n !== numero);
      btn.style.background = "";
      btn.style.color = "";
    } else {
      seleccionados.push(numero);
      btn.style.background = "green";
      btn.style.color = "white";
    }

    actualizarResumen();
  };

  contenedor.appendChild(btn);
}

function actualizarResumen() {
  cantidadSpan.textContent = seleccionados.length;
  totalSpan.textContent = seleccionados.length * precio;
}

function confirmarCompra() {
  if (seleccionados.length === 0) {
    alert("Selecciona al menos un boleto");
    return;
  }

  const mensaje = `Hola, quiero comprar los boletos ${seleccionados.join(
    ", "
  )} del sorteo Sorteos del Norte GR.\n\nPrecio por boleto: $250 MXN\nTotal: $${seleccionados.length * precio} MXN\nPremio: Ram 2011 Hemi 5.7`;

  const telefono = "528135535711";
  const url = https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)};

  window.open(url, "_blank");
}



