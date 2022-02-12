const express = require('express');
const path = require('path');
const app = express();
const port = 3030;


app.use(express.static('public'));

app.listen(port, () => console.log())
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'/views/home.html')))
app.get('/chanyeol',(req,res) => res.sendFile(path.join(__dirname,'/views/chanyeol.html')))
app.get('/chen',(req,res) => res.sendFile(path.join(__dirname,'/views/chen.html')))
app.get('/kai',(req,res) => res.sendFile(path.join(__dirname,'/views/kai.html')))
app.get('/luhan',(req,res) => res.sendFile(path.join(__dirname,'/views/luhan.html')))
app.get('/scott',(req,res) => res.sendFile(path.join(__dirname,'/views/scott.html')))
app.get('/sehun',(req,res) => res.sendFile(path.join(__dirname,'/views/sehun.html')))
app.get('/tessa',(req,res) => res.sendFile(path.join(__dirname,'/views/tessa.html')))
app.get('/zed',(req,res) => res.sendFile(path.join(__dirname,'/views/zed.html')))
