import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import img1 from "../../assets/Carousel/cactus.jpeg";
import img2 from "../../assets/Carousel/tortasfloresrosas.png";
import img3 from "../../assets/Carousel/mangadecolores2.jpg";

import img4 from "../../utils/IMAGES/imgsCoursesLanding/IMG_20220409_131024.jpg"
import img5 from "../../utils/IMAGES/imgsCoursesLanding/IMG_20220603_154712.jpg"
import img6 from "../../utils/IMAGES/imgsCoursesLanding/IMG_20220615_152157.jpg"
import img7 from "../../utils/IMAGES/imgsCoursesLanding/IMG_20220620_123629.jpg"
import img8 from "../../utils/IMAGES/imgsCoursesLanding/IMG_20220628_174248.jpg"
import s from "./Carrusel.module.css"
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel({ path }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // Data de cada card que se va a mostrar en el carrousel
  const cards = [
    {
      number: 1,
      // text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: img1,
      //   "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    },
    {
      number: 2,
      // text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: img2,
    },
    {
      number: 3,
      // text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: img3,
    },
  ];
  const cardsLanding = [
    {
      number: 1,
      image: img4,
    },
    {
      number: 2,
      image: img5,
    },
    {
      number: 3,
      image: img6,
    },
    {
      number: 4,
      image: img7,
    },
    {
      number: 5,
      image: img8,
    },
    

  ]

  return (
    <Box position={"relative"}
      height={"26rem"}
      width={path!== "landing" ? "full" : "16rem"}
      overflow={"hidden"}
      className={s.widthCarrusel}
    >
      {/* CSS files for react-slick */}
      <link rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="link"
        position="absolute"
        color={"whiteAlpha.700"}
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        backgroundColor={"blackAlpha.300"}
        _hover={{
          background: "blackAlpha.500",
          color: "teal.800",
        }}
      >
        <BiLeftArrowAlt size="55px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="link"
        position="absolute"
        color={"whiteAlpha.700"}
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        backgroundColor={"blackAlpha.300"}
        _hover={{
          background: "blackAlpha.500",
          color: "teal.800",
        }}
      >
        <BiRightArrowAlt size="55px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        { path !== "landing" ? cards.map((card, index) => (
          <Box
            key={index}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
            boxSize={"600px"}
          >
            {card.number === 2 ? (
              <Button background={"pink.200"} variant={"solid"} _hover={{background:"red.500"}} position="absolute" margin="45px">
                Conocé los cursos
              </Button>
            ) : card.number === 3 ? (
              <Button background={"green.400"} variant={"solid"} _hover={{background:"green.500"}} position="absolute" margin="45px">
                ¡Explorá la tienda!
              </Button>
            ) : (
              <Button background={"cyan.300"} variant={"solid"} _hover={{background:"cyan.500"}} position="absolute" margin="45px">
                Novedades
              </Button>
            )}

            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >

              </Stack>
            </Container>
          </Box>
        )) 
        : cardsLanding.map((card, index) => (
          <Box
            key={index}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
            h="24em"
            borderRadius={".5rem"}
            border={"2px solid pink"}
          >

            <Container w="16rem"
             height="600px" position="relative">
              <Stack
                spacing={6}
                w={"10rem"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >

              </Stack>
            </Container>
          </Box>
        )) 
        }
      </Slider>
    </Box>
  );
}