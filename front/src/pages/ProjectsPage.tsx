import React from "react";
import Projects from '../components/projects';
import  './styles/Page.css';
import Preloader from "../components/Preloader";
import { useState, useEffect } from 'react';

const ProjectsPage : React.FC =()=>{
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);
    return(
        <div className="mar">
            {isLoading ? <Preloader /> : null}
            <Projects />
        </div>
    );
};

export default ProjectsPage;
//https://s3.ap-northeast-1.wasabisys.com/voltixteam/img11.jpg?AWSAccessKeyId=Z2UAWEK8UJ31HENFKN8H&Expires=1698768792&Signature=kFZ7CnwdPWPFbxSNfJowsbynNsI%3D