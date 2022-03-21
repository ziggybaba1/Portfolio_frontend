import React from 'react';
import "./technology.scss";

function Technology(props) {
    return (
        <div className='technology'>
             <h5 className="mobTitle">Technology</h5>
            <div className="itemContainerTechnology">
                <img src="/img/laravel.png" alt="" className="sourceTech" />
                <strong className="techName">PHP/Laravel</strong>
                <strong className="techName">API Design</strong>
            </div>
            <div className="itemContainerTechnology">
                <img src="/img/mysql.jpeg" alt="" className="sourceTech" />
                <strong className="techName">MySql</strong>
                <strong className="techName">Database Design</strong>
            </div>
            <div className="itemContainerTechnology">
                <img src="/img/react.png" alt="" className="sourceTech" />
                <strong className="techName">React.js</strong>
                <strong className="techName">Frontend Design</strong>
            </div>
        </div>
    );
}

export default Technology;