const mongoose = require('mongoose')

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please add a name"],
        unique: true,
        trim:true,
        maxlength:[50,"Name can not be more than 50 characters"]
    },

    slug: String,
    discription:{
        type: String,
        required: [true,"Please add a discription"],
        maxlength:[500,"Discription can not be more than 500 characters"]
    },
    website:{
        type:String,
        match:[
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,'Please enter valid url'
        ]
    },
    phone:{
        type:String,
        maxlength:[20,'Phone number can not be grater than 20 characters']
    },

    email:{
        type:String,
    },
    address:{
        type:String,
        required:[true,'Please add an address']
    },
    location: {
        // Geojson Point
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
          },
          coordinates: {
            type: [Number],
            required: true,
            index:'2dsphere'
          },
          formattedAddress: String,
          street:String,
          state:String,
          city:String,
          zipcode:String,
          country:String
    },
    careers:{
        // Array of strings
        type:[String],
        required:true,
        enum: [
            "Web Devlopment",
            "Mobile Devlopment",
            "UI/UX",
            "Data Science",
            "Business",
            "Other",
        ]
    },
    averageRating: {
        type: Number,
        min:[1,"Rating must be at least 1"],
        max:[10,:="Rating must can not more than 10"]
    },
    averageCost: Number,
    photo: {
        type:String,
        default: "no-photo.jpg"
    },
    housing:{
        type:Boolean,
        default:false
    },
    jobAssistance:{
        type:Boolean,
        default:false
    },
    jobGuarantee:{
        type:Boolean,
        default:false
    },
    acceptGi:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Bootcamp',BootcampSchema);