import React, {useEffect} from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";
import PackageButton from "../Button/packagebutton";
import { Link } from "react-scroll";
import "@fontsource/ibm-plex-sans";
import "@fontsource/inter";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


const Packages = ({ title,title2, para, para2, uximg, devimg, desimg, digbubbles, diglogo, digchart}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    // Percentage of item in view to trigger animation
    threshold: 0.25,
  })

  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "Hexagon.png" }) {
      childImageSharp {
        fluid(maxWidth: 3500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)

useEffect(() => {
  if (inView) {
    controls.start("visible")
  }
}, [controls, inView])


  return (
    <BackgroundImage
      id="packages"
      Tag="section"
      fluid={data.file.childImageSharp.fluid}
      loading="eager"
      fadeIn={false}
      
    >
    <PackagesWrapper id="packages">
       
    <div className="maincontainer">

      <div className="flex-container">

        <div className="headerServices">
              <h1>{title}</h1>
              <p>{para}</p>
          </div>
          
        <div className="servicecards">
          <motion.div className="ux"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -25 },
          }}
          transition={{ ease: "linear", duration: 0.1, delay: 0.05 }}
          >
            <h2> UX/SEO Included</h2>
            <img src={uximg} alt="Icon by Muhammad Haq on freeicons.io"></img>
            <p>Industry practices applied to achieve your goals</p>
          </motion.div>
          <motion.div className="des"
           ref={ref}
           animate={controls}
           initial="hidden"
           variants={{
             visible: { opacity: 1, x: 0 },
             hidden: { opacity: 0, x: -25 },
           }}
           transition={{ ease: "linear", duration: 0.15, delay: 0.35 }}>
          <h2>Custom Designs</h2>
            <img src={desimg} alt="Icon by Muhammad Haq on freeicons.io"></img>
            <p>Blending your vision with modern practices</p>
          </motion.div>
          <motion.div className="dev"
           ref={ref}
           animate={controls}
           initial="hidden"
           variants={{
             visible: { opacity: 1, x: 0 },
             hidden: { opacity: 0, x: -25 },
           }}
           transition={{ ease: "linear", duration: 0.2, delay: 0.75 }}>
          <h2>Coded for you</h2>
          <img src={devimg} alt="Icon by Muhammad Haq on freeicons.io"></img>
            <p>Built from the ground up, no cheap shortcuts.</p>
          </motion.div>

        </div>

      </div>
      

     

        <div className="flex-container">
        <div className="headerServices">
              <h1>{title2}</h1>
              <p>{para2}</p>
          </div>
        <div className="servicecards">
          <motion.div className="ux"
           ref={ref}
           animate={controls}
           initial="hidden"
           variants={{
             visible: { opacity: 1, x: 0 },
             hidden: { opacity: 0, x: -25 },
           }}
           transition={{ ease: "linear", duration: 0.1, delay: 1.1 }}>
         
            <h2>Social Media</h2>
            <img src={digchart} alt="Icon by Muhammad Haq on freeicons.io"></img>
            <p className="annoyingPtag">Facebook, Instagram, Linked In, Snapchat and more</p>

          </motion.div>
          <motion.div className="des"
           ref={ref}
           animate={controls}
           initial="hidden"
           variants={{
             visible: { opacity: 1, x: 0 },
             hidden: { opacity: 0, x: -25 },
           }}
           transition={{ ease: "linear", duration: 0.15, delay: 1.4 }}>
          <h2>Tracking</h2>
          <img src={digbubbles} alt="Icon by Muhammad Haq on freeicons.io"></img>
            <p>Analytics, Tagging and Reporting</p>
          </motion.div>
          <motion.div className="dev"
           ref={ref}
           animate={controls}
           initial="hidden"
           variants={{
             visible: { opacity: 1, x: 0 },
             hidden: { opacity: 0, x: -25 },
           }}
           transition={{ ease: "linear", duration: 0.2, delay: 1.8 }}>
          <h2>Google Ads</h2>
          <img src={diglogo} alt="Icon by Muhammad Haq on freeicons.io"></img>
            <p>Search, YouTube, Gmail and Display</p>
          </motion.div>

        </div>

      </div>

    </div>

    <div className="buttoncontainer">
    <Link to="perks" smooth={true} duration={500}>
            <span className="sr-only">Jump to perks</span>
      <PackageButton label="Discover more" cta="Our plan for you" className="discoverbutton"/>
      </Link>
      <Link to="contact" smooth={true} duration={800}>
            <span className="sr-only ">Jump to contact</span>
      <PackageButton label="contact now" cta="contact now" className="contactbutton"/>
      </Link>
    </div>

    </PackagesWrapper>
    </BackgroundImage>
  )
}


