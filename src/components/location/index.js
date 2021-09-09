import React from 'react';

const Location = () =>{
    return(
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.665740275987!2d-0.2818063848561169!3d51.55602801496839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761181d57a876d%3A0xa64f9f185de8e097!2sWembley%20Stadium!5e0!3m2!1sen!2sil!4v1631197387045!5m2!1sen!2sil" 
                    width="100%" 
                    height="500px"
                    frameBorder="0"
                    title="gglemaps"
                    allowfullscreen
            ></iframe>

            <div className="location_tag">
                <div>
                    location
                </div>
            </div>
        </div>
    )
}

export default Location;