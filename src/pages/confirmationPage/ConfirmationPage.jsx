import { AbsoluteCenter, 
    Box, 
    Icon, 
    Input, 
    InputGroup,
    Image,
    Text,
    Grid,
    GridItem,
    Button,
     } from '@chakra-ui/react'
import React from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import Navbar from '../../components/navbar/Navbar'
import NavbarBottom from '../../components/navbarBottom/NavbarBottom'
import Footer from '../../components/footer/Footer'

function ConfirmationPage() {
  return (
    
    <Box>
        <Navbar/>
        <Box className={'container-all'} width={'100%'} maxWidth={'950px'} margin={'auto'} marginBottom={'50px'} position={'relative'}>
        <Box className='container-top' margin={'40px auto'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'}>
          <Box className='event-card'
          borderRadius={'16px'}
          border={'1px solid #d8d8d8'}
          overflow={'hidden'}>
            <Box width={'100%'} minHeight={'150'} maxHeight={'720'} backgroundColor={'gray.200'} position={'relative'}>
              <Image width='100%' src='https://www.loket.com/images/banner-event.jpg'/>

              <AbsoluteCenter>
                <InputGroup for='input-image' marginBottom={'70px'}>
                  <Icon position={'absolute'} as = {AiOutlinePlusCircle} color={'white'} boxSize={'16'} left={'0'} right={'0'} margin={'auto'}/>
                  <Input position={'absolute'} id='input-image' type='file' zIndex={'99'} opacity={'0'} width={'16'} left={'0'} right={'0'} margin={'auto'}/>
                </InputGroup>
                <Text fontSize={'2xl'} textAlign={'center'} color={'white'}>Unggah bukti pembayaran di sini</Text>
              </AbsoluteCenter>
              
            </Box>
        </Box>
        <Box padding={'30px 40px 40px'} position={'relative'}>
            <Box position={'absolute'} right={'10'}>
                <Button variant={'outline'} marginRight={'10px'}>Cancel</Button>
                <Button backgroundColor='#0049cc' color={'white'} marginLeft={'10px'} _hover={{color: '#0049cc', backgroundColor: '#EDF2F7', outlineColor: '#0049cc'}}>Unggah Sekarang</Button>
        </Box>
            <Box height={'30px'}></Box>
        </Box>
      </Box>
      </Box>
      <NavbarBottom/>
      <Footer/>
    </Box>
  )
}

export default ConfirmationPage