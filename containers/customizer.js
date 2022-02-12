import React, { useState } from 'react';
import { useRouter } from 'next/router'

const Customizer = () => {
    const [divName, setDivName] = useState('اللغة العربية');
    const [themeLayout, setThemeLayout] = useState(false);
    
    const router = useRouter();
    
    const ChangeRtl = (divName) => {
        
        if (divName === 'اللغة العربية') {
            if (process.browser) {
                 document.body.classList.add('rtl');
                 router.push('/', '/ar', { locale: 'ar' })

            setDivName('English')

            }
            
        } else {
            if (process.browser) {
                document.body.classList.remove('rtl');
                router.push('/', '/', { locale: 'en-US' })

            setDivName('اللغة العربية')
            }
            
        }
    }


    const changeThemeLayout = () => {
        setThemeLayout(!themeLayout)
    }

    if(themeLayout){ 
        if (process.browser) {
        document.body.classList.add('dark');
        }
    }else{
        if (process.browser) {
        document.body.classList.remove('dark');
        }
    }

    return (
        <div className="theme-pannel-main">
            <ul>
                <li id="rtl_btn" >
                    <a href={null} className="btn setting_btn" onClick={() => ChangeRtl(divName)}>
                        <span className="rtl-txt">{divName}</span>
                    </a>
                </li>
                <li className="sidebar-btn dark-light-btn">
                    <a href={null} className="dark-light" onClick={() => changeThemeLayout()}>
                        <span className="theme-layout-version">{themeLayout?'Light':'Dark'}</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Customizer;