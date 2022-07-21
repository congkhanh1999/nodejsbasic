import express from 'express';
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:userId', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.post('/update-user', homeController.updateUser);
    router.get('/about', (req, res) => {
        res.send('about page')
    });
    return app.use('/', router)
}

module.exports = initWebRouter;