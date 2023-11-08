import { AbsoluteCenter, 
    Box, 
    Icon, 
    Input, 
    InputGroup,
    Image,
    Text,
    Grid,
    GridItem,
    Flex,
    Button,
     } from '@chakra-ui/react'
import React, {useEffect, useState, useRef} from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import Navbar from '../../components/navbar/Navbar'
import NavbarBottom from '../../components/navbarBottom/NavbarBottom'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import {BsCalendarWeekFill} from 'react-icons/bs'
import {BiSolidTimeFive} from 'react-icons/bi'
import {MdPlace} from 'react-icons/md'
import { useFormik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
function ConfirmationPage() {
  const navigate = useNavigate();
    const [data, setData] = useState();
    
    const inputRef = useRef(null);
    const { id } = useParams();
    

    const handleImageClick = () => {
      inputRef.current.click();
    }

    const fetchData = async () => {
        try {
          const response = await axios.get (`http://localhost:8080/transaction/${id}`);
          setData(response.data?.data);
          
          console.log(response)

        } catch (err) {
          console.log(err);
        }
      };

    useEffect (() => {
      fetchData();
    }, []);

    

    

    const [fieldImage, setFieldImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (event) => {
      const imageFile = event.currentTarget.files[0];
      if (imageFile) {
        const imageURL = URL.createObjectURL(imageFile);
        setImagePreview(imageURL);
        setFieldImage(imageFile);
      } else {
        setImagePreview(null);
        setFieldImage(null);
      }
    };

    const register = async () => {
      try {
        let formData = new FormData();
        formData.append("transactionImage", fieldImage);
  
        const { data } = await axios.patch(
          `http://localhost:8080/transaction/${id}`,
          formData
        );
        navigate(`/invoice/${id}`);
          
        alert(data?.message);
        
      } catch (err) {
        console.log(err);
      }
    };
    
    const formik = useFormik({
      initialValues: {
        image: null,
      },
      onSubmit: (values) => {
        register(values.image)
      },
    });

  return (
    
    <Box>
        <Navbar/>
        <form onSubmit={formik.handleSubmit}>
        <Box className={'container-all'} width={'100%'} maxWidth={'950px'} margin={'auto'} marginBottom={'50px'} position={'relative'}>
        <Box className='container-top' margin={'40px auto'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'}>
          <Box className='event-card'
          borderRadius={'16px'}
          border={'1px solid #d8d8d8'}
          overflow={'hidden'}>
            <Box width={'100%'} minHeight={'150'} maxHeight={'720'} backgroundColor={'gray.200'} position={'relative'}>
            {imagePreview ? (
            <Image width='100%' src={imagePreview} />
            ) : (
            <Box width={'100%'} onClick={handleImageClick}>
            <Image width='100%' src='https://www.loket.com/images/banner-event.jpg' />
              <AbsoluteCenter>
                <InputGroup for='input-image' marginBottom={'70px'}>
                  <Icon position={'absolute'} as = {AiOutlinePlusCircle} color={'white'} boxSize={'16'} left={'0'} right={'0'} margin={'auto'}/>
                  <Input position={'absolute'} id='input-image' type='file' ref={inputRef} zIndex={'99'} opacity={'0'} width={'16'} left={'0'} right={'0'} margin={'auto'}
                  name='transactionImage'
                  onChange={handleImageChange}/>
                </InputGroup>
                <Text fontSize={'2xl'} textAlign={'center'} color={'white'}>Unggah bukti pembayaran di sini</Text>
                {/* <Button type='submit'>Upload</Button> */}
              </AbsoluteCenter>
              </Box>
              )}
              
              
            </Box>
            </Box>
        </Box>

        <Box className='container-bottom' margin={'40px auto'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'}>
        {data?(
        <Box className='event-card'
          borderRadius={'16px'}
          border={'1px solid #d8d8d8'}
          overflow={'hidden'}
          padding={'40px'}
          
          >
            <Text fontSize={'lg'} fontWeight={'bold'} color={'#003899'}>Berikut Adalah Detail Pemesananmu</Text>
            <Box marginTop={'20px'} marginBottom={'10px'}>
                <Text as={'b'} fontSize={'xl'}>{data.event.name}</Text>
            </Box>
            
            <Flex className='event-description'
                            flexDirection={'column'}
                            justifyContent={'center'}
                            paddingBottom={'24px'}
                            borderBottom={'1px solid #dbdfe7'}>
                                <Box marginBottom={'12px'}>
                                    <Text as={'b'}>Jadwal dan Lokasi</Text>
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
                                        <Text>{data.event.date}</Text>
                                    </Grid>
                                    <Grid className='event-date'
                                    alignItems={'center'} 
                                    gridGap={'12px'}
                                    gridTemplateColumns={'25px 1fr'}>
                                        <Box align={'center'}>
                                            <BiSolidTimeFive size={'20px'} color='#8E919B'/>
                                        </Box>
                                        <Text>{data.event.time}</Text>
                                    </Grid>
                                    <Grid className='event-date'
                                    alignItems={'center'} 
                                    gridGap={'12px'}
                                    gridTemplateColumns={'25px 1fr'}>
                                        <Box align={'center'}>
                                            <MdPlace size={'20px'} color='#8E919B'/>
                                        </Box>
                                        <Text>{data.event.location}</Text>
                                    </Grid>
                                </Grid>
                            </Flex>
                            <Box marginTop={'24px'}
                            paddingBottom={'24px'}
                            borderBottom={'1px dashed #8E919B'}>
                                <Box marginBottom={'12px'}>
                                    <Text as={'b'}>Detail Harga</Text>
                                </Box>
                                <Flex justifyContent={'space-between'}>
                                    <Text>Jumlah Tiket</Text>
                                    <Text>{data.totalQuantity}</Text>
                                </Flex>
                                <Flex justifyContent={'space-between'}>
                                    <Text>Total Harga Tiket</Text>
                                    <Text>{data.TotalPrice}</Text>
                                </Flex>
                            </Box>
                            <Box marginTop={'24px'}
                            paddingBottom={'24px'}
                            borderBottom={'1px dashed #8E919B'}>
                                <Flex justifyContent={'space-between'}>
                                    <Text as={'b'} fontSize={'lg'}>Total Bayar</Text>
                                    <Text as={'b'} fontSize={'lg'}> Rp. 100.000</Text>
                                </Flex>
                            </Box>
          </Box>
          ) : (
            <></>
          )}
        </Box>
        <Box margin={'40px auto'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'} position={'relative'}>
            <Box position={'absolute'} right={'10'}>
              <Link to="/">
                <Button variant={'outline'} marginRight={'10px'}>Cancel</Button>
              </Link>
               
                <Button backgroundColor='#0049cc' color={'white'} marginLeft={'10px'} _hover={{color: '#0049cc', backgroundColor: '#EDF2F7', outlineColor: '#0049cc'}} type='submit'>Konfirmasi Pembayaran</Button>
              
        </Box>
            <Box height={'30px'}></Box>
        </Box>
      </Box>
      </form>
      <NavbarBottom/>
      <Footer/>
    </Box>
  )
}

export default ConfirmationPage