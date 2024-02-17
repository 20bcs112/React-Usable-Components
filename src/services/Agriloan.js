import React from 'react'
import Header from '../commons/Header';
import Footer from '../commons/Footer';

const Agriloan = () => {
    return (
        <div>
            {/* back-to-top-start  */}
            <button className="scroll-top scroll-to-target" data-target="html">
                <i className="far fa-angle-double-up" />
            </button>
            {/* back-to-top-end  */}
            {/* tp-offcanvus-area-start */}
            <div className="tpoffcanvas-area">
                <div className="tpoffcanvas">
                    <div className="tpoffcanvas__close-btn">
                        <button className="close-btn"><i className="fal fa-times" /></button>
                    </div>
                    <div className="tpoffcanvas__logo text-center">
                        <a href="index.html">
                            <img src="assets/img/logo/logo-white.png" alt="" />
                        </a>
                    </div>
                    <div className="mobile-menu" />
                    <div className="tpoffcanvas__instagram text-center">
                        <div className="tpoffcanvas__instagram-title">
                            <h4>instagram</h4>
                        </div>
                        <a href="#"><img src="assets/img/project/project-inner-4.jpg" alt="" /></a>
                        <a href="#"><img src="assets/img/project/project-inner-5.jpg" alt="" /></a>
                        <a href="#"><img src="assets/img/project/project-inner-6.jpg" alt="" /></a>
                        <a href="#"><img src="assets/img/project/project-inner-7.jpg" alt="" /></a>
                    </div>
                    <div className="tpoffcanvas__info text-center">
                        <h4 className="offcanva-title">we are here</h4>
                        <a href="https://www.google.com/maps/@23.506657,90.3443647,7z" target="_blank">
                            27 Division St, New York, <br />
                            NY 10002, USA
                        </a>
                    </div>
                    <div className="tpoffcanvas__social">
                        <div className="social-icon text-center">
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-instagram" /></a>
                            <a href="#"><i className="fab fa-facebook-square" /></a>
                            <a href="#"><i className="fab fa-dribbble" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-overlay" />
            {/* tp-offcanvus-area-end */}
            <Header/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* breadcrumb-area-start */}
                        <div className="breadcrumb__area breadcrumb-height p-relative blue-bg-2">
                            <div className="breadcrumb__shape-1">
                                <img src="assets/img/breadcrumb/breadcrumb-shape-1.png" alt="" />
                            </div>
                            <div className="breadcrumb__shape-2">
                                <img src="assets/img/breadcrumb/breadcrumb-shape-2.png" alt="" />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="breadcrumb__content">
                                            <h3 className="breadcrumb__title tp-char-animation">Web Design</h3>
                                            <div className="breadcrumb__list tp-title-anim">
                                                <span className="child-one"><a href="#">Home</a></span>
                                                <span className="dvdr"><i className="fal fa-angle-right" /></span>
                                                <span>Help Desk Service Details</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 col-lg-4 text-center text-md-end">
                                        <div className="breadcrumb__img p-relative text-start z-index">
                                            <img className="z-index-3" src="assets/img/breadcrumb/breadcrumb-3.png" alt="" />
                                            <div className="breadcrumb__sub-img wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".4s">
                                                <img src="assets/img/breadcrumb/breadcrumb-sub-1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* breadcrumb-area-end */}
                        {/* service-details-area-start */}
                        <div className="sv-details-area sv-details-space pt-100 pb-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="sv-details-widget">
                                            <div className="sv-details-category mb-30">
                                                <div className="sv-details-category-title">
                                                    <h4 className="sv-details-title-sm">Service Category</h4>
                                                </div>
                                                <div className="sv-details-category-list">
                                                    <ul>
                                                        <li>
                                                            <a href="#"><span>Branding</span><i className="fal fa-angle-right" /></a>
                                                        </li>
                                                        <li className="active">
                                                            <a href="#"><span>Web Design</span><i className="fal fa-angle-right" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span>Mobile Application</span><i className="fal fa-angle-right" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span>Development</span><i className="fal fa-angle-right" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span>Illusutration</span><i className="fal fa-angle-right" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tp-service__dashboard mb-30" data-background="assets/img/service/sv-bg.jpg">
                                                <div className="tp-service__top-content">
                                                    <h3 className="tp-service__title-white">Data Analysis <br /> Tools &amp; Methods</h3>
                                                    <p>Lorem Ipsum is simply dummy text <br /> of the printing</p>
                                                    <a className="tp-btn-orange tp-btn-hover alt-color-white" href="#">
                                                        <span>Work with Us</span>
                                                        <b />
                                                    </a>
                                                </div>
                                                <div className="tp-service__dashdboard-sm-img">
                                                    <img className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s" src="assets/img/service/sv-dashbord.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="sv-details-social-box mb-30">
                                                <h4 className="sv-details-title-sm">Share it.</h4>
                                                <div className="sv-details-social-link">
                                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                                    <a href="#"><i className="fab fa-twitter" /></a>
                                                    <a href="#"><i className="fab fa-instagram" /></a>
                                                    <a href="#"><i className="fab fa-youtube" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8">
                                        <div className="sv-details-wrapper">
                                            <div className="sv-details-thumb mb-45">
                                                <img className="w-100" src="assets/img/service/sv-details-1.jpg" alt="" />
                                            </div>
                                            <div className="sv-details-title-box mb-55">
                                                <h4 className="sv-details-title">Service Overview</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at
                                                    dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                            <div className="sv-details-text mb-35">
                                                <h4 className="sv-details-text-title pb-10">Going Beyond the Usual</h4>
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                            Product Quality: <br />
                                                            <span>Automatically syncs across all your devices. You can also access....</span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                            On Demand Design: <br />
                                                            <span>Images, videos, PDFs and audio files are supported.</span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                            Choice of Service:
                                                            <span>Whatever your business needs, you can choose a service.</span>
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sv-details-text-2">
                                                <h4 className="sv-details-text-title">The Challange</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
                                                    orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod
                                                    dapibus. Lorem ipsum dolor sit amet.!</p>
                                            </div>
                                            <div className="tp-faq-area pt-50">
                                                <div className="container p-0">
                                                    <div className="row g-0">
                                                        <div className="col-xl-12">
                                                            <h4 className="sv-details-title">Any Questions find here.</h4>
                                                            <div className="tp-custom-accordion">
                                                                <div className="accordion tp-inner-font" id="accordionExample">
                                                                    <div className="accordion-items">
                                                                        <h2 className="accordion-header" id="headingOne">
                                                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                                Why should I choose Softec?
                                                                                <span className="accordion-btn" />
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                            <div className="accordion-body">
                                                                                The Softec Shop is built right into your account dashboard, and is accessible
                                                                                immediately after signing up.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="accordion-items tp-faq-active">
                                                                        <h2 className="accordion-header" id="headingTwo">
                                                                            <button className="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                                Do I need to change banks?
                                                                                <span className="accordion-btn" />
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                                            <div className="accordion-body">
                                                                                The Softec Shop is built right into your account dashboard, and is accessible
                                                                                immediately after signing up.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="accordion-items">
                                                                        <h2 className="accordion-header" id="headingThree">
                                                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                                How can I order equipment?
                                                                                <span className="accordion-btn" />
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                                            <div className="accordion-body">
                                                                                The Softec Shop is built right into your account dashboard, and is accessible
                                                                                immediately after signing up.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="accordion-items">
                                                                        <h2 className="accordion-header" id="headingFour">
                                                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                                Do you offer volume discounts?
                                                                                <span className="accordion-btn" />
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                                            <div className="accordion-body">
                                                                                The Softec Shop is built right into your account dashboard, and is accessible
                                                                                immediately after signing up.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="accordion-items">
                                                                        <h2 className="accordion-header" id="headingFive">
                                                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                                How does signing up work?
                                                                                <span className="accordion-btn" />
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                                            <div className="accordion-body">
                                                                                The Softec Shop is built right into your account dashboard, and is accessible
                                                                                immediately after signing up.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* service-details-area-end */}
                        {/* tp-testimonial-area-start */}
                        <div className="tp-testimonial-area pt-130 pb-130 fix" data-background="assets/img/testimonial/testi-bg-5-1.jpg">
                            <div className="container">
                                <div className="row align-items-end tp-testimonial-five-section-space">
                                    <div className="col-md-8">
                                        <div className="tp-testimonial-five-section-box">
                                            <span className="tp-section-subtitle-5">CLIENTS &amp; PROJECTS</span>
                                            <h3 className="tp-section-title-5">About Customer <span>Stories</span></h3>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tp-testimonial-five-arrow d-flex align-items-center justify-content-start justify-content-md-end">
                                            <div className="test-next">
                                                <button><i className="far fa-arrow-left" /></button>
                                            </div>
                                            <div className="test-prev">
                                                <button><i className="far fa-arrow-right" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid p-0">
                                <div className="row g-0">
                                    <div className="col-12">
                                        <div className="tp-testimonial-five-slider-section">
                                            <div className=" swiper-container testimonial-five-slider-active">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="tp-testimonial-five-item">
                                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                                    <div className="tp-testimonial-five-avata">
                                                                        <img src="assets/img/testimonial/testi-icon-5-4.png" alt="" />
                                                                    </div>
                                                                    <div className="tp-testimonial-five-author-info">
                                                                        <h4>Joann J.</h4>
                                                                        <span>Community Organiser</span>
                                                                    </div>
                                                                </div>
                                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                                    <img src="assets/img/testimonial/testi-logo-5-2.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="tp-testimonial-five-content">
                                                                <p>“ This is really awesome. many small businessmen are
                                                                    suffering from this service in different platform and the
                                                                    lovers are always looking this kind of feature on
                                                                    their own website. ”
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="tp-testimonial-five-item">
                                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                                    <div className="tp-testimonial-five-avata">
                                                                        <img src="assets/img/testimonial/testi-icon-5-2.png" alt="" />
                                                                    </div>
                                                                    <div className="tp-testimonial-five-author-info">
                                                                        <h4>Steven G.</h4>
                                                                        <span>Community Organiser</span>
                                                                    </div>
                                                                </div>
                                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                                    <img src="assets/img/testimonial/testi-logo-5-1.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="tp-testimonial-five-content">
                                                                <p>“ This is really awesome. many small businessmen are
                                                                    suffering from this service in different platform and the
                                                                    lovers are always looking this kind of feature on
                                                                    their own website. ”
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="tp-testimonial-five-item">
                                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                                    <div className="tp-testimonial-five-avata">
                                                                        <img src="assets/img/testimonial/testi-icon-5-3.png" alt="" />
                                                                    </div>
                                                                    <div className="tp-testimonial-five-author-info">
                                                                        <h4>Gary M. Adams</h4>
                                                                        <span>Community Organiser</span>
                                                                    </div>
                                                                </div>
                                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                                    <img src="assets/img/testimonial/testi-logo-5-3.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="tp-testimonial-five-content">
                                                                <p>“ This is really awesome. many small businessmen are
                                                                    suffering from this service in different platform and the
                                                                    lovers are always looking this kind of feature on
                                                                    their own website. ”
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="tp-testimonial-five-item">
                                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                                    <div className="tp-testimonial-five-avata">
                                                                        <img src="assets/img/testimonial/testi-icon-5-4.png" alt="" />
                                                                    </div>
                                                                    <div className="tp-testimonial-five-author-info">
                                                                        <h4>Edward G. Hall</h4>
                                                                        <span>Community Organiser</span>
                                                                    </div>
                                                                </div>
                                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                                    <img src="assets/img/testimonial/testi-logo-5-3.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="tp-testimonial-five-content">
                                                                <p>“ This is really awesome. many small businessmen are
                                                                    suffering from this service in different platform and the
                                                                    lovers are always looking this kind of feature on
                                                                    their own website. ”
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="tp-testimonial-five-item">
                                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                                    <div className="tp-testimonial-five-avata">
                                                                        <img src="assets/img/testimonial/testi-icon-5-1.png" alt="" />
                                                                    </div>
                                                                    <div className="tp-testimonial-five-author-info">
                                                                        <h4>Erma P. Brown</h4>
                                                                        <span>Community Organiser</span>
                                                                    </div>
                                                                </div>
                                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                                    <img src="assets/img/testimonial/testi-logo-5-2.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="tp-testimonial-five-content">
                                                                <p>“ This is really awesome. many small businessmen are
                                                                    suffering from this service in different platform and the
                                                                    lovers are always looking this kind of feature on
                                                                    their own website. ”
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tp-scrollbar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-testimonial-area-end */}
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
export default Agriloan