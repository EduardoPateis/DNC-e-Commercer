
import './index.scss'
import { useState } from 'react';
import cart from '../../assets/shopping_cart_button.png';
import ModalCarrinho from '../ModalCarrinho/ModalCarrinho';

const ProductDetails = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const categoria = useState();

  return (
    <div className="product-detail">
      <div className="product-detail__left">
        <div className="product-detail__left__top">
          <img className="product-detail__left__top-logo" src={data.imgPathDetails} alt={data.title} />
          <p className="product-detail__left__top-title">{data.title} | {data.color[0]} </p>
        </div>
        <div className="product-detail__left__bottom">
          <h2 className='product-detail__left__bottom-title'>Descrição</h2>
          <p className='product-detail__left__bottom-description'>{data.description}</p>
        </div>
      </div>
      <div className="product-detail__right">
        <h1 className='product-detail__right__title'>{data.title} | {data.color[0]}</h1>
        <div className="product-detail__right__detail">
          <h2 className="product-detail__right__detail-price">{data.price}</h2>
          {
            data.category == 'console' &&
            <>
              <p className="product-detail__right__detail-color">


                <span className='product-detail__right__detail-color-title' >Cor:</span> {" "}
                {data.color.length === 1
                  ? data.color.map((color, index) => (
                    <span key={index}>{color}</span>
                  ))
                  : data.color.map((color, index) =>
                    index + 1 == data.color.length
                      ? <span key={index}>{color}</span>
                      : <span key={index}>{color}, </span>
                  )
                }

              </p>
              <div className="product-detail__right__cube-colorblock">
                {data.color.map((color, index) => (
                  <span
                    style={{

                      padding: "12px", backgroundColor: color,
                      borderRadius: "10px",
                      border: "1px solid black"
                    }} key={index}>
                  </span>
                ))}
              </div>

            </>

          }




        </div>




        <button onClick={() => setIsModalVisible(true)}
          className="product-detail__right__button">
          <img src={cart} alt="Cart" />
          Adicionar ao carrinho
        </button>
        {
          isModalVisible ? <ModalCarrinho onClose={() => setIsModalVisible(false)} data={data} />
            : null
        }
      </div>
    </div>
  )
}

export default ProductDetails