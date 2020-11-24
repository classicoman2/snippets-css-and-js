# STYLELINT

La definició de [linter](https://sourcelevel.io/blog/what-is-a-linter-and-why-your-team-should-use-it) és una eina que detecta errors i ens ajuda a prevenir-los (ens ensenya a escriure el codi bé).

En el cas de CSS, un linter ens permet _refactoritzar_ el nostre codi detectar mancances i inconsistències. Anem a veure una d'aquestes eines:  [**Stylelint**](https://stylelint.io)

## Webgraphy

- [Lint your CSS with stylelint - David Clark, _CSS Tricks_](https://css-tricks.com/stylelint/)
- https://github.com/stylelint/stylelint
- https://stylelint.io/user-guide/get-started

## Com emprar-ho

Amb `npm`, instal·la stylelint amb configuració estàndard.

    npm install --save-dev stylelint stylelint-config-standard

Crea un fitxer de configuració `.stylelintrc.json` en el directori root del teu projecte amb aquest contingut:

    {
      "extends": "stylelint-config-standard"
    }

Executa stylelint a tots els fitxers CSS del teu projecte amb aquesta comanda:

    npx stylelint "**/*.css"

## Extensió VSCODE

Aconsellable instal·lar també l'extensió STYLELINT en el Visual Studio Code, que subratlla incidències (com W3C Validator) i fa innecessari executar la comanda anterior.
