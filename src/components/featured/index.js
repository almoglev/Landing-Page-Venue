import React from 'react';
import Carrousel from './Carrousel';
import Timer from './timer';

const Featured = () => {
    return(
        <div className="feature_container">
            <Carrousel/>
            <div className="artist_name">
                <div className="wrapper">Coldplay</div>
            </div>
            <Timer/>
        </div>
    )
}

export default Featured;