import './Hero.css'
import useWindowSize from '../../hooks/useWindowSize';

function Hero() {
    const { width: windowWidth } = useWindowSize();
    const isMobile = windowWidth <= 768;

    return (
        <>
            <section className="hero ">
                <div className="hero-container ">
                    <h1 className="">S2 AUTO
                    </h1>
                    <h2>EXPERT CAR REPAIRS <br />GUARANTEED QUALITY</h2>
                    <p>We provide highly skilled mechanics and exceptional customer <br /> service, all at competitive rates for vehicle repairs.</p>
                    <div className="hero-contact">
                        <button className="hero-button">contact us</button>
                        {isMobile ? <br /> : <></>}
                        <span className="hero-phone material-symbols-sharp">phone_in_talk</span>
                        <span className="hero-phone-number">473 605 2600</span>
                    </div>
                </div>
                <div className="hero-banner">
                    <div className='best-price'>
                        <span className="material-symbols-sharp banner-symbol">
                            paid
                        </span>
                        <span className='banner-point'>
                            BEST PRICES ALWAYS
                        </span>
                    </div>
                    <div className='guarantee'>
                        <span className="material-symbols-sharp banner-symbol">
                            thumb_up
                        </span>
                        <span className='banner-point'>
                            100% GUARANTEE
                        </span>
                    </div>
                    <div className="certified">
                        <span className="material-symbols-sharp banner-symbol">
                            verified_user
                        </span>
                        <span className='banner-point'>
                            CERTIFIED MECHANICS
                        </span>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
