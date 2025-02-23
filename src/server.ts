const express = require('express');
const app = express();
require('dotenv').config(
 { path : "./config/.env" }  
)
app.get('/', (req, res) => {
 
 const envVaraiables= {
   NODE_ENV: process.env.NODE_ENV,
   PORT: process.env.PORT,
   HOST : process.env.HOST
 }

 res.send(JSON.stringify(envVaraiables, null, 2))   
}) 

app.listen(process.env.PORT, () => {
   console.log(`Example App listening on port ${process.env.PORT}`)
})
