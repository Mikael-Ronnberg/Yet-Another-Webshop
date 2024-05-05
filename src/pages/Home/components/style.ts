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
  lineHeight: "4rem",
  color: "brand.darkText",
};

export const bannerTextStyles: TextProps = {
  fontSize: { base: "1xl", md: "2xl", lg: "3xl" },
  color: "brand.darkText",
};

export const slideSettings: SwiperOptions = {
  modules: [Navigation, Autoplay],
  spaceBetween: 10,
  slidesPerView: "auto",
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};

export const slideStyles: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: "350px",
};
