import React from 'react';
import { Footer, Header, Tabs, Work } from '../../component';
import "./project.scss";

function Project(props) {
    return (
        <div className='project'>
            <Header />
            <Work header={false} title={"NissAGro Mobile App Development"}  />
            <Tabs />
            <Footer />
        </div>
    );
}

export default Project;