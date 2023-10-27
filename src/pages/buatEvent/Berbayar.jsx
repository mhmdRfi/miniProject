import React from 'react'
import { Center, 
    Box, 
    Text, 
    Button, 
    Input, 
    Image, 
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

import { AiOutlinePlusCircle } from 'react-icons/ai'

function Berbayar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button 
        position={'relative'}
        fontSize={'1.3rem'}
        borderRadius={'8px'}
        border={'1px solid #DBDFE7'}
        backgroundColor={'white'}
        width={'100%'}
        padding={'0'}
        height={''}
        onClick={onOpen}>
          <Box width={'10px'}
          height={'20px'}
          position={'absolute'}
          left={'-2px'}
          backgroundColor={'white'}
          borderBottomRightRadius={'xl'}
          borderTopRightRadius={'xl'}
          border={'1px solid #DBDFE7'}
          borderLeft={'0'}>
          </Box>

          <Flex boxSizing='border-box'
          width={'100%'}>
              <Center 
              width={'120px'}
              padding={'16px 0'}
              overflow={'hidden'}
              borderRight={'2px dashed #DBDFE7'}
              boxSizing='border-box'>
                <Image src='https://www.loket.com/images/icon/icon-barcode.svg' />
              </Center>

              <Flex position={'relative'}
              justifyContent={'space-between'}
              padding={'16px 12px'}
              textAlign={'left'}
              lineHeight={'1'}
              width={'100%'}>
                <Box width={'10px'}
                height={'5px'}
                position={'absolute'}
                left={'-7px'}
                top={'-1px'}
                backgroundColor={'white'}
                borderBottomRightRadius={'xl'}
                borderBottomLeftRadius={'xl'}
                border={'1px solid #DBDFE7'}
                borderTop={'0'}>
                </Box>

                <Box margin={'auto 20px'}>
                  <Text fontSize={'12px'} color={'#4d4d4d'}>Buat Tiket</Text>
                  <Text fontSize={'24px'} as={'b'} color={'#4d4d4d'}>Berbayar</Text>
                </Box>

                <Box>
                  <Icon as = {AiOutlinePlusCircle} color={'#ADB6C9'} boxSize={'12'} left={'0'} right={'0'} margin={'auto'}/>
                </Box>

                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Detail Tiket</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Nama Tiket</FormLabel>
                        <Input placeholder='Maksimal 50 karakter' />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Jumlah Tiket</FormLabel>
                        <NumberInput>
                          <NumberInputField/>
                          <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                          </NumberInputStepper>
                        </NumberInput>
                      </FormControl>

                      <FormControl>
                      <FormLabel>Harga</FormLabel>
                      <NumberInput>
                          <NumberInputField/>
                        </NumberInput>
                      </FormControl>

                      <FormControl>
                        <FormLabel>Deskripsi Tiket</FormLabel>
                        <Input />
                      </FormControl>

                      <FormControl>
                        <FormLabel>Tanggal Akhir Penjualan</FormLabel>
                        <Input type='date'/>
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme='blue' mr={3}>
                        Save
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>

                <Box width={'10px'}
                height={'5px'}
                position={'absolute'}
                left={'-7px'}
                bottom={'-1px'}
                backgroundColor={'white'}
                borderTopRightRadius={'xl'}
                borderTopLeftRadius={'xl'}
                border={'1px solid #DBDFE7'}
                borderBottom={'0'}>
                </Box>
              </Flex>
          </Flex>
        </Button>
    </>
  )
}

export default Berbayar