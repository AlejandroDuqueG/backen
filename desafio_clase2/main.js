class Usuario{ 
constructor (nombre, apellido, libros=[], mascotas=[]){
    this.nombre = nombre
||  this.apellido = apellido
    this.libros = libros
    this.mascotas = mascotas
    }
getFullName() {
    return `Buenas tardes,``${this.nombre}`;
}
    console.log(Usuario.getFullName());
}

addMascota(nuevaMascota){
    this.mascotas.push(nuevaMascota);
}

countMascotas(){
    console.log(this.mascotas.length);

}

addBook(nombrelibro, autorlibro){
    const books={nombrelibro, autorlibro}
    this.libros.push(books);
}

getBookNames(){
    const libros = [{autorlibro: "Edgar Alan Poe", nombrelibro: "El gato negro"},
                    {autorlibro: "John D. Kelleher", nombrelibro: "Data Science"}
]
    const nombreLibros = []
    for (const libro of libros){
        nombreLibros.push(Usuario.libros)
    }

    return nombreLibros
};

let usuario = new Usuario(Alejandro, Duque,
    [{autorlibro:"Rosa Luxemburg", nombrelibro: "Más allá del Desarrollo"}])
   