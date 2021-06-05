import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../../images/wilson.png';
import './Blogs.css'


const blogData = [
    {
        title: 'To ensure about your business calculation meet with us',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Profesors. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
    {
        title: 'Always remember no business can be without making account properly',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Profesors. Sinthia',
        authorImg: wilson,
        date: '23 April 2019'
    },
    {
        title: 'To ensure about your business calculation meet with us',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Profesors. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
]

const Blogs = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-light text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5">
                    <div className="row">
                        {
                            blogData.map(blog => <BlogPost blog={blog} key={blog.title} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;