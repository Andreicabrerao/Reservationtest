# ReservationSystem
Node.js GraphQL app that simulates a reservations system.


# Installation
- Clone the code
- Navigate to the verver folder: `CD server` folder
- Run `npm install` for dependencies and then `npm start`
- Type in your browser: `http://localhost:3000/`

# Sample Queries and Mutations

```graphql
query GetReservations {
  reservations {
    _id
    guestName
    hotelName
    arrivalDate
    departureDate
  }
}

query {
  reservation (reservationID: "id"){
    _id
    guestName
    hotelName
    arrivalDate
    departureDate
  }
}

mutation {
  createReservation(guestName:"Andrei", hotelName:"Hilton", arrivalDate:"2017-11-25T23:55:35.116Z", departureDate:"2018-11-25T23:55:35.116Z") {
    _id
    guestName
    hotelName
    arrivalDate
    departureDate
  }
}
```
# Testing

 - Keep server running
 - Open another terminal
 - Navigate to the verver folder: `CD server` folder
 - Run test `npm run test` (*make sure you have the Jest dependencies installed)

 # Enhance/missing

* Add authentication
* Use Chakra UI for client side
* Validate date using UI to validate the dates in the frontend side
* Add delete and edit functionality for the user/guest/dates
* Caching (Redis or Appollo) of some sort

* I kept the access to the DB on purpose instead of adding .env file for the test
