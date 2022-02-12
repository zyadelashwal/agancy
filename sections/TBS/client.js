import React from 'react';
import Slider from "react-slick";
import Image from 'next/image'
import {Container,Row,Col} from 'reactstrap'
import { BrandData } from '../../database/layouts/enterprice/database.js';
import useTranslation from "next-translate/useTranslation";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 420,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 575,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 1199,
            settings: { slidesToShow: 4 }
        },
        {
            breakpoint: 1366,
            settings: { slidesToShow: 6 }
        }
    ]
  };

const Client = () => {
    let { t } = useTranslation("common");
    return( 
    <section className="TBS client brand-slider" id="client-box">
        <Container fluid={true}>
            <Row>
            <Col md="10" className="offset-md-1">
                        <div className="title">
                            <div className="main-title">
                                <h2 className='text-capitalize text-center'>{t("OurClient")}</h2>
                            </div>
                            <div className="sub-title">
                                <p className="sub-title-para"></p>
                            </div>
                        </div>
                    </Col>
                <Col md="12" className="saas1 client brand-slider client-box text-center">
                    <Slider className="owl-carousel saas-brand owl-theme" {...settings}>
                        {BrandData.map((item, i) => {
                                    return (
                                        <div className="item" key={i}>
                                           
                                                <img alt="brand"  width={200} height={200} layout={"fixed"} className="img-fluid" src={item.img} />
                                          
                                        </div>
                                    )
                                })}
                    
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
)}

export default Client;