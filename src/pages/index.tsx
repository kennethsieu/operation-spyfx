import React, { useState, useEffect, ChangeEvent,  } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../style.css'
import { Link } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  const [correct, setCorrect] = useState<boolean>(false)
  const password = "peanuts"
  const [pass, setPass] = useState<String>("")


  React.useEffect(() => {
    if (!correct) {
      window.addEventListener('keydown', (event) => {
        setPass(pass + event.key)
        if (pass.length >= 7 && !correct) {
          if (pass == password) {
            setCorrect(true)
          } else {
            window.location.reload();
          }
        }
      });
    } 
  }, [pass]);
  
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
                <div className="password">{pass}</div>
              </div>
          </React.Fragment>
        )}
        {correct && (
            <React.Fragment>
              <div className="container">
                <div className="prefix">OPERATION</div>
                <div className="glitch" data-text="SPYFX">SPYFX</div>
                <div className="prologueLink"><Link to="/prologue">PRESS HERE TO CONTINUE</Link></div>
              </div>
              <div className ="access"> ACCESS GRANTED</div>
            </React.Fragment>

        )}
        <div className="scanlines"></div>
      </body>
    </html>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Mission Cover</title>
