import React, { useState } from 'react'
import Nav from './nav'
import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image'
const Header = props => {
    const [show, setShow] = useState(false)
    const [sidebar, setSidebar] = useState(false);
    const [search, setSearch] = useState(false);

    const clickSidebar = () => {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.add('openSidebar')
    }

    return (
        <header className={`${props.className || 'app2'} loding-header nav-abs custom-scroll  `}>
            <Container>
                <Row>
                    <Col>
                        <nav>
                            <a className="m-r-auto" href="/">
                                {props.className == 'TBS' ?
                                    <Image width={100} height={60} alt="" className="img-fluid" src="/assets/images/logo/9.png" />
                                    :
                                    props.className == 'dark' ?
                                    <Image width={100} height={60} alt="" className="img-fluid" src="/assets/images/logo/1.png" />
                                        :
                                        props.className == 'dark position-relative ecommerce' ?
                                        <Image width={100} height={60} alt="" className="img-fluid" src="/assets/images/logo/1.png" />
                                            :
                                            props.className == 'dark bg-white ecommerce' ?
                                            <Image width={100} height={60} alt="" className="img-fluid" src="/assets/images/logo/1.png" />
                                            :
                                                props.className == 'dark TBS' ?
                                                <Image width={100} height={60} alt="" className="img-fluid" src="/assets/images/logo/1.png" />
                                                    :
                                                    props.className == 'saas1' ?
                                                    <Image width={100} height={60} alt="" className="img-fluid" src="/assets/images/logo/1.png" />

                                                        : <Image width={100} height={60} alt="" className="img-fluid" src="/assets/images/logo/1.png" />
                                }
                            </a>
                            <div className="responsive-btn">
                                <a className="toggle-nav" onClick={clickSidebar} >
                                    <i aria-hidden="true" className="fa fa-bars text-white"></i>
                                </a>
                            </div>
                            <Nav />
                           
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
