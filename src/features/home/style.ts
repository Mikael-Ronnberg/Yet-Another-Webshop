import { FlexProps, HeadingProps, TextProps } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export const bannerStyles: FlexProps = {
  justify: "center",
  align: "center",
  gap: 2,
  flexDir: { base: "column", lg: "row" },
  w: { base: "100%", lg: "90%" },
  mx: "auto",
  p: "2rem",
};

export const bannerHeadingStyles: HeadingProps = {
  size: { base: "xl", lg: "3xl" },
  lineHeight: "4rem",
  color: "black",
};

export const bannerTextStyles: TextProps = {
  fontSize: { base: "3xl", lg: "4lg" },
  py: "1rem",
  maxW: "600px",
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
