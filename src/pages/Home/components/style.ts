import { FlexProps, HeadingProps, TextProps } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export const bannerStyles: FlexProps = {
  justify: "center",
  align: "center",
  mx: "auto",
  flexDir: "column",
};

export const bannerHeadingStyles: HeadingProps = {
  size: { base: "2xl", md: "3xl", lg: "4xl" },
  textAlign: "center",
  lineHeight: "4rem",
  mt: { base: "2rem", md: "1.5rem", lg: "0" },
  mb: { base: "0", md: "0", lg: "4rem" },
  color: "brand.whiteCream",
  p: { base: "1rem", md: "1rem", lg: "2rem" },
};

export const bannerTextStyles: TextProps = {
  fontSize: { base: "1xl", md: "2xl", lg: "3xl" },
  textAlign: "center",
  mb: { base: "2rem", lg: "0" },
  mt: { base: "1rem", md: "0.5rem", lg: "4rem" },
  color: "brand.whiteCream",
  bgColor: "brand.primaryDark",
};

export const slideSettings: SwiperOptions = {
  modules: [Navigation, Autoplay],
  spaceBetween: 10,
  slidesPerView: "auto",
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
};

export const slideStyles: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: "350px",
};
