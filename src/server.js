import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();

const app = express()
const port = process.env.PORT

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(8080, () => {
    console.log(`Node.JS server is running on port: https://localhost:${port}`);
})