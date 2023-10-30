import { Flex, Image, Heading, Text, Box, Divider, HStack, VStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import {BsFillCalendarDateFill} from 'react-icons/bs' 
import {AiFillClockCircle} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import {IoTicket} from 'react-icons/io5'

export const DetailBox = () => {
    return(
        <Box padding='20px' boxShadow="0px 1px 5px gray" borderRadius='10px'>
                     
                     <Box display='flex' flexDirection={{base: 'column', md:'row', sm:'column'}}>
                         <Box>
                            {/* <Image borderRadius='10px' src={require('../../../assets/images/imagedesc.jpg')} mb='10px' width={{base: '100%', md: '290px', sm: '100%'}} /> */}
                         </Box>
                         <Box ml={{base: '0px', md: '20px', sm: '0px'}}>
                            <VStack alignItems='left'>
                            <Heading as='h4' size='md' mb='5px'>NAMA EVENT</Heading>
                            <HStack><BsFillCalendarDateFill color='gray' /><Text>Tanggal</Text></HStack>
                            <HStack><AiFillClockCircle color='gray' /><Text>Jam</Text></HStack>
                            <HStack><HiLocationMarker color='gray' /><Text>Lokasi</Text></HStack>
                            </VStack>
                         </Box>
                 
                     </Box>
                     <Divider />
                     <HStack margin='5px' color='GrayText'><Text>Jenis Tiket</Text><Spacer /><HStack><Text>Harga</Text><Spacer /><Text>Jumlah</Text></HStack></HStack>
                     <Divider />
                     <HStack margin='5px'><IoTicket color='blue' size='25px' /><Text>Jenis Tiket</Text><Spacer /><HStack><Text>Harga</Text><Spacer /><Text>Jumlah</Text></HStack></HStack>
                     
                 </Box>
    )
}
