"use client"
import Link from 'next/link';
import { useState } from 'react';

const Service = ({ pageData, pagename }) => {
  // const[serviceType,setServiceType] =useState('ro_membrane');
  const page = pageData;

  const blankPages = [
    "online_safety_testing",
    "offline_valve_testing",
    "alltype_valve_services",
    "technical_manpower_supply_for_power_plant_refineries_and_water_plant",
    "hot_tapping",
    "heat_exchanger",
    "ro_membrane",
    "ro_plant_epc_contracts",
    "upvc_aluminiumdoors_windowsfabrication"
  ];

  return (
    <>
      <section className='servicebnr bannerOverlay'
        style={{
          backgroundImage: page?.bannerImg
            ? `url(${page.bannerImg})`
            : "linear-gradient(to right, #000, #333)"
        }}
      >
        <div className="container height100per">
          <div className='displayFlex alignItem_center height100per positionRelative zIndexOne' >
            {/* <div className='col-lg-6'> */}
              <div className='innerpage_bnrContent'>
                <ul className='page_breadcrumb'>
                  <li><Link href={"/"}> Home</Link></li>
                <li><img className='whiteFilter' src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                  <li> Services</li>
                  <li><img className='whiteFilter' src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                  <li><Link href="#">{page?.title}</Link></li>
                </ul>
                <h1>{page.title}</h1>
              <p className='fontSize16 fontWeight400 whiteText_Clr mb_24'>{page.bannerparagraph}</p>
                <Link className='mainbtn' href='#to-know-more-contact-us'>Contact Us</Link>
              </div>
            {/* </div> */}
            {/* <div className='col-lg-5 offset-lg-1'>
              <div
                className={`textalign_center defaultWidth ${pagename === "online_seal_leaking"
                  ? "hero-banner_img"
                  : blankPages.includes(pagename)
                    ? ""
                    : "hero-banner_img"
                  }`}>
                <img src={page.bannerImg}
                  alt={page.title || "service image"} />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className='serviceContentpart'>
        <div className="container">
          {page.content}
        </div>
      </section>
    </>
  );
}

export default Service;
