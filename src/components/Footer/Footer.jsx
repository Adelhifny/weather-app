import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faGooglePlus,faSquarePinterest} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return ( 
        <footer className="footer">
            <div className="contactUs">
                <div className="email">
                    <input id="subInput" type="text" placeholder="Enter your email to subscribe..."/>
                    <button id="emailbtn" className="searchBtn">Subscribe</button>
                </div>
                <ul className="mediaLinks">
                    <li><a><FontAwesomeIcon icon={faFacebookF}size="lg"color="#009ad8"/></a></li>
                    <li><a><FontAwesomeIcon icon={faTwitter}size="lg"color="#009ad8"/></a></li>
                    <li><a><FontAwesomeIcon icon={faGooglePlus}size="lg"color="#009ad8"/></a></li>
                    <li><a><FontAwesomeIcon icon={faSquarePinterest} size="lg"color="#009ad8"/></a></li>
                </ul>
            </div>
            <p>Copyright {new Date(Date.now()).getFullYear()} weather inc. Designed by Adel. All rights reserved</p>
        </footer>
     );
}

export default Footer;