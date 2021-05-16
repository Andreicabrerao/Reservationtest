import resolvers from '../src/resolvers/resolvers'

describe('createReservation', () => {
    it('creates a reservation', async () => {
      const result = resolvers.Mutation.createReservation(
        null,
        {
          fields: 'Andrei',
        },
        { field: { date: '2010-11-01', guest: 'Andrei' } },
        null
      );
   
      await expect(result).resolves.toEqual(true);
    });
  });