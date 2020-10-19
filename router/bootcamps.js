const express = require('express')

const {getbootcamp,getbootcamps,updatebootcamps,createbootcamp,deletebootcamps} = require('../controllers/bootcamp')
const Bootcamp = require('../modals/Bootcamp')

const router = express.Router()

router.route('/').get(getbootcamps).post(createbootcamp)

router.route('/').get(getbootcamp).put(updatebootcamps).delete(deletebootcamps)

module.exports = router
