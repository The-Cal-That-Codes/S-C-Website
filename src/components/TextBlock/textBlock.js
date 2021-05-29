import React, { useState } from "react"
import styled from "styled-components"
import {
  BsXDiamondFill,
  BsTools,
  BsGraphUp,
  BsFillCircleFill,
  BsPeopleFill,
  BsChatSquareDotsFill,
} from "react-icons/bs"
import { FaBlackTie } from "react-icons/fa"
import { IconContext } from "react-icons"
import { Link } from "react-scroll"

const TextBlock = ({ id, paraEnter, paraExit }) => {
  let [iconColour, seticonColour] = useState(1)
  let [classControl, setclassControl] = useState(1)

  const controller = (index) => {
    setclassControl(index)

    setTimeout(() => {
      seticonColour(index)
    }, 450)
  }

  return (
    <TextBlockImgWrapper id={id}>
      <div className="contentwrapper">
        <h1 className="marginNill">Marketing title needs to go here</h1>
        <div className="iconbox">
          <div
            className="Uitem"
            role="button"
            tabIndex="0"
            onClick={() => controller(1)}
            onKeyDown={() => controller(1)}
          >
            <IconContext.Provider
              value={
                classControl === 1
                  ? { color: "var(--Clr-Primary500)", className: "iconmedia" }
                  : { color: "#969ABE", className: "icon iconmedia" }
              }
            >
              <BsXDiamondFill />
            </IconContext.Provider>
            <h3 className="iconTitle">General</h3>
          </div>
          <div
            className="Uitem"
            role="button"
            tabIndex="0"
            onClick={() => controller(2)}
            onKeyDown={() => controller(2)}
          >
            <IconContext.Provider
              value={
                classControl === 2
                  ? { color: "var(--Clr-Primary500)", className: "iconmedia" }
                  : { color: "#969ABE", className: "icon iconmedia" }
              }
            >
              <FaBlackTie />
            </IconContext.Provider>
            <h3>Consulting</h3>
          </div>
          <div
            className="Uitem"
            tabIndex="0"
            onClick={() => controller(3)}
            onKeyDown={() => controller(3)}
            role="button"
          >
            <IconContext.Provider
              value={
                classControl === 3
                  ? { color: "var(--Clr-Primary500)", className: "iconmedia" }
                  : { color: "#969ABE", className: "icon iconmedia" }
              }
            >
              <BsTools />
            </IconContext.Provider>
            <h3>Setup</h3>
          </div>
          <div
            className="Uitem"
            role="button"
            tabIndex="0"
            onClick={() => controller(4)}
            onKeyDown={() => controller(4)}
          >
            <IconContext.Provider
              value={
                classControl === 4
                  ? { color: "var(--Clr-Primary500)", className: "iconmedia" }
                  : { color: "#969ABE", className: "icon iconmedia" }
              }
            >
              <BsGraphUp />
            </IconContext.Provider>
            <h3>Management</h3>
          </div>
        </div>
        <hr className="longLine" />
        {iconColour === 1 ? (
          <div className={classControl === 1 ? paraEnter : paraExit}>
            <p className="paraLeft">
              Having a strong digital presence and reaching the right people
              through various online channels has become increasingly crucial to
              business success. Advertising your business online can achieve
              many goals, from increasing brand awareness and loyalty, promoting
              products and services, generating leads, and multiplying your
              revenue via ecommerce solutions.
            </p>
            <p className="paraRight">
              With a range of packages available, from account set up, to one
              off campaigns all the way through to ongoing management, we will
              work with you to provide a tailored media solution that suits your
              business needs. See how advertising online can improve your
              business and get in touch today!
            </p>
          </div>
        ) : iconColour === 2 ? (
          <div className={classControl === 2 ? paraEnter : paraExit}>
            <p className="paraLeft">
              From building your brand and awareness for products & services, to
              making sure the people looking for them will find you first, we
              will help develop your marketing plan and how to action this via a
              multi-channel integrated media strategy tailored to your needs.
            </p>
            <p className="paraRight">
              No matter what industry you’re in, we will help you find and
              understand your audience and how to best reach them. This is
              offered as our basic package and is a one-time service, perfect
              for if you have the tools to run advertising yourself or require
              an in depth understanding of what you need to as part of your
              planning process.
            </p>
          </div>
        ) : iconColour === 3 ? (
          <div className={classControl === 3 ? paraEnter : paraExit}>
            <p className="paraLeft">
              From setting up your ad accounts to creating a singular or
              series of campaigns, we provide this as an intermediate service.
              This involves everything from account set up, linking your ad
              accounts to your website and Google Analytics, tagging,
              copywriting and targeting through to creating the campaigns and
              setting them live.
            </p>
            <p className="paraRight">
              At Croft Digital, we are in the business of connecting our clients
              to their ideal customers. We will ensure your account is set up
              correctly and campaigns have been built using placements and
              targeting that is relevant to your audience as this is essential
              to the success of your media strategy. We can help you with
              individual steps, as well as the entire process.
            </p>
          </div>
        ) : (
          <div className={classControl === 4 ? paraEnter : paraExit}>
            <p className="paraLeft">
              As an advanced service, we offer ongoing management of your entire
              advertising portfolio from, planning through to implementation,
              reporting and ongoing optimisations to ensure your ads are always
              running as efficiently as possible.
            </p>
            <p className="paraRight">
              If you simply want to promote your business on one platform, or
              desire an integrated channel mix, we will seamlessly manage this
              for you on a continuing basis and provide you with detailed
              reports to help you track performance and ensure you are reaching
              your target and receiving a great return on your investment.
            </p>
          </div>
        )}

        <div className="iconbox2 iconNav">
          <Link to="contact" smooth={true} duration={500}>
            <div className="contactLink">
              <IconContext.Provider
                value={{
                  color: "#969ABE",
                  className: "countermedia contactIcon",
                }}
              >
                <BsChatSquareDotsFill />
              </IconContext.Provider>
              <p>Contact Now!</p>
            </div>
          </Link>

          <div className="InnerIconbox">
            <IconContext.Provider
              value={
                classControl === 1
                  ? {
                      color: "var(--Clr-Primary500)",
                      className: "countermedia",
                    }
                  : { color: "#969ABE", className: "countermedia" }
              }
            >
              <BsFillCircleFill />
            </IconContext.Provider>

            <IconContext.Provider
              value={
                classControl === 2
                  ? {
                      color: "var(--Clr-Primary500)",
                      className: "countermedia",
                    }
                  : { color: "#969ABE", className: "countermedia" }
              }
            >
              <BsFillCircleFill />
            </IconContext.Provider>
            <IconContext.Provider
              value={
                classControl === 3
                  ? {
                      color: "var(--Clr-Primary500)",
                      className: "countermedia",
                    }
                  : { color: "#969ABE", className: "countermedia" }
              }
            >
              <BsFillCircleFill />
            </IconContext.Provider>
            <IconContext.Provider
              value={
                classControl === 4
                  ? {
                      color: "var(--Clr-Primary500)",
                      className: "countermedia",
                    }
                  : { color: "#969ABE", className: "countermedia" }
              }
            >
              <BsFillCircleFill />
            </IconContext.Provider>
          </div>
          <Link to="perks" smooth={true} duration={500}>
            <div className="marketingLink">
              <IconContext.Provider
                value={{
                  color: "#969ABE",
                  className: "countermedia marketingIcon",
                }}
              >
                <BsPeopleFill />
              </IconContext.Provider>
              <p>To Development</p>
            </div>
          </Link>
        </div>
      </div>
    </TextBlockImgWrapper>
  )
}

