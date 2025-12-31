document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("boletos");

  if (!contenedor) {
    console.error("No se encontró el contenedor de boletos");
    return;
  }

  for (let i = 1; i <= 1000; i++) {
    const btn = document.createElement("button");
    btn.className = "boleto";
    btn.textContent = String(i).padStart(3, "0");

    btn.onclick = function () {
      const mensaje = Hola, quiero comprar el boleto #${btn.textContent} del sorteo Sorteos del Norte GR;
      const telefono = "5218135535711";
      const url = https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)};
      window.open(url, "_blank");
    };

    contenedor.appendChild(btn);
  }
});
