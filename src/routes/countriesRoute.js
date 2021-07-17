const express = require ('express')
const router = express.Router()

const countryController = require('../controllers/countriescontrollers')

router.post('/addcountry',countryController.createCountry)
router.patch('/updatecountry/:name' , countryController.updateCountry)
router.delete('/deletecountry/:name' , countryController.deleteCountry)
router.get('/getonecountry/:name' , countryController.getOneCountry)



module.exports = router