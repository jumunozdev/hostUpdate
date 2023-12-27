const XLSX = require('xlsx');
const departamentos = require('./data/colombia.json');

// Carga el archivo Excel
const workbook = XLSX.readFile('./data/departamentos.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Crea un objeto de índices para buscar más eficientemente
const indexMap = {};
departamentos.forEach((data) => {
  data.ciudades.forEach((ciudad, index) => {
    const key = `${data.departamento}-${ciudad}`;
    indexMap[key] = { latitud: data.latitudes[index], longitud: data.longitudes[index] };
  });
});

// Itera sobre las filas del archivo Excel
const range = XLSX.utils.decode_range(worksheet['!ref']);
for (let rowNum = range.s.r + 1; rowNum <= range.e.r; rowNum++) {
  const ciudad = worksheet[XLSX.utils.encode_cell({ r: rowNum, c: 4 })].v; // Columna de ciudades
  const departamento = worksheet[XLSX.utils.encode_cell({ r: rowNum, c: 5 })].v; // Columna de departamento

  const key = `${departamento}-${ciudad}`;
  const coordenadas = indexMap[key];

  if (coordenadas) {
    // Actualiza celdas en el archivo Excel
    worksheet[XLSX.utils.encode_cell({ r: rowNum, c: 2 })] = { v: coordenadas.latitud }; // Columna de latitudes
    worksheet[XLSX.utils.encode_cell({ r: rowNum, c: 3 })] = { v: coordenadas.longitud }; // Columna de longitudes
  }
}

// Guarda el archivo Excel actualizado
XLSX.writeFile(workbook, './exports/departamentosNuevo.xlsx');