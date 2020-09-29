/**
* This script prints the Table of Contents of a Markdown file in the terminal console. 
* Arguments:
*     (1) Name of the MD file
*     (2) true if you want the Table of Contents to be print into a file named "table_of_contents.txt" 
*
  EXAMPLE:    $ node genera_index README.MD true
**/

var toc = require('markdown-toc');
var fs = require('fs');

//Get the name of the file as 1st argument

//The first explicitily passed parameter corresponds with the 3rd argument
var myArgs = process.argv;
var filename = myArgs[2];
var createInFile = (myArgs[3] === "true") ? true : false; 

//Read the file inside a variable
var fitxer = fs.readFile(filename, 'utf8', function(err, data) {

  //Create the table of contents
  console.log("This is the index \n")
  var text = toc(data).content;
  console.log(text);
  
  if (createInFile)
    //Create a file with the Table of Contents text
    fs.appendFile('table_of_contents.txt', text, function (err) {
      if (err) throw err;
  });
});
