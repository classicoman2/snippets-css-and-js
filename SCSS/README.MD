
# Introducció Sass/SCSS

Per compilar un fitxer SCS, primer crear un `package.json` si no el tenim instal·lat.

Després instal·lam sass com _dependència de desenvolupament:_

```bash
npm install sass --save-dev
```
Afegim l'script:

    sass scss/styles.scss css/styles.css

Si volem que amb cada canvi que fem al fitxer de SCSS, s'actualitzi el fitxer CSS del nostre projecte, farem:

    sass --watch scss/styles.scss:css/styles.css

## Webgraphy

* [Sass and SCSS - class presentation](https://docs.google.com/presentation/d/1lOTSx96cXrzux57LmmeTgxTtZEerM6IKErKknhMHwvE/edit#slide=id.g45d2de9e04_0_0)
* [sass - npm](https://www.npmjs.com/package/sass)
