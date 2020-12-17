
Per compilar amb sass, una opció és:

    sass --watch scss/styles.scss:css/styles.css --scss

Prèviament,

    npm install sass --save-dev

> Millor com a devDependency

Si surt aquest error, 
> LoadError: cannot load such file -- sass-listen

Llavors, 

    sudo gem install sass-listen    
