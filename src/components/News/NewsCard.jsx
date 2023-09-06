import "./News.css"
import imgPng from "../../assets/images/pngegg.png" 

function NewsCard({artical}) {
    return ( 
        <a href={artical.url} className="card"target="_blank">
            <div className="cardHead">
                <img src={artical.urlToImage !== null?artical.urlToImage:imgPng} alt="" width="140"/>
                <div className="mewsCardContent">
                    <h4>{artical.title}</h4>
                    <h5>Source: {artical.source.name}</h5>
                </div>
            </div>            
        </a>
     );
}

export default NewsCard;