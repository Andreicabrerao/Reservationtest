// Extract Node and express packages 
const express = require('express');
const path = require('path');
const chalk = require('chalk');
const cors = require('cors');

//extract tools from graphQL
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } =require('@graphql-tools/schema');

//require schema file
const typeDefs = require('./src/schema/schema');
//require resolvers file
const resolvers = require('./src/resolvers/resolvers')

// Reservation db connector
const { Reservation } = require('./src/model/model');

//Create Express server and apply middleware
const app = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

//route for graphiql testing
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
})
)

//Get all the routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
});

//Start server
app.listen(port, () => {
  console.log(`Server listening at PORT ${port}`)
})
