import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcNext, FcPrevious } from 'react-icons/fc'
import './slider.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="next"
            style={{fontSize:'40px' }}
            onClick={onClick}
        >
            <FcNext size={30} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="prev"
            style={{fontSize:'40px' }}
            onClick={onClick}
        >
            <FcPrevious size={30} />
        </div>
    );
}
function SliderComp({ images }) {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    console.log(images)
    return (
        <div className='main_slider_div'>
            <Slider {...settings}>
                {
                    images?.map((img, index) => {
                        return (
                            <div key={index} className="slider_img_div">
                                <img src={img} alt="" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default SliderComp;