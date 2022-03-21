import { ArrowLeft, ArrowRight, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import "./work.scss";
import {isMobile} from 'react-device-detect';
import { Link } from 'react-router-dom';
import { baseUrl, imageUrl } from '../../env';
import axios from "axios";
import ContentLoader, { Facebook } from 'react-content-loader'

function Work(props) {
    const [scroll,setScroll]=useState(0);
    const [project,setProject]=useState([]);
    const [loading,setLoading]=useState(false);
    const [loader,setLoader]=useState([{},{},{},{}])
    const scrollLeft=()=>{
      if (isMobile) {
        document.getElementById('section').scrollLeft -= 270;
      }
      else{
        document.getElementById('section').scrollLeft -= 50;
      }
    }
    const scrollRight=()=>{
      if (isMobile) {
        document.getElementById('section').scrollLeft += 270;
      }
      else{
        document.getElementById('section').scrollLeft += 50;
      }
        
    }

    

    useEffect(()=>{
        retrieveProject();
    },[])

    const retrieveProject=async()=>{
        try {
            setLoading(true);
            const{data}=await axios.get(baseUrl+"/projects");
            setLoading(false);
            setProject(data.data.length>0?data.data:[]);
        } catch (error) {
            setLoading(false);
        }
    }

    return (
        <div id="work" className='work'>
             <div className="titleContainer">
                <h4 className="title">{props.title?props.title:"Latest Work"}</h4>
                <div className="line"></div>
            </div>
            <div className="widthContainer">
                <KeyboardArrowLeft onClick={()=>scrollLeft()} className='icon' />
                <div id="section" className="scrollContainer">
                    {project.map((item,ik)=>(
                <div key={ik} className="itemContainer">
                <div className="mobileMockupContainer">
                    <div style={{backgroundImage: `url(${imageUrl+item.thumbnail})`}} className="contentContainer">
                        <div className="speaker"></div>
                        {/* <div className="mic"></div> */}
                        {/* <img src={item.thumbnail?imageUrl+item.thumbnail:""} alt="" className="screenShot" /> */}
                    </div>
                </div>
                {props.header&&
                <div className="titleContainer">
                    <span className="title">{item.subtitle}</span>
                    <Link to={"/project/"+item.uuid} className="heading"><strong>{item.name}</strong></Link>
                </div>}
                </div>
                    ))}
                     {loading&&
               <>
        {loader.map((item,ik)=>(
             <div key={ik} className="itemContainer">
          <ContentLoader 
    speed={2}
    width={250}
    height={260}
    viewBox="0 0 200 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#fc7900"
    {...props}
  >
    <circle cx="25" cy="221" r="15" /> 
    <rect x="46" y="209" rx="2" ry="2" width="140" height="8" /> 
    <rect x="46" y="224" rx="2" ry="2" width="140" height="4" /> 
    <rect x="10" y="4" rx="2" ry="2" width="328" height="180" />
  </ContentLoader>
           </div>
        ))}   
                  </>
                }
                </div>
                <KeyboardArrowRight onClick={()=>scrollRight()} className='icon' />
            </div>
        </div>
    );
}

export default Work;