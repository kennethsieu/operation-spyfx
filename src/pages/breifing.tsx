import React, { useState, useEffect, ChangeEvent,  } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../style.css'
import { Link } from "gatsby"


const Breifing: React.FC<PageProps> = () => {

  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <div className = "type">
            <div className="flavorText">
                Sllybus Shit Goes Here
                <div className="briefLink"><Link to="/prologueloaded">Mission Overview</Link></div>
                <div className="briefLink"><Link to="/targets">Target Info</Link></div>
            </div>
          </div>
        <div className="scanlines"></div>
      </body>
    </html>
  )
}

export default Breifing

export const Head: HeadFC = () => <title>Full Mission Details</title>