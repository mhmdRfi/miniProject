import { Box, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";

const CardSlider3 = ({ cards }) => {
  const Card = ({ item }) => {
    return (
      <Box
        className="card"
        flex={"1 0 279px"}
        boxShadow={
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
        }
        background={"#fff"}
        margin={"1rem"}
        overflow={"hidden"}
        borderRadius={"8px"}
        cursor={"pointer"}
        transition={"all 250ms ease-in-out"}
        height={"330px"}
      >
        <Image
          src={item.imgUrl}
          alt={item.alt || "Image"}
          width={"100%"}
          height={"137px"}
          position={"relative"}
          borderRadius={"8px 8px 0 0"}
          overflow={"hidden"}
        />
        <Box
          className="card-content"
          position={"relative"}
          display={"flex"}
          gridRowGap={"8px"}
          padding={"12px 16px"}
          flexDirection={"column"}
          justifyContent={"center"}
          overflow={"hidden"}
        >
          <Heading
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            display={"block"}
            size={"sm"}
          >
            {item.title}
          </Heading>
          <Text>{item.date}</Text>
          <Text fontWeight={"bold"}>{item.price}</Text>
        </Box>
      </Box>
    );
  };

  return (
    <Box className="section event">
      <Box
        className="section-wrapper"
        maxWidth={"1244px"}
        display={"grid"}
        gridTemplateRows={"1fr"}
        gridRowGap={"20px"}
        position={"relative"}
        margin={"0 auto"}
      >
        <Box
          className="section-title"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          columnGap={"12px"}
        >
          <Box
            className="label-title"
            display={"flex"}
            alignItems={"center"}
            flexWrap={"wrap"}
            columnGap={"6px"}
          >
            <Heading as={"h2"} fontSize={"1.5rem"} fontWeight={"bold"}>
              Event Lainnya
            </Heading>
          </Box>
        </Box>
        <Box className="section-content">
          <Box className="container" width={"100%"} margin={"auto"}>
            <Box>
              <Box
                className="cards-container"
                display={"flex"}
                borderRadius={"6px"}
                color={"#333"}
                box-shadow={"medium"}
                flexWrap={"wrap"}
                position={"relative"}
              >
                {cards?.slice(0, 8)?.map((card) => (
                  <Card item={card} />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardSlider3;
