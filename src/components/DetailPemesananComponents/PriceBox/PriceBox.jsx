import { Input, Heading, Text, Box, Divider, useColorModeValue, Button, HStack, Spacer } from '@chakra-ui/react'
import React from 'react'

export const PriceBox = () => {
    return (
        <Box role={'group'}
                    p={6}
                    maxW={{ md: '390px', sm: '100%', base: '100%' }}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow="0px 1px 5px gray"
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}
                    mb='50px'>
                        <Box mb='10px'>
                            <HStack mb='20px'>
                            <Input placeholder='Masukkan kode promo' bg='blue.100'></Input>
                            <Button colorScheme='blue' width='40%'>Terapkan</Button>
                            </HStack>
                        <Heading as='h4' size='md' mb='10px' fontWeight='medium'>Detail Harga</Heading>
                        <HStack mb='5px'><Text>Total Harga Tiket</Text><Spacer /><Text>Harga</Text></HStack>
                        <HStack mb='5px'><Text>Biaya Layanan</Text><Spacer /><Text>Harga</Text></HStack>
                        <Box as='hr' my={3} borderTopWidth='3px' borderTopColor='black.200'></Box>
                        <HStack mt='10px' mb='10px'><Text fontWeight='bold'>Total Bayar</Text><Spacer /><Text fontWeight='bold'>Harga</Text></HStack>
                        <Divider />
                        </Box>
                        <Button colorScheme='blue' width='100%'>Bayar Tiket</Button>
                        
                    </Box>
    )
}

export default PriceBox;