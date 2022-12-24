import React, { useState, useEffect, ChangeEvent,  } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../style.css'
import { Link } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  const [correct, setCorrect] = useState<boolean>(false)
  const password = "peanuts"

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
    if (value.length >=7) {
      if(value.toLowerCase() == password) {
        setCorrect(true)
      } else {
        window.location.reload();
      }
    }
  };

  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {!correct && (
          <React.Fragment>
              <div className="container2">
                <div className="passRsqt">PASSWORD REQUIRED</div>
                  <input className="password" type="text" onChange={handleChange}/>
              </div>
          </React.Fragment>
        )}
        {correct && (
            <React.Fragment>
              <div className ="access"> ACCESS GRANTED</div>
              <div className="container">
                <div className="prefix">OPERATION</div>
                <div className="glitch" data-text="SPYFX">SPYFX</div>
                <div className="prologueLink"><Link to="/prologue">PRESS HERE TO CONTINUE</Link></div>  
              </div>
            </React.Fragment>
        )}
        <div className="scanlines"></div>
      </body>
    </html>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Mission Cover</title>
