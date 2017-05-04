const express = require ('express');
var app = express();

app.get('/', (req,res)=>{
  res.send('Hello World');
});

app.get('/users', (req,res)=>{
  res.send([{
    name:'Vivek Sinha',
    age: 25,
    location: 'Framingham MA'
  },{
    name: 'Mayura Sinha',
    age: 24,
    location: 'Lexington MA'
  }]);
});

app.listen(3000);

module.exports.app = app;
