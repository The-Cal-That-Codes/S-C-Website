import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import "@fontsource/ibm-plex-sans"
import "@fontsource/inter"
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const TextBlockImg = ({ title, children, subtitle, id}) => {

  const controls = useAnimation()
  const [ref, inView] = useInView({
    // Percentage of item in view to trigger animation
    threshold: 0.25,
  })

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "purple-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 6000, quality: 100) {
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
      id="perks"
      Tag="section"
      fluid={data.file.childImageSharp.fluid}
      loading="eager"
      fadeIn={false}
      
    >
      <TextBlockImgWrapper id={id}>
   
       <div className="flex-wrapper">
        <div className="content-container2 bird-card">

          <motion.h2
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
          transition={{ ease: "easeOut", duration: 1.25, delay: 0.25 }}>
            {title}
            </motion.h2>

          <motion.p
          className="tbiheadpara"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
          transition={{ ease: "easeOut", duration: 1.15, delay: 0.75 }}>
          {subtitle}
          </motion.p>

        
          {children}
        

       </div>

      </div> 
     

      </TextBlockImgWrapper>
      
    </BackgroundImage>
  )
}

const TextBlockImgWrapper = styled.section`
  text-align: left;
  
  height: 100vh;
  
  @media (max-width: 450px){
    height: 120vh;
    padding-left: 1vw;
  }

  body{
    background-color: rgb(255, 255, 255, 0)
    
  }


  .flex-wrapper{
    display: flex;
    justify-content: space-between;
    height:100%;
    flex-flow: row wrap;

    
  }

 
  

  }
 

  .content-container2 {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  height: 45vh;
  width: 100vw;
  padding: 3vh;
  background: rgba(1,1,1,0);
  transform: skew(0deg, 0deg);
 
   
  @media (max-width: 1450px){
    margin-bottom: 10vh;
  }

  @media (max-width: 1050px){
    margin-bottom: 5vh;
    height: auto;
    padding: 0px;
    padding-top: 5vh;
    padding-left: 2vw;
    
  }

  @media(max-width: 600px){
    font-size: 14px;
    height: 60vh;
    padding-top: 15vh;
  }
 

  @media (max-width: 450px){
    margin-top: 0vh;
    padding-top: 5vh;
    padding-left: 2vw;
  }
  
  }

  h2 {
    font-weight: bolder;
    font-size: 36px;
    // background: -webkit-linear-gradient(45deg, #513515, #db671e);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    font-family: "IBM Plex Sans";

    @media(max-width: 1367px){
      margin: 0px;
    }
   
    @media(max-width: 1050px){
      font-size: 2.5rem;
      font-weight: 500;
      opacity: 1 !important;
      animation: none !important;
      
    }

    @media(max-width: 600px){
      font-size: 20px;
    }
  }


  p {
    margin-bottom: 2vh;
    font-family: "Inter";
    background: rgba(255,255,255,0.7);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text; 
  }

.tbiheadpara{

  @media(max-width: 1050px){
    display: none;
    animation: none !important;
  }
}
  
.perkmotiondiv{
  @media(max-width: 1050px){
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}


  @keyframes test {
  0%{ opacity: 0;

  }
  100%{
    opacity:1;
  }
}
`

export default TextBlockImg
