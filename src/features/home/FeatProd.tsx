import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../../components/productcard/ProductCard";
import "swiper/css";
import { slideSettings, slideStyles } from "./style";
import { SwiperNavButtons } from "../../components/buttons/SwiperNavButtons";
import { SectionHeading } from "../../components/sectionheading/SectionHeading";
import { Box } from "@chakra-ui/react";

interface IFeatProdProps {
  title: string;
}

export const FeatProd = ({ title }: IFeatProdProps) => {
  return (
    <>
      <Box w={{ base: "100%", lg: "90%" }} mx="auto" p="2rem">
        <SectionHeading title={title} />
        <Swiper {...slideSettings}>
          <SwiperSlide style={slideStyles}>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide style={slideStyles}>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide style={slideStyles}>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide style={slideStyles}>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide style={slideStyles}>
            <ProductCard />
          </SwiperSlide>
          <SwiperNavButtons />
        </Swiper>
      </Box>
    </>
  );
};
