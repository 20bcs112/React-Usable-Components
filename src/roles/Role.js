import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

import Header from '../commons/Header';
import Footer from '../commons/Footer';
import Allroles from './Allroles';
import Application from './Application';

import breadshape1 from '../img/breadcrumb/breadcrumb-shape-1.png'
import breadshape2 from '../img/breadcrumb/breadcrumb-shape-2.png'
import bread3 from '../img/breadcrumb/breadcrumb-3.png'
import breadsub1 from '../img/breadcrumb/breadcrumb-sub-1.png'

import ctabg from '../img/cta/cta-bg.jpg'

const Role = () => {
    let { id } = useParams();
    const [obj,setObj] = useState({});

    useEffect(()=>{
        async function getJob()
        {
            try
            {
                const response = await axios.get(`http://localhost:3001/job/${id}`);
                const data = await response.data

                console.log(data)
                setObj(data);
            }
            catch(error)
            {
                console.log(error);
            }
        }

        getJob();
    },[])

    return (
        <div>
            <Header/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* breadcrumb-area-start */}
                        <div className="breadcrumb__area breadcrumb-height p-relative blue-bg-2">
                            <div className="breadcrumb__shape-1">
                                <img src={breadshape1} alt="" />
                            </div>
                            <div className="breadcrumb__shape-2">
                                <img src={breadshape2} alt="" />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="breadcrumb__content z-index-3">
                                            <h3 className="breadcrumb__title tp-char-animation">Careers Details</h3>
                                            <div className="breadcrumb__list wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".4s">
                                                <span className="child-one"><a href="#">Home</a></span>
                                                <span className="dvdr"><i className="fal fa-angle-right" /></span>
                                                <span className="child-one"><a href="#">Careers page</a></span>
                                                <span className="dvdr"><i className="fal fa-angle-right" /></span>
                                                <span>{obj.jobTitle}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 col-lg-4 text-center text-md-end">
                                        <div className="breadcrumb__img p-relative text-start z-index">
                                            <img className="z-index-3" src={bread3} alt="" />
                                            <div className="breadcrumb__sub-img wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".4s">
                                                <img src={breadsub1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* breadcrumb-area-end */}
                        <div className="career-details-area career-border-bottom pt-110 pb-110">
                            <div className="container">
                                <div className="row align-content-start">
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="career-details-wrapper">
                                            <div className="career-details-title-box">
                                                <h4 className="career-details-title">{obj?.jobTitle}</h4>
                                            </div>
                                            <div className="career-details-location-box">
                                                <span>
                                                    <svg width={15} height={17} viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.10747C1 3.73441 3.93813 1 7.5625 1C11.1869 1 14.125 3.73441 14.125 7.10747C14.125 10.4541 12.0305 14.3593 8.76256 15.7558C8.00076 16.0814 7.12424 16.0814 6.36244 15.7558C3.09452 14.3593 1 10.4541 1 7.10747Z" stroke="#5F6168" strokeWidth="1.5" />
                                                        <path d="M9.4375 7.56274C9.4375 8.59828 8.59803 9.43774 7.5625 9.43774C6.52697 9.43774 5.6875 8.59828 5.6875 7.56274C5.6875 6.52721 6.52697 5.68774 7.5625 5.68774C8.59803 5.68774 9.4375 6.52721 9.4375 7.56274Z" stroke="#5F6168" strokeWidth="1.5" />
                                                    </svg>
                                                    {obj?.jobLocation}
                                                </span>
                                                <span>
                                                    <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.5 15.75C12.5041 15.75 15.75 12.5041 15.75 8.5C15.75 4.49594 12.5041 1.25 8.5 1.25C4.49594 1.25 1.25 4.49594 1.25 8.5C1.25 12.5041 4.49594 15.75 8.5 15.75Z" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.5 5.52838V9.42838L11.1 10.7284" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Job Id : {obj?.jobId}
                                                </span>
                                            </div>
                                            <div className="career-details-job-responsiblity mb-45">
                                                <h4 className="career-details-title-sm">Job Description</h4>
                                                {
                                                    obj?.jobDescription?.map((item,index)=>{
                                                        return (
                                                            <p key={index}><i className="fal fa-long-arrow-right" /> {item}</p>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="career-details-job-responsiblity mb-45">
                                                <h4 className="career-details-title-sm">Job Requirements</h4>
                                                {
                                                    obj?.jobRequired?.map((item,index)=>{
                                                        return (
                                                            <p key={index}><i className="fal fa-long-arrow-right" /> {item}</p>
                                                        )
                                                    })
                                                }
                                            </div>
                                            {/* <div className="career-details-job-responsiblity mb-45">
                                                <h4 className="career-details-title-sm">Our Benefits</h4>
                                                <p className="pb-15">Now, the paradigm has shifted. The question is not why you should include
                                                    a content marketing strategy.</p>
                                                <div className="career-details-job-list">
                                                    <ul>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            Flexible hours
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            Unlimited PTO
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            Medical insurance
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            Career growth
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="career-details-job-responsiblity mb-20">
                                                <h4 className="career-details-title-sm">Job Requirements</h4>
                                                <p className="pb-15">There are many variations of passages of Lorem Ipsum available, but the
                                                    majority have suffered alteration in some form, by injected humour, or randomised words
                                                    which don't look even slightly believable. If you are going to use a passage
                                                    of Lorem Ipsum,anything embarrassing hidden.</p>
                                                <div className="career-details-job-list">
                                                    <ul>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            Experience building software and systems that balance <br /> simplicity,
                                                            flexibility, and security.
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            Track record with a smart contract language <br /> such as Solidity
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            A customer-focused and product-focused mindset.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="career-details-job-responsiblity">
                                                <h4 className="career-details-title-sm">Education &amp; Experience</h4>
                                                <p>TBachelors Degree in Interaction, Graphic Design, Media Arts or similar.</p>
                                            </div> */}
                                        </div>
                                    </div>
                                    <Application/>
                                </div>
                            </div>
                        </div>
                        {/* tp-job-area-start */}
                        <div className="job-area">
                            <div className="container">
                                {/* <div className="row">
                                    <div className="col-xl-12">
                                        <div className="job-section-box text-center mb-40">
                                            <h3 className="tp-section-title">Open Positions</h3>
                                            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque tristique <br />
                                                Et amet risus enim accumsan sit purus sit.</p>
                                        </div>
                                    </div>
                                </div> */}
                               <Allroles/>
                            </div>
                        </div>
                        {/* tp-job-area-end */}
                        {/* tp-cta-area-start */}
                        <div className="tp-cta-area p-relative">
                            <div className="tp-cta-grey-bg grey-bg-2" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="tp-cta-bg" style={{backgroundImage:`url(${ctabg})`}}>
                                            <div className="tp-cta-content tp-inner-font text-center">
                                                <h3 className="tp-section-title text-white">Try our service now!</h3>
                                                <p>Eyerything you need to accept cord payments and grow your business <br />
                                                    anywhere on the planet.</p>
                                                <a className="tp-btn-inner white-bg text-black" href="/services">Try our services</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-cta-area-end */}
                    </main>
                    <Footer/>
                </div>
            </div>
            {/* JS here */}
        </div>
    );
}

export default Role