import React from 'react';
import Footer from '../../Share/Footer/Footer/Footer';
import BlogPost from '../BlogPost/BlogPost';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonilas/Testimonials';
import OurCapability from '../OutCapability/OurCapability';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <OurCapability></OurCapability>
            <Footer></Footer>
        </div>
    );
};

export default Home;