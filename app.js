const CSVToJSON = require("csvtojson");


const FileSystem = require("fs");

CSVToJSON().fromFile("./covide19.csv").then(source =>{
    console.log(source);
});




