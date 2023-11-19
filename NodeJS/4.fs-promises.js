import fs from 'fs/promises'

// Promesas son asincronas, continua el hilo ejecutandose y devuelve el resultado cuando está listo sin bloquear el hilo principal
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('Primer texto:', text)
  })

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('Segundo texto:', text)
  })
