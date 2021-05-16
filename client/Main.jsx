import React, { useState } from "react";
import ReservationsMade from './components/reservationsMade'
import NewReservation from './components/NewReservation'
import { Divider, Grid, GridItem, Button } from '@chakra-ui/react'
import { ResumeToken } from "mongodb";

let Main = () => {

    let [display, setDisplay] = useState('ReservationSearch')


            
return (
    <>
        <Grid pt={2} templateColumns={["repeat(2, 1fr)"]}>
            <GridItem colSpan={1}>
                <Button colorScheme='#104C97' p={2} onClick={() => setDisplay('ReservationSearch')}>Search Reservations</Button>
            </GridItem>
            <GridItem colSpan={1}>
                <Button colorScheme='#104C97' p={2} onClick={() => setDisplay('NewReservation')}>New Reservation</Button>
            </GridItem>
        </Grid>
        <Divider />
        {display === 'ReservationSearch' ?
            <ReservationsMade data={data.reservations} />
            :
            <NewReservation />
        }
    </>
)
    }

export default Main;