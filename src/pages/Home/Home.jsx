import React from 'react';
import { About, Blog, Footer, Header, Intro, Testimonial, Work } from '../../component';
import "./home.scss";

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Intro />
            <About />
            <Work />
            <Testimonial />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;