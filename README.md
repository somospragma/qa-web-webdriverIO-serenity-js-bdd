<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://f.hubspotusercontent20.net/hubfs/2829524/Copia%20de%20LOGOTIPO_original-2.png"></a>
  <br>
  qa-web-webdriverIO-serenity-js-bdd
  <br>
</h1>

<h4 align="center">Proyecto base de <a href="https://github.com/karatelabs/karate" target="_blank">Pragma</a>.</h4>


<p align="center">
  <a href="https://webdriver.io/">
    <img src="https://img.shields.io/badge/WebdriverIO-End--to--End_Testing-red.svg" alt="WebdriverIO">
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-JavaScript_Runtime-brightgreen.svg" alt="Node.js">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-Strongly_Typed-blue.svg" alt="TypeScript">
  </a>
  <a href="https://serenity-js.org/">
    <img src="https://img.shields.io/badge/SerenityJS-Behavior--Driven_Development-blueviolet.svg" alt="SerenityJS">
  </a>
  <a href="https://cucumber.io/">
    <img src="https://img.shields.io/badge/Cucumber-BDD-green.svg" alt="Cucumber">
  </a>
</p>


- Este proyecto tiene como objetivo presentar WebdriverIO como una herramienta moderna de automatización para pruebas web en Pragma, destacando su integración con Serenity-JS y Cucumber BDD para facilitar un enfoque estructurado y colaborativo en las pruebas de software.

- Se desarrollaron pruebas automatizadas para demostrar casos prácticos de esta tecnología, cubriendo los siguientes escenarios:

Login: 
* Dos pruebas que verifican un inicio de sesión exitoso y uno fallido.
  Automatización de texto dinámico: Un test enfocado en manejar y validar textos dinámicos en el frontend.
  Automatización de elementos con atributos dinámicos: Un escenario diseñado para interactuar con elementos del DOM cuyos atributos, como el id, cambian dinámicamente.
  El proyecto incluye archivos estructurados para las pruebas (*.feature), definiciones de pasos (*.steps.ts), y páginas modelo (*.ts), siguiendo principios de diseño orientado a objetos y patrones como Page Object Model. Los archivos principales son:


Features:

* dynamic_content.feature
* login.feature
* verify_dynamic_text.feature
  
Steps:

* dynamic_content.steps.ts
* login.steps.ts
* verify_dynamic_text_steps.ts

Pages:

* DynamicContentPage.ts
* DynamicIdPropertyPage.ts
* DynamicPropertiesPage.ts
* LoginPage.ts

<p align="center">
  <a href="#topicos">Topicos</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#consideraciones">Consideraciones</a> •
  <a href="#descarga">Descarga</a> •
  <a href="#instalación-y-ejecución">Instalación y ejecución</a> •
  <a href="#autores">Autores</a> •
  <a href="#relacionados">Relacionados</a> •
  <a href="#roadmap">Roadmap</a>
</p>




## Topicos

* WebdriverI0
* Serenity-JS
* Cucumber-BDD
* TypeScrypt
* Node-js

## Tecnologias
### This project required:
-  [@cucumber/cucumber] version "^11.0.1",
-  [@serenity-js/assertions] version "^3.29.5",
-  [@serenity-js/console-reporter] version "^3.29.5",
-  [@serenity-js/core] version "^3.29.5",
-  [@serenity-js/cucumber] version "^3.29.5",
-  [@serenity-js/rest] version "^3.29.5",
-  [@serenity-js/serenity-bdd] version "^3.29.5",
-  [@serenity-js/web] version "^3.29.5",
-  [@serenity-js/webdriverio] version "^3.29.5",
-  [@types/node] version "^22.9.0",
-  [@wdio/cli] version "^8.40.6",
-  [@wdio/local-runner] version "^9.2.8",
-  [@wdio/spec-reporter] version "^9.2.8",
-  [npm-failsafe] version "^1.3.0",
-  [rimraf] version "^6.0.1",
-  [ts-node] version "^10.9.2"

Nota: 
*   A la fecha 21 de noviembre de 2024, la versión @wdio/cli@9.2.1 no es compatible con Serenity-JS. Para resolver 
    problemas de instalación y compatibilidad, se recomienda utilizar la versión @wdio/cli@8.40.6, que funciona 
    correctamente con Serenity-JS.



