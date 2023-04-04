import React from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ModalPayment from '../ModalPayment/ModalPayment';

const ModalCarrinho = ({ onClose = () => { }, data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="modal">
      <div className="modal__container">
        <button onClick={onClose} className="close"></button>
        <div className="modal__container--main">
          <div className="modal__container--main-left">
            <div className="modal__container--main-left-img">
              <img src={data.imgPathDetails} alt={data.title} />
            </div>

          </div>
          <div className="modal__container--main-right">
            <div className="modal__container--main__info">
              <h3>Meu Carrinho</h3>
              <p className="modal__container--main__info-title">{data.title}</p>
              <h2>{data.price}</h2>

              {
                data.category === 'console'
                  ?
                  <>
                    <p className="modal__container--main-right__detail-color">


                      <span className='modal__container--main-right__detail-color-title' >Cor:</span> {" "}
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
                    <div className="right__cube-colorblock">
                      {data.color.map((color, index) => (
                        <span
                          style={{

                            padding: "15px", backgroundColor: color,
                            borderRadius: "8px",
                            border: "1px solid black",
                          }} key={index}>
                        </span>
                      ))}
                    </div>

                  </>
                  : null
              }

            </div>
            <div className="modal__container__product-buttons">
              <button className="continuar"><Link to='/home'>Continuar Comprando</Link></button>
              <button onClick={() => setIsModalVisible(true)} className="finalizar">Finalizar Compra</button>
            </div>
            {
              isModalVisible ?
                <ModalPayment onClose={() => setIsModalVisible(false)} data={data} />
                : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCarrinho