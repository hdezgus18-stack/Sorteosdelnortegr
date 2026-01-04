document.addEventListener("DOMContentLoaded", () => {

  // CONFIGURACIÓN
  const PRECIO_BOLETO = 250;
  const TELEFONO = "5218135535711"; // cambia si es necesario

  // ELEMENTOS
  const contenedor = document.getElementById("boletos");
  const cantidadSpan = document.getElementById("cantidad");
  const totalSpan = document.getElementById("total");

  // VARIABLES
  let seleccionados = [];
  let metodoPago = "Transferencia";

  // CREAR BOLETOS 001 AL 1000
  for (let i = 1; i <= 1000; i++) {
    const boton = document.createElement("button");
    const numero = String(i).padStart(3, "0");

    boton.textContent = numero;
    boton.className = "boleto";

    boton.addEventListener("click", () => {
      if (seleccionados.includes(numero)) {
        // quitar
        seleccionados = seleccionados.filter(n => n !== numero);
        boton.style.background = "";
        boton.style.color = "";
      } else {
        // agregar
        seleccionados.push(numero);
        boton.style.background = "green";
        boton.style.color = "white";
      }
      actualizarResumen();
    });

    contenedor.appendChild(boton);
  }

  // ACTUALIZAR RESUMEN
  function actualizarResumen() {
    cantidadSpan.textContent = seleccionados.length;
    totalSpan.textContent = seleccionados.length * PRECIO_BOLETO;
  }

  // MÉTODO DE PAGO (puedes ampliar después)
  window.seleccionarPago = function (metodo) {
    metodoPago = metodo;
  };

  // CONFIRMAR COMPRA
  window.confirmarCompra = function () {
    if (seleccionados.length === 0) {
      alert("Selecciona al menos un boleto");
      return;
    }

    const mensaje =
      Hola, quiero comprar los siguientes boletos:\n +
      ${seleccionados.join(", ")}\n\n +
      Cantidad: ${seleccionados.length}\n +
      Total: $${seleccionados.length * PRECIO_BOLETO} MXN\n +
      Método de pago: ${metodoPago};

    const url =
      https://wa.me/${TELEFONO}?text=${encodeURIComponent(mensaje)};

    window.open(url, "_blank");
  };

});
