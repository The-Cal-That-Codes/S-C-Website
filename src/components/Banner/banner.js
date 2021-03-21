import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "../Button/button"
import TextLoop from "react-text-loop";
import {motion} from "framer-motion"
import BannerContact from "../Contact/bannercontact"
import { BannerStyles } from "../../styles/bannerStyles"
import { Link } from "react-scroll";

const Banner = (id) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "flames.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 5184, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 0 },
  }


let [showContact, setShowContact] = useState("starting");
let [changetoContact, setchangetoContact] = useState(false);


const showContactonClick = () => {

    setShowContact("leaving");

    setTimeout(() => {
      setchangetoContact(!changetoContact)
    }, 400)
}

const removeContactonClick = () => {
  setShowContact("entering");
  

    setTimeout(() => {
      setchangetoContact(!changetoContact)
      
    }, 400)
}


  return (
    <BannerStyles>
      <BackgroundImage
        Tag="section"
        className="hero-image"
        fluid={data.file.childImageSharp.fluid}
      >

   {changetoContact ?
  

      <BannerContact 
      className= {showContact === "leaving" ? "content-container" : "content-container contact-leave" }
      title="Contact us now" 
      subtitle="and make your dreams a reality"
      onClick={removeContactonClick} 
      showContact={showContact}
        />    

      :
      <div

      className={showContact === "leaving" ? "hero-content hero-leave" : 
                  showContact === "starting" ? "hero-content " :
                  showContact=== "entering" ? "hero-enter hero-content" :
                  "hero-content"
                  }
       >

            <h1>
              Elevate Your <TextLoop  mask={true} interval={2700}>
                              <span>Business</span>
                              <span>Revenue</span>
                              <span>Presence</span>
                              <span>Potential</span>
                          </TextLoop>{" "}!
            </h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
            >
              Personalised sites, support and advertising strategies to expand your client base and keep revenue coming in.
            </motion.p>
           
              <span className="sr-only">Jump to about</span>
              <Button
                className="mainbutton"
                cta="View our services"
                label="Banner Learn More"
                anchor={true}
                index="packages"
              />
            
      
              <Button
                cta="Or contact us now!"
                label="Banner Learn More"
                className="bannercontactbutton"
                onClick={showContactonClick}
              />
  
          </div>
          }

      </BackgroundImage>
    </BannerStyles>
  
  )
}

export default Banner
