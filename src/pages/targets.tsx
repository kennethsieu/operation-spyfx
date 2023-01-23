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
                <h1>TARGETS</h1>
                <img
                  alt="Gatsby G Logo"
                  src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
                />
                <h2>KENNETH SIEU</h2>
                <p>5’3’’</p>
                <p>510-325-8022</p>
                <p>kennethsieu@berkeley.edu</p>
                <p><a href="https://www.facebook.com/kennethsieu14 ">Facebook</a></p>
                <p>	“Is suspected of recent misinformation campaigns, able to alter objective facts about any person”
                </p>  
                <h2>LORENZO DELA CRUZ</h2>
                <p>16 oz</p>
                <p>916-715-2743</p>
                <p>ldelacruz395@berkeley.edu</p>
                <p><a href="https://www.facebook.com/lorenzo.delacruz.52438">Facebook</a></p>
                <p>	“Suspected of running an underground ponzi scheme centered around art museums containing his work. Able to capture one’s soul through an image.”
                </p>  
                <h2>TIFFANY WONG</h2>
                <p>5'7"</p>
                <p>415-539-6976</p>
                <p>tiwong11@berkeley.edu</p>
                <p><a href="https://www.facebook.com/profile.php?id=100008446778248">Facebook</a></p>
                <p>	“Suspected of theif of many articles of great value.”
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