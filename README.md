#Actualización masiva de host

Este repositorio contiene un conjunto de scripts para actualizar información geográfica en un sistema de monitoreo Zabbix mediante una integración con un archivo Excel. Los scripts están desarrollados en JavaScript y hacen uso de las bibliotecas axios y XLSX.

## Requisitos Previos
Antes de ejecutar los scripts, asegúrate de tener instaladas las dependencias necesarias. Puedes instalarlas ejecutando el siguiente comando:

```bash
  npm install 
```
    
## Configuración
El archivo config.js contiene la configuración necesaria para la conexión con la API de Zabbix. Asegúrate de proporcionar la URL correcta y el token de autenticación.


#### config.js
```javascript
const config = {
    urlApi: 'TUURLSERVIDOR',
    tokenApi: 'TUTOKENAPI',
};
```

Se recomienda ejecutar estos scripts en un entorno controlado y realizar pruebas en un entorno de desarrollo antes de aplicar cambios en un entorno de producción.

¡Listo! Con estos pasos, deberías poder ejecutar y mantener actualizada la información geográfica en tu sistema de monitoreo Zabbix. Si encuentras algún problema o tienes preguntas adicionales, no dudes en consultar la documentación de las bibliotecas utilizadas o en abrir un problema en este repositorio.

## Documentation
[Documentation](https://www.zabbix.com/documentation/current/es/manual/api)
