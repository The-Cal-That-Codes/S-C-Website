import React from "react"
import styled from "styled-components"
import Button from "../Button/button"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import "@fontsource/ibm-plex-sans"
import "@fontsource/inter"

const Contact = ({ title, subtitle, className}) => {

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

  return (
    <BackgroundImage
      id="perks"
      Tag="section"
      fluid={data.file.childImageSharp.fluid}
      loading="eager"
      fadeIn={false}
      
    >
    <ContactWrapper id="contact" className={className} >
      <div className="content-container" >
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <form name="contact" netlify>
          <div className="input-area">
            <input
              type="text"
              name="name"
              aria-label="Name"
              required
              autoComplete="off"
            />
            <label className="label-name" for="name">
              <span className="content-name">Name</span>
            </label>
          </div>

          <div className="input-area">
            <input
              type="email"
              name="email"
              aria-label="Email"
              required
              autoComplete="off"
            />
            <label className="label-name" for="email">
              <span className="content-name">Email</span>
            </label>
          </div>

          <div className="input-area">
            <textarea
              type="text"
              name="message"
              rows="5"
              required
              autoComplete="off"
              aria-label="Message"
            />
            <label className="label-name" for="message">
              <span className="content-name">Message</span>
            </label>
          </div>

          <div className="input-area button-area">
            <Button label="Send Contact Form" cta="Send" type="submit" className="formsubmitbutton" />
          </div>
        </form>
      </div>
    </ContactWrapper>
    </BackgroundImage>
  )
}

const ContactWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 0;
  padding: 1rem 1rem;
  padding-top: 3rem;

  

  .formsubmitbutton{
    text-align: center;
    // box-shadow: 7px 7px 10px 0 rgba(0, 0, 0, 0.4), 0 6px 10px 10px rgba(0, 0, 0, 0.39);
    border-radius: 0px;
    border: 2px solid rgba(255,255,255, 0.8);
    background: rgba(1,1,1,0);
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
    
    &::before{
      border-radius: 0px;
      border: 2px solid rgba(255,255,255, 0.8);
    }

  }

  .button-area{
  padding: 0.5rem 0rem;
  }

  .content-container {
    
 
  
    

    h2 {
      // background: -webkit-linear-gradient(45deg, #fd9126, #c33c33);
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      font-family: "IBM Plex Sans";
      font-size: 2.2rem;
      text-align: center;
      margin: 0 0;
      color: var(--Clr-Primary500);
      padding: 0.5rem 0rem;
    
    }
    p {
      text-align: center;
      margin: 0 0;
      font-size: 1rem;
      color: rgba(255,255,255,0.8);
      font-family: "Inter";
      padding: 0rem 0.5rem;
      margin-bottom: 0.5rem;
    }

    form {
      position: relative;
      overflow: hidden;
      width: 100%;
      margin: auto;

      
  @media(min-width: 450px){
    width: 80%;
  }
  
  @media(min-width: 1580px){
    width: 100%;
  }

      .input-area {
        
        margin-bottom: 0.7rem;
        position: relative;
        

        &.button-area {
          text-align: center;
          margin-bottom: 0;
        }
      }

      input,
      textarea {
        height: 100%;
        font-size: 1.3rem;
        letter-spacing: 0.25rem;
        padding: 0.5rem;
        display: block;
        width: 100% !important;
        border: none;
        background-color: rgba(38, 82, 84, 0.6);
        color: #fff;
        text-transform: uppercase;
        position: relative;
        box-sizing: border-box;
        outline: none;
        box-shadow: 7px 7px 10px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
    

        &:focus,
        &:valid {
          + .label-name {
            .content-name {
              transform: translateY(-25%);
              font-size: 0.7rem;
              opacity: 0.2;
            }
            &::after {
              transform: translateX(0%);
            }
          }
        }
      }

      label {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        pointer-events: none;
        font-family: "Inter";

        &::after {
          content: "";
          position: absolute;
          left: 0px;
          bottom: -1px;
          height: 1px;
          background: linear-gradient(90deg, #7271d1, #7271d1);
          width: 100%;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
      }

      .content-name {
        position: absolute;
        top: 10px;
        left: 20px;
        color: rgba(255,255,255,0.7);
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        font-size: 0.8rem;
      }
    }
  }

`

export default Contact
