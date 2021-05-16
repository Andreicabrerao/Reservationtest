const { gql } = require('apollo-server');
const { GraphQLScalarType, Kind } = require('graphql');

const typeDefs = gql`
  scalar Date

  type Reservation {
    _id: String!
    guestName: String!
    hotelName: String!
    arrivalDate: Date!
    departureDate: Date!
}

type Query {
    reservations: [Reservation!]
    reservation(_id: String): Reservation
}

type Mutation {
    createReservation(
        guestName: String!
        hotelName: String!
        arrivalDate: Date!
        departureDate: Date!
    ): Reservation
}

schema {
    query: Query
    mutation: Mutation
}
`

module.exports = typeDefs;