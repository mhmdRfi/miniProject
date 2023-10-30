import { Flex, Image, Heading, Text, Box, useColorModeValue, HStack} from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import {BsFillCalendarDateFill} from 'react-icons/bs' 
import {AiFillClockCircle,} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import axios from 'axios'

const TopBox = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/events/1"
            );
            setData(response?.data);
            console.log(data.tickets)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return(
        <Flex padding='5%' mt={{base: '-5px', md: '-40px', sm: '-5%'}} direction={{base: 'column', md:'row', sm:'column'}}>
            <Box width={{base: '100%', md: '65%', sm:'100%'}}>
                 <Image borderRadius='10px' src={`http://localhost:3001/assets/images/${data?.image}`} mb='40px' />
            </Box>
            <Box width={{md: '35%', sm: '100%', base: '100%'}}>
            <Box role={'group'}
                    p={6}
                    maxW={{md: '330px', sm: '100%'}}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    // boxShadow={'xl'}
                    boxShadow="0px 1px 5px gray"
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}
                    ml={{md:'10%', sm:'0%'}}
                    mb={{md: '50px', sm:'10px'}}>
                        <Box mb={{md: '50px', sm:'15px'}} fontWeight='light'>
                        <Heading as='h4' size='md' mb='15px'>{data?.title}</Heading>
                        <HStack><BsFillCalendarDateFill color='blue' /><Text>{data?.date}</Text></HStack>
                        <HStack><AiFillClockCircle color='blue' /><Text>{data?.hours}</Text></HStack>
                        <HStack><HiLocationMarker color='blue' /><Text>{data?.location}</Text></HStack>
                        </Box>
                        <hr/>
                        <Box>
                            <Text>Diselenggarakan oleh</Text>
                            <Text fontWeight='bold'>{data?.eo}</Text>
                        </Box>
                    </Box>
            </Box>
        </Flex>
    )
}

export default TopBox;