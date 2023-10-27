import { Center, 
  Box, 
  Grid, 
  GridItem, 
  Tab, 
  TabList, 
  Tabs, 
  Text, 
  TabIndicator, 
  TabPanel, 
  TabPanels, 
  Textarea, 
  Button, 
  Input, 
  Image, 
  AbsoluteCenter, 
  InputGroup, 
  VStack, 
  Icon, 
  Flex, 
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  FormControl,
  FormLabel, 
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper} from '@chakra-ui/react'
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Header from '../dashboard/Header'
import Footer from '../../components/footer/Footer'
import Gratis from './Gratis'
import Berbayar from './Berbayar'

function BuatEvent() {

  return (
    <Box>
      <Header/>
    <VStack className={'container-all'}
    >
      <Box className='container-top' marginTop={'40px'} marginBottom={'40px'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'}>
        <Box className='event-card'
        borderRadius={'16px'}
        border={'1px solid #d8d8d8'}
        overflow={'hidden'}>
            <Box width={'100%'} minHeight={'150'} maxHeight={'420'} backgroundColor={'gray.200'} position={'relative'}>
              <Image width='100%' src='https://www.loket.com/images/banner-event.jpg'/>
              <AbsoluteCenter>
                <InputGroup for='input-image' marginBottom={'70px'}>
                  <Icon position={'absolute'} as = {AiOutlinePlusCircle} color={'white'} boxSize={'16'} left={'0'} right={'0'} margin={'auto'}/>
                  <Input position={'absolute'} id='input-image' type='file' zIndex={'99'} opacity={'0'} width={'16'} left={'0'} right={'0'} margin={'auto'}/>
                </InputGroup>
                <Text fontSize={'2xl'} textAlign={'center'} color={'white'}>Unggah Gambar/Poster/Banner</Text>
                <Text textAlign={'center'} color={'white'}>Direkomendasikan 724 x 340px dan tidak lebih dari 2Mb</Text>
              </AbsoluteCenter>
              
              {/* <Text>Upload Gambar</Text> */}
            </Box>
            <Box padding={'15px 40px 40px'}>
              <Grid gridTemplateColumns={'1fr 1fr 1fr'}>
                  <GridItem colSpan={'3'}>
                    <Input placeholder='Nama Event' size={'lg'} variant={'unstyled'}/>
                  </GridItem>
                  <GridItem colSpan={'3'}>
                    <Input placeholder='Category' variant={'unstyled'}/>
                  </GridItem>
                  <GridItem>
                    <Text as={'b'}>Diselenggarakan Oleh</Text>
                    <Input placeholder='Nama Penyelenggara' variant='unstyled'/>
                    <Text as={'b'}>Discount</Text>
                    <Input placeholder='Discount' variant='unstyled'/>
                  </GridItem>
                  <GridItem paddingRight={'32px'}>
                    <Text as={'b'}>Tanggal & Waktu</Text>
                    <Input type='date' variant={'unstyled'}/>
                    <Input type='time' variant={'unstyled'}/>
                  </GridItem>
                  <GridItem>
                    <Text as={'b'}>Lokasi</Text>
                    <Input placeholder='Tempat penyeleggaraan acara' variant={'unstyled'}/>
                  </GridItem>
              </Grid>
            </Box>
        </Box>
      </Box>
      <Box className='container-bottom' marginTop={'40px'} marginBottom={'40px'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'}>
        <Tabs position={'relative'} variant={'unstyled'}>
          <TabList>
            <Tab>KATEGORI TIKET</Tab>
            <Tab>DESKRIPSI EVENT</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
            />
        
        <TabPanels>
          <TabPanel>
            <Grid gridTemplateColumns={'1fr 1fr'}
            gridGap={'50px'}>
                <Box>
                  <Gratis/>
                </Box>
                <Box>
                  <Berbayar/>
                </Box>
            </Grid>
            
            
          </TabPanel>
          <TabPanel>
          
            <Textarea></Textarea>
            -Syarat & Ketentuan
            <Textarea></Textarea>
          </TabPanel>
        </TabPanels>
        </Tabs>
      </Box>
      <Box>
        <Button variant={'outline'} marginRight={'10px'}>Simpan Draf</Button>
        <Button backgroundColor='#0049cc' color={'white'} marginLeft={'10px'}>Buat Event Sekarang</Button>
      </Box>
    </VStack>
    <Footer/>
    </Box>
  )
}

export default BuatEvent