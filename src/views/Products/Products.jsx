

import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import ProductDetails from '../../components/ProductDetail/ProductDetails';
import './index.scss'

const Products = ({ data }) => {

    const {productId} = useParams();
    const selecedProduct = data.find(product => product.id == productId);



    return (
        <div className="products">
            <div className="products__header">
                <HeaderMenu />
            </div>
            <div className="products__details">
                <ProductDetails data={selecedProduct} />
            </div>

            <div className="products__footer">
                <Footer />
            </div>


        </div>
    );
};

export default Products;