import React from "react"
import styled from "styled-components"
import Button from "../Button/button"
import {motion} from 'framer-motion';
import "@fontsource/ibm-plex-sans"
import "@fontsource/inter"

const BannerContact = ({ title, subtitle, className, onClick}) => {
  return (
    <motion.div
    
    initial={{opacity:0, y: -50}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.6}}>
    <ContactWrapper 
    className={className}
    >
        <div className="contactheaderbrick">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        </div>
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
            <Button className="backbutton"  cta="back" type="button" onClick={onClick} />
        </div>
        
        </form>
       
      
    </ContactWrapper>
    </motion.div>
    
    )
   
  

  
}

const ContactWrapper = styled.div`

margin: 0 0;
padding: 2rem 0.5rem;
padding-bottom: 0px;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;

  .contactheaderbrick{
    padding: 1px 0;
   
  }


  .formsubmitbutton{
    background: rgba(1,1,1,0);
    color: rgba(255,255,255,1);
    font-size: 0.9rem;
    a{filter: drop-shadow(0px 2px 2px black);}
    &::before{
      border-radius: 20px;
      border: 2px solid rgba(255,255,255, 0.8);
    }
    
  }

  .backbutton{
    background: rgb(1,1,1,0);
    border: 2px solid rgba(1,1,1,0);
    color: rgba(255,255,255,1);
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 20px;
    filter: drop-shadow(0px 2px 2px black);
    margin-left: 1rem;
    
  }

 


   

    h2 {
      font-size: 2rem;
      text-align: center;
      color: var(--Clr-Primary500);
      font-family: "IBM Plex Sans";
      margin: 0rem 0.5rem;

    }

     
      
    p {
      text-align: center;
      margin: 0.5rem 0;
      color: rgba(255,255,255,0.8);
     
    }

form {
  
  position: relative;
  overflow: hidden;
 

   .input-area {
    
    margin-bottom: 1rem;
   position: relative;

   &.button-area {
   text-align: center;
   padding: 1rem 1rem;
   }
  }



      input,
      textarea {
        position: relative;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        display: block;
        border: none;
        background-color: rgba(43, 102, 131, 0.5);
        color: #fff;
        box-sizing: border-box;
        outline: none;
        box-shadow: 7px 7px 10px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
        width: 100% !important;
        height: 100%;
        padding: 0.8rem 0.4rem;

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
          background: linear-gradient(90deg,#7271d1, #7271d1);
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

   

`

export default BannerContact
