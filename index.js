import fs from 'fs';

const filePath = 'archivo.txt';
const dataToWrite = 'Este es el contenido que se escribirá en el archivo.';

try {
  fs.writeFileSync(filePath, dataToWrite, 'utf-8');
  console.log('Archivo escrito exitosamente.');
} catch (error) {
  console.error('Error al escribir el archivo:', error);
}
