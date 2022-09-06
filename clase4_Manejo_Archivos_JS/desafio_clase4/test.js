const Contenedor = require("./main.js");
const productos = new Contenedor("productos.txt");
const productoNuevo1 = {
    title: "Barra de chocolate",
    price: 7500,
    thumbnail: "",
};
const productoNuevo2 = {
    title: "Batido de chocolate listo para preparar",
    price: 17500,
    thumbnail: "",
};
const productoNuevo3 = {
    title: "Banana de chocolate",
    price: 1000,
    thumbnail: "",
};
const productoNuevo4 = {
    title: "Torta de chocolate",
    price: 14500,
    thumbnail: "",
};

const ejecutar = async () => {
    /* poner el producto a agregar* en el metodo save */
    await objects.save(productoNuevo2);
    /* await objects.getAll(); */
    /*poner la id a buscar , solo numeros  en el metodo getById */
    /* await objects.getById(); */
    /*poner la id a eliminar , solo numeros en el metodo deleteById */
    /* await objects.deleteById(); */
    /* await objects.deleteAll(); */
};
ejecutar();