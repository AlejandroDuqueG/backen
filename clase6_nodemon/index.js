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
  
    const server = app.listen(PORT, () => {
      console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
    })
  
    server.on("error", error => console.log(`Error en servidor ${error}`))
  
    // A) '/productos' que devuelve un array con todos los productos disponibles en el servidor
    // B) '/productorandom' que devuelve un producto elegido al azar entre todos los productos disponibles
    
    //inicio de la ruta get de productos

    app.set('cantidad', 0)
  
    app.get('/productos', (req, res) => {
        const {readFileSync, promises: fsPromises} = require('fs');

// read file SYNCHRONOUSLY

        function syncReadFile(productos) {
        const contents = readFileSync(productos, 'utf-8');

        const arr = contents.split(/\r?\n/);

        console.log(arr); 

  return arr;
}

const productos = syncReadFile('./productos.txt');
        res.send('Los productos disponibles son {productos}')
    })
  
    //inicio de la ruta get de producto random
    app.get('/productorandom', (req, res) => {
        (() => {
            var randomproduct;
            var archivocrudo = new XMLHttpRequest();
            archivocrudo.open("GET", "productos.txt", false);
            archivocrudo.onreadystatechange = function() {
              if (archivocrudo.readyState === 4) {
                if (archivocrudo.status === 200) {
                  var allText = archivocrudo.responseText;
                  var split = allText.split('\n')
                  var randomNum = Math.floor(Math.random() * split.length);
                  randomproduct = split[randomNum]
                  console.log("All Lines\n" + allText)
                  console.log("Line Number\n" + (randomNum + 1))
                  console.log("Random Line\n" + randomproduct)
                }
              }
            }
            archivocrudo.send(null);
          
            const gen = document.getElementById('gen');
            document.querySelector('button').addEventListener('click', () => {
              if (randomproduct) gen.textContent = randomproduct;
              else gen.textContent = 'Not retrieved yet';
            });
          })();
    });