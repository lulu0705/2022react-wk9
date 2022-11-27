import { Row, Col } from "antd";
import ProductItem from "./ProductItem";
// import NavBar from "./NavBar";


export default function ProductList({cards}) {
  return (
    <Row 
      gutter={[32, 32]}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
    {cards.map(card => (
        <Col 
          key={card.id} 
          // sm={{ span: 12 }} 
          // lg={{ span: 8 }}
          // xl={{ span: 6 }}
          // xxl={{ span: 4 }}

          // style={{
          //   alignItems: 'center',
          //   justifyContent: 'center',
          //   alignSelf: 'center',
          // }}
        >
          <ProductItem card={card}/>
        </Col>
      ))}
    </Row>
  );
}

