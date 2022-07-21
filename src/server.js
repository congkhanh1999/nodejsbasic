import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRouter from './route/web';
import initAPIRoute from './route/api';
// import connection from './configs/connectDB'

require('dotenv').config();

const app = express()
const port = process.env.PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//setup view engine
configViewEngine(app);

//init web route
initWebRouter(app)
initAPIRoute(app)

app.listen(8080, () => {
    console.log(`Node.JS server is running on port: https://localhost:${port}`);
})