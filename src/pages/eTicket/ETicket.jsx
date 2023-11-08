import { Box, Flex, Text, Grid, createIcon, VStack } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link, useParams } from 'react-router-dom'
import NavbarBottom from '../../components/navbarBottom/NavbarBottom'
import Footer from '../../components/footer/Footer'
import { BiSolidTimeFive } from 'react-icons/bi'
import { MdPlace } from 'react-icons/md'
import {HiMiniTicket} from 'react-icons/hi2'
import { BsCalendarWeekFill } from 'react-icons/bs'
import {nanoid} from 'nanoid'
import QRCode from 'qrcode.react'
import axios from 'axios'


function ETicket() {
    const {id} = useParams();
    const [data, setData] = useState();
    const Logo = createIcon({
        displayName: "Logoipsum_296",
        viewBox: "0 0 40 40",
        path: (
          <>
            <path
              fill="currentColor"
              d="M25.556 11.685A10 10 0 0020 10V0A20 20 0 110 20h10a10 10 0 1015.556-8.315z"
            />
            <path
              fill="currentColor"
              d="M10 0A10 10 0 010 10v10A20 20 0 0020 0H10z"
            />
          </>
        ),
      });

      const resCode = nanoid(10).toUpperCase();
      const fetchData = async () => {
        try {
          const response = await axios.get (`http://localhost:8080/transaction/ticket/${id}`);
          setData(response.data?.data);
        } catch (err) {
          console.log(err);
        }
      };

    useEffect (() => {
      fetchData();
    }, []);

    console.log(data);
      
  return (
    <Box>
        <Navbar/>
        <Box margin={'50px 50px'}>
        {data && data.length > 0 ?(
            data.map((item) => (
                <Box className='event-detail'
                borderRadius={'8p'}
                boxShadow={'base'}
                border={'1px solid #dbdfe7'}
                padding={'24px'}
                maxWidth={'900px'}
                margin={'50px auto'}
                key={item.id}>
                    <Flex className='event-detail-banner'
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    paddingBottom={'20px'}
                    borderBottom={'1px solid #dbdfe7'}
                    >
                        <Box>
                            <Text fontWeight={'extrabold'}
                            fontSize={'2xl'}>e-Ticket</Text>
                        </Box>
                        <Flex alignItems={'center'}>
                            <Logo
                            boxSize={'8'}
                            color={'#003899'}/>
                            <Text 
                            as='b' 
                            color={'#003899'}
                            fontWeight={'extrabold'}
                            fontSize={'2xl'}
                            marginStart={'8px'}>Ticketing</Text>
                        </Flex>
                        {/* <Text color={'#8E919B'}>Kode Pesanan <Text as={'span'} color={'black'}>ABCDE45</Text></Text> */}
                        {/* <Text color={'#8E919B'}>{formattedDateTime}</Text> */}
                    </Flex>
                    <Grid className='event-detail-content'
                    marginTop = '20px'
                    gridTemplateColumns={'.3fr .7fr'}>
                        <Box paddingRight={'24px'} borderRight={'1px solid #dbdfe7'}>
                            <VStack 
                            width='100%' 
                            overflow={'hidden'}
                            borderRadius={'8px'}
                            marginBottom={'16px'}
                            // border={'1px solid #dbdfe7'}
                            alignItems={'center'}
                            >
                                <QRCode value= {item.ticket?.ticketCode} renderAs="canvas" />   
                            </VStack>
                            <Box>
                                <Text  fontSize={'lg'} color={'#8E919B'} textAlign={'center'}>Kode Tiket</Text>
                            </Box>
                            <Box>
                                <Text  fontWeight={'bold'} fontSize={'xl'} color={'#151416'} textAlign={'center'}>{item.ticket?.ticketCode}</Text>
                            </Box>
                        </Box>

                        <Box className='widget-event-detail'
                        paddingLeft={'24px'}>
                            <Flex className='event-description'
                            flexDirection={'column'}
                            justifyContent={'center'}
                            paddingBottom={'24px'}
                            borderBottom={'1px solid #dbdfe7'}>
                                <Box marginBottom={'12px'}>
                                    <Text as={'b'} fontSize={'3xl'}>{item.ticket?.event.name}</Text>
                                </Box>
                                <Grid gridTemplateRows={'1fr'}
                                gridGap={'5px'}>
                                    <Grid className='event-date'
                                    alignItems={'center'} 
                                    gridGap={'12px'}
                                    gridTemplateColumns={'25px 1fr'}>
                                        <Box align={'center'}>
                                            <BsCalendarWeekFill size={'20px'} color='#8E919B'/>
                                        </Box>
                                        <Text>{item.ticket?.event.date}</Text>
                                    </Grid>
                                    <Grid className='event-date'
                                    alignItems={'center'} 
                                    gridGap={'12px'}
                                    gridTemplateColumns={'25px 1fr'}>
                                        <Box align={'center'}>
                                            <BiSolidTimeFive size={'20px'} color='#8E919B'/>
                                        </Box>
                                        <Text>{item.ticket?.event.time}</Text>
                                    </Grid>
                                    <Grid className='event-date'
                                    alignItems={'center'} 
                                    gridGap={'12px'}
                                    gridTemplateColumns={'25px 1fr'}>
                                        <Box align={'center'}>
                                            <MdPlace size={'20px'} color='#8E919B'/>
                                        </Box>
                                        <Text>{item.ticket?.event.location}</Text>
                                    </Grid>
                                </Grid>
                            </Flex>
                            <Box className='event-tiket-info'
                            paddingTop={'24px'}>
                                <Grid className='tiket-list'
                                gridTemplateRows={'1fr'}
                                gridGap={'12px'}>
                                    <Grid gridTemplateColumns={'25px 1fr'}
                                    gridGap={'12px'}>
                                        <Box paddingTop={'3px'} align={'center'}>
                                            <HiMiniTicket color='#8E919B' size={'20px'}/>
                                        </Box>
                                        <Box>
                                            <Text>{item.ticket?.ticket_name}</Text>
                                            <Text color='#8E919B'>Tiket ini tersedia untuk {item.quantity} orang</Text>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
        )) 
        ) : (
            <></>
          )}
            </Box>
        <Footer/>
    </Box>
  )
}

export default ETicket