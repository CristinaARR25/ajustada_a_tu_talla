// carrito.js - Código exacto para tu tienda fitness

let carrito = [];

function agregarAlCarrito(nombreProducto) {
  const productoExistente = carrito.find(item => item.nombre === nombreProducto);
  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({ nombre: nombreProducto, cantidad: 1 });
  }
  actualizarCarritoVisual();
}

function actualizarCarritoVisual() {
  const carritoContenedor = document.getElementById('carrito-contenedor');
  carritoContenedor.innerHTML = '';

  if (carrito.length === 0) {
    carritoContenedor.innerHTML = '<p>El carrito está vacío.</p>';
    return;
  }

  const lista = document.createElement('ul');
  carrito.forEach(item => {
    const elemento = document.createElement('li');
    elemento.textContent = `${item.nombre} — Cantidad: ${item.cantidad}`;
    lista.appendChild(elemento);
  });
  carritoContenedor.appendChild(lista);
}

function limpiarCarrito() {
  carrito = [];
  actualizarCarritoVisual();
}
