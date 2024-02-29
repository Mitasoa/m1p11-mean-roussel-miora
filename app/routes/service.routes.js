module.exports = app => {
    const router = require("express").Router();
    const serviceController = require('../controllers/service.controller'); 
    var tokenMiddleware = require('../middleware/token.middleware');

    router.get('/listeservices', serviceController.getAllServices);
    router.put('/updateservice/:id',serviceController.updateService);
    router.put('/deleteservice/:id',serviceController.deleteService);
    router.get('/detailservice/:id',serviceController.getServiceDetails);
    router.get('/rechercherservice',serviceController.searchService);

    app.use('/api/services', tokenMiddleware.checkTokenExistance,tokenMiddleware.decryptToken,router);
}