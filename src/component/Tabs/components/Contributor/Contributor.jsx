import React from 'react';
import "./contributor.scss";

function Contributor(props) {
    return (
        <div className='contributor'>
              <h5 className="mobTitle">Project Contributor</h5>
              <div className="rowContainer">
                  <img src="/img/user.png" alt="" className="contImage" />
                  <strong className="contLabel">Adejugbagbe Seyi</strong>
              </div>
        </div>
    );
}

export default Contributor;