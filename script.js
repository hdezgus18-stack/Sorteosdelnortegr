<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Sorteos del Norte GR</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f2f2f2;
      margin: 0;
      padding: 0;
      text-align: center;
    }
    header {
      background: red;
      color: white;
      padding: 20px;
    }
    #boletos {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
      gap: 10px;
      padding: 20px;
    }
    button {
      padding: 10px;
      font-weight: bold;
      cursor: pointer;
    }
  </style>
</head>

<body>

<header>
  <h1>Sorteos del Norte GR</h1>
  <p>Premio: Ram 2011 Hemi 5.7</p>
  <p>Boleto $250 MXN</p>
</header>

<h2>Selecciona tus boletos</h2>

<!-- ESTE DIV ES OBLIGATORIO -->
<div id="boletos"></div>

<p>Boletos seleccionados: <span id="cantidad">0</span></p>
<p>Total: $<span id="total">0</span> MXN</p>

<button onclick="confirmarCompra()">Confirmar por WhatsApp</button>

<!-- SCRIPT SIEMPRE AL FINAL -->
<script src="script.js"></script>

</body>
</html>
