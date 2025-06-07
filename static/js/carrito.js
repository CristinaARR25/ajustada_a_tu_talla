document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.boton-agregar');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const botonVaciar = document.getElementById('vaciar-carrito');

    let carrito = [];

    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        let total = 0;

        carrito.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
            
            // Botón eliminar producto
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'X';
            btnEliminar.title = 'Eliminar producto';
            btnEliminar.addEventListener('click', () => {
                carrito.splice(index, 1);
                actualizarCarrito();
            });

            li.appendChild(btnEliminar);
            listaCarrito.appendChild(li);

            total += item.precio;
        });

        totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
    }

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            const nombre = boton.getAttribute('data-producto');
            const precioStr = boton.getAttribute('data-precio');
            const precio = parseFloat(precioStr);

            if (isNaN(precio)) {
                alert('Error: precio inválido para el producto');
                return;
            }

            carrito.push({ nombre, precio });
            actualizarCarrito();
        });
    });

    botonVaciar.addEventListener('click', () => {
        carrito = [];
        actualizarCarrito();
    });

    // Formulario comentarios simple (solo limpia campo y alerta)
    const formComentario = document.getElementById('form-comentario');
    formComentario.addEventListener('submit', e => {
        e.preventDefault();
        alert('¡Gracias por tu comentario!');
        formComentario.reset();
    });
});
