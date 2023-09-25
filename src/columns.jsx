import React from "react";

const Columns = () => {
    return(
        <div className="columns">
            <div className="grid1">
            <div> <img src="../../images/icon-sedans.svg" alt="" className="grid-img"/></div>
                <div>
                    <h2>SEDANS</h2>
                    <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
                </div>
                <div> <button className="grid1-button">Learn More</button></div>            
            </div>
            <div className="grid2"> 
                <div> <img src="../../images/icon-suvs.svg" alt="" className="grid-img"/></div>
                <div>
                    <h2>SUVs</h2>
                    <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
                </div>
                <div> <button className="grid2-button">Learn More</button></div>            </div>
            <div className="grid3">
                <div> 
                    <img src="../../images/icon-luxury.svg" alt="" className="grid-img"/>
                </div>
                <div>
                    <h2>Luxury</h2>
                    <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
                </div>
                <div> <button className="grid3-button">Learn More</button></div>            
            </div>
        </div>
    )
}   
export default Columns;