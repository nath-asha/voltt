import HomeService from "../components/HomeService";
import HomeProject from "../components/HomeProject";
import HomeTestimonial from "../components/HomeTestimonial";
import Preloader from "../components/Preloader";
import React, { useState, useEffect } from 'react';
import  './styles/Page.css';
const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);
      const s3ImageURL = "https://s3.ap-northeast-1.wasabisys.com/voltixteam/img2.jpg?AWSAccessKeyId=Z2UAWEK8UJ31HENFKN8H&Expires=1698767554&Signature=T26SIL%2FY3rvdz9zouETFQGMGVyc%3D";
    return ( 
        <div className="container one mar">
            {isLoading ? <Preloader /> : null}
            <div>
        <img src={s3ImageURL} alt="Background Image" />
      </div>
            <div className="services">
                <HomeService />
                <HomeProject />
                <HomeTestimonial />
            </div>
        </div>
     );
}
 
export default HomePage;