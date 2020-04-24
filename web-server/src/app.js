const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Path for diff routes
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//to use specific pages, static directory
app.use(express.static(publicDirectoryPath))

//to set specific data uses key value pair
app.set('view engine', 'hbs')
//to set the view for express, (we named them templates) 
app.set('views', viewsPath)
//register partials
hbs.registerPartials(partialsPath);

app.get('', (req, res)=>{
    res.render('index', {
        title: "Weather-App",
        name: "Daman"
    });
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: "About-Me",
        name: "Daman"
    })
})

app.get('/help', (req, res) =>{
    res.render('help', {
        contact: "Admin Team",
        title: "Help-Stuff",
        name: "Daman"
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: "Please provide the address"
        })
    }

    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia',
        address: req.query.address
    })
})

// app.get('/product', (req, res) => {
//     if(!req.query.search){
//         return res.send({
//             error: "You must provide a search term"
//         })
//     }
//     console.log(req.query);
//     res.send({
//         products: []
//     })
// })

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "404",
        name: "Daman",
        errorMessage: "Help article Not Found"
    })
})

app.get('*', (req, res)=>{
    res.render('404', {
        title: "404",
        name: "Daman",
        errorMessage: "Page Not Found"
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})