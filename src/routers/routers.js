const { Router} = require("express");
const router = Router();
const apiRoute = '/api';

const Controller = require('../controllers/hotel_controller')

//course
router.get(apiRoute+'/hotel',Controller.getAll)
router.post(apiRoute+'/hotel',Controller.create)



module.exports = router;