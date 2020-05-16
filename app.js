const express = require('express');
let app = express();

//app.set('port', process.argv[2] || 5500); 
app.set('port', process.env.app || 5500); 

app.use(express.json());
app.use(require('./routes/routes'));


app.listen(5500, () => {
    console.log(`Server in port 5500`);
});