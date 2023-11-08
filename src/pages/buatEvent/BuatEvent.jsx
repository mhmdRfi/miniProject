import { 
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
  FormControl,
  FormErrorMessage,
  Select,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  CheckboxGroup,
  MenuDivider
  } from '@chakra-ui/react'
import React, {useEffect, useState, useRef} from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import axios from 'axios'
import Header from '../dashboard/Header'
import Footer from '../../components/footer/Footer'
import Gratis from './Gratis'
import Berbayar from './Berbayar'
import * as Yup from "yup";
import { useFormik } from "formik";
import Tiket from './Tiket'
import { Link, useNavigate } from "react-router-dom";


const EventSchema = Yup.object().shape({
  name: Yup.string().required("Nama tiket wajib diisi dengan maksimal berisi 50 karakter"),
  description: Yup.string().required("Silakan isi deskripsi terlebih dahulu"), 
  sk: Yup.string().required("Silakan isi syarat & ketentuan terlebih dahulu"),  
  date: Yup.string().required("Silakan isi tanggal pelaksanaan terlebih dahulu"), 
  time: Yup.string().required("Silakan isi waktu pelaksanaan terlebih dahulu"),  
  location: Yup.string().required("Silakan isi deskripsi terlebih dahulu"),  
})

function BuatEvent() {
  const [category, setCategory] = useState();
  const [city, setCity] = useState();
  const [buatEvent, setBuatEvent] = useState();
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  }

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
    
    const fetchCategory = async () => {
        try {
          const response = await axios.get ("http://localhost:8080/event/category");
          setCategory(response.data?.data);
          console.log(response.data.data)
        } catch (err) {
          console.log(err);
        }
      };
    const fetchCity = async () => {
        try {
          const response = await axios.get ("http://localhost:8080/event/city");
          setCity(response.data?.data);
          console.log(response)
        } catch (err) {
          console.log(err);
        }
      };

    useEffect (() => {
      fetchCategory();
      fetchCity();
    }, []);

    console.log("ini kategori", category);   
    console.log("ini city", city);   

    const token = localStorage.getItem("token")

    const event = async (
      name,
      image,
      description, 
      sk, 
      date, 
      time, 
      location, 
      discount, 
      maxRefferalCode, 
      categoryId,
      points,
      cityId
    ) => {
      try{ 

        let formData = new FormData();
        formData.append("name", name);
        formData.append("image", fieldImage);
        formData.append("description", description);
        formData.append("sk", sk);
        formData.append("date", date);
        formData.append("time", time);
        formData.append("location", location);
        formData.append("discount", discount);
        formData.append("maxRefferalCode", maxRefferalCode);
        formData.append("categoryId", categoryId);
        formData.append("points", points);
        formData.append("cityId", cityId);

        const response =await axios.post("http://localhost:8080/event", formData, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBuatEvent(response.data?.data.id)
      console.log(response);
      alert("Berhasil membuat tiket")
      } catch (err){
        console.log(err)
      }
    };
    
    const formik = useFormik({
      initialValues:{
        name: "",
        image: null, 
        description: "", 
        sk: "", 
        date: "", 
        time: "", 
        location: "", 
        discount: 0, 
        maxRefferalCode: 0, 
        categoryId: null,
        points: 0,
        cityId: null
        // id: ""
      },

      validationSchema: EventSchema,
      onSubmit: (values, {resetForm}) => {
        event(
        values.name,
        values.image,
        values.description, 
        values.sk, 
        values.date, 
        values.time, 
        values.location, 
        values.discount, 
        values.maxRefferalCode, 
        values.categoryId,
        values.points,
        values.cityId,
        );
        resetForm({values:""})
      }
    });

  return (
    <Box>
      <Header/>
      
      <Box className={'container-all'} width={'100%'} margin={'auto'} marginBottom={'50px'} position={'relative'}>
      
      <form onSubmit={formik.handleSubmit}>
      <Box className='container-top' margin={'40px auto'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'}>
          <Box className='event-card'
          borderRadius={'16px'}
          border={'1px solid #d8d8d8'}
          overflow={'hidden'}>
            <Box width={'100%'} minHeight={'150'} maxHeight={'420'} backgroundColor={'gray.200'} position={'relative'}>
            {imagePreview ? (
            <Image width='100%' maxHeight={'420'} objectFit={'contain'} src={imagePreview} />
            ) : (
            <Box width={'100%'} onClick={handleImageClick}>
            <Image width='100%' src='https://www.loket.com/images/banner-event.jpg' />
              <AbsoluteCenter>
                <InputGroup for='input-image' marginBottom={'70px'}>
                  <Icon position={'absolute'} as = {AiOutlinePlusCircle} color={'white'} boxSize={'16'} left={'0'} right={'0'} margin={'auto'}/>
                  <Input position={'absolute'} id='input-image' type='file' ref={inputRef} zIndex={'99'} opacity={'0'} width={'16'} left={'0'} right={'0'} margin={'auto'}
                  name='image'
                  onChange={handleImageChange}/>
                </InputGroup>
                <Text fontSize={'2xl'} textAlign={'center'} color={'white'}>Unggah Gambar/Poster/Banner</Text>
                <Text textAlign={'center'} color={'white'}>Direkomendasikan 724 x 340px dan tidak lebih dari 2Mb</Text>
              </AbsoluteCenter>
              </Box>
              )}
            </Box>
            <Box padding={'15px 40px 40px'}>
              <Grid gridTemplateColumns={'1fr 1fr 1fr'}>
                  <GridItem colSpan={'3'} marginBottom={'8px'}>
                    <FormControl isInvalid={
                    formik.touched.name && formik.errors.name}>
                      <Text as={'b'} fontSize={'m'} color={'#494A4A'}>Nama Event</Text>
                      <Input placeholder='Nama Event' size={'lg'} variant={'unstyled'}
                      name='name'
                      onChange={formik.handleChange}
                      value={formik.values.name}/>
                      
                      {formik.touched.name && formik.errors.name && (
                      <FormErrorMessage>
                        {formik.errors.name}
                      </FormErrorMessage>
                        )}
                      </FormControl>
                  </GridItem>

                  <GridItem colSpan={'3'} marginBottom={'15px'}>
                    
                      <Text as={'b'} color={'#494A4A'} fontSize={'sm'} marginEnd={'20px'}>Pilih Kategori:</Text>
                      <Select name="categoryId" 
                        placeholder='Pilih Kategori'
                        onChange={formik.handleChange}
                        value={formik.values.categoryId} type='checkbox'
                        title='Category'>
                          {/* <option  value="1" marginEnd={'20px'}>"Konser"</option>
                          <option  value="2" marginEnd={'20px'}>"Workshop"</option> */}
                          { 
                          // category && category.length > 0 ?(
                          category?.map((item, index) => (
                          <option key={index} value={item.id} marginEnd={'20px'}>{item.name}</option>
                          )) 
                          // category?.map((item, index) => (
                          
                          // )) 
                      // ) : (
                      //   <></>
                      //   )
                        }
                      </Select>


                  </GridItem>
                  <GridItem>
                    
                    <Text as={'b'} color={'#494A4A'} fontSize={'sm'} textAlign={'center'}>Diselenggarakan Oleh</Text>
                      <VStack 
                        
                            width='50%' 
                            overflow={'hidden'}
                            borderRadius={'full'}
                            marginBottom={'16px'}
                            marginTop={'16px'}
                            // border={'1px solid #dbdfe7'}
                            alignItems={'center'}
                            >
                          
                                <Image src = "https://www.radarbogor.id/files/2023/08/Happy-Asmara.jpg"/>

                          
                          
                      </VStack>
                      <Text fontSize={'xl'}>Mantabs EO</Text>
                      
                  </GridItem>
                  <GridItem paddingRight={'32px'}>
                    <Text as={'b'} color={'#494A4A'} fontSize={'sm'}>Tanggal & Waktu</Text>
                    <FormControl isInvalid={
                      formik.touched.date && formik.errors.date}>
                      <Input type='date' variant={'unstyled'}
                      name='date'
                      onChange={formik.handleChange}
                      value={formik.values.date}/>

                      {formik.touched.date && formik.errors.date && (
                      <FormErrorMessage>
                        {formik.errors.date}
                      </FormErrorMessage>
                        )}

                    </FormControl>
                      
                    <FormControl marginBottom={'10px'}
                      isInvalid={
                      formik.touched.time && formik.errors.time}>  
                      <Input type='time' variant={'unstyled'}
                      name='time'
                      onChange={formik.handleChange}
                      value={formik.values.time}/>

                      {formik.touched.time && formik.errors.time && (
                      <FormErrorMessage>
                        {formik.errors.time}
                      </FormErrorMessage>
                        )}
                    </FormControl>
                    
                    <Text as={'b'} color={'#494A4A'} fontSize={'sm'}>Lokasi</Text>

                    <FormControl isInvalid={
                      formik.touched.location && formik.errors.location}>
                      <Input placeholder='Tempat penyeleggaraan acara' variant={'unstyled'}
                      name='location'
                      onChange={formik.handleChange}
                      value={formik.values.location}/>

                      {formik.touched.time && formik.errors.time && (
                      <FormErrorMessage>
                        {formik.errors.time}
                      </FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl isInvalid>
                      <Select placeholder='Kota' variant={'unstyled'}
                      name='cityId'
                      onChange={formik.handleChange}
                      value={formik.values.cityId}>
                        {/* <option value="1" marginEnd={'20px'}>Medan</option>
                        <option value="2" marginEnd={'20px'}>Batam</option> */}
                        { 
                        // city && city.length > 0 ?(
                          city?.map((item, index) => (
                          <option key={index} value={item.id} marginEnd={'20px'}>{item.name}</option>
                          )) 
                      // ) : (
                      //   <></>
                      //   )
                        }

                      </Select>
                    </FormControl>

                  </GridItem>
                  
                  <GridItem>
                    <Text as={'b'} color={'#494A4A'} fontSize={'sm'}>Diskon Refferal</Text>
                    <FormControl 
                      marginBottom={'10px'}
                      isInvalid={
                      formik.touched.discount && formik.errors.discount}>
                      <Input variant={'unstyled'}
                      name='discount'
                      onChange={formik.handleChange}
                      value={formik.values.discount}/>

                      {formik.touched.discount && formik.errors.discount && (
                      <FormErrorMessage>
                        {formik.errors.discount}
                      </FormErrorMessage>
                        )}
                    </FormControl>

                    <Text as={'b'} color={'#494A4A'} fontSize={'sm'}>Point Refferal</Text>
                    <FormControl 
                      marginBottom={'10px'}
                      isInvalid={
                      formik.touched.points && formik.errors.points}>
                      <Input variant={'unstyled'}
                      name='points'
                      onChange={formik.handleChange}
                      value={formik.values.points}/>

                      {formik.touched.points && formik.errors.points && (
                      <FormErrorMessage>
                        {formik.errors.points}
                      </FormErrorMessage>
                        )}
                    </FormControl>

                    <Text as={'b'} color={'#494A4A'} fontSize={'sm'}>Maksimal Jumlah Refferal</Text>
                    <FormControl isInvalid={
                      formik.touched.maxRefferalCode && formik.errors.maxRefferalCode}>
                      <Input variant={'unstyled'}
                      name='maxRefferalCode'
                      onChange={formik.handleChange}
                      value={formik.values.maxRefferalCode}/>

                      {formik.touched.maxRefferalCode && formik.errors.maxRefferalCode && (
                      <FormErrorMessage>
                        {formik.errors.maxRefferalCode}
                      </FormErrorMessage>
                        )}
                    </FormControl>
                  </GridItem>
              </Grid>
            </Box>
        </Box>
      </Box>
      
      <Box className={'container-ticket'} margin={'40px auto'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'}>
        {/* <Tiket/> */}
      </Box>

      <Box className='container-bottom' margin={'40px auto'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'}>
        <Text  as={'b'} color={'#494A4A'} fontSize={'sm'}>DESKRIPSI EVENT</Text>
        <FormControl 
          margin={'10px 0 25px'}
          isInvalid={
          formik.touched.description && formik.errors.description}>
          <Textarea name='description'
            onChange={formik.handleChange}
            value={formik.values.description}></Textarea>
            {formik.touched.description && formik.errors.description && (
              <FormErrorMessage>
              {formik.errors.description}
              </FormErrorMessage>
              )}
        </FormControl>
        
        <Text  as={'b'} color={'#494A4A'} fontSize={'sm'}>SYARAT DAN KETENTUAN</Text>
        <FormControl margin={'10px 0 25px'}
        isInvalid={
          formik.touched.sk && formik.errors.sk}>
          <Textarea name='sk'
            onChange={formik.handleChange}
            value={formik.values.sk}></Textarea>
          {formik.touched.description && formik.errors.description && (
          <FormErrorMessage>
          {formik.errors.description}
          </FormErrorMessage>
          )}  
        </FormControl>
      </Box>

      <Box className='container-button' margin={'40px auto'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'} position={'relative'}>
        <Box position={'absolute'} right={'10'}>
          <Button variant={'outline'} marginRight={'10px'}>Simpan Draf</Button>
          <Button backgroundColor='#0049cc' color={'white'} marginLeft={'10px'} _hover={{color: '#0049cc', backgroundColor: '#EDF2F7', outlineColor: '#0049cc'}} type='submit'>Buat Event Sekarang</Button>
        </Box>
      </Box>
      </form>

      <Box height={'70px'}></Box>
      
      <Box className='container-buat-ticket' margin={'40px auto'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'}>
        <Box marginBottom={'24px'}>
          <Text as={'b'}>BUAT TIKET</Text>
        </Box>
            <Grid gridTemplateColumns={{base:'1fr', md:'1fr 1fr'}}
            gridGap={'50px'}
            >
                <Box>
                  <Gratis buatEvent={buatEvent}/>
                </Box>
                <Box>
                  <Berbayar buatEvent={buatEvent}/>
                </Box>
            </Grid>
      </Box>

      </Box>
      
        
      
    <Footer/>
    </Box>
  )
}

export default BuatEvent