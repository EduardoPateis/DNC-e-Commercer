import "./index.scss"
import logo from "../../assets/logofooter.png"

import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__geral">
        <img className="footer__img" src={logo} alt="DNC Logo branco" />
        <p className="footer__p">Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas.
        <span className="footer__span"> Para mais informações</span>, entre em contato: (011) 1111-2222</p>
      </div>
      <div className="footer__jaba">
        ©1981–2023 by Edu "The Dangerous" contributors. Content available under a Creative Commons license.
      </div>
      
      
    </footer>
  )
}

export default Footer