import React, { useState, useEffect, ChangeEvent,  } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../style.css'
import { Link } from "gatsby"


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
                <h1>TARGETS INFO</h1>
                <h2>KENNETH SIEU</h2>
                <p>5’3’’</p>
                <p>510-325-8022</p>
                <p>kennethsieu@berkeley.edu</p>
                <p><a href="https://www.facebook.com/kennethsieu14 ">Facebook</a></p>
                <p>	“Is suspected of recent misinformation campaigns, able to alter objective facts about any person”
                </p>  
                <h2>LORENZO DE LA CRUZ</h2>
                <p>16 oz</p>
                <p>916-715-2743</p>
                <p>ldelacruz395@berkeley.edu</p>
                <p><a href="https://www.facebook.com/lorenzo.delacruz.52438">Facebook</a></p>
                <p>	“Suspected of running an underground ponzi scheme centered around art museums containing his work. Able to capture one’s soul through an image.”
                </p>  
                <h2>TIFFANY WONG</h2>
                <p>5'7"</p>
                <p>TBD</p>
                <p>TBD</p>
                <p><a href="https://www.facebook.com/lorenzo.delacruz.52438">Facebook</a></p>
                <p>	“Suspected of running an underground ponzi scheme centered around art museums containing his work. Able to capture one’s soul through an image.”
                </p>  
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