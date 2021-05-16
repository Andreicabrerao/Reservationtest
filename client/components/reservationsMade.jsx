import React, { useState, useEffect} from "react";
import DatePicker from "react-datepicker"
import { Divider, Input, Grid, GridItem, FormControl, FormLabel, Container, Box, Button, Heading, Text, Center, Img, GridItem } from '@chakra-ui/react'


let ReservationsMade = ({data}) => {

  //query call to get all the data 

  // first name, last name hotel name, arrival date, departure date

  let [iDInput, setIDInput] = useState()
  let [displayedRes, setDisplayedRez] = useState()

  const handleInputChange = (event) => {
    event.preventDefault();
    setIDInput(value);

  };

  return (
    <>
       <Grid pt={2} templateColumns={["repeat(2, 1fr)"]}>
          <GridItem colSpan={1}>
            <FormControl p={4} id="searchByIDInput">
                <Input
                    placeholder="Search Reservation By ID"
                    name="searchID"
                    onChange={handleInputChange}
                    id='searchID'
                />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
              <Button colorScheme='#104C97' p={2} onClick={() => setDisplay('ShowAll')}>Search</Button>
          </GridItem>
      </Grid>
    {data.map(el=>{
      <Box>
        <Text>{el._id}</Text>
      </Box>
    })}
    </>
)
}

export default ReservationsMade;