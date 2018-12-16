#!/usr/bin/env node
var fs = require("fs")

var dirName = process.argv[2]
var realPathName ='./'+dirName;
fs.exists(realPathName,function(exists){
if(exists){
process.exit(0)
}
if(!exists){
 fs.mkdirSync("./" + dirName) // mkdir $1
 process.chdir("./" + dirName) // cd $1
 fs.mkdirSync('css') // mkdir css
 fs.mkdirSync('js') // mkdir js
 
 fs.writeFileSync("./index.html", "\<!DOCTYPE\>\n\<title\>Hello\<\/title\>\n\<h1\>Hi\<\/h1\>");
 fs.writeFileSync("css/style.css", "h1{color: red;}")
 fs.writeFileSync("./js/main.js", 'var string = "Hello World"\n'+'alert(string)')


 process.exit(0)}
})



