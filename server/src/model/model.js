const Mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
//Connection with DB
const URI = `mongodb+srv://AndreiCabrera:Felizes3@reservationtest1.8k0bi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


Mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((res)=>{
        console.log("Connected to mongoose")
    })
    .catch((err) => console.log(err))



// Reservation Schema
const reservationMongoose = Mongoose.Schema({
    id: String,
    guestName: String,
    hotelName: String,
    arrivalDate: Date,
    departureDate: Date
});


//export mongoose model with schema
module.exports = Mongoose.model('reservations', reservationMongoose);