import React, { useEffect } from "react"
import styled from "styled-components"
import "@fontsource/roboto"
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const BirdButton = props => {
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
    <>
      {props.anchor ? (
        <motion.div
        className="bbmotiondiv"
         ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
        transition={{ ease: "easeOut", duration: 1.25, delay: 0.25 }}>

        
        <ButtonWrapper
          aria-label={props.label}
          className="anchor"
          as="a"
          href={props.href}
        >
          {props.cta}
        </ButtonWrapper>
        </motion.div>
      ) : (
        <motion.div
        className="bbmotiondiv"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0, },
          hidden: { opacity: 0, y: 25 },
        }}
        transition={{ ease: "easeOut", duration: 1.25, delay: 1.25 }}
        >
        <ButtonWrapper aria-label={props.label} type={props.type}>
          {props.cta}
        </ButtonWrapper>
        </motion.div>
      )}
    </>
  )
}

const ButtonWrapper = styled.button`
  margin-top: 6vh;
  display: inline-block;
  padding: 0 20px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 0.85rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  text-decoration: none;
  box-sizing: border-box;
  background: linear-gradient(90deg, rgba(178, 81, 63,0), rgba(253, 139, 32,0));
  background-size: 400%;
  border-radius: 10px;
  border: 2px solid rgba(255,255,255, 0.7);
  z-index: 1;
  width: auto;
  font-family: "Roboto";
  filter: drop-shadow(3px 4px 2px black);

  @media(max-width: 900px){
    height: 8vh;
    width: 250px;
    margin: 0px;
    
    
  }

  &:hover {
    cursor: pointer;
    animation: animate 8s linear infinite;
    
    

    &::before {
      filter: blur(10px);
      opacity: 1;
      animation: animate 8s linear;
      
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    
    background: linear-gradient(90deg, rgba(255, 127, 39,0.5), rgba(255, 127, 39,0.6), rgba(255, 127, 39,0.6), rgba(255, 127, 39, 0.5));
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
    transition: 0.5s;
  }

  
  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }
`

export default BirdButton
