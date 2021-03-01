import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "../Button/button"
import BannerButton from "../Button/bannerbutton"
import { Link } from "react-scroll"
import { motion} from "framer-motion"
import BannerContact from "../Contact/bannercontact"
import { BannerStyles } from "../../styles/bannerStyles"

const Banner = (id) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "flames.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
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


let [showContact, setShowContact] = useState(false);

const showContactonClick = () => {

    setShowContact(!showContact);

    console.log('done'+ showContact);
}


  return (
    <BannerStyles>
      <BackgroundImage
        Tag="section"
        className="hero-image"
        fluid={data.file.childImageSharp.fluid}
      >
  <motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
  transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}>
   <BannerContact className={showContact?"contactwrap-banner":"hide"} 
   onClick={showContactonClick} title="Contact us now" subtitle="and make your dreams a reality"/>    
       </motion.div>
      <div className={showContact ?"hero-content hero-hide":"hero-content"} >
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
            >
              Custom Websites and Marketing <br/> <span>An Online Identity Built For Your Needs</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ease: "easeOut", duration: 0.8, delay: 1.3 }}
            >
              Personalised sites, support and advertising strategies to make life easy and for you and your business.
            </motion.p>
          
            <motion.div className="button-div"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1.8 }}>
            <Link to="packages" smooth={true} duration={500}>
              <span className="sr-only">Jump to about</span>
              <Button
                className="mainbutton"
                cta="discover your potential"
                label="Banner Learn More"
                anchor={true}
                href="linking"
              />
              </Link>
      
              <BannerButton
                cta="Or contact us now!"
                label="Banner Learn More"
                className="bannercontactbutton"
                onClick={showContactonClick}
              />
     
              </motion.div>
            
          </div>
          
        
      </BackgroundImage>
    </BannerStyles>
  )
}

export default Banner
