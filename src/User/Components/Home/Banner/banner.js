import React, { Component } from 'react';
import './banner.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@brainhubeu/react-carousel/lib/style.css';
class Banner extends Component {    
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
          };
        return (
            <section id="banner">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <Slider {...settings}
                        >
                            <img alt={"BANNER NAME"} className="img-fluid" src="https://www.circleone.in/images/products_gallery_images/Business-Banner43.jpg" />
                            <img alt={"BANNER NAME"} className="img-fluid" src="https://about.canva.com/wp-content/uploads/sites/3/2015/02/Etsy-Banners.png" />
                            <img alt={"BANNER NAME"} className="img-fluid" src="https://cdn4.vectorstock.com/i/1000x1000/79/08/trendy-flat-geometric-banner-with-sales-best-offer-vector-23367908.jpg" />
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}



export default Banner;

