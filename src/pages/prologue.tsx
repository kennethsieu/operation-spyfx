import React, { useState, useEffect, ChangeEvent,  } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../style.css'
import { Link } from "gatsby"


const Prologue: React.FC<PageProps> = () => {
  const [count, setCount] = useState(0);
  const delay = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  function greeting() {
    var s = "Good morning or perhaps good evening Agent"
    var start = 80
    var pause1 = 12
    var len = s.length
    if(count < start) {
      return ""
    } else if (count >= start && count < start + pause1) {
      return s.substring(0, count - start + 1)
    } else if(count >= start + pause1 && count < start + pause1 + delay) {
      return s.substring(0, pause1)
    } else {
      return s.substring(0, Math.min(len, count - start - delay))
    }
  }

  
  function crisis() {
    var s = "The peace of world is currently at stake. A cult has infiltrated our esteemed establishment. They have no regards for normality and worship some outer entity named ..."
    var start = 140
    var pause1 = 41
    var pause2 = 92
    var len = s.length
    if(count < start) {
      return ""
    } else if (count >= start && count < start + pause1) {
      return s.substring(0, count - start + 1)
    } else if(count >= start + pause1 && count < start + pause1 + delay) {
      return s.substring(0, pause1)
    } else if(count >= start + pause1 + delay && count < start + delay + pause2) {
      return s.substring(0, count - start - delay + 1)
    } else if (count >= start + pause2 + delay && count < start + pause2 + delay + delay) {
      return s.substring(0, pause2)
    } else {
      return s.substring(0, Math.min(len, count - start - delay - delay))
    }
  }


  function dancer() {
    var s = "Your mission is to infiltrate the AFX organization and become an AFX DANCER"
    var start = 400
    var len = s.length
    if(count < start) {
      return ""
    } else {
      return s.substring(0, Math.min(len, count - start))
    }
  }

  function bunch() {
    var s = "They are a reclusive bunch, however they are directing an elusive dance team. Your mission is to monitor any seditious activities. Be aware many adversarial orgs have also followed to suit. Be prepared to confront them."
    var start = 720
    var pause1 = 27
    var pause2 = 77
    var pause3 = 130
    var pause4 = 189
    var len = s.length
    if(count < start) {
      return ""
    } else if (count >= start && count < start + pause1) {
      return s.substring(0, count - start + 1)
    } else if(count >= start + pause1 && count < start + pause1 + delay) {
      return s.substring(0, pause1)
    } else if(count >= start + pause1 + delay && count < start + delay + pause2) {
      return s.substring(0, count - start - delay + 1)
    } else if (count >= start + pause2 + delay && count < start + pause2 + delay * 2) {
      return s.substring(0, pause2)
    }else if (count >= start + pause2 + delay * 2 && count < start + delay * 2 + pause3) {
      return s.substring(0, count - start - delay * 2 + 1)
    }else if (count >= start + pause3 + delay * 2 && count < start + pause3 + delay * 3) {
      return s.substring(0, pause3)
    }else if (count >= start + pause3 + delay * 3 && count < start + delay * 3 + pause4) {
      return s.substring(0, count - start - delay * 3 + 1)
    }else if (count >= start + pause4 + delay * 3 && count < start + pause4 + delay * 4) {
      return s.substring(0, pause4)
    } else {
      return s.substring(0, Math.min(len, count - start - delay * 4))
    }
  }

  function monitor() {
    var s = ""
    var start = 836
    var pause1 = 32
    var pause2 = 91
    var len = s.length
    if(count < start) {
      return ""
    } else if (count >= start && count < start + pause1) {
      return s.substring(0, count - start + 1)
    } else if(count >= start + pause1 && count < start + pause1 + delay) {
      return s.substring(0, pause1)
    } else if(count >= start + pause1 + delay && count < start + delay + pause2) {
      return s.substring(0, count - start - delay + 1)
    } else if (count >= start + pause2 + delay && count < start + pause2 + delay + delay) {
      return s.substring(0, pause2)
    } else {
      return s.substring(0, Math.min(len, count - start - delay - delay))
    }
  }

  function confront() {
    var s = ""
    var start = 960
    var len = s.length
    if(count < start) {
      return ""
    } else {
      return s.substring(0, Math.min(len, count - start))
    }
  }

  function luck() {
    var s = "Good Luck"
    var start = 1000
    var len = s.length
    if(count < start) {
      return ""
    } else {
      return s.substring(0, Math.min(len, count - start))
    }
  }

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
            <hr />
              <div>{greeting()}</div>
              <br></br>
              <div>{crisis()} </div>
              <br></br>
              <div className="center" id = "paul">Paul?</div>
              <br></br>
              <div>{dancer()}</div>
              <br></br>
              <div className="center">
                <div id="ops">OPERATION: SPYFX </div>
                <br></br>
                <div id="target">Your targets are:</div>
                <br></br>
                <div id="ken">Kenneth Sieu</div> 
                <div id="lorenzo">Lorenzo Dela Cruz</div> 
                <div id="tiff">Tiffany Wong</div> <br></br>
              </div>
              <div>{bunch()} </div>
              <div>{monitor()}</div> 
              <div>{confront()}</div>
              <br></br>
              <div>{luck()}</div>
              <br></br>
              {count > 1025 && (
                <div className="proLink">
                <div><Link to="/breifing">Full Mission Details</Link></div>
                <div><Link to="/targets">Target Info</Link></div>
              </div>
              )}
              <br></br>
            </div>
          </div>
        <div className="scanlines"></div>
      </body>
    </html>
  )
}

export default Prologue

export const Head: HeadFC = () => <title>Prologue</title>
