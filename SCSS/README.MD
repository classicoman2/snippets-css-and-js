
# Introducció Sass/SCSS

Per compilar un fitxer SCS, primer hem d'instal·lar:

    npm install -g sass

Per compilar un fitxer (des de directori /SCSS), 

    sass scss/styles.scss css/styles.css

Si volem que amb cada canvi que fem al fitxer de SCSS, s'actualitzi el fitxer CSS del nostre projecte, farem:

    sass --watch scss/styles.scss:css/styles.css

## Webgraphy

* [Sass and SCSS - class presentation](https://docs.google.com/presentation/d/1lOTSx96cXrzux57LmmeTgxTtZEerM6IKErKknhMHwvE/edit#slide=id.g45d2de9e04_0_0)
* [sass - npm](https://www.npmjs.com/package/sass)
