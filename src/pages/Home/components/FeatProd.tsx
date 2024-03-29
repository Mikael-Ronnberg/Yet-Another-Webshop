import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../../../components/cards/ProductCard";
import "swiper/css";
import { slideSettings, slideStyles } from "./style";
import { SwiperNavButtons } from "../../../components/buttons/SwiperNavButtons";
import { SectionHeading } from "../../../components/sectionheading/SectionHeading";
import { Box } from "@chakra-ui/react";
import { IProduct } from "../../../models/Interfaces";

interface IFeatProdProps {
  title: string;
  products: IProduct[];
}

export const FeatProd = ({ title, products }: IFeatProdProps) => {
  return (
    <>
      <Box
        w={{ base: "100%", lg: "100%" }}
        mx="auto"
        p={{ base: "1rem", lg: "2rem" }}
      >
        <SectionHeading title={title} />
        <Swiper {...slideSettings}>
          {products.map((product) => (
            <SwiperSlide key={product.id} style={slideStyles}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </Box>
    </>
  );
};