const PackagesWrapper = styled.section`
  padding: 9vh 0px;
  text-align: center;
  height: 100vh;
  display:flex;
  flex-flow: column;
  background: rgb(39,35,67,0);
  justify-content: space-between;
  overflow-x: hidden;
 
  @media(max-width: 1690px){
    padding-top: 8vh;
  }
  @media (max-width: 1450px){
    padding-bottom: 2vh;
  }
  @media (max-width: 1367px){
    height: 120vh
  }

  @media (max-width: 1050px){
    height: 170vh;
    justify-content: space-evenly;
    padding-bottom: 5vh;
  }

  @media(max-width: 416px){
    height: 200vh ;
    justify-content: flex-start;
    padding-top: 10vh;
  }

  // @media (max-width: 376px){
  //   height: 190vh;
  // }
  
.maincontainer{
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  height: 70vh;
  justify-content: space-between;

  
  @media (max-width: 1690px){
    margin-top: 3vh;
  }

  @media(max-width: 1050px){
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
    height: auto;
    
  }
}

.buttoncontainer{
  display: flex;
  flex-flow: row wrap;
  width: auto;
  height:auto;
  justify-content: center;
  margin-top: 3vh;

  @media (max-width: 1450px){
    padding-top: 8vh;
  }

  @media(max-width: 1050px){
    margin-top: 3vh;
    justify-content: space-evenly;
  }

  @media (max-width: 600px){
    margin-top: 0px;
  }
  
  @media (max-width: 413px){
    margin-top: 8vh;
  }
  

  .discoverbutton{
    margin: 25px;
    background: linear-gradient(90deg, #581534, #ca3e33,  #581534 );
    box-shadow: 7px 7px 10px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  }
}

  .flex-container {
    display:flex;
    flex-flow: column;
    height: 60vh; 
    width: 49%;
    
    margin-top: 5vh;
    border-radius: 20px;
   
    display: flex;
    flex-flow: column;

    @media(max-width: 1050px){
      width: 100%;
      height: auto;
      margin-bottom: 2vh;
    }
  }

  .headerServices{
    text-align: left;
    display: flex;
    flex-flow: column;
    height: auto;
    margin-left: 1vw;
    width:100%;

    @media (max-width: 1450px){
      
    }

    @media(max-width: 1050px){
        margin-bottom: 5vh;

    }

    
   
    p{
      text-align:left;
      width: 100%;
      padding: 10px;
      padding-left: 0px;
      font-family: "Inter";
      color: rgb(255,255,255,0.8);
      font-weight: 300;
      margin: 0px;
      font-family: "Inter";

      @media(max-width: 1690px){
        width: 90%;
      }
      @media(max-width: 1500px){
        width: 100%;
      }

      @media(max-width: 1050px){
        line-height: 2.3vh;
        font-size: 1.5rem;
      }
    }

    h1 {
      background: -webkit-linear-gradient(45deg, white, white);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0px;
      font-weight: bolder;
      font-size: 48px;
      width:100%;
      font-family: "IBM Plex Sans";

      
    @media (max-width: 1690px){
      font-size: 2.5rem;
     
    }

      @media(max-width: 600px){
        font-size: 26px;
      }

      @media (max-width: 413px){
        margin-top: 0px;
      }
    }
  }

 .servicecards{
  display: flex;
  flex-flow: row wrap;
  margin-top:auto;
  width: 100%;
  height: 40vh;
  justify-content: center;
  
  @media(max-width: 1050px){
    height: auto;
  }
 

  .ux, .dev, .des{
    background-color: rgba(0, 43, 92,0.8);
    width: 14vw;
    height: 100%;
    border-radius: 10px;
    margin: 1vw;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
    
    @media(max-width: 1450px){
      height: auto;
    }
    @media(max-width: 1050px){
     width: 30%;
     opacity: 1 !important;
     transform: translateX(0px) !important;

      
    }

    img{
      height: 14vh;
      width: 7vw ;
      margin-top: 2vh;
      margin-bottom: 2vh;
      

      @media(max-width: 413px){
        width: 25vw;
        
      }
      @media(max-width: 1050px){
        width: 25vw;
        height: auto;
      }
    }

    p{
      font-family: "Inter";
      font-weight: 200;
      color: #89c4f4;

      
      }

      @media (max-width: 750px){
        display: none;
      }
    }
    h2{
      font-family: "Inter";
      // background: -webkit-linear-gradient(45deg, #6d1d34, #c33c33);
      background: rgba(200, 255, 255, 0.8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 600;
      font-size: 30px;

      @media (max-width: 600px){
        font-size: 1.5rem;
      }
      @media (max-width: 413px){
        font-size: 1rem;
        height: 7vh;
      }
     }
   
  }

  
 }

  .ux, .dev, .des{
  transition: 0.3s linear;
  padding: 10px;
  box-shadow: 7px 7px 10px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39);

  :hover{
    scale:1.05;
    transition: 0.3s linear;
  }

  

 }
  
 .annoyingPtag{
  @media(max-width: 1290px){
    font-size: 1.15rem  !important;
  }



`

export default Packages
