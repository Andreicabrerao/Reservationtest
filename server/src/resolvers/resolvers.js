// Import some GraphQl tools
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

// import Reservation mongoose db
const Reservation = require('../model/model');

//Create the resolver
const resolvers = {
    Query: {
        // get all the reservations already made
        reservations: async () => {
            return await Reservation.find({}).exec();
        },
        // get the reservation by ID
        reservation: async (parent, { _id }) => {
            return await Reservation.findOne({ _id: _id }).exec();
        }
    },

    
    Mutation: {
        // Create new reservations
        createReservation: async (parent, input) => {
            if ("arrivalDate" in input) {
                input["arrivalDate"] = new Date(input["arrivalDate"]);
            }

            if ("departureDate" in input) {
                input["departureDate"] = new Date(input["departureDate"]);
            }

            return await Reservation.create(input);
        }
    },


    // Custom scalar type for Dates in MongoDB
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value);
        },
        serialize(value) {
            return value; 
        },
        parseLiteral(ast) {
            return new Date(ast.value);
        }
    })
}
//Export the resolvers 
module.exports =resolvers