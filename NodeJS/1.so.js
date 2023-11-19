// CommonJS utiliza require
// const os = require('os')
// const platform = os.platform()
// console.log(platform)

// ECMAScript Modules utiliza import
// Requiere type: module en el package.json o ser extension .mjs
import os from 'os'
console.log('Informacion del Sistema Operativo')
console.log('Plataforma:', os.platform())
console.log('Version:', os.release())
console.log('Arquitectura:', os.arch())
console.log('Cantidad de CPUs:', os.cpus().length)
// console.log('Informacion de los CPUs:', os.cpus())
console.log('Memoria total:', (os.totalmem() / 1024 / 1024).toFixed(0), 'MB')
console.log('Memoria disponible:', (os.freemem() / 1024 / 1024).toFixed(0), 'MB')
console.log('Tiempo de actividad:', (os.uptime() / 3600).toFixed(1), 'horas')
