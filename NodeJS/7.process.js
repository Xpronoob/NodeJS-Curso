// process es un objeto global que proporciona informacion y control sobre el proceso actual de ejecucion
// Tiene propiedades y metodos que permiten interactuar con el entorno de ejecucion de NodeJS

// Recupera los argumentos
console.log(process.argv)

// Controlar el proceso y su salida
// process.exit(0) // Termina de forma correcta
// process.exit(1) // Hubo un error y debe salir

// Controlar eventos del proceso
// process.on('exit', () => {
// Limpiar recursos u otra acccion al salir
// escuchar eventos del proceso, errores
// })

// current working directory recupera el directorio donde se esta ejecutando el proceso
// No devuelve donde está el archivo, sino desde donde se está ejecutando el proceso
console.log('Directorio en ejecucion', process.cwd())

// Ver variable de entorno
// en PowerShell $env:VARIABLE = "HOLA"; node 7.process.js
// en Bash SET VARIABLE=HOLA && node 7.process.js
// en Bash VARIABLE=HOLA node 7.process.js
console.log(process.env.VARIABLE)
