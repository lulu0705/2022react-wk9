import { Row, Col, Card } from "antd";
import { useState } from "react";
import { Select } from 'antd';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
const { Option } = Select

function ProductDetail({ card, persons }) {
  const [qty, setQty] = useState(card.countInStock > 0 ? 1 : 0);
  
    return (
    <Row gutter={[32, 32]}>

      {/* <Col lg={{ span:8, offset:2 }} > A65179 opacity: 0.4*/}
      {/* <Col lg={{ span:14, offset:2 }} style={{backgroundColor:'#8C6875',borderRadius:10,opacity:0.6}}> */}
      <Col lg={{ span:20, offset:2 }} style={{backgroundColor:'#8C6875',borderRadius:10,opacity:0.6}}>


      <div className="product-info-detail">
        <h2 className="title product-category">
            {card.title}
        </h2>
        {/* <img 
          alt={card.title} 
          className="product-image" 
          src={card.image} 
        />  */}
        <h1 className="name product-name">
            By {card.author}
        </h1>  
        <p className="description product-description">
            {card.description}
        </p>

        <div className="product-icon">
          <FavoriteBorderIcon className="icon" fontSize="medium" />
          <ChatBubbleOutlineIcon className="icon"/>

          <div className="product-iconNumber">
            <p className="number">3</p>
            <p className="number">2</p>
          </div>
        </div>



      </div>
      </Col>



      {/* <Col lg={{ span:12 }}> b5aec4*/}

      {/* 右邊資訊欄
      <Col lg={{ span:6, offset:1  }} style={{backgroundColor:'#F5F5F8',borderRadius:10}}>


      <div className="">
      <hr className="footer-line" style={{width: '100%' , opacity:0.4}}/>
        <p className="product-comment">
            {card.content}<b>...</b>
        </p>

        <div className="card-more">
            <p className="card-link"><b><u>More</u></b></p>
        </div>

        <h1 className="product-name card-more" style={{fontWeight: 'bold',color:'#75759F'}}>
            By {card.author}
        </h1>  
        
      </div>
      <hr className="footer-line" style={{width: '100%' , opacity:0.4}}/>
      </Col> */}









      {/* {persons.map(person => (
        <Col 
          key={person.id} 
        >
        <div className="product-info-detail">
        <p className="product-description description">
            {person.comment}...
        </p>

        <div className="card-more">
            <p className="card-link"><b><u>More</u></b></p>
        </div>

        <h1 className="product-name product-name-large card-more">
            By {person.name}
        </h1>  
      </div>
        </Col>
      ))} */}



      {/* {persons.map(person => (
        <div className="product-info-detail">
        <p className="product-name product-description description">
            {person.name}
        </p>

        <h1 className="description">
            {person.resume}
        </h1>  
      </div>
      ))} */}



      


    </Row>
    );
}

export default ProductDetail;