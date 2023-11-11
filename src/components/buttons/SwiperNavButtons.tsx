import { Box, IconButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";
export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <Box pl="0.16rem">
      <IconButton
        rounded="sm"
        icon={<FaChevronLeft />}
        borderColor="brand.primary"
        borderWidth="1px"
        color="brand.primary"
        bgColor="brand.whiteCream"
        aria-label="Prev"
        onClick={() => swiper.slidePrev()}
        mx="1"
      />
      <IconButton
        rounded="sm"
        icon={<FaChevronRight />}
        borderColor="brand.primary"
        borderWidth="1px"
        color="brand.primary"
        bgColor="brand.whiteCream"
        aria-label="Prev"
        onClick={() => swiper.slideNext()}
        mx="1"
      />
    </Box>
  );
};
