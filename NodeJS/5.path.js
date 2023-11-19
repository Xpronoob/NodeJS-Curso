import path from 'path'

// Barra separadora segun el SO \ /
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// Basename extrae el ultimo componente del path de un archivo o directorio
// En este caso devuelvo solo el ultimo componente archivo.txt
const base = path.basename('ruta/del/archivo/archivo.txt')
console.log(base)

// El segundo parametro especifica una extension(sufijo) que se debe omitir al extraer el nombre del archivo
const filename = path.basename('ruta/del/archivo/archivo.txt', '.txt')
console.log(filename)

// Devuelve la extension de un nombre de archivo
const extension = path.extname('my.img.png')
console.log(extension)
