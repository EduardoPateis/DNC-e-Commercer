import React from 'react';
import './index.scss'
import { Link } from 'react-router-dom';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import ProductsCard from '../../components/ProductsCard/ProductsCard';
import AdvertCard from '../../components/AdvertCard/AdvertCard';
import Footer from '../../components/Footer/Footer';




const Home = ({ data }) => {
    return (
        <div className="home">
            <div className='home__header'>
                <HeaderMenu />
            </div>
            <div className='home__AdvertCard'>
                <AdvertCard />
            </div>

            <div className="home__products">
                {
                    data.map(product => 
                        (<ProductsCard key={product.id} data={product} />))
                }
            </div>
           <div className="home__footer">
            <Footer />
           </div>
        </div>
    )
};

export default Home;
