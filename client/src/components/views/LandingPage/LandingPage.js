import React from 'react';
import CarouselPage from './Sections/CarouselPage';
import "./LandingPage.scss";

function LandingPage(props) {
    
    return (
        
        <div class="landing-division-background" style={{ width:'100%', margin: '3rem auto'}}>
            <div class="column-landing-left">
                
            </div>
            <div class="column-landing-center" style={{textAlign:'center'}}>
                {/* <CarouselPage/> */}
                <img style={{width:'100%'}} src="https://static.dezeen.com/uploads/2020/12/pantone-colour-2021-illuminating-ultimate-gray-design-news_dezeen_sq-1.jpg"/>
            </div>
            <div class="column-landing-right">
                
            </div>
            
        </div>
    )
}

export default LandingPage