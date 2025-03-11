import { readFile, writeFile } from 'fs';
import { join } from 'path';

const filePath = join(__dirname, 'comentarios.json');

function agregarRegistro(nuevoRegistro) {
    // Leer el archivo JSON existente
    readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        // Parsear el contenido del archivo JSON
        let registros;
        try {
            registros = JSON.parse(data);
        } catch (parseError) {
            console.error('Error al parsear el JSON:', parseError);
            return;
        }

        // Agregar el nuevo registro
        registros.push(nuevoRegistro);

        // Escribir el nuevo contenido en el archivo JSON
        writeFile(filePath, JSON.stringify(registros, null, 2), (writeErr) => {
            if (writeErr) {
                console.error('Error al escribir en el archivo:', writeErr);
                return;
            }
            console.log('Registro agregado exitosamente.');
        });
    });
}


			 var nombre   = document.getElementById('nombre');
			 var apellido   = document.getElementById('apellido');			 
			 var curso    = document.getElementById('curso');
			 var email   = document.getElementById('email');
			 var mensaje   = document.getElementById('mensaje');

function nuevo (){
// Ejemplo de uso
const nuevoRegistro = {
    nombre: nombre,
    apellido: apellido, 
    curso: curso,
    email: email,
    mensaje: mensaje
};

agregarRegistro(nuevoRegistro);

}

        document.addEventListener("DOMContentLoaded", function() {
            // Obtener el botón por su ID y agregar el evento click
            const boton = document.getElementById("btnComentario");
            boton.addEventListener("click", nuevo);
        });

