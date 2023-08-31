import { Link } from "react-router-dom";
import "./header.css"
import { useState } from "react";
import logo from "../../assets/images/logo.png";

function Header() {
    const [selected,setSelected] = useState(1);
    return ( 
        <div className="header">
            <div className="icon">
                <Link to="/"><img src={logo} alt="" /></Link>
                <div className="name">
                    <h4>Compony</h4>
                    <h6>Name</h6>
                </div>
            </div>
            <ul className="links">
                <li><Link className={selected == 1?"active":"link"} onClick={()=>{setSelected(1)}}>Home</Link></li>
                <li><Link className={selected == 2?"active":"link"} onClick={()=>{setSelected(2)}}>Weather Data</Link></li>
                <li><Link to="/News" className={selected == 3?"active":"link"} onClick={()=>{setSelected(3)}}>News</Link></li>
            </ul>
        </div>
     );
}

export default Header;