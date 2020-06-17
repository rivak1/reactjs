import React, { Component } from 'react';
import './books.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Menu, Dropdown} from "antd/lib";
import { Rate } from 'antd/lib';
const menu = (
    <Menu>
        <Menu.Item>New</Menu.Item>
        <Menu.Item>Minimum Rating</Menu.Item>
        <Menu.Item>Maximum Rating</Menu.Item>
        <Menu.Item>Price</Menu.Item>
        <Menu.Item>BestSeller</Menu.Item>
    </Menu>
  );
  
class Books extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            current:'all',
        }
    }
    handleClick = e => {
        console.log(e)
        this.setState({
            current: e.key
        });
    }
    getSlider = () => {
                var settings = {
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            infinite: false,
            focusOnSelect: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <Slider {...settings}>
            <div className="book_container">
                <a className="book_box">
                    <div className="book_image">
                        <img className="img-fluid" src="https://cdn-image.departures.com/sites/default/files/1551369896/raffles-city-chongqing-china-RAFFLESCITY0219.jpg" alt={"FEATURES RELEASE"}/>
                        <p className="bade">bestseller</p>
                    </div>
                    <div className="book_title">
                        <p>Mental Health and Neuroplasticity: Change your Brain</p>
                    </div>
                    <div className="book_author">
                        <p>Rivak Shah</p>
                    </div>
                    <div className="book_rating"><Rate disabled defaultValue={4.5} /> <b>4.6</b>(1221)</div>
                    <div className="d-flex justify-content-around mt-2 p-1">
                        <i id="heart" className="fa fa-heart" aria-hidden="true"></i>
                        <i id="cart" className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
            <div className="book_container">
                <a className="book_box">
                    <div className="book_image">
                        <img className="img-fluid" alt="dd" src="https://i.pinimg.com/originals/1d/50/ff/1d50ff2cc06520c61c57774b401fdd77.jpg" /> 
                        <p className="bade">bestseller</p>
                    </div>
                    <div className="book_title">
                        <p>Mental Health and Neuroplasticity: Change your Brain</p>
                    </div>
                    <div className="book_author">
                        <p>Rivak Shah</p>
                    </div>
                    <div className="book_rating"><Rate disabled defaultValue={4.5} /> <b>4.6</b>(1221)</div>
                    <div className="d-flex justify-content-around mt-2 p-1">
                        <i id="heart" className="fa fa-heart" aria-hidden="true"></i>
                        <i id="cart" className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
            <div className="book_container">
                <a className="book_box">
                    <div className="book_image">
                        <img className="img-fluid" alt="dd" src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&w=1000&q=80" />  
                        <p className="bade">bestseller</p>
                    </div>
                    <div className="book_title">
                        <p>Mental Health and Neuroplasticity: Change your Brain</p>
                    </div>
                    <div className="book_author">
                        <p>Rivak Shah</p>
                    </div>
                    <div className="book_rating"><Rate disabled defaultValue={4.5} /> <b>4.6</b>(1221)</div>
                    <div className="d-flex justify-content-around mt-2 p-1">
                        <i id="heart" className="fa fa-heart" aria-hidden="true"></i>
                        <i id="cart" className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
            <div className="book_container">
                <a className="book_box">
                    <div className="book_image">
                        <img className="img-fluid" alt="dd" src="https://img-a.udemycdn.com/course/240x135/1082488_d3dc_4.jpg" />
                        <p className="bade">bestseller</p>
                    </div>
                    <div className="book_title">
                        <p>Mental Health and Neuroplasticity: Change your Brain</p>
                    </div>
                    <div className="book_author">
                        <p>Rivak Shah</p>
                    </div>
                    <div className="book_rating"><Rate disabled defaultValue={4.5} /> <b>4.6</b>(1221)</div>
                    <div className="d-flex justify-content-around mt-2 p-1">
                        <i id="heart" className="fa fa-heart" aria-hidden="true"></i>
                        <i id="cart" className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
            <div className="book_container">
                <a className="book_box">
                    <div className="book_image">
                        <img className="img-fluid" alt="dd" src="https://img-a.udemycdn.com/course/240x135/1082488_d3dc_4.jpg" /> 
                        <p className="bade">bestseller</p>
                    </div>
                    <div className="book_title">
                        <p>Mental Health and Neuroplasticity: Change your Brain</p>
                    </div>
                    <div className="book_author">
                        <p>Rivak Shah</p>
                    </div>
                    <div className="book_rating"><Rate disabled defaultValue={4.5} /> <b>4.6</b>(1221)</div>
                    <div className="d-flex justify-content-around mt-2 p-1">
                        <i id="heart" className="fa fa-heart" aria-hidden="true"></i>
                        <i id="cart" className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
            <div className="book_container">
                <a className="book_box">
                    <div className="book_image">
                        <img className="img-fluid" alt="dd" src="https://img-a.udemycdn.com/course/240x135/1082488_d3dc_4.jpg" /> 
                        <p className="bade">bestseller</p>
                    </div>
                    <div className="book_title">
                        <p>Mental Health and Neuroplasticity: Change your Brain</p>
                    </div>
                    <div className="book_author">
                        <p>Rivak Shah</p>
                    </div>
                    <div className="book_rating"><Rate disabled defaultValue={4.5} /> <b>4.6</b>(1221)</div>
                    <div className="d-flex justify-content-around mt-2 p-1">
                        <i id="heart" className="fa fa-heart" aria-hidden="true"></i>
                        <i id="cart" className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
            <div className="book_container">
                <a className="book_box">
                    <div className="book_image">
                        <img className="img-fluid" alt="dd" src="https://img-a.udemycdn.com/course/240x135/1082488_d3dc_4.jpg" /> 
                        <p className="bade">bestseller</p>
                    </div>
                    <div className="book_title">
                        <p>Mental Health and Neuroplasticity: Change your Brain</p>
                    </div>
                    <div className="book_author">
                        <p>Rivak Shah</p>
                    </div>
                    <div className="book_rating"><Rate disabled defaultValue={4.5} /> <b>4.6</b>(1221)</div>
                    <div className="d-flex justify-content-around mt-2 p-1">
                        <i id="heart" className="fa fa-heart" aria-hidden="true"></i>
                        <i id="cart" className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
            <div className="book_container">
                <a className="book_box">
                    <div className="book_image">
                        <img className="img-fluid" alt="dd" src="https://img-a.udemycdn.com/course/240x135/1082488_d3dc_4.jpg" /> 
                        <p className="bade">bestseller</p>
                    </div>
                    <div className="book_title">
                        <p>Mental Health and Neuroplasticity: Change your Brain</p>
                    </div>
                    <div className="book_author">
                        <p>Rivak Shah</p>
                    </div>
                    <div className="book_rating"><Rate disabled defaultValue={4.5} /> <b>4.6</b>(1221)</div>
                    <div className="d-flex justify-content-around mt-2 p-1 hand_action">
                        <i id="heart" className="fa fa-heart" aria-hidden="true"></i>
                        <i id="cart" className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
        </Slider>

        );
    }
    render() {
        return (
            <section id="book" className="mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="d-flex justify-content-start text-muted">
                        <span>Books</span>
                        <Dropdown className="ml-3 mobile_nav_vi_book" overlay={menu} placement="bottomLeft">
                            <img height="25" className="mt-2" src="https://res.cloudinary.com/hg3trlxnt/image/upload/v1592372242/filter_qa8sxe.svg" alt="FILTER-ICON"/>
                        </Dropdown>
                        </h2>
                        <p>New featured related to the books and all</p>
                    </div>
                    <Menu
                        className="mobile_nav_video col-md-4 ml-3 mb-2"
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="all">All</Menu.Item>
                        <Menu.Item key="social">Social</Menu.Item>
                        <Menu.Item key="maths">Maths</Menu.Item>
                        <Menu.Item key="hindi">Hindi</Menu.Item>
                        <Menu.Item key="science">Science</Menu.Item>
                    </Menu>
                </div>
                {this.getSlider()}
            </section>
        );
    }
}



export default Books;