const TextBlockImgWrapper = styled.section`
  text-align: left;
  padding: 12vh 1rem;
  padding-bottom: 7vh;
  min-height: 100vh;
  background: linear-gradient(to bottom, #03233c, #00050c);

  .FooterButton {
    display: none;
  }

  h1 {
    margin: 0 0;
    padding: 1rem 1rem;
    font-size: 1.5rem;
    font-family: var(--Font-Title);
  }

  h3 {
    display: none;
  }

  .iconbox {
    display: flex;
    justify-content: space-evenly;
    padding: 0.5rem 0rem;
    padding-top: 0px;

    svg {
      overflow: visible;
    }
    .Uitem {
      display: inline-flex;
      cursor: pointer;
      transition: 0.3s ease-out;

      :hover {
        transform: translateY(-5px);
      }
    }
  }

  .iconbox2 {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0rem;

    .contactLink,
    .marketingLink {
      display: none;
    }

    .countermedia {
      margin-left: 1rem;
    }
  }

  .iconNav {
    justify-content: center;

    > * + * {
      margin-left: 0.5rem;
    }
  }

  .iconmedia {
    width: 2.5rem;
    height: 2.5rem;
  }

  .longLine {
    max-width: 96%;
    margin: 0 auto;
    height: 5px;
    border: 0px;
    background-color: var(--Clr-Primary500);
    opacity: 0.8;
  }

  .smallLine {
    max-width: 80%;
    margin: 0 auto;
    height: 4px;
    border: 0px;
    background-color: #969abe;
    opacity: 0.8;
  }

  .paraEnter {
    display: flex;
    flex-flow: column;
    animation: paraEnter 0.45s ease-out;

    p {
      padding: 0.5rem 1.2rem;
      padding-right: 0.4rem;
      margin: 0 0.3rem;
      line-height: 1.5;
      font-family: var(--Font-Second);
      font-size: 1.1rem;
    }
  }

  .paraExit {
    display: flex;
    flex-flow: column;
    animation: paraExit 0.45s ease-out;

    p {
      padding: 0.5rem 1.2rem;
      padding-right: 0.4rem;
      margin: 0 0.3rem;
      line-height: 1.5;
      font-family: var(--Font-Second);
      font-size: 1.1rem;
    }
  }

  @keyframes paraEnter {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes paraExit {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(50px);
    }
  }

  @media (min-width: 519px) {
    padding: 3rem 3rem;
    padding-bottom: 0rem;

    h1 {
      font-size: 1.7rem;
      margin-top: 50px;
      padding: 2rem 1rem;
      padding-bottom: 1rem;

      @media (min-width: 790px) {
        padding-bottom: 1rem;
        font-size: 2rem;
      }
    }
    .paraEnter,
    .paraExit {
      flex-flow: row;

      p {
        padding: 0.5rem 0.5rem;
      }
    }

    .iconbox {
      justify-content: space-evenly;

      svg {
        padding: 0.1rem;
      }
    }

    .iconbox2 {
      justify-content: center;
    }

    .iconmedia {
      height: 3.5rem;
      width: 3.5rem;
    }

    .countermedia {
      height: 1.4rem;
      width: 1.4rem;
      margin-left: 1rem;
    }

    .contentwrapper {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      height: 80vh;
    }

    .footerWrap {
      display: flex;
      margin: 0.5rem auto;
      width: 100%;
      justify-content: space-evenly;

      .FooterButton {
        display: block;
        margin: 0 0.5rem;
        background: rgba(1, 1, 1, 0);
      }
    }
  }

  @media (min-width: 1000px) {
    padding: 1rem 1rem;

    h1 {
      text-align: center;
      font-size: 2rem;
      padding: 2rem 1rem;
      margin-top: 0px;
    }

    h3 {
      display: block;
      font-size: 1.5rem;
      margin-left: 1rem;
      margin-right: 2rem;
    }

    .longLine {
      margin: 0rem 1rem;
      width: 100%;
    }

    .smallLine {
      width: 85%;
    }

    .contentwrapper {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      height: 100vh;
    }

    .iconbox {
      justify-content: center;
      padding: 0rem 1rem;
    }
    .iconbox2 {
      justify-content: space-evenly;
      display: flex;
      margin-top: 1rem;

      svg {
        margin-left: 1rem;
      }
      .contactLink,
      .marketingLink {
        display: flex;
        cursor: pointer;

        p {
          margin: 0 0;
          margin-bottom: 0.2rem;
          align-self: center;
          font-size: 1.2rem;
        }

        svg {
          margin: 0 0.3rem;
          margin-bottom: 0.3rem;
          align-self: center;
        }
        .marketingIcon,
        .contactIcon {
          transition: 0.3s ease-out;
          height: 2rem;
          width: 2rem;
        }
      }

      .marketingLink,
      .contactLink {
        transition: 0.3s ease-out;
      }

      .marketingLink:hover {
        transform: scale(1.1);
        transition: 0.3s ease-out;

        .marketingIcon {
          fill: var(--Clr-Primary500);
        }
      }

      .contactLink:hover {
        transform: scale(1.1);
        transition: 0.3s ease-out;

        .contactIcon {
          fill: var(--Clr-Primary500);
        }
      }
    }

    .paraEnter,
    .paraExit {
      max-width: 100%;

      .paraLeft,
      .paraRight {
        font-size: 1.2rem;
        padding: 1rem 1rem;
        padding-bottom: 0.5rem;
        line-height: 1.6;
      }

      .paraLeft {
        margin-left: 8vw;
      }

      .paraRight {
        margin-right: 8vw;
      }
    }

    .countermedia {
      max-height: 1.6rem;
      max-width: 1.6rem;
      margin-left: 0rem;
      padding: 0.1rem;
    }
  }

  @media (min-width: 1359px) {
    padding: 2rem 2rem;

    h1 {
      padding: 0rem 1rem;
      padding-bottom: 1rem;
    }

    .iconbox {
      padding-bottom: 0px;
    }

    .paraEnter,
    .paraExit {
      max-width: 100%;

      p {
        font-size: 1.2rem;
        padding: 1rem 1rem;
      }
    }
  }

  @media (min-width: 1390px) {
    padding: 1rem 4rem;

    h1 {
      font-size: 2.3rem;
    }

    .iconbox {
      margin-bottom: 0.5rem;

      svg {
        margin: 0.3rem;
      }
    }
    .iconbox2 {
      padding: 0rem;
      padding-top: 0.5rem;
      margin-top: 0.5rem;

      svg {
        margin: 0.3rem;
        overflow: visible;
      }
    }
  }

  @media (min-height: 809px) {
    padding-bottom: 0.5rem;
    h1 {
      padding-bottom: 2.5rem;
      font-size: 2.3rem;
    }

    @media (min-width: 1580px) {
      h1 {
        padding-bottom: 0rem;
      }

      .iconbox2 {
        padding-top: 0.5rem;
      }
    }
  }

  @media (min-height: 865px) {
    padding-bottom: 0.5rem;
    h1 {
      padding-bottom: 2.5rem;
      font-size: 2.3rem;
    }

    @media (min-width: 1620px) {
      h1 {
        padding-bottom: 1rem;
      }

      .iconbox2 {
        padding-top: 0.5rem;
      }
    }
  }

  @media (min-height: 865px) {
    @media (min-width: 1800px) {
      h1 {
        padding-bottom: 1.5rem;
      }

      .iconbox2 {
        padding-top: 1rem;
      }
    }
  }
`

export default TextBlock
