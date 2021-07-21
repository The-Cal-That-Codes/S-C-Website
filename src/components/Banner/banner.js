import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import Button from "../Button/button"
import TextLoop from "react-text-loop"
import BannerContact from "../Contact/bannercontact"
import { BannerStyles } from "../../styles/bannerStyles"
import BounceLoader from "react-spinners/BounceLoader"

const Banner = (id) => {
  {
    /*data constant for fluid argument for the gatsby background image plugin*/
  }
 

  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "flames.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: FULL_WIDTH)
    }
  }
}
`)
 
const pluginImage = getImage(data.file);

  {
    /*state for loading page, starts as true so the loading page shows and then turns to false after 1.5seconds*/
  }

  let [loading, setLoading] = useState(true)
  

  {
    /* useEffect changing the loading state after a Timeout function of 1.5s should be long enough for title to load properly*/
  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  {
    /*state for the changing to contact form, one to trigger the exit animation and the other to change the state bringing in the form*/
  }

  let [showContact, setShowContact] = useState("starting")
  let [changetoContact, setchangetoContact] = useState(false)

  {
    /* function controlling the state for the change to contact, triggers ShowContact to make current screen animate out, then */
  }
  {
    /*triggers changetoContact to make contact form animate in. Timeout is set to the length of the animation to give it a seamless feel.*/
  }
  const showContactonClick = () => {
    setShowContact("leaving")

    setTimeout(() => {
      setchangetoContact(!changetoContact)
    }, 400)
  }

  {
    /*function that works on the same logic as previous to make contact form animate out bringing back the landing page content*/
  }

  const removeContactonClick = () => {
    setShowContact("entering")

    setTimeout(() => {
      setchangetoContact(!changetoContact)
    }, 400)
  }

  return (
    <div className="shader">
      {/* styled components tag, BannerStyles is a styled.Section*/}
      <BannerStyles>
        {/* div containg loading screen and loading spinner, change happens due to if statement*/}
        <div
          className={
            loading
              ? "loaderScreen flex-Col jcCenter aiCenter textCenter"
              : "loaderExit flex-Row jcCenter aiCenter textCenter"
          }
        >
          <BounceLoader color={"#2479DD"} loading={loading} size={60} />
        </div>
        {/* background image component from gatsby background image. loading "eager" to encourage quick display.*/}
        <BgImage image={pluginImage}
          Tag="section"
          className="hero-image aiCenter flex-Row"
         
        >
          {/* if statement for change to contact. if true shows contact if false shows landing content*/}
          {changetoContact ? (
            <BannerContact
              className={
                showContact === "leaving"
                  ? "content-container"
                  : "content-container contact-leave"
              }
              subtitle="Say Hi and get your project started today."
              onClick={removeContactonClick}
              showContact={showContact}
            />
          ) : (
            ({
              /*div containing landing content, classes with animations controlled with if statement and showContact state*/
            },
            (
              <div
                className={
                  showContact === "leaving"
                    ? "hero-content flex-column bgTrans hero-leave"
                    : showContact === "starting"
                    ? "hero-content flex-column bgTrans "
                    : showContact === "entering"
                    ? "hero-enter hero-content flex-column bgTrans"
                    : "hero-content flex-column bgTrans"
                }
              >
                {!loading ? (
                  <>
                    <h1 className="marginNill">
                      Elevate Your{" "}
                      {/* component for text cycler, spans contain each option*/}
                      <TextLoop mask={true} interval={2800}>
                        <span>Business</span>
                        <span>Revenue</span>
                        <span>Presence</span>
                        <span>Potential</span>
                      </TextLoop>{" "}
                      !
                    </h1>
                    <p className="marginNill">
                      Personalised websites and marketing for local businesses.
                    </p>

                    <div className="flex-Row flex-wrap jcCenter aiCenter buttonDiv">
                      <span className="sr-only">Jump to about</span>
                      {/* button to go to services*/}
                      <Button
                        className="mainbutton .bgTrans"
                        cta="View our services"
                        label="Banner Learn More"
                        anchor={true}
                        index="packages"
                      />
                      {/* screen reader tag*/}
                      <span className="sr-only">Jump to contact</span>
                      {/* button to go to contact*/}
                      <Button
                        cta="Or contact us now!"
                        label="Banner Learn More"
                        className="bannercontactbutton .bgTrans"
                        onClick={() => showContactonClick()}
                        onKeyDown={() => showContactonClick()}
                      />
                    </div>
                  </>
                ) : null}
              </div>
            ))
          )}
        </BgImage>
      </BannerStyles>
    </div>
  );
}

export default Banner
