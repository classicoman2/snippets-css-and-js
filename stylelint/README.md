# STYLELINT

Un [linter](https://sourcelevel.io/blog/what-is-a-linter-and-why-your-team-should-use-it) és una eina que detecta errors i ens ajuda a evitar aquests errors en els futurs (ens ensenya a escriure el codi bé).

Aquí veurem una eina que ens permetrà repassar el nostre codi per detectar mancances, inconsistències i errors:  **Stylelint**

## Webgraphy

- [Lint your CSS with stylelint - David Clark, _CSS Tricks_](https://css-tricks.com/stylelint/)
- https://github.com/stylelint/stylelint
- https://stylelint.io/user-guide/get-started

## Usage

Use npm to install stylelint and its standard configuration:

    npm install --save-dev stylelint stylelint-config-standard

Create a .stylelintrc.json configuration file in the root of your project:

    {
      "extends": "stylelint-config-standard"
    }

Run stylelint on, for example, all the CSS files in your project:

    npx stylelint "**/*.css"

## Extensió VSCODE

Aconsellable instal·lar també l'extensió STYLELINT en el Visual Studio Code, que subratlla incidències (com W3C Validator)
