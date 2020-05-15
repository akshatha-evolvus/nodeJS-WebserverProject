const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()

const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')


//const helpPage= path.join(__filename, '../public/about.html')

app.set('view engine', 'hbs')
app.set('views',viewsPath )
hbs.registerPartials(partialPath)
app.use(express.static((publicDir)))


app.get('', (req, res) => {
   
    res.render('index',{
        title:'Weather Page',
        name:'Akshatha'
        
    })
 
})

app.get('/about', (req, res) =>
{
    res.render('about',
    {
        title:'About Page',
        name:'Akshatha'
        
    })
})

app.get('/weather', (req, res) =>
{
    if(!req.query.address)
    {
        return res.send(
            {
                error: "please provide the address"
            }
        )
    }
    geocode(req.query.address, (error, { latitude, longitude, location}) => {
        if (error){
            return res.send({ error})
        }

        forecast(latitude, longitude, (error, forecastData) =>{
            if(error){
                return res.send({ error })
            }
            res.send(
            {
                forecast : forecastData,
                location,
            address: [req.query.address]
            }
        )
        })
})
})


app.get('/help', (req, res)=>
{

res.render('help',
{
    title:'Help Page',
    name:'Akshatha'
    
})
})







app.get('/help/*',(req, res) =>
{
   
    res.render('404',{
        title: 'Help page error',
        name: 'Akshatha',
        errorMessage :'No page found',
       
})
})


app.get('*',(req, res) =>
{
    //res.send("404 page not found")
    res.render('404',{
        title: 'Error Page',
        name: 'Akshatha',
        errorMessage :'404 page not found',
       
})

})


app.listen(3000)
