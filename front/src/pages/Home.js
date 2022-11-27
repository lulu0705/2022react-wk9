import { Layout } from "antd";
import { useState } from "react";
import AppHeader from "../components/Header";
import ProductList from "../components/ProductList";
import AppFooter from "../components/Footer";
// import products from "../json/products.json";
import cards from "../json/card.json";
import NavBar from "../components/NavBar";
// import HamMenu from "../components/HamMenu";
import { useCards } from '../react-query';
import { useParams } from 'react-router-dom';


const { Header, Content, Footer } = Layout;

function Home(){
    const [open, setopen] = useState(false);


    const { categoryName } = useParams();
    const url = categoryName || "";
    const { data, isLoading } = useCards(url);
    const cards = data?.data || [];


    return(
        <Layout className="container main-layout">
        <NavBar open = {open} />
        <Layout>
        {/* <HamMenu
          onClick={() => setopen(!open)}
          open={open}
        /> */}
            <Header className="layout-header">
                <AppHeader />
            </Header> 
            <Content className="layout-content">
                {/* <ProductList products={products}/> */}
                <ProductList cards={cards}/>
            </Content>
            <Footer className="layout-footer">
                <AppFooter />
            </Footer>
            </Layout>
        </Layout>
    );
}

export default Home;