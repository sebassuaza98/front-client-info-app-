ClienteInfoApp
Este proyecto se generó con Angular CLI versión 18.2.0.

Servidor de Desarrollo
Ejecute ng serve para iniciar un servidor de desarrollo. Navegue hasta http://localhost:4200/. La aplicación se recargará automáticamente si cambia alguno de los archivos fuente.

Construcción

Ejecute ng build para construir el proyecto.
Una vez clonado el proyecto, instale las dependencias en la raíz del proyecto con el siguiente comando:
npm install

Para ejecutar en ambiente local, ejecute el comando:
ng serve

Nota: Esta app es independiente del backend. El origen de su información está mockeado en un archivo JSON ubicado en src/assets/clients.json.

 src
 ├── app
 │    ├── components
 │    │    ├── document-input
 │    │    │    ├── document-input.component.ts
 │    │    │    ├── document-input.component.html
 │    │    │    ├── document-input.component.scss
 │    │    ├── summary
 │    │    │    ├── summary.component.ts
 │    │    │    ├── summary.component.html
 │    │    │    ├── summary.component.scss
 │    ├── services
 │    │    ├── client.service.ts
 │    ├── models
 │    │    ├── client.model.ts
 │    ├── app.module.ts
 │    ├── app-routing.module.ts
 └── assets
      ├── clients.json
