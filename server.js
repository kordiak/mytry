const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname+'/views/partials')
var port = process.env.PORT || 3000;
app.set('view engine','hbs');


app.get('/', (request, response ) =>
{
	response.render('maintenance.hbs');
});


///*

app.get('/projects', (req,resp) =>
{
	resp.render('projects.hbs',
	{ pageTitle: 'Projects'}
	);
});



app.get('/info',(req,resp)=>
{
	resp.render('info.hbs',
{
	"currentDate" : new Date().getDate()
});
});



app.listen(port,()=>
{
console.log(`Listening on port: ${port} `);
});
