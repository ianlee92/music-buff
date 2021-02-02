import React, {useState, useEffect} from 'react';
import CarouselPage from './Sections/CarouselPage';
import "./LandingPage.scss";
import axios from 'axios';

function LandingPage(props) {

    return (
        <div className="landing-division-background" style={{ width:'100%', margin: '3rem auto'}}>
            <div className="column-landing-left"></div>
            <div className="column-landing-center" style={{textAlign:'center'}}>
                {/* <CarouselPage/> */}
                <img style={{width:'100%'}} alt="img" src="https://images.unsplash.com/photo-1502773860571-211a597d6e4b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"/>
            </div>
            <div className="column-landing-right"></div>
        </div>
    )
}

export default LandingPage