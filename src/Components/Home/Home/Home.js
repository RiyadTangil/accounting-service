import React, { lazy } from 'react';
import Footer from '../../Share/Footer/Footer/Footer';
import BlogPost from '../BlogPost/BlogPost';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Services from '../Services/Services';

import OurCapability from '../OutCapability/OurCapability';
import AboutUs from '../AboutUS/AboutUs';
import Ourservices from '../OurServices/Ourservices';
import Mytestimonials from './MyTestimonials/Mytestimonials';





const Home = () => {

   

    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <Services></Services>
            <Ourservices></Ourservices>
            <OurCapability></OurCapability>
    
            <Mytestimonials></Mytestimonials>
    
            <Footer></Footer>

        </div>
    );
};

export default Home;