import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { AbsoluteCenter, Box, Flex, Text, Link, Grid, Td, Tr, Table, Tbody, Thead, Th, Heading, Button } from '@chakra-ui/react';
import {HiMiniTicket} from 'react-icons/hi2'

function DashboardEO() {

    const [data, setData] = useState();

    const fetchData = async () => {
        try {
          const response = await axios.get ("http://localhost:3000/events");
        //   const res = await response.json()
          setData(response.data);
          console.log(response)
        } catch (err) {
          console.log(err);
        }
      };

    useEffect (() => {
      fetchData();
    }, []);
    
console.log(data)

  return (
    <Box>
      <Box className='container-content-main' maxWidth={'820px'} margin={'auto'}>
      <Heading as={'h2'} margin={'40px 0'} color={'#4A5568'}>Event Saya</Heading>
      
      <Table variant='striped' colorScheme='teal' width={'100%'} margin={'auto'}>
            <Thead>
                <Tr>
                    <Th>EVENT NAME</Th>
                    <Th>TANGGAL</Th>
                    <Th>JAM</Th>
                    
                    <Th rowSpan={'2'}>ACTION</Th>
                </Tr>
            </Thead>
            <Tbody>
      {data && data.length > 0 ? (
      data.map((item) => (
      <Tr key={item.id}>
        <Td>{item.eventName}</Td>
        <Td>{item.tanggal}</Td>
        <Td>{item.jam}</Td>
        <Td><Button colorScheme='green' size={'sm'}>Edit</Button></Td>
        <Td><Button colorScheme='red' size={'sm'}>Delete</Button></Td>
      </Tr>
    
    ))
    ) : (
      <Box minH="100vh" bg={('gray.100')}> 
        <AbsoluteCenter>
        <Grid
        textAlign={'center'}
        >
            <Box 
            margin={'0 auto 16px'}>
                <HiMiniTicket fontSize={'90px'} color='grey'/>
            </Box>
            <Box>
                <Text color={'grey'}>
                    Kamu belum memiliki Event, silakan membuat event terlebih dahulu.
                </Text>
            </Box>
            <Box>
                <Link color={'#0049CB'}>
                    Buat Event Sekarang
                </Link>
            </Box>
            
        </Grid>
        </AbsoluteCenter>
      </Box>
    )}
      </Tbody>
    </Table>
    </Box>
    </Box>
  )
}

export default DashboardEO