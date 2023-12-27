const axios = require('axios');
const XLSX = require('xlsx');

async function actualizarHosts(archivoExcel, urlApi, tokenApi) {
    const workbook = XLSX.readFile(archivoExcel);
    const sheetNameList = workbook.SheetNames;
    const sheet = workbook.Sheets[sheetNameList[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    for (let i = 0; i < data.length; i++) {
        const host = data[i];

        try {
            const response = await axios({
                method: 'post',
                url: urlApi,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    jsonrpc: '2.0',
                    method: 'host.update',
                    params: {
                        hostid: host.hostid,
                        host: host.host,
                    },
                    auth: tokenApi,
                    id: 1,
                },
            });

            console.log(`Host ${host.host} actualizado con éxito.`);
        } catch (error) {
            console.error(`Error al actualizar el host ${host.host}: ${error}`);
        }
    }
}