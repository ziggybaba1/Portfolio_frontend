import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import "./testimonial.scss";
import {isMobile} from 'react-device-detect';
import axios from "axios";
import { baseUrl, imageUrl } from '../../env';
import ContentLoader, { Facebook } from 'react-content-loader'

function Testimonial(props) {
    const [scroll,setScroll]=useState(0);
    const [testimony,setTestimony]=useState([]);
    const [loading,setLoading]=useState(false);
    const [loader,setLoader]=useState([{},{},{}]);
    const scrollLeft=()=>{
      if (isMobile) {
        document.getElementById('sectioner').scrollLeft -= 200;
      }
      else{
        document.getElementById('sectioner').scrollLeft -= 50;
      }
    }
    const scrollRight=()=>{
      if (isMobile) {
        document.getElementById('sectioner').scrollLeft += 200;
      }
      else{
        document.getElementById('sectioner').scrollLeft += 50;
      }
        
    }
    
    useEffect(()=>{
        retrieveTestimony();
    },[])

    const retrieveTestimony=async()=>{
        try {
            setLoading(true);
            const{data}=await axios.get(baseUrl+"/testimonies");
            setLoading(false);
            setTestimony(data.data.length>0?data.data:[]);
        } catch (error) {
            setLoading(false);
        }
    }
   
    return (
        <div id='testimony' className='testimonial'>
             <div className="titleContainer">
                <h4 className="title">Testimonial</h4>
                <div className="line"></div>
            </div>
            <div className="rowContainer">
            <KeyboardArrowLeft onClick={()=>scrollLeft()} className='icon' />
                <div id="sectioner" className="scrollTestimonial">
                    {testimony.map((item,it)=>(
                         <div key={it} className="cardTestimonial">
                         <span className="textTestifier">
                         {`“${item.description} ”`}
                         </span>
                         <div className="rowTitle">
                             <img src={item.url?imageUrl+item?.url:"/img/avatar.jpeg"} alt="" className="image" />
                             <div className="headerContainer">
                                 <span className="name">{item.name}</span>
                                 <span className="workplace">{item.title}</span>
                             </div>
                         </div>
                     </div>
                    ))}
                     {loading&&
               <>
        {loader.map((item,ik)=>(
           <div key={ik} className="cardTestimonial">
          <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#fc7900"
    {...props}
  >
    <rect x="54" y="126" rx="3" ry="3" width="88" height="6" /> 
    <rect x="55" y="143" rx="3" ry="3" width="52" height="6" /> 
    <rect x="-7" y="3" rx="3" ry="3" width="410" height="6" /> 
    <rect x="0" y="27" rx="3" ry="3" width="380" height="6" /> 
    <rect x="3" y="53" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="27" cy="140" r="20" />
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

export default Testimonial;