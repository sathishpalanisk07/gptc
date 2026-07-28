"use client";
import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Mainpage = () => {
  const [active, setActive] = useState("side_tab2");
  // const [isTabsVisible, setIsTabsVisible] = useState(window.innerWidth >= 800);


  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsTabsVisible(window.innerWidth >= 800);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const [isTabsVisible, setIsTabsVisible] = useState(false);

  useEffect(() => {
    // Runs only in the client
    // setIsTabsVisible(window.innerWidth >= 800);

    // const handleResize = () => {
    //   setIsTabsVisible(window.innerWidth >= 800);
    // };

    const checkSize = () => {
      setIsTabsVisible(window.innerWidth > 1026); // desktop only above 1026px
    };

    // window.addEventListener("resize", handleResize);

    // return () => window.removeEventListener("resize", handleResize);
    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);


  const tabs = [
    {
      id: "side_tab19", title: "CSP(Concentrates solar Power) Parabolic Solar Panels maintenance", content: (
        <>

        </>
      )
    },
    {
      id: "side_tab20", title: "CSP HTF tube welding", content: (
        <>

        </>
      )
    },
    {
      id: "side_tab21", title: "Piping and fabrication work", content: (
        <>

        </>
      )
    },
    {
      id: "side_tab22", title: "Electrical Transformer, Switchgear, Cable, Relay testing", content: (
        <>

        </>
      )
    },
    {
      id: "side_tab23", title: "SWRO, BWRO Membrane replacement", content: (
        <>

        </>
      )
    },
    {
      id: "side_tab24", title: "SUPPLY OF ENGINEER TO leading consultant(ENERGO, INTEC GOPA, EDF, MITSUBISHI ELECTRIC)", content: (
        <>

        </>
      )
    },
    {
      id: "side_tab25", title: "PIPELINE PIGGING WORK(PIPE CLEANING WORK)", content: (
        <>

        </>
      )
    },
    // {
    //   id: "side_tab1", title: "Gas Turbine Services", image: "/assets/img/gas-turbine.jpg",
    // },
    // {
    //   id: "side_tab2", title: "Steam Turbine Services", image: "/assets/img/gas-turbine.jpg"
    // },
    {
      id: "side_tab3", title: "Operation and Maintenance", image: "/assets/img/operation-maintenance.jpg",
    }, {
      id: "side_tab4", title: "Online/Offline Safety Valve Testing & Calibration", image: "/assets/img/gallery_img/01727516978.jpeg",
    }, {
      id: "side_tab5", title: "Boiler Maintenance and Commissioning", image: "/assets/img/boiler-maintenance.jpg"
    },
    {
      id: "side_tab7", title: "Online Leak Sealing & Hot Tapping Services", image: "/assets/img/online-leak-sealing.png"
    },
    {
      id: "side_tab8", title: "Hot Tapping", image: "/assets/img/hot_tapping_detail.png"
    }, {
      id: "side_tab9", title: "HRSG Pressure Wave & Chemical Cleaning", image: "/assets/img/gallery_img/01652965793.jpg"
    }, {
      id: "side_tab10", title: "Valve Servicing and Calibration", image: "/assets/img/calibration.jpg"
    }, {
      id: "side_tab11", title: "Sand blasting of turbine blades", image: "/assets/img/sand-blasting_1.jpg"
      /* <div className='row mb_24'>
        <div className='col-lg-4 mobspaceMb_24'>
          <img src="/assets/img/sand-blasting_2.jpg" alt='Sand blasting of turbine blades' />
        </div>
        <div className='col-lg-4 mobspaceMb_24'>
          <img src="/assets/img/sand-blasting_3.jpg" alt='Sand blasting of turbine blades' />
        </div>
        <div className='col-lg-4'>
          <img src="/assets/img/sand-blasting_1.jpg" alt='Sand blasting of turbine blades' />
        </div>
      </div> */
    },
    {
      id: "side_tab12", title: "Sea Water Reverse Osmosis(SWRO) membranes Works", image: "/assets/img/membranes_2.jpg"
    },
    {
      id: "side_tab13", title: "Electrical Maintenance & Commissioning Services", image: "/assets/img/gallery_img/01653208757.jpeg"
    },
    {
      id: "side_tab14", title: "Pig Cleaning", image: "/assets/img/pig-cleaning_1.jpg"

      // < div className='deskFlexMobileBlock mb_24 gap16' >

      //     <div className=''>
      //       <img src="/assets/img/pig-cleaning_2.jpg" alt='pig-cleaning' />
      //     </div>

      //   </div >
    },
    {
      id: "side_tab15", title: "Acid Cleaning of tanks & piping", image: "/assets/img/acid-cleaning1.jpg",
      // <div className=''>
      //   <img src="/assets/img/acid-cleaning2.jpg" alt='acid cleaning' />
      // </div>
    },
    {
      id: "side_tab16", title: "Air Intake Filter replacement works", image: "/assets/img/filter-replacement.jpg"
    },
    {
      id: "side_tab17", title: "DAF cleaning works", image: "/assets/img/daf-cleaning-works_1.jpg",
      // <div className=''>
      //   <img src="/assets/img/daf-cleaning-works_2.jpg" alt='daf-cleaning-works' />
      // </div>
    },
    {
      id: "side_tab18", title: "All types of AC/HVAC installation and servicing", image: "/assets/img/allType_ac-hvac_1.jpg"


      //     <div className=''>
      //       <img src="/assets/img/allType_ac-hvac_2.jpg" alt='allType ac hvac' />
      //     </div>
      //     <div className=' mobspaceMb_24'>
      //       <img src="/assets/img/allType_ac-hvac_3.jpg" alt='allType ac hvac' />
      //     </div>

    },

  ];



  const clientSay = [
    {
      id: 1,
      year: "February 27, 2025",
      Desc: "PTD received &apos;Best Employee Accommodation Management and Maintenance &apos; from ALBA CEO for the year 2024, Post various audits from ALBA Team",
    },
    {
      id: 2,
      year: 'October 16, 2024',
      Desc: "Power Tech Group is now ISO 14001 Certified , along with the previously held ISO 9001 and ISO 45001 Certification, Recently we completed the Integrated Management System Audit for all 3 certifications and got certified",
    },
    {
      id: 3,
      year: 'August 11, 2024',
      Desc: "PTD Successfully completed GT T1C Nozzle Replacement Mitsubishi works for ALBA Block 4 Expansion Project and received a letter of Appreciation for our support and completion of the Project from MHI Team.",
    },
    {
      id: 4,
      year: "July 28, 2024",
      Desc: 'PTD has secured 3 Year long term contract with ALBA Power Station 5 for Mechanical, Electrical and Instrumentation Department.',
    },
    {
      id: 5,
      year: "December 21, 2022",
      Desc: "Power Tech Group is happy to share that our company  has been awarded a Silver EcoVadis Medal. This result places our company among the top 25 percent of companies assessed by EcoVadis.",
    },
    {
      id: 6,
      year: "November 30, 2022",
      Desc: "PTD Successfully Completed GT Major Outage with NMES (ACWA POWER) for the NOMAC ALDUR-II Plant,  PTD Also completed Unplanned GT-12 Outage in ALDUR-1 for AEOM",
    },
    {
      id: 7,
      year: "April 15, 2022",
      Desc: "Power Tech recently completed GPIC Turnaround 2022 in Bahrain, providing close to 100 resources from Instrumentation, Electrical and Mechanical Stream",
    },

  ];

  const serviceSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          centerMode: false,
        },
      },
    ],
  };

  const blogSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          centerMode: false,
        },
      },
    ],
  };

  // const clientlogoSlider = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   slidesToShow: 9,
  //   slidesToScroll: 1,
  //   lazyLoad: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 3,
  //         centerPadding: "0px",
  //         centerMode: false,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         centerPadding: "0px",
  //         centerMode: false,
  //       },
  //     },
  //   ],
  // };




  const mainBnr = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true, // smooth fade transition

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  const banners = [
    { id: 1, img: "/assets/img/operation_and_maintainance_service_provider.jpg", title: "Operations and Maintenance Service Provider ", description: "We provide comprehensive operations and maintenance services to ensure your equipment runs efficiently." },
    { id: 2, img: "/assets/img/electro_mechanical.png", title: "Electro Mechanical and Instrumentation Project Experts", description: "Our team of experts delivers cutting-edge solutions for electro-mechanical and instrumentation projects." },
    { id: 3, img: "/assets/img/hottapping.jpg", title: "Hot Tapping ", description: "Specialized hot tapping services for pipeline maintenance and repair." },
    { id: 4, img: "/assets/img/gas_turbine_steam_turbine_works.jpg", title: "Gas Turbine and Steam Turbine Works ", description: "Complete maintenance and repair services for gas and steam turbines." },
    { id: 5, img: "/assets/img/valve_servicing_testing.png", title: "	Valve Servicing , Testing and Calibration Works", description: "Professional valve servicing, testing, and calibration services." },
    { id: 6, img: "/assets/img/welding_fabrication_work.jfif", title: "Welding and Fabrication Works", description: "High-quality welding and fabrication services for various industries." },
  ];


  // const companyPhoto = {
  //   dots: false,
  //   infinite: true,
  //   // speed: 800,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  //   fade: true, // smooth fade transition
  // };


  const itemsRef = useRef([]);
  const sectionRef = useRef(null);


  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el) => {
        const finalValue = Number(el.dataset.value);

        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: finalValue,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            onUpdate() {
              el.innerHTML = Number(el.textContent).toLocaleString() + "+";
            },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              // markers: true,   // <--- TEST THIS
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section className='herobnr'>
        <Slider {...mainBnr}>
          {banners.map((banner) => (
            <div key={banner.id} className="banner-slide">
              <img src={banner.img} alt={banner.title} />
              <div className="bnrContent">
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-lg-8'>
                      <h1>{banner.title}</h1>
                      <p>{banner.description}</p>
                      <button className='mainbtn'>Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </section>
      <section className='testmonials_sec'>
        <div className='container-fluid'>
          {/* <div className="site-heading">
             <span className="site-title-tagline textalign_center">--- Testmonials ---</span> 
            <h2 className="site-title textalign_center"> What Our <span>Client Say&apos;s</span></h2>
          </div> */}
          {/* <Slider {...testimonialSlider}> */}
          <div className='testimonialGrid process-counts'>
            {clientSay.map((item) => (
              <div className="testimonialItem" key={item.id}>
                <div>
                  {/* <div className='quoteRightImg'>
                    <img src="/assets/img/quote.svg" alt='quote' />
                  </div> */}
                  <h3>{item.year}</h3>
                  <p>{item.Desc}</p>
                </div>
                {/* <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                  <div className='displayFlex alignItem_center gap12 dpProfile'>
                    <div className=''>
                      <img src="/assets/img/dp.jpg" alt='sdd' />
                    </div>
                    <div>
                      <h5>Raj kumar</h5>
                      <span>UI / UX</span>
                    </div>
                  </div>
                  <div>
                    <ul className='displayFlex alignItem_center gap12 emptyList'>
                      <li>
                        <img src="/assets/img/star_fill.svg" alt='star' />
                      </li>
                      <li>
                        <img src="/assets/img/star_fill.svg" alt='star' />
                      </li>
                      <li>
                        <img src="/assets/img/star_empty.svg" alt='star' />
                      </li>
                      <li>
                        <img src="/assets/img/star_empty.svg" alt='star' />
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
          {/* </Slider> */}
        </div>
      </section>





      {/* <section className='companyPhotoSec'>
        <Slider {...companyPhoto}>
          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/slider1.jpg" alt="companyphoto" />
          </div>
          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl2.jpg" alt="companyphoto" />
          </div>
          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl3.jpg" alt="companyphoto" />
          </div>
          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl4.jpg" alt="companyphoto" />
          </div>
          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl5.jpg" alt="companyphoto" />
          </div>
          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl6.jpg" alt="companyphoto" />
          </div>
        </Slider>
      </section> */}
      {/* <LeaderShipTeam /> */}


      <section className='weServeGlobally_sec' ref={sectionRef}>
        <div className='container'>
          {/* <div className="site-heading"> */}
          {/* <span className="site-title-tagline">--- WE SERVE GLOBALLY ---</span> */}
          {/* </div> */}


          <div className='row mb_34'>
            <div className='col-lg-7 mobspaceMb_34'>
              <h2>WE SERVE <span>GLOBALLY</span></h2>
              {/* <div className='mb_40'>
                <p className='tranquilPondText_Clr fontSize16 fontWeight400 fontStyleItalic'>Owing to the unmatched quality and reliability of our products, our line of Leak Sealing Products and Services is in significant demand globally.</p>
              </div> */}
              <div className='mb_16'>
                <h5 className='blackText_Clr fontSize24 fontWeight600 mb_12'>Our Global Presence</h5>
                <p className='blackText_Clr fontSize16 fontWeight400'>Power Tech Group Companies an ISO 9001 and ISO 45001 company is Unique in Indian sub-continent and GCC countries, as ONE-STOP-SHOP for total power plant services in the areas of Repairs & Retrofits, EPC contracts, O&M contracts, Re-Engineering and Relocation of Power Plants, Spares & Services for a decade. We offer Qualitative and Economical Alternative to various OEMS around the World in the areas of expertise. We offer quality services and expertise in Repairs & Retrofits, Spares & Services, EPC contracts, O&M Contracts, Re-Engineering and Relocation of Power Plants, for a decade.</p>
              </div>
            </div>

            <div className='col-lg-5'>
              <div>
                <img className='width100per borderRadius10' src="/assets/img/operation_and_maintainance_service_provider.jpg" alt="operation_and_maintainance_service_provider" />
              </div>
            </div>

          </div>

          <div className='ourGlobalPresence'>
            <div>
              <h5 className="data" ref={addToRefs} data-value="15">0</h5>
              <p>Years</p>
            </div>
            <div>
              <h5 className="data" ref={addToRefs} data-value="5">0</h5>
              <p>Countries</p>
            </div>
            <div>
              <h5 className="data" ref={addToRefs} data-value="250">0</h5>
              <p>Customers</p>
            </div>
          </div>
        </div>
      </section>


      <section className='service_sec'>
        <div className='container-fluid positionRelative zIndex999'>
          <div className="site-heading">
            <h2 className="site-title textalign_center">
              <span>Valve Services</span> - Human Resource <br /> & Manpower Supply
            </h2>
          </div>
          {isTabsVisible && (
            <Slider {...serviceSlider}>
              {tabs.map(t => (
                <div className="serviceItem" key={t.id}>
                  <div className='serviceFrame'>
                    <div className="service-img">
                      <img src={t?.image} alt={t?.title} />
                    </div>
                    <div className="service-caption">
                      <Link href="/service-page/online_safety_testing" onClick={() => {
                        if (!isTabsVisible) {
                          setActive(prev => (prev === t.id ? null : t.id));  // toggle open/close
                        }
                      }}>{t.title}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

          )}
        </div>

      </section>


      {/* <section className="about-area">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="about-left wow fadeInLeft">
                <div className="about-img">
                  <div className="row g-4">
                    <div className="col-md-6">

                      <img className="img-1" src="/assets/img/01.jpg" alt="first" />
                      <div className="about-experience mt-4">
                        <div className="about-experience-icon">
                          <img src="/assets/img/customerSatisfaction.svg" alt="customerSatisfaction" />
                        </div>
                        <span className="text-start">200+ SATISFIED<br /> CUSTOMER</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img className="img-2" src="/assets/img/02.jpg" alt="second" />
                      <img className="img-3 mt-4" src="/assets/img/03.jpg" alt="third" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right wow fadeInRight">
                <div className="site-heading mb-3">
                  <span className="site-title-tagline">--- About Us ---</span>
                  <h2 className="site-title">
                    Our Edukation System <span>Inspires</span> You More.
                  </h2>
                </div>
                <p className='tranquilPondText_Clr fontSize16 fontWeight400'>Sam Technical Service Contracting Est an ISO 9001 and ISO 45001 company is Unique in Indian sub-continent and GCC countries, as ONE-STOP-SHOP for total power plant services in the areas of Repairs & Retrofits, EPC contracts.

                </p>
                <div className="about-content">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="about-item">
                        <div className="about-item-icon">
                          <img src="/assets/img/serviceprovider.svg" alt="Service Provide" />
                        </div>
                        <div className="about-item-content">
                          <h5>Maintenance Service Provider</h5>
                          <p className='tranquilPondText_Clr fontSize16 fontWeight400'>We ensure smooth operations with reliable maintenance solutions.</p>
                        </div>
                      </div>
                      <div className="about-item">
                        <div className="about-item-icon">
                          <img src="/assets/img/search-country.svg" alt="Present in GCC & INDIA" />
                        </div>
                        <div className="about-item-content">
                          <h5>Present in GCC & INDIA</h5>
                          <p className='tranquilPondText_Clr fontSize16 fontWeight400'>Our strong presence spans major regions in GCC and India today.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="about-quote">
                        <p>It is a long established fact that a reader will be distracted by the
                          content of
                          a page when looking at its reader for the long words layout.</p>

                        <div className='about-quote-icon'>
                          <img src="/assets/img/quote-right.svg" alt='quote-right' />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-bottom">
                  <button href="about.html" className="mainbtn">Discover More</button>
                  <div className="about-phone">
                    <div className="icon">
                      <img src="/assets/img/phone_icon.svg" alt='phone' />
                    </div>
                    <div className="number">
                      <span>Call Now</span>
                      <Link href="tel:919498660803">+919498660803</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className='industrySec'>
        <div className='container'>
          <div className="site-heading">
            <h2 className="site-title textalign_center"> Our <span>Infrastructure</span></h2>
          </div>
          <div className="row popup-gallery">
            <div className="col-md-4 wow fadeInUp">
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/01.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/01.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp">
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/02.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/03.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp">
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/01.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/02.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg">
                    <i className="fal fa-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className='clientlogosec'>
        <div className='container'>
          <div className="site-heading">
            {/* <span className="site-title-tagline textalign_center">--- Client ---</span> */}
            <h2 className="site-title textalign_center">
              We Are <span>Trusted</span> By
            </h2>
          </div>
          <div className="customerLogos">

            {/* <Slider {...clientlogoSlider}> */}
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c1.jpg" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c2.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c3.jpg" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c4.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c5.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c6.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c7.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c8.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c9.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c10.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c11.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c12.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c13.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c14.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c15.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c16.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c17.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c18.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c19.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c20.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c21.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c22.png" alt='' />
            </div>

            {/* </Slider> */}


          </div>
        </div>
      </section>

      {/* <section className="video-area">
        <div className="container">
          <div className="video-content">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="video-wrapper">
                  <a className="play-btn popup-youtube" href="https://www.youtube.com/watch?v=ckHzmP1evNU">
                    <img src="/assets/img/play-icon.svg" alt='play' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      {/* blog */}
      <section className='blogSec'>
        <div className='container'>

          <div className="site-heading">
            <h2 className="site-title textalign_center">Articles & blog posts  with useful information</h2>
          </div>
          <Slider {...blogSlider} className='browsebycategoriesSlider '>
            <div className="browsebycategoriesItem">
              <div className="browsebycategories_img">
                <img alt="" loading="lazy" src="/assets/img/operation_and_maintainance_service_provider.jpg" />
              </div>
              <div className="browsebycategories_content">
                <h5>E-Commerce</h5>
                <Link href="#">Bizzilo: Turning Your Business Dream into Reality</Link>
                <p>June 9, 2025 - 5 min read</p>
              </div>
            </div>
            <div className="browsebycategoriesItem">
              <div className="browsebycategories_img">
                <img alt="" loading="lazy" src="/assets/img/operation_and_maintainance_service_provider.jpg" />
              </div>
              <div className="browsebycategories_content">
                <h5>E-Commerce</h5>
                <Link href="#">Bizzilo: Turning Your Business Dream into Reality</Link>
                <p>June 9, 2025 - 5 min read</p>
              </div>
            </div>
                        <div className="browsebycategoriesItem">
              <div className="browsebycategories_img">
                <img alt="" loading="lazy" src="/assets/img/operation_and_maintainance_service_provider.jpg" />
              </div>
              <div className="browsebycategories_content">
                <h5>E-Commerce</h5>
                <Link href="#">Bizzilo: Turning Your Business Dream into Reality</Link>
                <p>June 9, 2025 - 5 min read</p>
              </div>
            </div>
            <div className="browsebycategoriesItem">
              <div className="browsebycategories_img">
                <img alt="" loading="lazy" src="/assets/img/operation_and_maintainance_service_provider.jpg" />
              </div>
              <div className="browsebycategories_content">
                <h5>E-Commerce</h5>
                <Link href="#">Bizzilo: Turning Your Business Dream into Reality</Link>
                <p>June 9, 2025 - 5 min read</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>





    </>

  )
}

export default Mainpage
