import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
    let { t } = useTranslation("common");
    return(
    <React.Fragment>
        <footer className="TBS footer2 p-b-0">
            <Container>
                <Row>
                    <Col xs="4" className="set-first">
                        <div className="logo-sec">
                            <div className="footer-title mobile-title">
                                <h3 className="text-white"></h3>
                            </div>
                            <div className="footer-contant">
                                <img alt="TBS" className="img-fluid footer-logo" src="/assets/images/logo/1.png" />
                                <div className="footer-para">
                                    <h6 className="text-white para-address">{t("agancy_name")}</h6>
                                    <h6 className="text-white para-address">{t("address_agancy")} </h6>
                                    <h6 className="text-white para-address">{t("address_agancy_2")}</h6>
                                </div>
                             
                            </div>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">{t("services")}</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">{t("services")}</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="#">{t("ERP")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{t("Enterprise")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{t("Application")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{t("Mobile")}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    {/* <Col lg="2" md="3" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">brand</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">brand</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="#">Chat24</a>
                                    </li>
                                    <li>
                                        <a href="#">Zoom</a>
                                    </li>
                                    <li>
                                        <a href="#">Alpha Payment</a>
                                    </li>
                                    <li>
                                        <a href="#">Upwork</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col> */}
                    <Col xs="4">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">Contant Info</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">Contant Info</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="#">Info@technology-bs.com</a>
                                    </li>
                                    <li>
                                        <a href="#">+968-97285062</a>
                                    </li>
                                    <li>
                                        <a href="#">+968-22053280</a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </Col>
                    {/* <Col lg="3" md="12" sm="12" className="set-last">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">Page tage</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">Page tage</h5>
                            <div className="link-btns">
                                <ul>
                                    <li className="buttons">
                                        <a href="#">app</a>
                                    </li>
                                    <li className="buttons">
                                        <a href="#">business</a>
                                    </li>
                                    <li className="buttons">
                                        <a href="#">corporation</a>
                                    </li>
                                    <li className="buttons">
                                        <a href="#">creative</a>
                                    </li>
                                    <li className="buttons">
                                        <a href="#">design</a>
                                    </li>
                                    <li className="buttons">
                                        <a href="#">fashion</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col> */}
                </Row>
                {/* <Row>
                    <Col xs="12">
                        <div className="brand-container">
                            <Row>
                                <Col md="6">
                                    <div className="link-horizontal">
                                        <ul>
                                            <li>
                                                <a className="center-content" href="#">
                                                    <img alt="" className="img-fluid" src="/assets/images/TBS/brand/1.png" />
                                                </a>
                                            </li>
                                            <li className="borders-right p-0"></li>
                                            <li>
                                                <a className="center-content" href="#">
                                                    <img alt="" className="img-fluid" src="/assets/images/TBS/brand/2.png" />
                                                </a>
                                            </li>
                                            <li className="borders-right p-0"></li>
                                            <li>
                                                <a className="center-content" href="#">
                                                    <img alt="" className="img-fluid" src="/assets/images/TBS/brand/3.png" />
                                                </a>
                                            </li>
                                            <li className="borders-right p-0"></li>
                                            <li>
                                                <a className="center-content" href="#">
                                                    <img alt="" className="img-fluid" src="/assets/images/TBS/brand/4.png" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="list float-right">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <img alt="" className="img-fluid" src="/assets/images/TBS/brand/paytm-1.png" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img alt="" className="img-fluid" src="/assets/images/TBS/brand/paytm-2.png" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img alt="" className="img-fluid" src="/assets/images/TBS/brand/paytm-3.png" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img alt="" className="img-fluid" src="/assets/images/TBS/brand/paytm-4.png" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </footer>
        <div className="TBS copyright">
            <Container>
                <Row>
                    <Col md="6">
                        <div className="link-horizontal">
                        <ul className="d-d-flex footer-social social">
                                    <li className="footer-social-list">
                                        <a target={"_blank"} href="https://www.facebook.com/Technology-Business-Solutions-%D8%AA%D9%82%D9%86%D9%8A%D8%A9-%D8%AD%D9%84%D9%88%D9%84-%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84-761733063924681"><i aria-hidden="true" className="fa fa-facebook"></i></a>
                                    </li>
                                   
                                    <li className="footer-social-list">
                                        <a href="https://www.linkedin.com/company/tbs-oman" target={"_blank"}><i aria-hidden="true" className="fa fa-linkedin"></i></a>
                                    </li>
                                </ul>
                        </div>
                    </Col>
                    <Col md="6">
                        <div>
                            <h6 className="copyright-text text-white text-right">Copyright © 2022 TBS  <i aria-hidden="true" className="fa fa-heart ml-1"></i> 
                            </h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </React.Fragment>
)}

export default Footer;