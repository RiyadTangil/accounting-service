import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import AOS from "aos";
import "aos/dist/aos.css";

const BlogPost = (props) => {
    const { title, description, author, authorImg, date } = props.blog;

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    const [flipped, set] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div className="col-md-4">
            <div  data-aos={"fade-up"} className="card  shadow-sm">
                <div className="card-header d-flex  align-items-center">
                    <img className="mx-3" src={authorImg} alt="" width="60" />
                    <div>
                        <h6 style={{color:"#DAAD86"}}>{author}</h6>
                        <p className="m-0">{date}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5>{title}</h5>
                    <p className="card-text text-secondary mt-4">{description}</p>
                    <span><FontAwesomeIcon  icon={faLongArrowAltRight} />
                    </span>

                </div>

            </div>
        </div>
    );
};

export default BlogPost;