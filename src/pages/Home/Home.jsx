import React, { useEffect, useState } from 'react';
import { About, Blog, Footer, Header, Intro, Testimonial, Work } from '../../component';
import "./home.scss";
import axios from "axios";
import { baseUrl } from '../../env';

const Home = () => {
   

    return (
        <div className='home'>
            <Header menu="home"/>
            <Intro />
            <About />
            <Work header={true}/>
            <Testimonial  />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;