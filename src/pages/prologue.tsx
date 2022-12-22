import React, { useState, useEffect, ChangeEvent,  } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../style.css'
import { Link } from "gatsby"


const Prologue: React.FC<PageProps> = () => {

  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <div className="connection">Connection Established</div>
        <div className="loading">Loading</div>
        <div className="closed">Connection Closed</div>
        <div className = "type">
            <div className="flavorText">
              <hr></hr>
              <div id = "greeting">Good morning or perhaps good evening Agent</div> 
              <br></br>
              <div id = "crisis"> The peace of world is currently at stake. A cult has infiltrated our esteemed establishment. They </div>
              <div id = "entity">have no regards for normality and worship some outer entity named ...</div>
              <br></br>
              <div className="center" id = "paul">Paul?</div>
              <br></br>
              <div id="dancer">Your mission is to infiltrate the AFX organization and become an AFX DANCER</div>
              <br></br>
              <div className="center">
                <div id="ops">OPERATION: SPYFX </div>
                <br></br>
                <div id="target">Your targets are:</div>
                <br></br>
                <div id="ken">Kenneth Sieu</div> 
                <div id="lorenzo">Lorenzo De La Cruz</div> 
                <div id="tiff">Tiffany Wong</div> <br></br>
              </div>
              <div id="bunch">They are a reclusive bunch, however they are directing an elusive dance team. Your mission is to </div>
              <div id="monitor">monitor any seditious activites. Be aware many adversarial orgs have also followed to suit. Be</div> 
              <div id="confront">prepared to confront them.</div>
              <br></br>
              <div id="luck">Good Luck</div>
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

export default Prologue

export const Head: HeadFC = () => <title>Prologue</title>
