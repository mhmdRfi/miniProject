import { Box, Grid, Text, Flex, Icon,  } from '@chakra-ui/react'
import React from 'react'
import UpdateTicket from './UpdateTicket'
import {BiSolidTimeFive} from 'react-icons/bi'

function Tiket({buatTicket}) {
  return (
    <div>
        <Grid 
        marginTop={'20px'}
        gridTemplateRows={'1fr'}
        gridGap={'15px'}
        position={'relative'}>
          
          {buatTicket && buatTicket.length > 0 ? (
          buatTicket.map((item) => (

          <Box backgroundColor={'#ebf5ff'}
          border={'1px solid #0049cc'}
          minHeight={'193px'}
          width={'100%'}
          height={'auto'}
          padding={'16px 32px'}
          borderRadius={'8px'}
          key = {item.id}>
            
            <Box position={'relative'}
            paddingBottom={'17px'}
            borderBottom={'1px dashed #0049cc'}>
              <Text fontSize={'2xl'}>{item.ticket_name}</Text>
              {/* <Text>{item.ticket_category}</Text> */}
              <Flex alignItems={'center'} marginTop={'12px'}>
                <Icon as = {BiSolidTimeFive} color={'#007AFE'} marginRight={'5px'}/>
                <Text color={'#007AFE'}>{item.ticket_end_date}</Text>
              </Flex>
            </Box>
            <Flex position={'relative'}
            padding={'16px 0 0'}
            justifyContent={'space-between'}
            alignItems={'center'}>
              <Box position={'absolute'}
              width={'20px'}
              height={'32px'}
              left={'-34px'}
              top={'-17px'}
              borderBottomRightRadius={'75px'}
              borderTopRightRadius={'75px'}
              border={'1px solid #0049cc'}
              borderLeft={'0'}
              backgroundColor={'white'}></Box>
              <Text as={'b'} fontSize={'xl'}>{item.ticket_price}</Text>
              <Text as={'b'} fontSize={'xl'} color={'#0049CB'}>{item.number_of_ticket}</Text>
              <Box position={'absolute'}
              width={'20px'}
              height={'32px'}
              right={'-34px'}
              top={'-17px'}
              borderBottomLeftRadius={'75px'}
              borderTopLeftRadius={'74px'}
              border={'1px solid #0049cc'}
              borderRight={'0'}
              backgroundColor={'white'}></Box>
            </Flex>
            <UpdateTicket ticket={item} />
          </Box>
          ))
          ) : (
            <></>
          )}
        </Grid>
    </div>
  )
}

export default Tiket