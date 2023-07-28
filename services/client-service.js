const datosUsuarios = () => fetch('http://localhost:3000/usuarios').then(respuesta => respuesta.json());

//consultar productos
const listaProductos = () => fetch('http://localhost:3000/productos').then(respuesta => respuesta.json());


//detalle producto
const detalleProducto = async (id) => {
    return fetch(`http://localhost:3000/productos/${id}`)
        .then(respuesta => respuesta.json())
}


//crear productos
const crearProducto = (nombre, precio, imagen, categoria, descripcion) => {
    return fetch(`http://localhost:3000/productos`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ nombre, precio, imagen, categoria, descripcion })
    }).then(respuesta => {
        if (respuesta.ok) {
            return respuesta.body
        }
    })
    throw new Error('no se pudo crear el producto')
};



//editar productos corregido
const actualizarProducto = (nombre, precio, imagen, id, categoria, descripcion) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            precio,
            id,
            imagen,
            categoria,
            descripcion
        })
    })
        .then(respuesta => respuesta)
        .catch(error => console.log(error));
};



//eliminar productos
const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
    })
}

export const clientServices = {
    datosUsuarios,
    listaProductos,
    detalleProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};