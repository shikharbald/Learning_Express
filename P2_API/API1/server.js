
console.log("Server is starting");  

var express = require('express');

var colours = {
    purple: 1,
    red: 2, 
    green: 3, 
}



var app = express();
var server = app.listen(3000, listening);

function listening() { 
    console.log("Listening...")
}

app.use(express.static('website'));

app.get('/check/:colour', function (req, res) { 
        var colour = req.params.colour;
        console.log(colour);
       if (colours[colour]) { 
        res.send(colour);
       } else { 
           res.send("Colour does not exist");
       }

})

app.get('/check', function (req, res) { 
    var jsonPretty = JSON.stringify(colours);
    res.send(colours);


})

app.get('/add/:colour/:number', addColour); 

function addColour(req, res) { 
    
    
}



