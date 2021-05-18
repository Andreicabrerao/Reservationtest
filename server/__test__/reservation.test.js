const gql = require('graphql-tag');
const { Mutation, Query } = require('../src/resolvers/resolvers');
const createTestServer = require('./helpTools');

const reservationQRY = gql`
  {
    reservations {
      _id
      guestName
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

//Test is using the main data from mongoose
describe('queries', () => {
  test('reservations', async () => {
    const {query} = createTestServer({
    });
    const res = await query({query: reservationQRY})
    expect(res).toHaveProperty('data');

  })
});

describe('Mutations for reservation', () => {
  test('reservations', async () => {
    const {query} = createTestServer({
    });
    const res = await query({query: reservationQRY})
    expect(res.data).toMatchSnapshot();

    expect(typeof res.data).toBe('object')
    
    expect(res.data).toHaveProperty("reservations")
    
    expect(Array.isArray(res.data.reservations)).toBe(true)
   
    expect(res.data.reservations).toBeInstanceOf(Array)
  })

})


