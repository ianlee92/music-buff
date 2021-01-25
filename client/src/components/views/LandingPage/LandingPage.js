import React from 'react';
import CarouselPage from './Sections/CarouselPage';
import "./LandingPage.scss";

function LandingPage(props) {
    
    return (
        <div class="landing" style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            ,width: '100%', height: '100vh'
        }}>
            <CarouselPage/>
            
        </div>
    )
}

export default LandingPage