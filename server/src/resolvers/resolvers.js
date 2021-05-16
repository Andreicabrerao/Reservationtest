// Import some GraphQl tools
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

// import Reservation mongoose db
const Reservation = require('../model/model');

const resolvers = {
    Query: {
        // get all the reservations already made
        reservations: async () => {
            return await Reservation.find({}).exec();
        },
        // get the reservation record by ID
        reservation: async (parent, { _id }) => {
            return await Reservation.findOne({ _id: _id }).exec();
        }
    },
    Mutation: {
        // this will create new reservations
        createReservation: async (parent, fields) => {
            if ("arrivalDate" in fields) {
                fields["arrivalDate"] = new Date(fields["arrivalDate"]);
            }

            if ("departureDate" in fields) {
                fields["departureDate"] = new Date(fields["departureDate"]);
            }

            return await Reservation.create(fields);
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

module.exports =resolvers