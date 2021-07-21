import React, { useState } from "react"
import styled from "styled-components"
import {
  BsXDiamondFill,
  BsDropletHalf,
  BsTerminalFill,
  BsLayersFill,
  BsFillCircleFill,
  BsPeopleFill,
  BsChatSquareDotsFill,
} from "react-icons/bs"
import { IconContext } from "react-icons"
import { Link } from "react-scroll"

const TextBlockImg = ({ id, paraEnter, paraExit }) => {
  let [iconColour, seticonColour] = useState(1)
  let [classControl, setclassControl] = useState(1)

  {
    /*controller works the same as the packages one using the index to trigger hooks.*/
  }

  const controller = (index) => {
    setclassControl(index)

    setTimeout(() => {
      seticonColour(index)
    }, 450)
  }

  return (
    <TextBlockImgWrapper id={id}>
      <div className="contentwrapper">
        <h1 className="marginNill">Design and Development for any project!</h1>
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
                  ? { color: "#4871E2", className: "iconmedia" }
                  : { color: "#4871E2", className: "icon iconmedia" }
              }
            >
              <BsXDiamondFill />
            </IconContext.Provider>
            <h3>General</h3>
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
                  ? { color: "#FF463C", className: "iconmedia" }
                  : { color: "#FF463C", className: "icon iconmedia" }
              }
            >
              <BsTerminalFill />
            </IconContext.Provider>
            <h3>Development</h3>
          </div>
          <div
            className="Uitem"
            role="button"
            tabIndex="0"
            onClick={() => controller(3)}
            onKeyDown={() => controller(3)}
          >
            <IconContext.Provider
              value={
                classControl === 3
                  ? { color: "#FFC03C", className: "iconmedia" }
                  : { color: "#FFC03C", className: "icon iconmedia" }
              }
            >
              <BsDropletHalf />
            </IconContext.Provider>
            <h3>Design</h3>
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
                  ? { color: "#BE62EA", className: "iconmedia" }
                  : { color: "#BE62EA", className: "icon iconmedia" }
              }
            >
              <BsLayersFill />
            </IconContext.Provider>
            <h3>Our Process</h3>
          </div>
        </div>
        
        {iconColour === 1 ? (
          <div className={classControl === 1 ? paraEnter : paraExit}>
            <p className="paraLeft">
              Websites are a fundamental part of a modern presence, they are
              your brands initial contact with potential customers and a key
              factor in gaining clientele. Our design and development process is
              geared towards providing you with a unique captivating website
              built with modern code to give your business the platform it
              deserves.
            </p>
            <p className="paraRight">
              As business needs differ, we aim to provide a customised service
              that aligns with your goals, and your budget. From simple about
              pages to large, highly interactive websites. Whether you are
              establishing or updating your online presence our philosophy is to
              deliver a high-quality asset that will aid in the development of
              your business.
            </p>
          </div>
        ) : iconColour === 2 ? (
          <div className={classControl === 2 ? paraEnter : paraExit}>
            <p className="paraLeft">
              Forget about clunky website builders and restrictive templates, we
              code everything from scratch to accurately translate your vision
              into a tailored online home for your business. Combining advanced
              HTML, CSS and JavaScript with the powerful ReactJS we blend
              engaging user experience with customised functionality.
            </p>
            <p className="paraRight">
              Additionally, using responsive CSS we offer complete useability
              over all major devices, always included to ensure your homepage is
              as accessible as possible to potential customers. Down the road
              you feel like you want things looking a bit different? Updates or
              changes in the future are no problem, as our customer we will take
              care of it for below industry cost.
            </p>
          </div>
        ) : iconColour === 3 ? (
          <div className={classControl === 3 ? paraEnter : paraExit}>
            <p className="paraLeft">
              To ensure a high aesthetic quality all pages are designed in
              Figma, allowing us to test ideas and send them to you before the
              coding begins. We begin with creating flow charts and wireframes
              that form the blueprints of your design, implementing user
              experience principles to decide the best way to structure things
              for the site’s objectives.
            </p>
            <p className="paraRight">
              Utilizing modern design concepts prototypes are then constructed,
              incorporating your branding and vision into sleek user-friendly
              designs for every page on your site. Websites are designed from a
              “mobile first” approach with complexity added for desktop, keeping
              your business accessible and exceptional across multiple devices.
            </p>
          </div>
        ) : (
          <div className={classControl === 4 ? paraEnter : paraExit}>
            <p className="paraLeft">
              As a web dev start-up our focus is on understanding your needs so
              that we can effectively extend your brand into digital form and
              deliver a unique online experience for your current and future
              customers. We value client engagement and so, through regular
              updates, we try keep you in the loop and get your feedback at
              every major step.
            </p>
            <p className="paraRight">
              There are many aspects to creating a website, we take on the roles
              of designer, developer, and devOps, all in one, so you can receive
              a competitive refined website while saving on costs. Web
              development is our passion and we are dedicated to going the extra
              mile to ensure your expectations are met and all sites are an
              asset your business can be proud of.
            </p>
          </div>
        )}

        <div className="iconbox2 iconNav">
          <Link to="contact" smooth={true} duration={500}>
            <div className="contactLink">
              <IconContext.Provider
                value={{
                  color: "#969abe",
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
                      color: "#4871e2",
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
                      color: "#ff463c",
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
                      color: "#ffc03c",
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
                      color: "#BE62EA",
                      className: "countermedia",
                    }
                  : { color: "#969ABE", className: "countermedia" }
              }
            >
              <BsFillCircleFill />
            </IconContext.Provider>
          </div>
          <Link to="about" smooth={true} duration={500}>
            <div className="marketingLink">
              <IconContext.Provider
                value={{
                  color: "#969abe",
                  className: "countermedia marketingIcon",
                }}
              >
                <BsPeopleFill />
              </IconContext.Provider>
              <p>To Marketing</p>
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
  background: #f9fbfc;

  .FooterButton {
    display: none;
    
  }

  h1 {
    margin: 0 0;
    padding: 1rem 1rem;
    font-size: 1.5rem;
    font-family: var(--Font-Title);
    color: black;
  }

  h3 {
    display: none;
    color: black;
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
    background: black;
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
      color: black;
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
      color: black;
    }
  }

  @keyframes paraEnter {
    0% {
      opacity: 0;
      transform: translateX(-10px);
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
      transform: translateX(10px);
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
          color: black;
          font-weight: bold;
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
        transform: translateY(-5px);
        transition: 0.3s ease-out;

        .marketingIcon {
          fill: var(--Clr-Primary500);
        }
      }

      .contactLink:hover {
        transform:  translateY(-5px);
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
        padding: 0rem 1rem;
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
      padding: 1rem 1rem;
      
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
      padding-bottom: 1rem;
      font-size: 2.3rem;
    }

    @media (min-width: 1580px) {
      h1 {
        padding-bottom: 1rem;
      }

      .iconbox2 {
        padding-top: 0.5rem;
      }
    }
  }

  @media (min-height: 865px) {
    padding-bottom: 0.5rem;
    h1 {
      padding-bottom: 1rem;
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
        padding-bottom: 1rem;
        padding-top: 1rem;
      }

      .iconbox2 {
        padding-top: 1rem;
      }
    }
  }
`

export default TextBlockImg
