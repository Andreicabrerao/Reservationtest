const {ApolloServer} = require('apollo-server');
const { createTestClient } = require('apollo-server-testing');
//import schema and resolvers
const typeDefs = require('../src/schema/schema');
const resolvers = require('../src/resolvers/resolvers');



//Create a server adding schema and resolvers and should be able to mock data in the db
const createTestServer = ctx => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    mockEntireSchema: false,
    mocks: true,
    context: () => ctx
  })
  return createTestClient(server);
}
module.exports = createTestServer;