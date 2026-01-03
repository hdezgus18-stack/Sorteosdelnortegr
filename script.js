document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("boletos");

  for (let i = 1; i <= 1000; i++) {
    const boton = document.createElement("button");
    boton.className = "boleto";
    boton.textContent = String(i).padStart(3, "0");

    boton.onclick = function () {
      const mensaje = Hola, quiero comprar el boleto #${boton.textContent} del sorteo Sorteos del Norte GR;
      const telefono = "5218135535711";
      const url = https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)};
      window.open(url, "_blank");
    };

    contenedor.appendChild(boton);
  }
});

