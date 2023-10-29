import { Box, IconButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";
export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <Box>
      <IconButton
        rounded="lg"
        icon={<FaChevronLeft />}
        borderColor="blue.400"
        borderWidth="1px"
        color="grey"
        bgColor="white"
        aria-label="Prev"
        onClick={() => swiper.slidePrev()}
        mx="1"
      />
      <IconButton
        rounded="lg"
        icon={<FaChevronRight />}
        borderColor="blue.400"
        borderWidth="1px"
        color="grey"
        bgColor="white"
        aria-label="Prev"
        onClick={() => swiper.slideNext()}
        mx="1"
      />
    </Box>
  );
};
