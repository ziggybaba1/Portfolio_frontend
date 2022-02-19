import React from 'react';
import { Link } from 'react-router-dom';
// import { baseUrl } from '../../env';
import "./blog.scss";
import CircularProgress from '@mui/material/CircularProgress';

function Blog(props) {
    return (
        <div id="blog" className='blog'>
           <div className="titleContainer">
                <h4 className="title">Blog Post</h4>
                <div className="line"></div>
            </div>
       <div className="columnCotainer">
            <div className="rowItem">
            {/* {props.blog?props.blog.map((item,ik)=>( */}
               <div  className="columnItem">
               <img src={"/img/testimonial.png"} alt="" className="postImage" />
               <div className="content">
               <Link to={"/blog/"}><span className="itemTitle">How to Become an Influencer: 7 Easy Steps to Becoming a Social Media Influencer Today</span></Link> 
                   <span className="description">
Influencer marketing is a hot marketing phenomenon that everyone is talking about. It has become a mainstream marketing tactic and is no longer limited to a select few brands or agencies.</span>
                       <div className="postHolder">
                           <div className="titleCard">
                               <span className="textCard">H</span>
                           </div>
                           <span className="textCard">Adejugbagbe Oluwaseyi</span>
                       </div>
                    </div>
                </div>

                <div  className="columnItem">
               <img src={"/img/testimonial.png"} alt="" className="postImage" />
               <div className="content">
               <Link to={"/blog/"}><span className="itemTitle">How to Become an Influencer: 7 Easy Steps to Becoming a Social Media Influencer Today</span></Link> 
                   <span className="description">
Influencer marketing is a hot marketing phenomenon that everyone is talking about. It has become a mainstream marketing tactic and is no longer limited to a select few brands or agencies.</span>
                       <div className="postHolder">
                           <div className="titleCard">
                               <span className="textCard">H</span>
                           </div>
                           <span className="textCard">Adejugbagbe Oluwaseyi</span>
                       </div>
                    </div>
                </div>

                <div  className="columnItem">
               <img src={"/img/testimonial.png"} alt="" className="postImage" />
               <div className="content">
               <Link to={"/blog/"}><span className="itemTitle">How to Become an Influencer: 7 Easy Steps to Becoming a Social Media Influencer Today</span></Link> 
                   <span className="description">
Influencer marketing is a hot marketing phenomenon that everyone is talking about. It has become a mainstream marketing tactic and is no longer limited to a select few brands or agencies.</span>
                       <div className="postHolder">
                           <div className="titleCard">
                               <span className="textCard">H</span>
                           </div>
                           <span className="textCard">Adejugbagbe Oluwaseyi</span>
                       </div>
                    </div>
                </div>
                <div  className="columnItem">
               <img src={"/img/testimonial.png"} alt="" className="postImage" />
               <div className="content">
               <Link to={"/blog/"}><span className="itemTitle">How to Become an Influencer: 7 Easy Steps to Becoming a Social Media Influencer Today</span></Link> 
                   <span className="description">
Influencer marketing is a hot marketing phenomenon that everyone is talking about. It has become a mainstream marketing tactic and is no longer limited to a select few brands or agencies.</span>
                       <div className="postHolder">
                           <div className="titleCard">
                               <span className="textCard">H</span>
                           </div>
                           <span className="textCard">Adejugbagbe Oluwaseyi</span>
                       </div>
                    </div>
                </div>
               {/* )):[]}  */}
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