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

const index = () => (
  <>
    <Banner />
    <Packages
      uximg={uximg}
      digchart={digchart}
      desimg={desimg}
      devimg={devimg}
      digbubbles={digbubbles}
      diglogo={diglogo}
      cardClass="cardContentH1Image flex-Col jcCenter"
      id="packages"
      title2="Digital Marketing"
    />

    <TextBlockImg
      id="perks"
      paraEnter="paraEnter flex-Col"
      paraExit="paraExit flex-Col"
    />

    <TextBlock
      portraitimage1={portraitimage1}
      portraitimage2={portraitimage2}
      id="about"
      paraEnter="paraEnter flex-Col"
      paraExit="paraExit flex-Col"
    />

    <Contact
      id="contact"
      title="Contact us now"
      subtitle="Whether its a new website or an ad campaign we've got you covered. Send us a message and get in touch today!"
    />
  </>
)

export default index
