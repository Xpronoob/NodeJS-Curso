import { readFile } from 'node:fs/promises'

// Lee los archivos en paralelo (Simultaneo / Concurrente) de forma asíncrona
// Toma el array de promesas y devuelve una nueva promesa cuando se ha resuelto todo
Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, text2]) => {
  console.log('Primer texto:', text)
  console.log('Segundo texto:', text2)
})
