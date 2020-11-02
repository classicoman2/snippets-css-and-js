# STYLELINT

Emprant Stylelint per fer lint del nostre codi CSS.

## Docs

- https://www.npmjs.com/package/stylelint
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

També és possible instal·lar una extensió STYLELINT en el Visual Studio Code.