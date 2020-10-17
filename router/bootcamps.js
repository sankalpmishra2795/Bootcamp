const { Router } = require('express')
const express = require('express')

const {getbootcamp,getbootcamps,updatebootcamps,createbootcamp,deletebootcamps} = require('../controllers/bootcamp')

const router = express.Router()

router.route('/').get(getbootcamps).post(createbootcamp)

router.route('/:id').get(getbootcamp).put(updatebootcamps).delete(deletebootcamps)

module.exports = router