import React from 'react'
import Link from 'next/link'
const InnerBanner = ({ title, image, breadcrumb = [] }) => {


    return (
        <>
            <section className='hero-banner' style={{
                backgroundImage: `url(${image})`
            }}>
                <div className="container height100per">
                    <div className='innerpage_bnrContent height100per'>
                        <div>
                            <ul className='page_breadcrumb'>
                                <li><Link href={"/"}> Home</Link></li>
                                <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                <li> About Us</li>
                                <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                <li><Link href={'/company'}>Company</Link></li>
                            </ul>
                            <h1>{title}   </h1>
                            {/* <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{page.subTitle}</p> */}
                            {/* <button className='mainbtn'>Contact Us</button> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default InnerBanner
