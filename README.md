<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://f.hubspotusercontent20.net/hubfs/2829524/Copia%20de%20LOGOTIPO_original-2.png"></a>
  <br>
  Nombre del Proyecto
  <br>
</h1>

<h4 align="center">Proyecto base de <a href="https://github.com/karatelabs/karate" target="_blank">Pragma</a>.</h4>

De aca en adelante encontraras las partes del readme con un pequeño ejemplo dentro de cada una de ellas, actualiza su contenido (no olvides borrar esta línea)

<p align="center">
  <a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html">
    <img src="https://img.shields.io/badge/Java-11+-orange.svg" alt="Java">
  </a>
  <a href="https://www.mysql.com/">
    <img src="https://img.shields.io/badge/Database-MySQL-blue.svg" alt="MySQL">
  </a>
  <a href="https://www.postgresql.org/">
    <img src="https://img.shields.io/badge/Database-PostgreSQL-blue.svg" alt="PostgreSQL">
  </a>
  <a href="https://www.w3schools.com/sql/">
    <img src="https://img.shields.io/badge/SQL-Fundamentals-lightgrey.svg" alt="SQL">
  </a>
  <a href="https://cucumber.io/">
    <img src="https://img.shields.io/badge/Cucumber-BDD-green.svg" alt="Cucumber">
  </a>
  <a href="https://serenity-bdd.info/">
    <img src="https://img.shields.io/badge/Serenity-Reporting-blueviolet.svg" alt="Serenity">
  </a>
  <a href="https://www.selenium.dev/">
    <img src="https://img.shields.io/badge/Selenium-Web_Testing-brightgreen.svg" alt="Selenium">
  </a>
</p>

Redacta aca una breve descripcion del proyecto...

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

El siguiente GIF es de ejemplo, si tienes uno propio reemplazalo, de lo contrario eliminalo.
![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif)

## Topicos

* Java
* Bases de datos
* SQL
* Cucumber
* Serenity
* Selenium

## Tecnologias
### This project required:
- [JDK java] version 16
- [Serenity] version 4
- [Gradle] last version

Nota: 
*   Se requiere Selenium posterior a la version 4.11 para la descarga automatica de algunos drivers de los navegadores
    La version de Serenity implementada (4.0.0) ya incluye Selenium 4.12 lo cual soporta los navegadores a Octubre del 2023
    si el proyecto presenta problemas relacionados a las version del driver descargado de forma automatica y la version de su 
    navegador vale la pena revisar que este trabajando con versiones recientes de Serenity y checkear las versiones de Selenium
    incluidas en dicha version de Serenity
*   Con Selenium Manager incluido en Serenity 4.0.0 ya no se requiere WebDriverManager de Boni Garcia, razon por la cual ya
    serenity no lo incluye dentro de sus dependencias

## Consideraciones
- Para hacer uso de la la utilidad de Base de Datos es importante 
        que se instacie una Base de datos y se configura en el archivo de configuración ubicado en:

            ./src/main/resources/configs/congig.properties

        En las dependencias del proyecto esta agregada la dependencia del driver de MySQL, si no 
        desea realizar mayores ajustes respecto al motor de BD use MySQL. Si desea usar otro motor, 
        adiciones la dependencia del driver al build.gradle y configure este driver como observa 
        se realizo para MySQL en: 
    
            ./src/main/java/utils/ConectionBD.java
        
        Nota: Algunos motores de BD no requieren agregar la dependencia del driver como Oracle o MSserver

## Descarga
Para clonar está aplicación desde la linea de comando:

```bash
git clone https://github.com/somospragma/qa-transversal-proyecto-base-manejo-base-de-datos-java
cd qa-transversal-proyecto-base-manejo-base-de-datos-java
git remote remove origin
git remote add origin URL_DE_TU_NUEVO_REPOSITORIO
git push -u origin master
```
Nota: Asegúrate de reemplazar URL_DE_TU_NUEVO_REPOSITORIO con la URL del repositorio que creaste en tu cuenta de GitHub.

Puedes descargar el proyecto en el enlace [download](https://github.com/somospragma/qa-transversal-proyecto-base-manejo-base-de-datos-java) 

## Instalación y ejecución

Para ejecutar está aplicación, necesitas [Gradle](https://gradle.org/install) and [Java JDK](https://www.oracle.com/java/technologies/downloads/) instalados en tu equipo, ten en cuenta que tu IDE puede gestionar la instalación de estos dos requerimientos. Desde la linea de comando:

```
gradle clean build
```

##  🛠️ Run tests Chrome gradle:
```
gradle clean test -Dcontext=chrome -Dwebdriver.driver=chrome
gradle clean test --info --stacktrace --tests "ruta.nameRunner" -Dcontext=chrome -Dwebdriver.driver=chrome
gradle clean test -Dcucumber.options="--tags @someTag" -Dcontext=chrome -Dwebdriver.driver=chrome
gradle clean test -Dcucumber.options="--tags '@someTag or @someTag'" -Dcontext=chrome -Dwebdriver.driver=chrome
```

Nota:

*   Si ejecuta en la consola de gradle no debe usar comillas simples '...' para encerrar '-Dwebdriver.driver=chrome'
*   Si ejecuta en la consola estándar de la máquina quizás si deba utilizar '...' en las porciones del comando que incluyan puntos
*   Con "./gradlew test ..." ejecuta el gradle compilado del proyecto
*   Con "gradle test ..." ejecuta el gradle de su maquina, el configurado en las variables de entorno de su sistema operativo


### ejemplo
```
./gradlew clean test --info --stacktrace --tests "co.com.pragma.runners.CompareImageRunner" -Dcontext=chrome '-Dwebdriver.driver=chrome'
./gradlew clean test --info --stacktrace --tests "co.com.pragma.runners.LoginRunner" -Dcontext=chrome '-Dwebdriver.driver=chrome'
```


##  🛠️ Run tests Firefox gradle:
```
./gradlew clean test -Dcontext=firefox '-Dwebdriver.driver=firefox'
./gradlew test --tests "runners.RunnerTags" '-Dcontext=firefox -Dwebdriver.driver=firefox'
```
### ejemplo
```
./gradlew clean test --info --stacktrace --tests "runners.RunnerTags" '-Dcontext=firefox -Dwebdriver.driver=firefox'
```

## **Run tests in different environments:**
```
gradle command... -Denvironment=defaul
gradle command... -Denvironment=dev
gradle command... -Denvironment=qa
gradle command... -Denvironment=prod
```
### Note: 
    - The default environment will be used if no other value is provided
    - Could modify the environment urls in .../test/resources/serenity.conf


## **Run tests in different browser:**
```
gradle command... -Dwebdriver.driver=chrome
gradle command... -Dwebdriver.driver=firefox
gradle command... -Dwebdriver.driver=edge
```


## Autores


| [<img src="https://gitlab.com/uploads/-/system/user/avatar/13437423/avatar.png?width=400" width=115><br><sub>Mauro L. Ibarra P.</sub>](https://gitlab.com/mauro.ibarrap) <br/> | [<img src="https://secure.gravatar.com/avatar/23b2db02403d79ebd356e8e8356758ec?s=192&d=identicon" width=115><br><sub>Otro autor</sub>](https://gitlab.com/) | 
:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|


## Relacionados

- [proyecto-base-serenity-bdd-screenplay-browsers-and-utilities](https://github.com/somospragma/qa-web-proyecto-base-serenity-bdd-screenplay-browsers-and-utilities)


## Roadmap

- [Guia QA](https://github.com/orgs/somospragma/repositories?q=qa) - (En construcción) Una guia de proyectos Orientados a la Calidad de Software

