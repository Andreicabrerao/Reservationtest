import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react"
import Main from '../Main'
import { render } from 'react-dom';
import { document } from "@ungap/global-this";

//function App({ Component }) {
  // 2. Use at the root of your app
  ReactDom.render (
    <ChakraProvider>
    <Main />
    </ChakraProvider>,
    document.getElementById('root')
  )
//}


/*Create a Node.js GraphQL app that simulates a basic reservations system.
 
Use node 14 or newer.
 
A reservation should have the following fields:
- id
- guest name
- hotel name
- arrival date
- departure date
 
The application should support:
- a query for retrieving all reservations
- a query for retrieving a reservation by ID
- a mutation for creating a reservation
 
Reservations should be persisted to a NoSQL data store.
test
*/