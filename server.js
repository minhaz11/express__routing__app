const express = require('express');
const app = express();
const route = require('./router');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}))
app.use('/api',route)

app.get('/',(req,res)=>{
    res.send('Rout app');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})