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
        <div className = "type">
            <div className="flavorText">
                Director Info Goes Here
                <div className="briefLink"><Link to="/breifing">Full Mission Details</Link></div>
              <div className="briefLink"><Link to="/prologueloaded">Mission Overview</Link></div>
            </div>
          </div>
        <div className="scanlines"></div>
      </body>
    </html>
  )
}

export default Targets

export const Head: HeadFC = () => <title>Targets</title>