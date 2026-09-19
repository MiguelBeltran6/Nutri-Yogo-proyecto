// 1. Array de 3 objetos con los datos de tus yogures
const productosYogur = [
  { id: 1, tamano: "Pequeño", capacidad: "200ml", precio: 4500 },
  { id: 2, tamano: "Mediano", capacidad: "500ml", precio: 9500 },
  { id: 3, tamano: "Grande", capacidad: "1L", precio: 17500 }
];

// 2. Función que transforma el array en una plantilla HTML usando .map()
function generarHTMLYogures(productos) {
  const itemsHTML = productos.map(producto => `
    <div class="producto-card">
      <h2>Yogur ${producto.tamano}</h2>
      <p>Capacidad: ${producto.capacidad}</p>       <p>Precio: $${producto.precio.toLocaleString('es-CO')}</p>
    </div>
  `).join('');

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Catálogo de Yogures</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .producto-card { border: 1px solid #ccc; padding: 15px; margin-bottom: 10px; border-radius: 8px; }
      </style>
    </head>
    <body>
      <h1>Nuestros Yogures</h1>
      ${itemsHTML}
    </body>
    </html>
  `;
}

// 3. Conectar la función a una ruta usando Express.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/yogures', (req, res) => {
  const html = generarHTMLYogures(productosYogur);
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});