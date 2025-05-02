import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import "../components/homeslide.css";
const Home = () => {
  const bestSales = products.filter((item) => item.category === "material");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      {/* <Wrapper /> */}
      <Section
        title="Best Seller"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Section2 title="Material" bgColor="#f6f9fc" productItems={bestSales} />
    </Fragment>
  );
};

export default Home;
