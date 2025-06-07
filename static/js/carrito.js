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
            li.textContent = `${item.nombre} - $${item.precio}`;
            
            // Botón eliminar producto
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'X';
            btnEliminar.style.marginLeft = '10px';
            btnEliminar.style.backgroundColor = '#A58FFF';
            btnEliminar.style.border = 'none';
            btnEliminar.style.color = '#fff';
            btnEliminar.style.cursor = 'pointer';
            btnEliminar.style.borderRadius = '50%';
            btnEliminar.style.width = '20px';
            btnEliminar.style.height = '20px';
            btnEliminar.style.fontWeight = 'bold';
            btnEliminar.title = 'Eliminar producto';
            btnEliminar.addEventListener('click', () => {
                carrito.splice(index, 1);
                actualizarCarrito();
            });

            li.appendChild(btnEliminar);
            listaCarrito.appendChild(li);

            total += parseFloat(item.precio);
        });

        totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
    }

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            const nombre = boton.getAttribute('data-producto');
            const precio = boton.getAttribute('data-precio');

            carrito.push({ nombre, precio });
            actualizarCarrito();
        });
    });

    botonVaciar.addEventListener('click', () => {
        carrito = [];
        actualizarCarrito();
    });

    // Formulario comentarios simple (solo limpia campo)
    const formComentario = document.getElementById('form-comentario');
    formComentario.addEventListener('submit', e => {
        e.preventDefault();
        alert('¡Gracias por tu comentario!');
        formComentario.reset();
    });
});
