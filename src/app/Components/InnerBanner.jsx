import React from 'react'
import Link from 'next/link'
const InnerBanner = ({ title, image, breadcrumb = [] }) => {


    return (
        <>
            <section className='innerpagebnr bannerOverlay' style={{
                backgroundImage: `url(${image})`
            }}>
                <div className="container height100per">
                    <div className='displayFlex alignItem_center height100per positionRelative zIndexOne' >
                    <div className='innerpage_bnrContent'>
                        <div>
                            <ul className='page_breadcrumb'>
                                <li><Link href={"/"}> Home</Link></li>
                                    <li><img className='whiteFilter' src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                <li> About Us</li>
                                <li><img className='whiteFilter' src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                <li><Link href={'/company'}>Company</Link></li>
                            </ul>
                            <h1>{title}</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default InnerBanner
