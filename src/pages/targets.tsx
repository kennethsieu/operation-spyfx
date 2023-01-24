import React, { useState, useEffect, ChangeEvent,  } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../style.css'
import { Link } from "gatsby"
import lorenzo from "../images/lorenzo.jpg"


const Targets: React.FC<PageProps> = () => {

  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <div className="static">
            <div className="flavorText">
                <h1>TARGETS</h1>
                <div className="suspect">
                  <div>
                    <img alt="lorenzo" src={lorenzo} />
                  </div>
                  <div className="info">
                  <h2>KENNETH SIEU</h2>
                <p>5’3’’</p>
                <p>510-325-8022</p>
                <p>kennethsieu@berkeley.edu</p> 
                <p><a href="https://www.facebook.com/kennethsieu14 ">Facebook</a></p>
                <p>	“Is suspected of recent misinformation campaigns, able to alter objective facts about any person”
                </p>   
                  </div>
                </div>
                <div className="suspect">
                  <div>
                    <img alt="lorenzo" src={lorenzo} />
                  </div>
                  <div className="info">
                  <h2>LORENZO DELA CRUZ</h2>
                    <p>16 oz</p>
                    <p>916-715-2743</p>
                    <p>ldelacruz395@berkeley.edu</p>
                    <p><a href="https://www.facebook.com/lorenzo.delacruz.52438">Facebook</a></p>
                    <p>	“Suspected of running an underground ponzi scheme centered around art museums containing his work. Able to capture one’s soul through an image.”</p>  
                  </div>
                </div>
                <div className="suspect">
                  <div>
                    <img alt="lorenzo" src={lorenzo} />
                  </div>
                  <div className="info">
                  <h2>TIFFANY WONG</h2>
                <p>5'7"</p>
                <p>415-539-6976</p>
                <p>tiwong11@berkeley.edu</p>
                <p><a href="https://www.facebook.com/profile.php?id=100008446778248">Facebook</a></p>
                <p>	“Suspected of thief of many articles of great value.”
                </p>  
                  </div>
                </div>
                



                <div className="briefLink"><Link to="/breifing">Full Mission Details</Link></div>
                <br></br>
            </div>
            <div className="scanlines"></div>
          </div>
      </body>
    </html>
  )
}

export default Targets

export const Head: HeadFC = () => <title>Targets</title>