import React, {useEffect} from 'react'
import Head from 'next/head'
// import Custom Components
import Header from '../containers/common/header'
import BannerSection from '../sections/TBS/banner'
import AboutSection from '../sections/TBS/about'
import ServiceSection from '../sections/TBS/service'
import ClientSection from '../sections/TBS/client'
import ExpertSection from '../sections/TBS/expert'
import BlogSection from '../sections/TBS/blog'
import FooterSection from '../sections/TBS/footer'

import useTranslation from "next-translate/useTranslation";
import FloatingWhatsApp from 'react-floating-whatsapp'


const TBS = () => {
  let { t } = useTranslation("common");
  
  useEffect(() => {
    document.body.style.setProperty('--primary', '#10266b')
    document.body.style.setProperty('--secondary', '#464545')
    document.body.style.setProperty('--light', '#1F357D')
    document.body.style.setProperty('--dark', '#04185B')
  })

  return (
    <div className="theme-color" >
        <Head>
            <title>{t("titleـpage")} </title>
           
            <meta name='TBS Layout' content='' />
        </Head>

        <Header className="TBS" />

        <BannerSection />

        <AboutSection />

        <ServiceSection />
        <ClientSection/>
        

        

      

  

        <BlogSection />
        <a href="https://wa.me/0096897285062" className="float" target="_blank">
          <i class="fa fa-whatsapp my-float"></i>
          </a>
        <FooterSection />

    </div>
  )
}

export default TBS;