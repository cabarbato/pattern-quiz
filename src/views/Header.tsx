import logo from "../assets/images/logo.svg";
import "./Header.scss";

const Header = () => <>
    <header className="container header">
        <div className="grid">
            <div className="content">
                <img src={logo} alt="Spoonflower" />
            </div>
        </div>
    </header>
    <hr />
</>

export default Header;