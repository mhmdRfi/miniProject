import { Input, Heading, Text, Box, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiFillWarning} from 'react-icons/ai'


export const InputBox = () => {
    return(
        <>
        <Box marginTop='20px'>
                     <Heading fontSize='25px' color='blue.900' mb='5px'>Detail Pemesan</Heading>
                     <Box padding='20px'
                    boxShadow="0px 1px 5px gray"
                    rounded={'lg'}>
                         <VStack alignItems='left'>
                             <Text>Nama Lengkap</Text>
                             <Text color='grey'>Gunakan nama yang tertera pada KTP/Paspor.</Text>
                             <Input bgColor='gray.100' />
                             <Text>Nomor Ponsel</Text>
                             <Input bgColor='gray.100' />
                             <Text>Email</Text>
                             <Input bgColor='gray.100' />
                         </VStack>
                     </Box>
                     <Box marginTop='20px' mb='20px' bgColor='orange.100' padding='10px' borderRadius='10px'>
                         <HStack>
                         <AiFillWarning color='orange' />
                         <Text color='grey'>Pastikan datamu sudah benar</Text>
                         </HStack>
                     </Box>
                 </Box>
                 </>
    )
}
