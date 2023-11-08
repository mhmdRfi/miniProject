import React, { useEffect, useState } from 'react'
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
    Select,
    FormErrorMessage} from '@chakra-ui/react'
import Tiket from './Tiket';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from 'axios';

const TicketScheme = Yup.object().shape({
  ticket_name: Yup.string().max(50, "Maksimal 50 karakter").required("Nama tiket wajib diisi dengan maksimal berisi 50 karakter"),
  number_of_ticket: Yup.number().integer().required("Jumlah tiket wajib dipilih"),
  ticket_price: Yup.number().integer().required("Harga tiket wajib diisi"),
  ticket_end_date: Yup.string().required("Tanggal tiket wajib diisi"),
})
function Berbayar({buatEvent}) {
  console.log({buatEvent});
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const [event, setEvent] = useState();
  // const [buatTicket, setBuatTicket] = useState();

  const token = localStorage.getItem("token");
  const fetchData = async () => {
    try {
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
  
      const response = await axios.get("http://localhost:8080/ticket", config);
      setEvent(response.data?.data);
      console.log(event)

    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  // console.log(event);

  const formTicket = async (
    ticket_name,
    number_of_ticket, 
    ticket_price, 
    ticket_end_date,
    ticketCategoryId,
    priceCategoryId, 
    buatEvent
  ) => {
    try{ 
      const response = await axios.post("http://localhost:8080/ticket", {
      ticket_name,
      number_of_ticket, 
      ticket_price, 
      ticket_end_date,
      ticketCategoryId,
      priceCategoryId, 
      eventId: buatEvent
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    // setBuatTicket(response.data?.data)
    alert("Berhasil membuat tiket")
    onClose();
    } catch (err){
      console.log(err)
    }
  };
  
  const formik = useFormik({
    initialValues:{
    ticket_name: "", 
    number_of_ticket: 0,
    ticket_price: 0,
    ticket_end_date: "",
    ticketCategoryId: "",
    priceCategoryId: 1,
    eventId: ""
    },

    validationSchema: TicketScheme,
    onSubmit: (values, {resetForm}) => {
      formTicket(
      values.ticket_name, 
      values.number_of_ticket,
      values.ticket_price,
      values.ticket_end_date,
      values.ticketCategoryId,
      values.priceCategoryId,
      buatEvent
      // event.id
      )
      resetForm({values: ""})
    }
    
  });

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
                  <form onSubmit={formik.handleSubmit}>
                  <ModalContent>
                    <ModalHeader>Detail Tiket</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                      <FormControl isInvalid={
                      formik.touched.ticket_name && formik.errors.ticket_name}>
                        <FormLabel>Nama Tiket</FormLabel>
                        <Input name="ticket_name"
                        placeholder='Maksimal 50 karakter'
                        value={formik.values.ticket_name}
                        onChange={formik.handleChange} />

                        {formik.touched.ticket_name && formik.errors.ticket_name && (
                          <FormErrorMessage>
                            {formik.errors.ticket_name}
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      
                      <FormControl>
                        <FormLabel>Kategori Tiket</FormLabel>
                        <Select placeholder='Pilih kategori tiket'
                        name="ticketCategoryId"
                        value={formik.values.ticketCategoryId}
                        onChange={formik.handleChange}>
                          <option value="1">VVIP</option>
                          <option value="2">VIP</option>
                          <option value="3">Premium</option>
                          <option value="4">Reguler</option>
                        </Select>
                      </FormControl>

                      <FormControl mt={4}
                      isInvalid={
                      formik.touched.number_of_ticket && formik.errors.number_of_ticket}
                      >
                        <FormLabel>Jumlah Tiket</FormLabel>
                        <Input
                        type='number'
                        name="number_of_ticket"
                        value={formik.values.number_of_ticket}
                        onChange={formik.handleChange}>
                        </Input>
                        {formik.touched.number_of_ticket && formik.errors.number_of_ticket && (
                          <FormErrorMessage>
                            {formik.errors.number_of_ticket}
                          </FormErrorMessage>
                        )}
                      </FormControl>

                      <FormControl
                      isInvalid={
                      formik.touched.ticket_price && formik.errors.ticket_price}
                        >
                        <FormLabel>Harga</FormLabel>
                        <Input type="number"
                        name="ticket_price"
                        value={formik.values.ticket_price}
                        onChange={formik.handleChange}
                        >
                        </Input>
                        
                          {formik.touched.ticket_price && formik.errors.ticket_price && (
                            <FormErrorMessage>
                              {formik.errors.ticket_price}
                            </FormErrorMessage>
                          )}
                      </FormControl>
                      
                      <FormControl 
                      isInvalid={
                      formik.touched.ticket_end_date && formik.errors.ticket_end_date}>
                        <FormLabel>Tanggal Akhir Penjualan</FormLabel>
                        <Input type='date'
                        name="ticket_end_date"
                        value={formik.values.ticket_end_date}
                        onChange={formik.handleChange}/>
                        {formik.touched.ticket_end_date && formik.errors.ticket_end_date && (
                          <FormErrorMessage>
                            {formik.errors.ticket_end_date}
                          </FormErrorMessage>
                        )}
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme='blue' mr={3} type='submit'>
                        Save
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                  </form>
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
        {/* <Tiket display='none' buatTicket={buatTicket}/>   */}
        </Button>
    </>
  )
}

export default Berbayar