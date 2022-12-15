var express = require('express'); 
const route = require('.');
var router = express.Router();


var homeController = require('../app/controllers/HomeController')

router.post('/admin/store',homeController.store)

router.get('/admin/:id/edit',homeController.edit)

router.get('/admin/add',homeController.add)


router.get('/profile',homeController.setting_profile)

router.get('/admin', homeController.admin)
router.get('/newpara',homeController.newpara)

router.get('/',homeController.show)

module.exports = router;