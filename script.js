document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("boletos");
  const cantidadSpan = document.getElementById("cantidad");
  const totalSpan = document.getElementById("total");

  let seleccionados = [];
  const precio = 250;

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
