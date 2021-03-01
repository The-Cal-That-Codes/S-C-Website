import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"

import BirdButton from "../components/Button/birdbutton"
import Packages from "../components/Packages/packages"
// import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"
import portraitimage1 from "../images/portrait1.PNG"
import portraitimage2 from "../images/portrait2.PNG"
import uximg from "../images/ux.png"
import desimg from "../images/des.png"
import devimg from "../images/dev.png"
import digchart from "../images/digchart.png"
import digbubbles from "../images/digbubbles.png"
import diglogo from "../images/diglogo.png"




// import { MdDone, MdClear } from "react-icons/md"

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
      title="Web Development to impress your clients"
      title2="Digital Marketing to boost your presence"
      para="Hand coded websites built to achieve your goals and tailored to your satsifaction. All sites are designed to be a high quality asset to your business including User Experience and SEO integration."
      para2="Holistic digital advertising structure across a wide range of channels. Reach the right people in the right places, and see exactly how they interact with your website."
    >
    
    </Packages>
    <TextBlockImg
      id="perks"
      title="Digital Marketing and Digital Design combined to bring you success"
      subtitle="In Modern business an online presence is almost a requirement and with so many complicated aspects achieving the identity and results you desire while staying on budget can be difficult at best.
       We are here to make it easier with everything you need in one place, offering sophisticated web development- to engage your customers
        customers with the information they need to make the most out of your services as well as comprehensive marketing- to provide your business with an evolving and expanding pool of new clientele. "
    >
      <div className="flex-container trio-block">
        <Perk
          img={perk1Img}
          alt="Presence increases"
          title="Impactful Presence"
          content="Influential UX and calculated marketing to ensure every advantage."
        />
        <Perk
          img={perk2Img}
          alt=""
          title="Unlocked potential"
          content="Increase your revenue and stay ahead of the competition."
        />
        <Perk
          img={perk3Img}
          alt="Great savings to be made"
          title="Flexible packages"
          content="We cooperate with you and your budget to achieve your goals."
        />
         <Link to="about" smooth={true} duration={500}>
          <BirdButton label="So who are we?" cta="So who are we?" className="birdbutton"/>
          </Link>
      </div>
    
    </TextBlockImg>
    <TextBlock
      portraitimage1={portraitimage1}
      portraitimage2={portraitimage2}
      alt="A picture of Sam/Cal"
      id="about"
      title="Web development"
      title2="Digital Marketing"
       >
      
    </TextBlock>
    
   
    <Contact
      id="contact"
      title="Get your project started today!"
      subtitle="Every second counts when you're looking to get your new business started or start making the most of your current one. Drop Startup a message and start making the most of the digital age."
    />
  </>
)
