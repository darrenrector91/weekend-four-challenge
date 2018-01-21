const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true})); 
// routes

app.listen(port, function(){
    console.log('listening on port:', port);
});