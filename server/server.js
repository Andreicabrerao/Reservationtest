const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const path = require('path');
const chalk = require('chalk');
const cors = require('cors');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } =require('@graphql-tools/schema');

const typeDefs = require('./src/schema/schema');
const resolvers = require('./src/resolvers/resolvers')

// import Reservation db connector
const { Reservation } = require('./src/model/model');



const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
})
)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
});


app.listen(port, () => {
  console.log(`Server listening at PORT ${port}`)
})
