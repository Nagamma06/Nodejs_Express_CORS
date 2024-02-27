import express from 'express';
import colors from './colors.js';
import cors from 'cors';
const app = express();
app.use(cors());
const PORT=5000;

app.get('/',(req,res)=>{
//console.log(colors)
res.send('Welcome to NodeJS + Express CORS Server')
})

app.get('/colors',(req,res)=>{
    //res.set('Access-Control-Allow-Origin', '*');
    res.json(colors)
    })

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`)
})

