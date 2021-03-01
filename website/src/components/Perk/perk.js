import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Perk = ({ img, alt, title, content }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    // Percentage of item in view to trigger animation
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <motion.div
    className="perkmotiondiv"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 25 },
      }}
      transition={{ ease: "easeOut", duration: 1, delay: 1.25 }}
    >
      <PerkWrapper className="perk">
        {/* <img src={img} alt={alt} /> */}
        <h3>{title}</h3>
        <p>{content}</p>
      </PerkWrapper>
    </motion.div>
  )
}

const PerkWrapper = styled.article`
  padding: 1rem;
  max-width: 260px;
  display: flex;
  flex-flow: column;
 
   
  @media (max-width: 1450px){
    padding-top: 0px;
  }

  @media(max-width: 600px){
    max-width: 30vw;
    padding: 0.5rem;
    float: left;
    animation: none !important;
    transition: none !important;

    
  }

  @media(max-width: 376px){
    max-width: 30vw;
    margin:1vw;
    padding: 0px;
  }

  
  h3 {
    font-weight: 400;
    color:#f9fbfd;
    margin-top: 0px;
    margin-bottom: 0px;

    @media (max-width: 1450px){
      margin: 1vh;
      margin-bottom: 0px;
    }

    @media(max-width: 600px){
      font-size: 16px;
      width: auto;
      opacity: 1 !important; 
    }
    @media (max-width: 413px){
      margin-bottom: 1px;
      
    }
  }

  p{
     
  @media (max-width: 1450px){
    margin: 1vh;
    margin-top: 0px;
  }

    @media(max-width: 600px){
      font-size: 14px;
      margin-top: 0px;
      opacity: 1 !important; 
    }
    @media(max-width: 376px){
      margin: 0px;
      max-width: 30vw;
      margin-bottom: 2vh;
    }
  }
`

export default Perk
