const Producto = require('../models/producto.model');

//Valida los datos recibidos. Devuelve un mensaje de error o null si todo esta bien. 
const validarProducto = ({nombre, precio, stock }) => {
    if (typeof nombre !== 'string' || nombre.trim() === ''){
        return 'El nombre es obligatorio';
    }
    if (precio === undefined || isNaN(Number(precio)) || Number(precio) < 0){
        return 'El precio debe ser un numero mayor o igual a 0';
    }
    if (stock !== undefined && (!Number.isInteger(Number(stock)) || Number(stock) < 0))
    {
      return 'El stock debe ser un numero entero mayor o igual a 0';
     }
     return null;
};

//GET /api/productos
const listar = async ()