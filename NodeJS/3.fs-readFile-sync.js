import fs from 'fs'

console.log('Leyendo el primer archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('Primer texto:', text)

console.log('Se ejecuta DESPUES de leer el primer archivo, ya que readFileSync es sincrono (Bloquea la ejecucion del programa hasta que la operacion está completa)')

console.log('Leyendo el segundo archivo')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(text2)
