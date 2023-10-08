const mongoose = require('mongoose');

const foodtrucksSchema = new mongoose.Schema({
   locationid:String,
    Applicant: String,
    FacilityType: {
        type: String,
        enum: ['Truck', 'Push Cart'],
        default: 'Truck'
    },
    cnn:Number,
    locationDescription:String,
    Address: String,
    blocklot:number,
    lot:String,
    permit:String,
    Status:{
       type:String,
        enum:['APPROVED','REQUESTED','EXPIRED']
    },
    FoodItem:String
});

const Foodtruck = mongoose.model('foods', foodtrucksSchema);
module.exports = Foodtruck;