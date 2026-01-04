document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("boletos");
  const cantidadSpan = document.getElementById("cantidad");
  const totalSpan = document.getElementById("total");

  if (!contenedor) {
    console.error("No existe el div #boletos");
    return;
  }

  let seleccionados = [];
  const precio = 250;

  for (let i = 1; i <= 1000; i++) {
    const btn = document.createElement("button");
    btn.classList.add("boleto");

    const numero = i.toString().padStart(3, "0");
    btn.textContent = numero;

    btn.addEventListener("click", () => {
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
    });

    contenedor.appendChild(btn);
  }

  window.confirmarCompra = function () {
    if (seleccionados.length === 0) {
      alert("Selecciona al menos un boleto");
      return;
    }

    const mensaje =
      `Hola, quiero comprar los boletos ${seleccionados.join(", ")} ` +
      del sorteo Sorteos del Norte GR.\n\n +
      Precio por boleto: $250 MXN\n +
      Total: $${seleccionados.length * precio} MXN\n +
      Premio: Ram 2011 Hemi 5.7;

    const telefono = "528135535711";
    const url = https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)};
    window.open(url, "_blank");
  };
});
