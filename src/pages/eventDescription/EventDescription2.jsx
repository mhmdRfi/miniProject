import { Text, Box, } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import TopBox from '../../components/EventDescriptionComponents/TopBox/TopBox'
import BottomBox from '../../components/EventDescriptionComponents/BottomBox/BottomBox'
import axios from 'axios';


const EventDescription = () => {

    
    
    return (
        <>
        <Box paddingTop='3%' paddingLeft='5%'>
        <Text>Home  ●  Category  ● Title</Text>
        </Box>
        <TopBox />
        <BottomBox />
        </>
    )
}

export default EventDescription