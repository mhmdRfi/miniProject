import { Flex, Tabs, Tab, TabList, TabPanels, TabPanel, Heading, Text, Box, useColorModeValue, Button, HStack, VStack, Spacer } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import {IoTicket} from 'react-icons/io5'
import Tiket from '../../../components/Tiket/Tiket'
import {FacebookShareButton, TwitterShareButton} from 'react-share'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logoutSuccess } from "../../../redux/reducer/authReducer";

const BottomBox = () => {
    const [data, setData] = useState([]);
    const { user, isLogin } = useSelector((state) => state.AuthReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/events/1"
            );
            setData(response?.data); 
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <>
        <Flex direction={{base: 'column', md:'row', sm:'column'}} alignItems={{base:'center', sm : 'center'}} height="fit-content" mt={{md: '-10%'}} position='relative' alignItems='flex-start'>
            <Flex
             flexDirection={"column"}
             width={{ md: '65%', sm: '100%', base: '100%' }}
             padding={'5%'}
            //  bg='red'
             >
                 <Tabs >
                <TabList justifyContent="center" width="100%" >
                    <Tab _selected={{ borderBottom: '2px solid #00008B', fontWeight: 'bold', position: 'relative', _after: { content: '""', position: 'absolute', bottom: '-2px', left: 0, right: 0, height: '4px', borderRadius: '4px 4px 0 0', background: '#00008B' } }} width='100%' 
                    ><Text >DESKRIPSI</Text></Tab>
                    <Tab _selected={{ borderBottom: '2px solid #00008B', fontWeight: 'bold', position: 'relative', _after: { content: '""', position: 'absolute', bottom: '-2px', left: 0, right: 0, height: '4px', borderRadius: '4px 4px 0 0', background: '#00008B' } }} width='100%'
                    ><Text >TIKET</Text></Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                        {data?.desc}
                        <HStack><Box bg='blue' width='7px' color='blue' borderRadius='0px 10px 0px 10px'>|</Box>
                        <Heading size='md'>Syarat dan Ketentuan</Heading>
                        <Text>{data?.sk}</Text>
                        </HStack>
                        <Text>
                        </Text>
                        <HStack mb='10px' mt='20px'><Box bg='blue' width='7px' color='blue' borderRadius='0px 10px 0px 10px'>|</Box>
                        <Heading size='md'>Label</Heading>
                        </HStack>
                        <HStack>
                        {/* {Object.keys(data.genres).map((category, index) => (
                        ))} */}
                        {data.genres && data.genres.map((genres, index) => (
                        <Box key={index} borderRadius='5px' bgColor='blue' textColor='white' pl='5px' pr='5px' w='fit-content'>{genres.genre}</Box>    
  ))}
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                    {data.tickets && data.tickets.map((ticket, index) => (
    <Tiket key={index} ticket={ticket} />
  ))}
                    </TabPanel>
                </TabPanels>
            </Tabs>
             </Flex>
             <VStack
             width={{ md: '35%', sm: '100%', base: '100%' }}
              p='5%'
                top="20px"
              position='sticky'
             >
                    <Box role={'group'}
                    p={6}
                    maxW={{md: '330px', sm: '100%'}}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow="0px 1px 5px gray"
                    // boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}
                    mb='40px'>
                        {isLogin ? (
                            user?.roleId=="2" ? (<>
                                <Text>Login as Buyer if want purchase ticket</Text>
                                    <Button colorScheme='blue' width='100%' onClick={() => dispatch(logoutSuccess())}>Logout</Button>
                                </>
                                    ) : ( <>
                                    <Text>Nama Tiket</Text>
                                    <HStack><Text>Jumlah Tiket</Text><Spacer /><Text fontWeight='bold'>Total Harga</Text></HStack>
                                            <Box as='hr' my={3} borderTopWidth='3px' borderTopColor='black.200'></Box>
                                    <HStack mb='10px'><IoTicket color='blue' /><Text>Total 2 tiket</Text><Spacer /><Text fontWeight='bold'>Total Harga</Text></HStack>
                                    <Button colorScheme='blue' width='100%'>Beli Tiket</Button>
                                    </> )
        ) : (
            <>
            <Text>Please register as Buyer if you want purchase ticket</Text>
            <Button width={'50%'} colorScheme='blue' >Daftar</Button>
            </>
        )}
                        
                        
                    </Box>
                    <Box>
                        <Text mb='10px'>Bagikan Event</Text>
                        <HStack>
                            <FacebookShareButton
                            url={`${window.location.href}`}
                            quote={'Kunjungi Event Bersamaku!'}
                            hashtag="#ticketing">
                            <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                                Facebook
                            </Button>
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={`${window.location.href}`}
                                quote={'Kunjungi Event Bersamaku!'}
                                hashtag="#ticketing">
                            <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                             Twitter
                            </Button>
                            </TwitterShareButton>
                        </HStack>
                    </Box>
                </VStack>

        </Flex>
        </>
    )
}

export default BottomBox;
