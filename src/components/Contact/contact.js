import React from "react"
import styled from "styled-components"
import Button from "../Button/button"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { animateScroll as scroll } from "react-scroll"

const Contact = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "purple-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 6000, quality: 90) {
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
      <ContactWrapper id="contact" className="flex-Col jcCenter marginNill">
        <div className="content-container">
          <h2 className="marginNill textCenter ">Contact Us <span>Now</span>!</h2>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action=""
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="input-area">
              <input
                type="text"
                name="name"
                aria-label="Name"
                required
                autoComplete="off"
              />
              <label className="label-name" htmlFor="name">
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
              <label className="label-name" htmlFor="email">
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
              <label className="label-name" htmlFor="message">
                <span className="content-name">Message</span>
              </label>
            </div>

            <div className="input-area privacyCheckbox aiCenter">
              <input
                type="checkbox"
                required
                name="checkbox"
                value="check"
                id="agree"
              />
              <p className="privacyText">
                By ticking this box you agree to our{" "}
                <span
                  role="button"
                  tabIndex={0}
                  onClick={() => scroll.scrollToBottom()}
                  onKeyDown={() => scroll.scrollToBottom()}
                >
                  privacy policy
                </span>{" "}
                and for CroftDigital to contact you in regards to your message
                sent to them.
              </p>
            </div>

            <div className="input-area button-area textCenter">
              <Button
                label="Send Contact Form"
                cta="Send"
                type="submit"
                className="formsubmitbutton"
              />
            </div>
          </form>
        </div>
      </ContactWrapper>
    </BackgroundImage>
  )
}

const ContactWrapper = styled.section`
  min-height: 100vh;
  padding: 1rem 1rem;
  padding-top: 3rem;

  .formsubmitbutton {
    text-align: center;
    border-radius: 0px;
    border: 2px solid #36581b;
    font-size: 1rem;
    padding: 0.75rem;
    transition: 0.2s;
    width: auto;
    color: black;
    

    span {
      opacity: 0;
    }

    &:hover {
      transform: scale(1.05);
      
    }
  }

  .button-area {
    padding: 0.5rem 0rem;
    overflow: visible;
  }

  .content-container {
    h2 {
      color: black;
      font-family: var(--Font-Title);
      font-size: 2.5rem;
      padding: 1rem 0rem;
      
      span{
        color: var(--Clr-Primary500);
      }
    }

    form {
      position: relative;
      overflow: hidden;
      width: 100%;
      margin: auto;
  

      @media (min-width: 450px) {
        width: 80%;
      }

      @media (min-width: 1580px) {
        width: 100%;
      }

      .input-area {
        margin-bottom: 0.7rem;
        position: relative;

        &.button-area {
          margin-bottom: 0;
          padding-bottom: 1.3rem;
        }
      }

      input,
      textarea {
        height: 100%;
        font-size: 1.3rem;
        letter-spacing: 0.25rem;
        padding: 0.5rem;
        display: block;
        width: 100%;
        border: none;
        border-radius: 5px;
        background-color: rgba(91, 147, 45, 0.6);
        color: #fff;

        position: relative;
        box-sizing: border-box;
        outline: none;
        

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
          background: linear-gradient(90deg, #42b080, #42b080);
          width: 100%;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
      }

      .content-name {
        position: absolute;
        top: 10px;
        left: 20px;
        color: rgba(255, 255, 255, 0.7);
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        font-size: 0.8rem;
      }
    }
  }

  .privacyCheckbox {
    display: flex;
    background-color: rgba(91, 147, 45, 0.6);
    padding: 0.65rem;

    input {
      width: auto !important;
      height: auto !important;
      margin: 0.3rem 0.5rem;
      transform: scale(1.5);
    }

    .privacyText {
      font-size: 0.6rem;
      font-family: var(--Font-Second);
      text-align: left !important;
      margin: 0px;

      span {
        text-decoration: underline;
        color: #e08f42;
        cursor: pointer;
      }
    }
  }
`

export default Contact
