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
                <img src= "https://images.unsplash.com/photo-1611613272618-e25379b0063a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=932&q=80"/>
            </div>
            <div class="column-landing-right">
                
            </div>
            
        </div>
    )
}

export default LandingPage