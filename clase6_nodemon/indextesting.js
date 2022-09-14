(function (run) {
    if(!run) return
  
    const express = require('express')
  
    const app = express()
  
    const PORT = 8080

    class Contenedor{
        constructor(archivo) {
            this.archivo = archivo;
        }
    
    //Método para escribir en el archivo
    
    async escribirArchivo(archivo, contenido) {
        try {
            await fs.writeFileSync(
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
  
    const server = app.listen(PORT, () => {
      console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
    })
  
    server.on("error", error => console.log(`Error en servidor ${error}`))
  
    // A) '/' en esta ruta raíz, el servidor enviará string con un elemento de título nivel 1 (un h1 en formato HTML) que contenga el mensaje: 'Bienvenidos al servidor express' en color azul.
    // B) '/visitas' donde con cada request, el servidor devolverá un mensaje con la cantidad de visitas que se hayan realizado a este endpoint. Por ej. 'La cantidad de visitas es 10'
    // C) '/fyh' donde se devolverá la fecha y hora actual en formato objeto: { fyh: '11/1/2021 11:36:04' }
  
    app.set('cantidad', 0)
  
    app.get('/productos', (req, res) => {
        
        res.send('<h1 style="color: blue">Bienvenidos al servidor express</h1>')
    })
  
    app.get('/visitas', (req, res) => {
      let cantidad = app.get('cantidad')
      cantidad += 1
      res.send(`La cantidad de visitas es ${cantidad}`)
      app.set('cantidad', cantidad)
    })
  
    app.get('/fyh', (req, res) => {
      const dayjs = require('dayjs')
      res.json({ fyh: dayjs().format('DD/MM/YYYY hh:mm:ss') })
    })
  
  };