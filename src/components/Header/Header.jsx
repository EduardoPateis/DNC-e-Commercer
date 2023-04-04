
import logo from "../../assets/logo.png";
import "./index.scss"

const Header = () => {
    return(
        <div className="header">
           <img className="header__img" src={logo} alt="Logo dinamica DNC" />
        </div>
    );
};

export default Header;
