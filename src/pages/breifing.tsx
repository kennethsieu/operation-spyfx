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
        <div className = "static">
            <div className="flavorText">
                <h1>Operation: SPYFX</h1>
                <h2>Mission Goals</h2>
                <p> Hello Agent. Your targets are reportedly involved 
                  in creating a SPY x FAMILY themed set. Yes, it is an anime themed set, 
                  however, early surveillance shows your targets care very much about the 
                  “team experience”. They do not expect their dancers to have any knowledge 
                  of SPY x FAMILY, nor are they required to watch it. This should make 
                  infiltration significantly easier. 
                </p>
                <p>One of our agents has recorded one of their conversations:</p>
                <p>“If they think anime is cringe, that's ok. They should treat the set 
                  theme as a found family. If the choreo is good and people are having fun, 
                  they should have a great time.”
                </p>
                <p>
                This message is unclear, we suspect they may be delusional, or even crazy, 
                regardless, be very wary, these individuals are unpredictable and highly 
                dangerous. Thus, this is an S-Class Operation. We trust that you have what 
                it takes to execute this mission successfully. 
                </p>
                <h2>Mission Logistics</h2>
                  <p> First practice is February 8th, there are two practices a week</p>
                  <ul>
                    <li>Wednesday 6:30 - 9:00 pm, Lower Sproul</li>
                    <li>Friday 6:30 - 9:00 pm, Haas Pavilion</li>
                  </ul>
                  <p>You must attend the first practice, or contact the directors if you 
                    cannot. <b>Failure will result in immediate failure and dismissal 
                    from the mission.</b> 
                  </p>
                  <p>In addition you must be available for:</p>
                  <ul>
                    <li>Show and Tell (4/19)</li>
                    <li>AFX Spring 2023 Showcase (TBD)</li>
                  </ul>
                  <p>If you unable to fulfill this mission’s scheduling parameters, 
                    please fill out the <a href="roster.afx.dance/teamswitch">drop/switch form</a>
                  </p>
                  <p>Agents are also expected to do the following to not jeopardize the mission
                  </p>
                  <ul>
                    <li>No Phones, you must be attentive </li>
                    <li>Wear appropriate clothing</li>
                    <li>Respect other Dancers</li>
                    <li>Be Open to “New Experiences” and “Fun”</li>
                  </ul>
                  <h2>Mission Attendance</h2>
                  <p>The directors are cruel and do not tolerate late dancers.
                     <b>THERE IS NO BERKELEY TIME. LATE DANCERS WILL BE PUNISHED WITH CONDITIONING.</b> 
                  </p>
                  <p>For the mission, you are expected to attend all practices. 
                    Unexcused absences will result in the following consequences:
                  </p>
                  <ul>
                    <li>1 absence: No punishment</li>
                    <li>2 absences: Bad blocking </li>
                    <li>3 absences:
                      <b>DROPPED FROM THE TEAM, INTERROGATED AS AN ENEMY SPY AND THEN SENT TO SHADOW PRISON</b> </li>
                  </ul>
                  <p>
                  Please notify the directors, via a Facebook Messenger Group Chat 
                  (w/ all directors added), if you are unable to make practice due to illness, 
                  exams or other extenuating circumstances.
                  </p>
                  <h2>Mission Communications</h2>
                  <ul>
                    <li>OPERATION: Spyfx Facebook Group
                      <ul>
                        <li>Facebook Group with important Announcements & Events. 
                          These posts contain valuable information and are mandatory to read.
                        </li>
                        <li>They will have Reading Questions (RQs) that you must answer. </li>
                        <li>Failure to answer will result in extra conditioning.</li>
                      </ul>
                    </li>
                    <li>Facebook Messenger Announcements [A] Chat
                      <ul>
                        <li><b>DO NOT MUTE</b></li>
                        <li>The directors will post important announcements and reminders in this chat</li>
                        <li>Do not post anything here</li>
                      </ul>
                    </li>
                    <li>Facebook Messenger Social [S] Chat
                      <ul>
                        <li>An open channel to talk with your fellow agents and your targets.</li>
                        <li>It may be filled with propaganda, events, and other info.</li>
                      </ul>
                    </li>
                    <li>Paul Forger 
                      <ul>
                        <li>A former research experiment, Paul is a wanted villain possessing 
                          the ability to access one’s deepest, darkest secrets and confessions.
                           He will regularly release these on a page of sorts… be beary weary 
                           of him.</li>
                        <li>(Submit your confessions and feed his propaganda machine)</li>
                      </ul>
                    </li>
                    <li>OPERATION: Spyfx Link Tree (tinyurl.com/spfxlinks)
                      <ul>
                        <li>A Google Doc with all the links you will need 
                          (Team Google Drive, Confessions Submission Forms, Facebook Groups 
                          etc etc) for organizational purposes. </li>
                      </ul>
                    </li>
                  </ul>
                  <h2>Mission Dues / Switch / Drop</h2>
                  <ul>
                    <li>Dues will be $30 (Cash or Venmo payable to @lorenzodc27), 
                      with a $5 additional LATE FEE every practice past deadline: </li>
                    <li>Team apparel (mandatory) and gen apparel (optional) are NOT covered by these dues</li>
                    <li>Please let HQ know if you have financial concerns. We value our Agents more than finances.</li>
                    <li>If you unable to make the mission, fill out this <a href="roster.afx.dance/teamswitch">form</a> to 
                      be reassigned or removed.</li>
                  </ul>
                  <h2>MESSAGE FROM HQ</h2>
                  <p>Safety and Responsibility Contract</p>
                  <ul>
                    <li>As of Spring 2019, all dancers are required to sign the “Mandatory Contract on Safety and Responsibility” in order to keep members of AFX Dance more accountable for harassment/assault.</li>
                    <li>Failure to do so by Saturday, 2/17 @ 11:59PM will result in you being DROPPED FROM AFX WITH NO REFUND.</li>
                    <li>We want to maintain a safe team environment for everyone this semester and will take any allegations regarding harassment/assault within the team extremely seriously. </li>
                  </ul>
                  <br></br>
                  <h2>Good Luck Agent, the fate of the world is in your hands. </h2>

                <div className="briefLink"><Link to="/targets">Target Info</Link></div>
                <br></br>
                <br></br>
                <div className="scanlines"></div>
            </div>
          </div>
       
      </body>
    </html>
  )
}

export default Breifing

export const Head: HeadFC = () => <title>Full Mission Details</title>