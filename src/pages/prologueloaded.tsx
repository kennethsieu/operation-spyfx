import React, { useState, useEffect, ChangeEvent,  } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../style.css'
import { Link } from "gatsby"


const PrologueLoaded: React.FC<PageProps> = () => {

  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <div className = "type">
            <div className="flavorText">
              <hr></hr>
              Good morning or perhaps good evening Agent
              <br></br>
              <br></br>
                The peace of world is currently at stake. A cult has infiltrated our esteemed establishment. They 
                have no regards for normality and worship some outer entity named ...
              <br></br>
              <br></br>
              <div className="center">Paul?</div>
              <br></br>
              <div>Your mission is to infiltrate the AFX organization and become an AFX DANCER</div>
              <br></br>
              <div className="center">
                <div>OPERATION: SPYFX </div>
                <br></br>
                <div>Your targets are:</div>
                <br></br>
                <div>Kenneth Sieu</div> 
                <div>Lorenzo De La Cruz</div> 
                <div>Tiffany Wong</div> <br></br>
              </div>
              <div>They are a reclusive bunch, however they are directing an elusive dance team. Your mission is to </div>
              <div>monitor any seditious activites. Be aware many adversarial orgs have also followed to suit. Be</div> 
              <div>prepared to confront them.</div>
              <br></br>
              <div>Good Luck</div>
              <br></br>
              <div className="briefLink"><Link to="/breifing">Full Mission Details</Link></div>
              <div className="briefLink"><Link to="/targets">Target Info</Link></div>
            </div>
          </div>
        <div className="scanlines"></div>
      </body>
    </html>
  )
}

export default PrologueLoaded

export const Head: HeadFC = () => <title>Prologue</title>