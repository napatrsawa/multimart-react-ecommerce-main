import { Container, Row } from "react-bootstrap";
import ProductCard2 from "./ProductCard2/ProductCard2";
import "./homeslide.css";
const Section = ({ title, bgColor, productItems }) => {
  return (
    <section className="bg">
      <Container>
        <div className="heading">
          <h1>{title}</h1>
        </div>
        <Row className="justify-content-center">
          {productItems.map((productItem) => {
            return (
              <ProductCard2
                key={productItem.id}
                title={title}
                productItem={productItem}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Section;
