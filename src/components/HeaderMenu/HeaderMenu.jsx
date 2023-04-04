import React from 'react'
import "./index.scss"
import logo from "../../assets/logo.png";
import lupa from "../../assets/lupa.png"
import cartlog from "../../assets/carrinho.png"; 


const HeaderMenu = () => {
  return (
    <header className="header-menu">
      <div className='header-menu__inicial'>
        <img className="header-menu__logo" src={logo} alt="Logo dinamica DNC" />
        <div className="header-menu__input">
          <img className="header-menu__lupa" src={lupa} alt="Lupa de pesquisa" />
          <input placeholder='O que está procurando?'  className='header-menu__pesquisa' type="text" />
        </div>
        <img src={cartlog} alt="carrinho de compras" />    

      </div>
      <div >
        <ul className='header-menu__ul'>
          <li className='header-menu__novidades'>Novidades</li>
          <li>Jogos</li>
          <li>Video Games</li>
          <li>Mesa Gamer</li>
          <li>Promoções</li>
          <li>Atendimento</li>
        </ul>
      </div>

    </header>
  )
}

export default HeaderMenu