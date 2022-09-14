/* Consigna: implementar programa que contenga una clase llamada Contenedor
que reciba el nombre del archivo con el que va a trabajar e implemente los 
siguientes métodos: 

save(Object): Number
getById(Number): Object
getAll(): Object[]
deleteById(Number): void
deleteAll(): void*/

const fs = require('fs')

class Contenedor{
    constructor(archivo) {
        this.archivo = archivo;
    }

//Método para escribir en el archivo

async escribirArchivo(archivo, contenido) {
    try {
        await fs.promises.writeFile(
            archivo,
            JSON.stringify(contenido, null, 2),
            "utf-8"
        );
    } catch (error) {
        console.log(error.message);
    }
}

//Método para leer el archivo 

async leerArchivo(archivo) {
    try {
        const data = await fs.readFileSync(archivo, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.log(error.message);
    }
}

//Método para saber si existe el archivo
existe(archivo) {
    try {
        if (!fs.existsSync(archivo)) {
            throw new Error("El archivo no se encontró!");
        } else {
            return true;
        }
    } catch (error) {
        console.log(error.message);
    }
}
   async save(object){
        try {
            //Verificar si existe archivo, sino crea uno nuevo
            if(!this.existe(this.archivo)) {
                console.log(
                    `No se encontró el archivo ${this.archivo}\n se procede a crear uno nuevo`
                );
            //Creación de objeto vacío
            let arrayObjets = [];
        object["id"] = 1;
        arrayObjets.push(object);
        console.log("Se está agregando el producto");

        //Escribir en el archivo
        await this.escribirArchivo(
            this.archivo,
            arrayObjets
        );
        console.log(`Se agregó nuevo producto con id ${objeto["id"]}`
        );
        return object["id"];
            } else {
                //Verificar la existencia del archivo y si está vacío
            if (this.leerArchivo(this.archivo)) {
                const data = await this.leerArchivo(this.archivo);
                if (data.length === 0) {
                // Si el archivo está vacío, se le ha de asignar el id 1 al primer producto
                object["id"] = 1;
                } else {
                // Si el archivo ya tiene productos, se le asigna id siguiente
                let ultimoId = data[data.length - 1].id;
                object["id"] = ultimoId + 1;
                }
                data.push(object);
                console.log("Se está agregando el producto");
                // Escribir el producto
                this.escribirArchivo(this.archivo, data);
                console.log(
                    `Se agregó un nuevo producto con el id ${object["id"]}`
                );
                return object["id"];
                }
            }

        } catch (error) {
            console.log(error.message);
        }
    }
   
   async getById(id){
        try {
            //Verificar si existe archivo
            if (this.existe(this.archivo)) {
                const data = await this.leerArchivo(this.archivo);
                //Filtrar archivo para buscar producto con id ingresado

            const dataId = data.filter((item) => item.id === id);
            if (dataId.length === 0) {
                throw new Error("No se encontró el ID")
            } else {
                console.log(
                    `El producto con ID ${id} :\n`,
                    dataId
                );

                return dataId;
            }
        }
    } catch (error) {
        console.log(error.message);
    };

}

    async getAll(){
        try {
            if(this.existe(this.archivo)) {
                console.log("Se está leyendo el archivo");
                const data = await this.leerArchivo(this.archivo);

            if(data.length !== 0) {
                console.log(
                    `Constenido del archivo ${this.archivo} :\n data`
                );
            } else {
                throw new Error(
                    `El archivo ${this.archivo} está vacío`
                );
            }
        }
    } catch (error) {
        console.log(error.message);
    };
}

   async deleteById(id){
        try {
            if (this.existe(this.archivo)) {
                console.log(
                    `Se está buscando el producto con ID ${id}`
                    );
                const data = await this.leerArchivo(this.archivo);
                if (data.some((item) => item.id === id)) {
                    const data = await this.leerArchivo(this.archivo);
                    const datos = data.filter(
                        (item) => item.id !== id
                    );
                    this.escribirArchivo(this.archivo, datos);
                    console.log(
                        `Se borró el producto con id ${id}`
                    );
                } else {
                    throw new Error(
                        `No se encontró el producto con ID ${id}`
                    );
                }
            }
        } catch (error) {
            console.log(error.message);
        };
    }

   async deleteAll(){
        try {
            if (this.existe(this.archivo)) {
                console.log("Se está procediendo a borrar los datos");
                let nuevo = [];
                await this.escribirArchivo(this.archivo, nuevo);
                console.log(
                    `Se borraron todos los datos del archivo ${this.archivo}`
                );
            }
            } catch (error) {
        console.log(error.message);
    };
}


module.exports = Contenedor;
