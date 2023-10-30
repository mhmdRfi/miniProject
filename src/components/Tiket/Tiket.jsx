import {Box, VStack, HStack, Text, Heading, IconButton, Divider, Spacer} from '@chakra-ui/react'
import {AiFillClockCircle, AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai'
import { React } from 'react'


const Tiket = ({ ticket }) => {
    return (
      <Box border='blue 1px solid' p='10px 20px 10px 20px' bg='blue.50' borderRadius='10px' mb='10px'>
        <VStack justifyContent='left' alignItems='left'>
          <Heading fontSize='30px' fontWeight='light'>{ticket.title_ticket}</Heading>
          <Text>{ticket.types}</Text>
          <HStack>
            <AiFillClockCircle color='blue' />
            <Text color='blue'>{ticket.duration}</Text>
          </HStack>
          <Box as='hr' my={3} borderTopWidth='3px' borderTopStyle='dotted' borderTopColor='blue' />
          <HStack>
            <Text fontWeight='bold'>{ticket.price}</Text>
            <Spacer />
            <IconButton colorScheme='transparent' icon={<AiOutlineMinusCircle size='25px' color='blue' />} />
            <Text>0</Text>
            <IconButton colorScheme='transparent' icon={<AiOutlinePlusCircle size='25px' color='blue' />} />
          </HStack>
        </VStack>
        </Box>
        );
      };

export default Tiket;