import React from 'react';
import "./link.scss";

function Link(props) {
    return (
        <div className='linkTab'>
              <h5 className="mobTitle">Project Links</h5>
            <div className="codeColumn">
                {/* <h5>Please note some sensitive code information will be hidden to protect project.</h5> */}
                <strong className="codeName">Welcome Page:</strong>
                <a target="_blank" href="https://github.com/ziggybaba1/">https://github.com/ziggybaba1/</a>
                
            </div>
            <div className="codeColumn">
                {/* <h5>Please note some sensitive code information will be hidden to protect project.</h5> */}
                <strong className="codeName">Administrative Page:</strong>
                <a target="_blank" href="https://github.com/ziggybaba1/">https://github.com/ziggybaba1/</a>
                
            </div>
        </div>
    );
}

export default Link;