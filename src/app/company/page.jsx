"use client";
import React from 'react'
import InnerBanner from '../Components/InnerBanner'

const page = () => {
    return (
        <>
            <InnerBanner title="About Us" image="/assets/img/company_bnr.jpg"/>
            
            <section className='companyHistory_sec'>
                <div className='container'>
                    <div className='companyHistoryGrid'>
                        <div> ISO 9001 CERTIFIED</div>
                        <div>
                            OPERATION & MAINTENANCE SERVICE PROVIDER
                        </div>
                        <div>
                            POWER PLANT SPECIALIST
                        </div>
                        <div>
                            15+ YEARS & COUNTING
                        </div>

                        <div>
                            200+ SATISFIED CUSTOMER
                        </div>
                        <div>
                            500+ EMPLOYEES
                        </div>
                        <div>
                            ISO 45001 CERTIFIED
                        </div>
                        <div>PRESENT IN GCC & INDIA</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
