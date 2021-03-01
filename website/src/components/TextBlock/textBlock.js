import React, { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "react-scroll";
import Button from "../Button/button";
import "@fontsource/ibm-plex-sans"
import "@fontsource/inter"

const TextBlock = ({ title, title2, paragraph, children, id, portraitimage1, portraitimage2, alt }) => {
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
    <TextBlockWrapper id={id}>

{/* left content */}
      <div className="cc2">
        <motion.div
          className= "about-wrap1"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
          transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
        >
          <img src={portraitimage1} alt={alt} />
          <div className="image-text-wrapper">
          <h1 className="textblockheaders">{title}</h1>
          <p>Hi I'm Cal, your friendly neighbourhood web developer. </p>
          <p>My passion is to deliver engaging, unique websites that my clients can be proud of. I utilize the latest javascript frameworks and design principles to ensure the only limit is your imagination.</p>
          <p>Through my services I hope to translate your companies identity into a digital asset, for both you and your customers.</p>
          <Link to="contact" smooth={true} duration={500} className="textbtnlink">
        <Button  label="talk to us today!" cta="Get in Touch with Cal!" className="textblockbutton" />
      </Link>
          </div>
        </motion.div>
      </div>

{/* right content */}
      <div className="cc2">
        <motion.div
        className= "about-wrap1"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
          transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
        >
        <img src={portraitimage2} alt={alt} />
          <div className="image-text-wrapper">
            <h1 className="textblockheaders">{title2}</h1>
            <p>I'm Samuel Weiss your expert in contemporary digital marketing.</p>
            <p>From building your brand and awareness for products and services, to making sure the people looking for them will find you first.</p>
            <p>No matter what industry you’re in or who your customers are, we’ll develop a multi-channel integrated marketing strategy tailored to your needs.</p>
      <Link to="contact" smooth={true} duration={500} className="textbtnlink">
        <Button  label="talk to us today!" cta="Contact Sam Now!" className="textblockbutton" />
      </Link>
          </div>
          
        </motion.div>
      </div>

    </TextBlockWrapper>
    </BackgroundImage>
  )
}

const TextBlockWrapper = styled.section`
  // background: linear-gradient(45deg, #02234f, #5e89b0);
  color: #fff;
  text-align: left;
  padding: 60px 20px;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  // align-content: center;
  overflow: hidden;
  justify-content: space-between;

  @media (max-width: 1400px){
    height: 120vh;
    padding-bottom: 0px;
    
  }

.cc2{
    width: auto;
    height:auto;
}

  

  img{
    height: 70vh;
    width:25vw;
    z-index: 4;
    border-radius: 10px;
    // box-shadow: 7px 7px 10px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39);

    // @media (max-width: 1050px){
    //   height: auto;
    //   width: 80%;
    //   align-self: center;
      
    // }
    
    @media (max-width: 1050px){
      display: none;
      
    }
  }

  .about-wrap1{
    
    display: flex;
    flex-direction: row;
    background-color: rgba(0, 43, 92,0.8); 
    width:auto;
    right: 100px;
    margin-top: 12vh;
    padding: 1.25rem;
    border-radius: 20px;
    box-shadow: 7px 7px 10px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39);

    @media(max-width: 1400px){
      width: 48vw;
      opacity: 1 !important;
      transform: translateY(0) !important;
    }

    @media (max-width: 1050px){
      opacity: 1 !important;
      flex-direction: column-reverse;
      width: 90vw;
      margin-top: 6vh;
    }

    @media (max-width: 375px){
      margin-top: 2vh;
    }

    
  }

  .image-text-wrapper{
    
    display: flex;
    flex-direction: column;
    align-self: center;
    height: 70vh;
    width: auto;
    margin-left: 1vw;
    padding: 2rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    border-radius:20px;

    @media (max-width: 1400px){
      padding-top: 10px;
      height: 73vh;
    }

    p{
      @media (max-width: 1400px){
        width: 100%;
        margin: 5px;
        font-size: 1rem;
      }
      @media (max-width: 1050px){
        font-size: 1.8rem;
      }
    }
    
    a{
      width: 100%;
      height: 100%;
      border: 2px solid rgba(255,255,255, 0.7);
      margin-top: 2vh;

      
    @media(max-width: 1370px){
      display: none;
    }

    @media(max-width: 1279px){
      display: block;
    }

      @media (max-width: 1050px){
        height: auto;
        width: auto;
        margin-top: 1vh;
      }

      @media (max-width: 1050px){
        height: auto;
      }
      
    }

    @media (max-width: 1050px){
      padding: 1rem;
    }
    @media (max-width: 1050px){
      height: auto;
    }
  }

  

  // @media (min-width: 768px) {
  //   padding: 80px 30px;
  //   text-align: center;
  // }

  .textblockheaders {
    color: #ee00b3;
    background: -webkit-linear-gradient(45deg, white, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "IBM Plex Sans";
    text-align: left;
    font-weight: 600;
    margin-bottom: 0px;
    font-size: 36px;

    @media (max-width: 1400px){
      font-size: 1.5rem;
    }

    @media (max-width: 1050px){
      font-size: 3rem;
    }

    @media (max-width: 376px){
      font-size: 2rem;
    }
   
  }

  .textblockbutton{
    margin-top: 10px;
    background: rgba(255,255,255, 0);
    border-radius: 0px;
    font-weight: 550;
    font-size: 14px;

    @media(max-width: 1370px){
      display: none;
    }

    @media(max-width: 1279px){
      display: block;
    }

    @media (max-width: 1050px){
      height: 10vh;
      width: 100%;
      font-size: 1.6rem;
      margin-bottom: 0px;
    }

    @media (max-width: 600px){
      font-size: 1.3rem;
    }

    @media (max-width: 450px){
      height: 8vh;
      font-size: 16px;
      padding: 0px;
    }

    @media (max-width: 376px){
      font-size: 14px;
    }

    &:hover {
      cursor: pointer;
      animation: animate 8s linear infinite;
      
  
      &::before {
        filter: blur(30px);
        opacity: 1;
        animation: animate 8s linear;

      }

     
    }

    &::before{  
        border-radius: 5px;
        border: 2px solid rgba(255,255,255, 0.8);
        scale: 0.9;

        

        @media (max-width: 1050px){
          height: 10vh;
          width: 100%;
          
        }

        @media (max-width: 413px){
          font-size: 1rem;
          height: auto;
        }
        
    }
  }

  p {
    text-align: left;
    text-shadow: 0px 0px 5px rgba(8, 0, 8, 1);
    opacity: 0.85;
    font-family: "Inter";
    width: 15vw;

    @media (max-width: 1050px){
      width: auto;
      font-size: 1.5rem;
      
    }
    @media (max-width: 413px){
      font-size: 1.1rem;
    }
  }

`

export default TextBlock
