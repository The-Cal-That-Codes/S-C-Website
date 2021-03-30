import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "../Button/button"
import TextLoop from "react-text-loop";
import BannerContact from "../Contact/bannercontact"
import { BannerStyles } from "../../styles/bannerStyles"


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
        className="hero-image aiCenter jcCenter flex-Row"
        fluid={data.file.childImageSharp.fluid}
      >

   {changetoContact ?
  

      <BannerContact 
      className= {showContact === "leaving" ? "content-container" : "content-container contact-leave" }
      
      subtitle="Say Hi and get your project started today."
      onClick={removeContactonClick} 
      showContact={showContact}
        />    

      :
      <div

      className={showContact === "leaving" ? "hero-content flex-column bgTrans hero-leave" : 
                  showContact === "starting" ? "hero-content flex-column bgTrans " :
                  showContact=== "entering" ? "hero-enter hero-content flex-column bgTrans" :
                  "hero-content flex-column bgTrans"
                  }
       >

            <h1 className="marginNill">
              Elevate Your <TextLoop  mask={true} interval={2700}>
                              <span>Business</span>
                              <span>Revenue</span>
                              <span>Presence</span>
                              <span>Potential</span>
                          </TextLoop>{" "}!
            </h1>
            <p className="marginNill" >
              Personalised sites, support and advertising strategies to expand your client base and keep revenue coming in.
            </p>
           
              <span className="sr-only">Jump to about</span>
              <Button
                className="mainbutton .bgTrans"
                cta="View our services"
                label="Banner Learn More"
                anchor={true}
                index="packages"
              />
            
      
              <Button
                cta="Or contact us now!"
                label="Banner Learn More"
                className="bannercontactbutton .bgTrans"
                onClick={()=> showContactonClick()}
              />
  
          </div>
          }

      </BackgroundImage>
    </BannerStyles>
  
  )
}

export default Banner
