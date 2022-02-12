import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Container,Row,Col} from 'reactstrap'
import useTranslation from "next-translate/useTranslation";

const About = () => {
    
    let { t } = useTranslation("common");

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, []);
    return (
        <section className="TBS TBS-content about-bg" id="aboutUs">
            <h3 className="text-as-shadow">{t("about")} <br/> {t("us")}</h3>
            <Container>
                <Row>
                    <Col xl="9" md="9"  className="offset-xl-3 offset-md-3">
                        <div className="TBS-header-center-container">
                            <div className="borders"></div>
                            <div className="TBS-head">
                                <h3 className="TBS-head-text">{t("about_us_supPrag")} <span className="block-span">{t("about_us_supPrag_1")}</span></h3>
                            </div>
                        </div>
    
                        <p className="TBS-para">{t("about_us_pragraph_1")}</p>
                        <a className=" btn btn-default btn-gradient" href="#">{t("viewMore")}</a>
                    </Col>
                </Row>
            </Container>
            <div className="side-img  set-abs left-0 top-0" data-aos="fade-right" data-aos-duration="4500">
                <div className="plus-container plus-container9">
                    <div className="plus white">
                    </div>
                </div>
                <div className="plus-container plus-container10">
                    <div className="plus plus-medium white">
                    </div>
                </div>
                <div className="plus-container plus-container11">
                    <div className="plus plus plus-small white">
                    </div>
                </div>
                <img alt="TBS"  className="img-fluid about-img" src="/assets/images/TBS/about-us/image.png" />
            </div>
            <img alt="TBS"  className="img-fluid blue-img" src="/assets/images/TBS/TBS-abs-img.png" />
        </section>
    )
}

export default About;