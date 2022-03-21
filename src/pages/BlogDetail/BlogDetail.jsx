import React, { useEffect, useState } from 'react';
import "./blogdetail.scss"
import { Link, useParams } from 'react-router-dom';
import { baseUrl } from '../../env';
import {Helmet} from "react-helmet";
import {
    FacebookIcon,
    FacebookShareCount,
    HatenaShareCount,
    InstapaperIcon,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    TwitterIcon,
    VKShareCount,
    WhatsappIcon
  } from "react-share";
  import { Instagram } from '@mui/icons-material';

function BlogDetail(props) {
    const [getHome,setHome]=useState({});
    const {id}=useParams();
    return (
        <div className='blogdetail'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{getHome?.blog?.title}</title>
                <link rel="canonical" href={window.location} />
            <meta name="description" content={getHome?.blog?.subtitle}></meta>
            <meta name="keywords" content={getHome?.blog?.meta} ></meta>
            </Helmet>
             <Header data={getHome}/> 
             <div className="rowContainer">
               <div className="leftContainer">
                 <img src={baseUrl+getHome?.blog?.thumbnail} className='detailImage' alt="" />
               <h4 className="detailTitle">{getHome?.blog?.title}</h4>
               <div className='detailContent' dangerouslySetInnerHTML={{__html:`${getHome?.blog?.description}`}} />
              <div className="shareContainer">
                <span className="shareText">Share: </span>
                <a className='button' target="_blank" href={`whatsapp://send?text=*${getHome?.blog?.title}*\n${getHome?.blog?.subtitle}\n ${window.location.href}`} data-action="share/whatsapp/share"><WhatsappIcon size={32} round={true} /></a>
                <a className='button' target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href};src=NaijaBrandInfluencer&t=${getHome?.blog?.title}\n${getHome?.blog?.subtitle}`} ><FacebookIcon size={32} round={true} /></a>
                <a className='button' target="_blank" href={`https://twitter.com/intent/tweet?url=${window.location.href}&via=NaijaBrandInfluencer&text=${getHome?.blog?.title}\n${getHome?.blog?.subtitle}`} ><TwitterIcon size={32} round={true} /></a>
               
               {/* <button></button>
               <button><FacebookIcon size={32} round={true} /></button>
               <button><TwitterIcon size={32} round={true} /></button>
               <button><InstapaperIcon size={32} round={true} /></button> */}
              </div>
               </div>
               <div className="rightContainer">
               <h4 className="blogTitle">Blog Posts</h4>
               
               <div className="rowItem">
                 {getHome&&getHome.other?getHome.other.map((item,ik)=>(
                 <div key={ik} className="columnItem">
               <img src={baseUrl+item.thumbnail} alt="" className="postImage" />
               <div className="content">
               <Link to={"/blog/"+item.uuid}><span className="itemTitle">{item.title}</span></Link> 
                   <span className="description">{item.subtitle}</span>
                       <div className="postHolder">
                           <div className="titleCard">
                               <span className="textCard">{item.name[0]}</span>
                           </div>
                           <span className="textCard">{item.name}</span>
                       </div>
                    </div>
                </div>
                 )):[]} 
                 </div>
               </div>
             </div>
             <Footer />
        </div>
    );
}

export default BlogDetail;