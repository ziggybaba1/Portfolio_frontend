import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { baseUrl } from '../../env';
import "./blog.scss";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import { baseUrl, imageUrl } from '../../env';
import ContentLoader, { Facebook } from 'react-content-loader'

function Blog(props) {
    const [start,setStart]=useState(0);
    const [blog,setBlog]=useState([]);
    const [loading,setLoading]=useState(false);
    const [loader,setLoader]=useState([{},{},{},{}])
    useEffect(()=>{
        retrieveBlog(start);
    },[])

    const retrieveBlog=async(start)=>{
        try {
            setLoading(true);
            const{data}=await axios.get(baseUrl+"/blogs/"+start);
            setLoading(false);
            setBlog(data.length>0?data:[]);
        } catch (error) {
            setLoading(false);
        }
    }

    const MyFacebookLoader = () => <Facebook />

    return (
        <div id="activities" className='blog'>
           <div className="titleContainer">
                <h4 className="title">Actvities</h4>
                <div className="line"></div>
            </div>
       <div className="columnCotainer">
            <div className="rowItem">
            {blog.map((item,ik)=>(
               <div key={ik} className="columnItem">
               <img src={item.fullimage?imageUrl+item.fullimage?.url:"/img/testimonial.png"} alt="" className="postImage" />
               <div className="content">
               <Link to={"/blog/"}><span className="itemTitle">{item.title}</span></Link> 
                   <span className="descriptionBlog">{item.subtitle}</span>
                       <div className="postHolder">
                           <div className="titleCard">
                               <span className="textCard">{item.title[0]}</span>
                           </div>
                           <span className="textCard">{item.posted_by?.name}</span>
                       </div>
                    </div>
                </div>
               ))} 
               {loading&&
               <>
        {loader.map((item,ik)=>(
             <div key={ik} className="columnItem">
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
            <button disabled={props.loading} onClick={()=>props.loadMore()}  className="loadMore">
              {!props.loading&&<>Load More</>}
                 {props.loading&&  <CircularProgress color="inherit"/>}
            </button>
       </div>
        </div>
    );
}

export default Blog;