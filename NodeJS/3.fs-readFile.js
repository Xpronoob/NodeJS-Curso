import fs from 'fs'

// ReadFile es Asíncrono, lo que permite continuar la ejecucion y lanza el resultado hasta que termine sin bloquear el hilo
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  if (err) {
    // Manejar el error
    console.error('Error al leer el archivo', err)
  } else {
    // Operación exitosa
    console.log('Primer texto:', text)
  }
})

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Error al leer el archivo', err)
  } else {
    console.log('Segundo texto:', text)
  }
})
