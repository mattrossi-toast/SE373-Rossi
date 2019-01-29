var express = require("express")
var hbs = require("hbs")
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());

hbs.registerHelper("buildDropDown", () => {
    var string = '<select name="number">'
    var options = [3,4,5,10,20]

    for(number in options){
        string += '<option value=' + options[number] + '>'+ options[number] + '</option>'
    }

    string += '</select>'

    return string
})

app.get("/", (req,res)=> { res.render('index.hbs') })

app.post("/", (req,res) => {
    hbs.registerHelper("buildTable", () => {
        var string = '<table> <tbody>'
        for(var i = 0; i < req.body.number; i++){
            string += '<tr>'
            for(var j = 0; j < req.body.number; j++){
                var color = ((1<<24)*Math.random()|0).toString(16);
                string += `<td style="height:50px; width:50px; background-color:#${color}">${color}<br /> <span style="color:#ffffff">${color}</span></td>`
            }
            string +='</tr>'
        }
        string += '</tbody></table>'
        return string
    });
    res.render('index.hbs')

});

app.listen(3000, () => {
    console.log('Server is up at localhost:3000')
})