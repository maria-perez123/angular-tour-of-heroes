# Angular Tour Of Heroes

## Introducción

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0. Siguiendo el tutorial [Tour of Heroes](https://angular.io/tutorial). El objetivo de este repositorio es mostrar algunas de las pruebas End to End, que se pueden realizar con cypress para comprobar que el UI funciona según lo esperado.

## Servidor de desarrollo

El comando `ng serve` se encarga de correr el servidor. La aplicación se encuentra alojada en el servidor local `http://localhost:4200/`. La app automáticamente se recarga al realizar algún cambio en los archivos.

## Code scaffolding

El comando `ng generate component component-name` se encarga de generar los componentes de la aplicación. También se pueden generar otro tipo de archivos como lo muestra el siguiente comando: `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

El comando `ng build` compila el proyecto. Lo compilado se almacena en la carpeta `dist/`. La bandera `--prod` compila el proyecto en producción.

## Ejecutando end-to-end tests

Utilice el comando `ng e2e` para ejecutar los tests end-to-end via [Cypress](http://www.protractortest.org/), este comando mostrará los resultados en la terminal. La bandera `--watch` permite debuggear los tests en un navegador.

## Configuración de Cypress

La configuracíón de Cypress se hace siguiendo los pasos indicados en el siguiente [blog](https://medium.com/@joaqcid/5-steps-to-set-cypress-as-your-e2e-test-runner-in-angular-bbaf63619a1b). Allí se indica como desinstalar Protactor que viene por defecto en angular, y habilitar cypress como framework de ejecución de pruebas.

## Estructura de la carpeta E2E

e2e
|---src
|------fixtures
|---------example.json
|------integration
|---------app.spec.ts
|---------routes.spec.ts
|------plugin
|---------index.js
|------support
|---------app.po.ts
|---------commands.ts
|---------index.ts
|---cypress.json
|---tsconfig.e2e.json
|---tsconfig.json

### Archivos relevantes

- La carpeta **src/integration** contiene los tests e2e que fueron creados para la app Tour Of heroes.
- El archivo **index.js** de la carpeta **src/plugin** contiene el modulo que pre-procesa typescript, de modo que nuestro código puede ser leído.
- El archivo **app.po.ts** de la carpeta **src/support**, exporta funciones utilizadas en los tests para comprobar que los mensajes impresos en el DOM son correctos según la acción realizada.
- El archivo **cypress.json**, establece la carpetas en la cual van a ser archivados los videos y screenshots resultantes de los tests, actualmente esta carpeta es `dist` que se ubica al mismo nivel de la carpeta del proyecto. También establece la Url base (http://localhost:4200) a utilizar en los tests.

## Test realizados

### app.spec.ts

Se divide en dos conjuntos de tests: los dos contienen el hook `beforeEach`, uno dirige al /dashboard y otro a /heroes.

#### Tests en el filtro de busqueda y la división de mensajes

- Los títulos de la página dashboard y hero aparecen,el mensaje que indica que los heroes han cargado aparece.
- El filtro de búsqueda funciona, los heroes filtrados contienen el término buscado.
- El filtro de búsqueda no muestra nada cuando el termino buscado no coincide con el nombre de ningún heroe.
- Los mensajes pueden ser borrados con el botón "clear", cuando esto sucede no debe encontrarse la división de mensajes.

#### Tests relacionados a los heroes

- El id del heroe es contenido en la url de la página de detail, y el mensaje del heroe cargado aparece.
- El nombre del heroe puede ser actualizado con el botón "save", y el titulo de la página detail contiene el nombre en mayúscula.
- El nombre del heroe no debe actualizarse si se presiona el botón "goback"
  -Un heroe puede ser añadido a la lista con el botón "add" y el número de elementos en la lista aumenta en uno.
- Un heroe puede ser eliminado y el número de elementos disminuye en uno.

### routes.spec.ts

#### Testeando las rutas

- Las rutas funcionan, solicitando directamente una dirección, con el botón "bogack" o con e botón retroceder del navegador.
- Un Url equivocado conduce a la pagina raiz http://localhost:4200/.

## Resultados de los tests

Los resultados pueden observarse en mi [dashboard](https://dashboard.cypress.io/projects/bktq6y/runs/1/specs) de cypress.