## Consideraciones
- Si creas un proyecto desde cero utilizando el comando npm init wdio@latest . y sigues los pasos indicados para
configurarlo, es importante modificar la sección "scripts" en el archivo package.json para poder ejecutar las pruebas.
Asegúrate de agregar el siguiente código en la sección "scripts":

    "scripts": {
    "serenity": "failsafe serenity:update serenity:clean wdio serenity:report",
    "serenity:update": "serenity-bdd update",
    "serenity:clean": "rimraf target",
    "wdio": "wdio run ./wdio.conf.ts",
    "serenity:report": "serenity-bdd run --features ./features",
    "serenity:run": "failsafe serenity:update serenity:clean wdio serenity:report run --",
    "serenity:run-feature": "serenity-bdd run --spec"
    }
## Descarga
Para clonar está aplicación desde la linea de comando:

```bash
git clone https://github.com/somospragma/qa-web-webdriverIO-serenity-js-bdd.git
cd qa-web-webdriverIO-serenity-js-bdd
git remote remove origin
git remote add origin URL_DE_TU_NUEVO_REPOSITORIO
git push -u origin master
```
Nota: Asegúrate de reemplazar URL_DE_TU_NUEVO_REPOSITORIO con la URL del repositorio que creaste en tu cuenta de GitHub.

Puedes descargar el proyecto en el enlace [download](https://github.com/somospragma/qa-web-webdriverIO-serenity-js-bdd/archive/refs/heads/master.zip) 

## Instalación y ejecución

Para ejecutar está aplicación, necesitas [Node-js](https://nodejs.org/dist/v22.11.0/node-v22.11.0-x64.msi) and [npm](https://docs.npmjs.com/cli/v9/commands/npm-install) instalados en tu equipo, ten en cuenta que tu IDE puede gestionar la configuración de un proyecto de cero, siguiendo estos pasos:
Cuando ejecutes tu primer comando que es este npm init wdio@latest . Entonces debes fijarte te van a ir saliendo preguntas que debes responder YES o NO
A continuación te dejo el scripts del paso a paso que vas hacer hasta crear el proyecto
```
en la ruta que quieras instalar tu proyecto ejecuta este comando: npm init wdio@latest .
===============================
🤖 WDIO Configuration Wizard 🧙
===============================

? A project named "clasespragmawebdriverIO" was detected at "C:\Users\jhon.rojas_pragma\Documents\GitHubProyectosPragma\clasespragmawebdriverIO", correct? Yes

? What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
? Where is your automation backend located? On my local machine
? Which environment you would like to automate? Web - web applications in the browser
? With which browser should we start? Chrome
? Which framework do you want to use? Cucumber with Serenity/JS (https://serenity-js.org/)
? Do you want to use a compiler? TypeScript (https://www.typescriptlang.org/)
? Do you want WebdriverIO to autogenerate some test files? Yes
? What should be the location of your feature files? C:\Users\jhon.rojas_pragma\Documents\GitHubProyectosPragma\clasespragmawebdriverIO\features\**\*.feature 
? What should be the location of your step definitions?
C:\Users\jhon.rojas_pragma\Documents\GitHubProyectosPragma\clasespragmawebdriverIO\features\step-definitions\steps.ts
? What should be the location of your Serenity/JS Screenplay Pattern library?
C:\Users\jhon.rojas_pragma\Documents\GitHubProyectosPragma\clasespragmawebdriverIO\serenity
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup?
? Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! No
? Do you want to add a service to your test setup?
? Do you want me to run `npm install` Yes

```

##  🛠️ Run tests npx wdio run:
```
npx wdio run ./wdio.conf.ts --spec ./test/qa-web-webdriverIO-serenity-js-bdd/stepdefinitions/loginSteps.ts
npx wdio run wdio.conf.ts

```
##  🛠️ Run tests npm serenity:run:
```
npm serenity run

```
Nota:

*   Si deseas correr un archivo feature en especifico debes ejecutar el primer comando de arriba
*   Si deseas ejecutar todos los archivos features que hay en tu proyecto entoces ejecuta el segundo comando
*   Con el comando de npm serenity run ejecutas todos los archivos de feature.
    lo importante es que con este comando si salen los reportes de serenity, con los comandos de arriba no salen los reportes de serenity



## Autores

| [<img src="https://avatars.githubusercontent.com/u/186238159?v=4" width=115><br><sub>Jhon Hader. Rojas C.</sub>](https://gitlab.com/mauro.ibarrap)


## Relacionados


## Roadmap

- [Guia QA](https://github.com/orgs/somospragma/repositories?q=qa) - (En construcción) Una guia de proyectos Orientados a la Calidad de Software

