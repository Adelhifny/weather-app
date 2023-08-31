import React, { useState } from "react";
import useGetNews from "../../useGetNews";
import "./News.css"
import NewsCard from "./NewsCard";
import liveIcon from "../../assets/icons8-live-48.png" 
// 278890ad57504e20b67f4a46dbe12d55
function News() {
    const [news,country] = useGetNews();
    if(Object.keys(news).length){
        const trend = news.articles[0];
        const nowDate = new Date(Date.now());
        let trendDate;
        const date = new Date(trend.publishedAt);
        if(nowDate.getMonth() == date.getMonth()){
            trendDate = new Date(Date.now() - date).getDate() + " day";
        }else if(nowDate.getUTCDate() == date.getUTCDate()){
            trendDate = new Date(Date.now() - date).getHours() + " hours";
        }else if(nowDate.getFullYear() == date.getFullYear()){
            trendDate = new Date(Date.now() - date).getMonth()  + " months";
        }else{
            trendDate = new Date(Date.now() - date).getMinutes() + " minutes";
        }
        return ( 
            <div className="preNews">
                <div className="trending">
                    <div className="title">
                        <h1>{trend.title}</h1>
                        <h5 style={{color:"gray"}}>updated {trendDate} ago</h5>
                        <ul className="tags">
                            <li><a href="#" id="fire"><img width="20px" src={liveIcon}/>Live</a></li>
                            <li><a href="#">Trending</a></li>
                            <li><a href="#">{country.countryName}</a></li>
                        </ul>
                    </div>
                    <div className="media">
                        <img id="img" src={trend.urlToImage} alt="" />
                    </div>
                    <div className="discp">
                        <p>{trend.content}</p>
                        <a href={trend.url} target="_blank" className="seeMore">see More <img id="arrow" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/long-arrow-right.png" alt="long-arrow-right"/></a>
                    </div>
                </div>
                <div className="news">
                    {news.articles.slice(1).map((child,index)=>{
                        return <NewsCard key={index} artical={child}/>
                    })}
                </div>
            </div>
         );
    }else{
        return(
            <div style={{height:"100%",backgroundColor:"#1e202b"}}>
                pending ---
            </div>
        );
    }
}

export default News;