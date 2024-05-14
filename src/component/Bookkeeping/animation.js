import React, { useState, useEffect } from 'react';
import "./animation.css";

function Animation() {
    const [showCTA, setShowCTA] = useState(false);

    useEffect(() => {
        // Set a timeout to simulate the transition effect after the component mounts
        const transitionTimeout = setTimeout(() => {
            setShowCTA(true);
        }, 500); // Adjust the timeout duration as needed

        // Clear the timeout when the component unmounts to avoid memory leaks
        return () => clearTimeout(transitionTimeout);
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <>
             
                <div className="new-cta-bar__container position-relative " style={{}}>
                    <div className="container-fluid">
                        <div className="row w-100 ">
                            <div className="new-cta-bar__content  position-relative w-100 d-flex flex-column align-items-center justify-content-center">
                                <p className="has-text-align-center text-white font-additional">
                                    JOIN OVER
                                </p>
                                <h2 className="wp-block-heading has-text-align-center text-white font-additional font-size-xxl text-nowrap">
                                    30 Million
                                </h2>
                                <p className="has-text-align-center text-white font-additional">
                                    Business Owners Who Have Used Freshbooks
                                </p>
                                <div className="fp-animate fp-animate__zoom_in_alt fp-animate__zoom_in_alt--on-hover mt-5 mb-2 position-relative">
                                    <button
                                        className="btn btn-success new-cta-bar__cta-button text-nowrap"
                                        data-qualified-action="showExperience"
                                        data-qualified-arg="experience-1664989912225"
                                        data-qualified-smart-cta-allow-default="true"
                                        data-track-on-click-attached="true"
                                    >
                                        Talk to a Specialist
                                    </button>
                                </div>
                                <div className="new-cta-bar__after-cta-button text-white position-relative text-center">
                                    Sign up with Bench through FreshBooks for 20% off your first 6
                                    months!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="new-cta-bar__image-wrapper overflow-hidden position-absolute"
                        style={{
                            transition: 'transform 1s ease-in-out',
                            transform: showCTA ? 'translateX(-105%)' : 'translateX(-500%)'
                        }}
                    >
                        <img
                            loading="lazy"
                            decoding="async"
                            width={450}
                            height={400}
                            src="https://www.freshbooks.com/wp-content/uploads/2021/05/product-tour-ctaBarBottomLeft-1.png"
                            className="new-cta-bar__image"
                            alt=""
                        />


                    </div>
                    <div className="new-cta-bar__image-wrapper overflow-hidden position-absolute"
                        style={{
                            transition: 'transform 1s ease-in-out',
                            transform: showCTA ? 'translateX(130%)' : 'translateX(400%)'
                        }}
                    >

                        <img
                            loading="lazy"
                            decoding="async"
                            width={330} 
                            height={280}
                            src="https://www.freshbooks.com/wp-content/uploads/2021/05/product-tour-ctaBarTopRight-1.png"
                            className="new-cta-bar__image"
                            alt=""
                        />
                         
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <img
                            loading="lazy"
                            decoding="async"
                            width={370}
                            height={200}
                            src="https://www.freshbooks.com/wp-content/uploads/2021/05/product-tour-ctaBarBottomRight-1.png"
                            className="new-cta-bar__image mt-2 overflow-hidden "
                            alt=""
                        /></div>
                    </div>


                </div>
            
        </>
    );
}

export default Animation;
