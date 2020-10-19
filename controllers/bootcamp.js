// @desc     Get all bootcamp
// @Rout     GET/api/v1/bootcamps
// @access   Public

const Bootcamp = require("../modals/Bootcamp")

exports.getbootcamps = (req,res,next) => {
    res.send({success: true,msg:'show all bootcamp'})    

}

// @desc     Get single bootcamp
// @Rout     GET/api/v1/bootcamps/:id
// @access   Public

exports.getbootcamp = (req,res,next) => {
    res.status(200).json({success: true,msg:`show bootcamp ${req.params.id}`})    

}

// @desc     Create bootcamp
// @Rout     POST/api/v1/bootcamps
// @access   Public

exports.createbootcamp = async (req,res,next) => {
    console.log(req.body)
    try {
        const bootcamp = await Bootcamp.create(req.body)
        res.status(201)
        .json(
            {success: true,
            msg:'create new bootcamp',
            data : bootcamp
        })
    } catch (error) {
        res.status(400).json({
            success:false
        })
    }

  

}

// @desc     Update bootcamp
// @Rout     PUT/api/v1/bootcamps/:id
// @access   Privet

exports.updatebootcamps = (req,res,next) => {
    res.status(200).json({success: true,msg:`update bootcamp ${req.params.id}`})    

}

// @desc     DELETE bootcamp
// @Rout     DELETE/api/v1/bootcamps/:id
// @access   Public

exports.deletebootcamps = (req,res,next) => {
    res.status(200).json({success: true,msg:`delete bootcamp ${req.params.id}`})

}