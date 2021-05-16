//import React paskages
import React, { useState } from "react";
import DatePicker from "react-datepicker"
import { Divider, Input, Grid, GridItem, FormControl, FormLabel, Container, Box, Button, Heading, Text, Center, Img, GridItem } from '@chakra-ui/react'



let NewReservation = () => {

    const [guest, setGuest] = useState({
        guestFirstName: '',
        guestLastName: '',
        guestHotelName: '',
        guestArrivalDate: '',
        guestDepartureDate: '',
    });

    const [err, setErr] = useState(false)

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setGuest({ ...guest, [name]: value });
    };

    const departureValidation = (date) => {
        if (guest.guestArrivalDate > date) {
            setErr(true)
        }
        setGuest({ ...guest, [guestDepartureDate]: date })
    }

    const onSubmit = () => {
      if (!err) {
        // save it
      }
    }

    return (
        <>
            <Box>
                <Grid pt={2} templateColumns={["repeat(2, 1fr)"]}>
                    <GridItem colSpan={1}>
                        <FormControl p={4} id="guestFirstNameInput" isRequired>
                            <FormLabel m={2}>First Name</FormLabel>
                            <Input
                                placeholder="First Name"
                                name="guestFirstName"
                                onChange={handleInputChange}
                                id='guestFirstName'
                            />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl p={4} id="guestLastNameInput" isRequired>
                            <FormLabel m={2}>Last Name</FormLabel>
                            <Input
                                placeholder="Last Name"
                                name="guestLastName"
                                onChange={handleInputChange}
                                id='guestLastName'
                            />
                        </FormControl>
                    </GridItem>
                </Grid>
                <Divider />
                <FormControl p={4} id="guestHotelNameInput" isRequired>
                    <FormLabel m={2}>Hotel Name</FormLabel>
                    <Input
                        placeholder="Hotel Name"
                        name="guestHotelName"
                        onChange={handleInputChange}
                        id='guestHotelName'
                    />
                </FormControl>
                <Divider />
                <Grid pt={2} templateColumns={["repeat(2, 1fr)"]}>
                    <GridItem colSpan={1}>
                        <FormControl p={4} id="guestArrivalDateInput" isRequired>
                            <FormLabel m={2}>Arrival Date</FormLabel>
                            <DatePicker selected={arrivalDate} onChange={date => setGuest({ ...guest, [guestArrivalDate]: date })} />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl p={4} id="guestDepartureDateInput" isRequired>
                            <FormLabel m={2}>Departure Date</FormLabel>
                            <DatePicker selected={departureDate} onChange={date => departureValidation(date)} />
                            {err && <Text fontColor='red'>Departure Date Must Be After Arrival Date</Text>}
                        </FormControl>
                    </GridItem>
                </Grid>
                <Container pt={4}>
                  <Button id='saveTrip' p={2}>Save Trip</Button>
                </Container>
            </Box>
        </>
    )
}

export default NewReservation;