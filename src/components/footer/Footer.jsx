import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <Box>
      <Box className="footer-main" backgroundColor={"#112041"}>
        <Flex
          className="container-footer-main"
          padding={"0 50px"}
          flexDirection={"column"}
          marginTop={'80px'}
        >
          <Flex
            marginTop={"40px"}
            marginBottom={"20px"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            <Box color={"white"} paddingTop={"40px"}>
              <Text as={"b"} marginLeft={"16px"}>
                Tentang Ticketing
              </Text>
              <UnorderedList styleType={"none"} paddingTop={"20px"}>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Biaya</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Lihat Event</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>FAQ</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Syarat dan Ketentuan</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Laporan Kesalahan</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Sistem</Link>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box color={"white"} paddingTop={"40px"}>
              <Text as={"b"} marginLeft={"16px"}>
                Rayakan Eventmu
              </Text>
              <UnorderedList styleType={"none"} paddingTop={"20px"} textDecoration={'none'}>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Cara Mempersiapkan Event</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Cara Membuat Event Agar Sukses</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Cara Membuat Event Lomba</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Cara Mempublikasikan Event</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Cara Membuat Event Musik</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Cara Mengelola Event</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Cara Membuat Acara Yang Menarik</Link>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box color={"white"} paddingTop={"40px"}>
              <Text as={"b"} marginLeft={"16px"}>
                Lokasi Event
              </Text>
              <UnorderedList styleType={"none"} paddingTop={"20px"}>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Yogyakarta</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Solo</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Sleman</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Bantul</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Klaten</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Gunungkidul</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Magelang</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Semua Kota</Link>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box color={"white"} paddingTop={"40px"}>
              <Text as={"b"} marginLeft={"16px"}>
                Inspirasi Event
              </Text>
              <UnorderedList styleType={"none"} paddingTop={"20px"}>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Festival</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Konser</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Olahraga</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Workshop & Seminar</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Teater & Drama</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Atraksi</Link>
                </ListItem>
                <ListItem>
                  <Link _hover={{textDecoration: 'none'}}>Semua Kategori</Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
          <Flex
            marginTop={"30px"}
            marginBottom={"40px"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            color="white"
            fontSize={"30px"}
            alignItems={"center"}
          >
            <Box marginLeft={"10px"} marginRight={"10px"}>
              <FaSquareFacebook />
            </Box>
            <Box marginLeft={"10px"} marginRight={"10px"}>
              <FiInstagram />
            </Box>
            <Box marginLeft={"10px"} marginRight={"10px"}>
              <FaSquareXTwitter />
            </Box>
            <Box marginLeft={"10px"} marginRight={"10px"}>
              <FaLinkedin />
            </Box>
            <Box marginLeft={"10px"} marginRight={"10px"}>
              <BsYoutube />
            </Box>
          </Flex>
        </Flex>
        <Flex
          className="container-footer-bottom"
          padding={"30px"}
          backgroundColor={"#1d3976"}
          justifyContent={"center"}
          paddingBottom={{ base: "80px", lg: "30px" }}
        >
          <Text
            fontSize={"11px"}
            letterSpacing={"1px"}
            color={"white"}
            lineHeight={"2em"}
            textAlign={"center"}
          >
            <Link _hover={{textDecoration: 'none'}}>Tentang Kami</Link>•<Link _hover={{textDecoration: 'none'}}>Blog</Link>•<Link _hover={{textDecoration: 'none'}}>Karir</Link>•
            <Link _hover={{textDecoration: 'none'}}>Kebijakan Privasi</Link>•<Link _hover={{textDecoration: 'none'}}>Kebijakan Cookie</Link>•
            <Link _hover={{textDecoration: 'none'}}>Panduan</Link>•<Link _hover={{textDecoration: 'none'}}>Hubungi Kami</Link>•
            <Link _hover={{textDecoration: 'none'}}>Pengaturan Cookie</Link>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
