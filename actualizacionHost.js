const config = require('./config.js');
const axios = require('axios');
const XLSX = require('xlsx');

const { urlApi, tokenApi } = config;

// Lee el archivo Excel
function readExcel(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  return XLSX.utils.sheet_to_json(sheet);
}

// Actualiza hosts en Zabbix
async function updateHosts(tokenApi, excelData) {
  const headers = { 'Content-Type': 'application/json' };

  for (const row of excelData) {
    const updateData = {
      jsonrpc: '2.0',
      method: 'host.update',
      params: {
        hostid: row.hostid,
        inventory: {
          location_lat: row.location_lat,
          location_lon: row.location_lon,
          site_city: row.site_city,
          site_state: row.site_state,
        },
      },
      auth: tokenApi,
      id: 1,
    };

    try {
      const response = await axios.post(urlApi, updateData, { headers });
      const result = response.data;

      console.log(`Resultado para hostid ${row.hostid}:`, result);
    } catch (error) {
      console.error(`Error al actualizar hostid ${row.hostid}:`, error.message);
    }
  }
}

// Ejecuta el proceso
async function main() {
  try {
    
    const excelData = readExcel('./data/prueba.xlsx');
    await updateHosts(tokenApi, excelData);
  } catch (error) {
    console.error(error.message);    
  }
}


// Inicia el proceso principal
main();
