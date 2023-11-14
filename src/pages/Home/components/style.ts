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
  size: { base: "xl", lg: "3xl" },
  textAlign: "center",
  lineHeight: "4rem",
  color: "brand.whiteCream",
  p: "2rem",
};

export const bannerTextStyles: TextProps = {
  fontSize: { base: "3xl", lg: "4lg" },
  textAlign: "center",
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
