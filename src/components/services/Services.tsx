import { useState } from 'react';
import './Services.css';
import serviceMain from "../../assets/images/wheel-replacement.png";
import serviceInfo from "../../assets/images/main-1.png";
import oilService from "../../assets/images/oil-change.png";
import breaksService from "../../assets/images/brake-repair1.png";
import engineService from "../../assets/images/engine-repair.png";
import additionalService1 from "../../assets/images/suspension-service.png"; // Add paths for additional services
import additionalService2 from "../../assets/images/electrical-service.png";
import additionalService3 from "../../assets/images/pre-purchase.png";
import LazyLoad from "react-lazyload";
import { useInView } from 'react-intersection-observer';
import useWindowSize from '../../hooks/useWindowSize';

function Services() {
    const { width: windowWidth } = useWindowSize();
    const isMobile = windowWidth <= 768;
    const [showMore, setShowMore] = useState(false);

    const { ref: refOne, inView: inViewOne } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: refTwo, inView: inViewTwo } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: refThree, inView: inViewThree } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: refFour, inView: inViewFour } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: refFive, inView: inViewFive } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section className="services">
            <div className="service-1">
                {!isMobile ?
                    <LazyLoad height={200} offset={100}>
                        <img
                            src={serviceMain}
                            alt="service-1"
                            ref={refOne}
                            className={inViewOne ? 'visible' : ''}
                        />
                    </LazyLoad>
                    : <></>}
            </div>
            <div className="service-content-2">
                <div>
                <span className="material-symbols-sharp">
                    monitor_heart
                </span>
                <span>who we are</span>
                <h2 className='content-2-header'>
                Reliable Certified Car Service and Repair Experts
                </h2>
                <p className='content-2-info'>
                    At our workshop, we're here to handle all your car repair and maintenance needs. Whether you need a quick tune-up or a major fix, our certified technicians are ready to help. Count on us for friendly, expert service every time.
                </p>
                </div>
                {isMobile ?
                    <div className="service-2">
                        <LazyLoad height={200} offset={100}>
                            <img
                                src={serviceInfo}
                                alt="service-2"
                                ref={refTwo}
                                className={inViewTwo ? 'visible' : ''}
                            />
                        </LazyLoad>
                    </div>
                    : <></>}
            </div>
            {!isMobile ?
                <div className="service-2">
                    <LazyLoad height={200} offset={100}>
                        <img
                            src={serviceInfo}
                            alt="service-2"
                            ref={refTwo}
                            className={inViewTwo ? 'visible' : ''}
                        />
                    </LazyLoad>
                </div>
                : <></>}

            <div className="service-3">
                <span className="material-symbols-sharp">
                    monitor_heart
                </span>
                <span>what we offer</span>
                <h2 className='content-3-header'>
                    explore our services
                </h2>
                <div className="service-3-cards">
                    <div className="service-card-1">
                        <LazyLoad height={200} offset={100}>
                            <img
                                src={oilService}
                                alt="oil-service"
                                ref={refThree}
                                className={inViewThree ? 'visible' : ''}
                            />
                        </LazyLoad>
                        <h3>oil & fluids services</h3>
                    </div>
                    <div className="service-card-2">
                        <LazyLoad height={200} offset={100}>
                            <img
                                src={breaksService}
                                alt="brake-service"
                                ref={refFour}
                                className={inViewFour ? 'visible' : ''}
                            />
                        </LazyLoad>
                        <h3>brake service</h3>
                    </div>
                    <div className="service-card-3">
                        <LazyLoad height={200} offset={100}>
                            <img
                                src={engineService}
                                alt="engine-service"
                                ref={refFive}
                                className={inViewFive ? 'visible' : ''}
                            />
                        </LazyLoad>
                        <h3>engine repair</h3>
                    </div>
                    {showMore && (
                        <>
                            <div className="service-card-4">
                                <LazyLoad height={200} offset={100}>
                                    <img
                                        src={additionalService1}
                                        alt="additional-service-1"
                                        className={inViewFive ? 'visible' : ''}
                                    />
                                </LazyLoad>
                                <h3>suspension repair</h3>
                            </div>
                            <div className="service-card-5">
                                <LazyLoad height={200} offset={100}>
                                    <img
                                        src={additionalService2}
                                        alt="additional-service-2"
                                        className={inViewFive ? 'visible' : ''}
                                    />
                                </LazyLoad>
                                <h3>electrical services</h3>
                            </div>
                            <div className="service-card-6">
                                <LazyLoad height={200} offset={100}>
                                    <img
                                        src={additionalService3}
                                        alt="additional-service-3"
                                        className={inViewFive ? 'visible' : ''}
                                    />
                                </LazyLoad>
                                <h3>pre-purchase inspections</h3>
                            </div>
                        </>

                    )}
                    <div className="view-more">
                        <button
                            className='view-more-button'
                            onClick={() => setShowMore(prev => !prev)}
                        >
                            {showMore ? 'View Less Services' : 'View More Services'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
