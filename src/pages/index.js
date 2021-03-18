import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Packages from "../components/Packages/packages"
import Contact from "../components/Contact/contact"
import portraitimage1 from "../images/portrait1.jpg"
import portraitimage2 from "../images/portrait2.jpg"
import uximg from "../images/ux.png"
import desimg from "../images/des.png"
import devimg from "../images/dev.png"
import digchart from "../images/digchart.png"
import digbubbles from "../images/digbubbles.png"
import diglogo from "../images/diglogo.png"



export default () => (
  <>
    <Banner />
    <Packages
      uximg={uximg}
      digchart={digchart}
      desimg={desimg}
      devimg={devimg}
      digbubbles={digbubbles}
      diglogo={diglogo}
      
      id="packages"
      title2="Digital Marketing"
      para="Sites designed to excel your brand and hand coded for the online presence you need"
      para2="Holistic digital advertising structure across a wide range of channels."
    />
    
  
    <TextBlockImg
      id="perks"
    />

    <TextBlock
      portraitimage1={portraitimage1}
      portraitimage2={portraitimage2}
      id="about"
       />
      
   
    <Contact
      id="contact"
      title="Contact us now"
      subtitle="Get in touch and start your project today!"
    />
  </>
)
