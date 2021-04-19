import React from "react"
import styled from "styled-components"
import Button from "../Button/button"
import { animateScroll as scroll } from "react-scroll"

const BannerContact = ({ className, onClick }) => {
  return (
    <ContactWrapper className={className}>
      <div className="contactheaderbrick">
        <h2 className="marginNill">
          Start your project <span>today</span>!
        </h2>
      </div>
      <form
        name="bannercontact"
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
        <div className="input-area privacyCheckbox flex-Row">
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
            and for CroftDigital to contact you in regards to your message sent
            to them.
          </p>
        </div>
        <div className="input-area button-area textCenter">
          <Button
            className="formsubmitbutton"
            label="Send Contact Form"
            cta="Send"
            type="submit"
          />
          <Button
            className="backbutton"
            cta="back"
            type="button"
            onClick={onClick}
            onKeyDown={onClick}
          />
        </div>
      </form>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
  margin: 0 0;
  margin-top: 1rem;
  padding: 2rem 0.5rem;
  padding-bottom: 0px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  max-width: 650px;

  animation: Enter 0.6s ease-out;

  @media (min-width: 480px) {
    padding: 2rem 3rem;
  }

  @media (min-width: 1580px) {
    max-width: 800px;
  }

  .contactheaderbrick {
    padding: 1px 0;
  }

  .button-area {
    margin-bottom: 1.4rem !important;
  }

  .formsubmitbutton {
    background: rgba(1, 1, 1, 0);
    color: rgba(255, 255, 255, 1);
    border: 2px solid #43a0cf;
    font-size: 0.9rem;
    padding: 0.8rem;
    a {
      filter: drop-shadow(0px 2px 2px black);
    }
    &::before {
      border-radius: 20px;
      border: 2px solid rgba(255, 255, 255, 0.8);
    }
  }

  .backbutton {
    background: rgb(1, 1, 1, 0);
    border: 2px solid rgba(1, 1, 1, 0);
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 20px;
    filter: drop-shadow(0px 2px 2px black);
    margin-left: 1rem;
    padding: 0.8rem;
  }

  h2 {
    font-size: 2.05rem;
    width: 105%;
    color: var(--Clr-Secondaryfade);
    font-family: var(--Font-Title);
    padding: 0.7rem 0rem;

    span {
      color: var(--Clr-Primary500);
    }

    @media (min-width: 768px) {
      font-size: 2.3rem;
      padding-bottom: 1.3rem;
    }

    @media (min-width: 1500px) {
      font-size: 2.1rem;
    }
  }

  form {
    position: relative;
    overflow: hidden;

    .input-area {
      margin-bottom: 1rem;
      position: relative;

      &.button-area {
        padding: 0rem 1rem;
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
      box-shadow: 7px 7px 10px 0 rgba(0, 0, 0, 0.4),
        0 6px 20px 0 rgba(0, 0, 0, 0.39);
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
      font-family: var(--Font-Title);

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
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.25rem;
      font-size: 0.8rem;
    }
  }

  .privacyCheckbox {
    background-color: rgba(43, 102, 131, 0.5);
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

  @keyframes Enter {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

export default BannerContact
