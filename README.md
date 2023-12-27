Este repositorio contiene un conjunto de scripts para actualizar información geográfica en un sistema de monitoreo Zabbix mediante una integración con un archivo Excel. Los scripts están desarrollados en JavaScript y hacen uso de las bibliotecas axios y XLSX.

Requisitos Previos
Antes de ejecutar los scripts, asegúrate de tener instaladas las dependencias necesarias. Puedes instalarlas ejecutando el siguiente comando:

bash
Copy code
npm install
Configuración
El archivo config.js contiene la configuración necesaria para la conexión con la API de Zabbix. Asegúrate de proporcionar la URL correcta y el token de autenticación.

javascript
Copy code
// config.js

const config = {
    urlApi: 'http://10.144.2.162/zabbix/api_jsonrpc.php',
    tokenApi: '9ba1e59db9f78b97ebcc8a28a72c1935',
};

module.exports = config;
Estructura del Proyecto
/data/departamentos.xlsx: Este archivo Excel contiene información geográfica que será actualizada en el sistema de monitoreo Zabbix.

/exports/: Esta carpeta contendrá los archivos Excel actualizados después de ejecutar el script.

/node_modules/: Carpeta que contiene las dependencias del proyecto. Esta carpeta se genera después de ejecutar npm install y no debería ser incluida en el repositorio.

Ejecución
Para ejecutar el script principal, utiliza el siguiente comando:

bash
Copy code
node main.js
Este script leerá el archivo ./data/prueba.xlsx, actualizará la información de hosts en Zabbix según los datos proporcionados y mostrará el resultado en la consola.

Actualización de Coordenadas Geográficas
El script updateCoordinates.js se encarga de cargar el archivo ./data/departamentos.xlsx, que contiene información sobre departamentos y ciudades junto con sus coordenadas geográficas. El script actualizará un nuevo archivo Excel en la carpeta /exports/ con las coordenadas geográficas actualizadas.

bash
Copy code
node updateCoordinates.js
Notas Importantes
Asegúrate de tener permisos de escritura en la carpeta /exports/ para que los archivos Excel actualizados puedan ser guardados correctamente.

Verifica que la estructura del archivo Excel ./data/prueba.xlsx sea la correcta para evitar errores en la ejecución del script principal.

Se recomienda ejecutar estos scripts en un entorno controlado y realizar pruebas en un entorno de desarrollo antes de aplicar cambios en un entorno de producción.

¡Listo! Con estos pasos, deberías poder ejecutar y mantener actualizada la información geográfica en tu sistema de monitoreo Zabbix. Si encuentras algún problema o tienes preguntas adicionales, no dudes en consultar la documentación de las bibliotecas utilizadas o en abrir un problema en este repositorio.
