var express = require("express")
var hbs = require("hbs")
var app = express();
var a = 'a'
var title = 'cool'

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('today',() =>
{
    var date = new Date()
    return date
})
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());
app.use('/', (req,res,next)=>{
    console.log(new Date())
    next()
});
app.get('/', (req,res) => {
    res.render('index.hbs', {title});
});
app.all('/banana', (req,res)=>{
    console.log('HEYYYY' + req)
   res.render('banana.hbs', {santa: req.query.present});
});
app.get('/banana', (req,res) => {
    res.render('banana.hbs')
});
app.get('/form', (req,res) => {
    res.render('form.hbs')
});


app.listen(3000, () => {
    console.log('Server is up at localhost:3000')
})