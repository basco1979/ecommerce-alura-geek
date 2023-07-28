export const mostrarProducto = (nombre, precio, imagen, id, categoria, descripcion) => {

    const contenedor = document.createElement("div");

    contenedor.className = "producto__card";
    const contenido = `
    <img src=${imagen} />
    <h3 class="producto-texto">${nombre}</h3>
    <p class="producto-precio">$${precio}</p>
    <a class="producto-link" href="../vistas/detalles-producto.html?id=${id}">Ver producto</a> 
    `;

    contenedor.innerHTML = contenido;
    return contenedor;
}