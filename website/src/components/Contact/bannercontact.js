import React from "react"
import styled from "styled-components"
import Button from "../Button/button"
import "@fontsource/ibm-plex-sans"
import "@fontsource/inter"

const BannerContact = ({ title, subtitle, className, onClick}) => {
  return (
    <ContactWrapper className={className}>
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
            <Button className="formsubmitbutton" label="Send Contact Form" cta="Send" type="submit" />
            <Button className="backbutton"  cta="back"  onClick={onClick} />
          </div>
        </form>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
  padding: 100px 30px;
  height: auto ;
  max-width: 40vw;
  position: relative;
  left: 30vw;
  top: 10vh;

  @media(max-width: 1400px){
    top: -1vh;
  }
  
  @media(max-width: 1050px){
    left: 15vw;
    top: 13vh;
    max-width: 70vw;
    text-align: centre;
  }


  @media(max-width: 600px){

    top: 3vh;
    
  }

  @media (max-width: 450px){
    max-width: 85vw;
    margin-left: auto;
    margin-right: auto;
    left: 0px;
    top: 0px;
  }

  .formsubmitbutton{
    border: 2px solid rgba(255,255,255,0.8);
    background: rgba(1,1,1,0);
    border-radius: 20px;
    color: rgba(255,255,255,1);
    font-weight: bolder;
    font-size: 0.9rem;
    filter: drop-shadow(0px 2px 2px black);

    &::before{
      border-radius: 20px;
      border: 2px solid rgba(255,255,255, 0.8);
    }
  }

  .backbutton{
    background: rgb(1,1,1,0);
    border: 2px solid rgba(1,1,1,0);
    margin-left: 2vw;
    color: rgba(255,255,255,1);
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 20px;
    filter: drop-shadow(0px 2px 2px black);
  }

  .content-container {
    width: 100%;
    margin: auto auto;


   

    h2 {
      font-size: 2.5rem;
      // text-align: left;
      text-align: center;
      background: -webkit-linear-gradient(45deg, #fd9126, #c33c33);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: "IBM Plex Sans";
      @media (min-width: 768px) {
        text-align: center;
      }

      @media (min-width: 768px) {
        text-align: center;
      }

      @media (max-width: 375px){
        font-size: 2.2rem;
      }
    }
    p {
      margin-bottom: 2rem;
      color: rgba(255,255,255,0.8);
      @media (min-width: 768px) {
        text-align: center;
        font-family: "Inter";
      }
      @media (max-width: 450px){
        display: none;
      }
    }

    form {
      height:100vh;
      position: relative;
      overflow: hidden;

      .input-area {
        margin-bottom: 40px;
        position: relative;

        &.button-area {
          text-align: center;
          margin-bottom: 0;
        }
      }

      input,
      textarea {
        height: 100%;
        font-size: 1rem;
        letter-spacing: 0.25rem;
        padding: 20px;
        display: block;
        width: 100% !important;
        border: none;
        background-color: #0b132e;
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
          background: linear-gradient(90deg, #ec772a, #03a9f4);
          width: 100%;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
      }

      .content-name {
        position: absolute;
        top: 10px;
        left: 20px;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        font-size: 0.8rem;
      }
    }
  }
`

export default BannerContact
