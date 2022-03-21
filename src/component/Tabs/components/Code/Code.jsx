import React from 'react';
import "./code.scss";

function Code(props) {
    return (
        <div className='code'>
              <h5 className="mobTitle">Code Repository</h5>
            <div className="codeColumn">
                <h5>Please note some sensitive code information will be hidden to protect project.</h5>
                <strong className="codeName">Admin Code:</strong>
                <a target="_blank" href="https://github.com/ziggybaba1/">https://github.com/ziggybaba1/</a>
            </div>
            <div className="codeColumn">
                <strong className="codeName">Front-end Code:</strong>
                <a target="_blank" href="https://github.com/ziggybaba1/">https://github.com/ziggybaba1/</a>
            </div>
            <div className="codeColumn">
                <strong className="codeName">Mobile App Code:</strong>
                <a target="_blank" href="https://github.com/ziggybaba1/">https://github.com/ziggybaba1/</a>
            </div>
        </div>
    );
}

export default Code;