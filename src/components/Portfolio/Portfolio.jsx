import './Portfolio.css';

const Portfolio = () => {
    return(
        <>
            <section id='portfolio' className="portfolio-container">
                <h5>Portfolio</h5>

                <div className='row'>
                    <div className='column'>
                        <img src="./assets/project-images/Brainflix.png" alt="" className='brainflix'/>
                        <div className="overlay" id="brainflix-overlay">
                            Brainflix
                        </div>
                    </div>

                    <div className='column'>
                        <img src="./assets/project-images/Bandsite.png" alt="" className='bandsite'/>
                        <div className="overlay" id="bandsite-overlay">
                            Bandsite
                        </div>
                    </div>

                    <div className='column'>
                        <img src="./assets/project-images/Always-Eating-Well.png" alt="" className='always-eating-well'/>
                        <div className="overlay" id="always-eating-well-overlay">
                            Always Eating Well
                        </div>
                    </div>
                </div>
            
            </section>
        
        
        </>
        
    )

}

export default Portfolio;