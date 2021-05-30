import React, { useState } from "react"
import styled from "styled-components"
import Button from "../Button/button"
import { BsCaretRight } from "react-icons/bs"

import { IconContext } from "react-icons"

const Packages = ({
  uximg,
  devimg,
  desimg,
  digbubbles,
  diglogo,
  digchart,
  cardClass,
}) => {
  {
    /*works on same logic as banner contact, one hook triggers the animation and a second hook triggers the change in content*/
  }
  let [cardState, setcardState] = useState(0)
  let [cardState2, setcardState2] = useState(0)

  {
    /* this controller is used as the onClick event for the cards, each card has unique index which when used as the controller argument
changes the state to the cards index, activating the corresponding animation and change in content.
 the drawback of this method is only one card can be viewed at a time although cards are self closing 
used to have each card be able to work independently but required a seperate controller for each and so performance suffered. */
  }

  const cardControl = (index) => {
    setcardState(index)

    setTimeout(() => {
      setcardState2(index)
    }, 400)
  }

  return (
    <PackagesWrapper id="packages" className="flex-Col">
      <div className="maincontainer flex-Row">
        <div className="flex-container flex-Col">
          <div className="headerServices flex-Col">
            <h1 className="marginNill">
              Digital solutions for <span className="marketing">Marketing</span>{" "}
              and <span className="devword">Development</span>
            </h1>
          </div>

          <div className="servicecards flex-Row jcCenter">
            <div className="card">
              {cardState2 === 1 ? (
                <div
                  className={
                    cardState === 1 ? "cardEnter cardlist" : "cardExit cardlist"
                  }
                  role="button"
                  tabIndex="0"
                  onClick={() => cardControl(0)}
                  onKeyDown={() => cardControl(0)}
                >
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "2rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>
                      Fullstack and database services to fit all your needs
                    </li>
                  </div>
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "1.9rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Google analytics linked to your Gmail on deployment</li>
                  </div>
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "2rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Comprehensive SEO meta tags and keyword analysis</li>
                  </div>
                </div>
              ) : (
                <div
                  className={cardState === 1 ? "cardExit" : "cardEnter"}
                  role="button"
                  tabIndex="0"
                  onClick={() => cardControl(1)}
                  onKeyDown={() => cardControl(1)}
                >
                  <img
                    src={devimg}
                    alt="Icon by Muhammad Haq on freeicons.io"
                  />
                  <div className={cardClass}>
                    <h2>Web Development</h2>
                    <p>Original sites coded to your specifications</p>
                  </div>
                </div>
              )}
            </div>
            <div className="card">
              {cardState2 === 2 ? (
                <div
                  className={
                    cardState === 2 ? "cardEnter cardlist" : "cardExit cardlist"
                  }
                  role="button"
                  tabIndex="0"
                  onClick={() => cardControl(0)}
                  onKeyDown={() => cardControl(0)}
                >
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "2rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Designed in Figma from wireframe to prototype</li>
                  </div>
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "2rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Coded using responsive CSS for mobile/tablet</li>
                  </div>
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "2rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Stay involved with multiple revisions & updates</li>
                  </div>
                </div>
              ) : (
                <div
                  className={cardState === 2 ? "cardExit" : "cardEnter"}
                  role="button"
                  tabIndex="0"
                  onClick={() => cardControl(2)}
                  onKeyDown={() => cardControl(2)}
                >
                  <img
                    src={desimg}
                    alt="Icon by Muhammad Haq on freeicons.io"
                  />
                  <div className={cardClass}>
                    <h2>Custom Designs</h2>
                    <p>A modern web presence tailored to your brand</p>
                  </div>
                </div>
              )}
            </div>

            <div className="card">
              {cardState2 === 3 ? (
                <div
                  className={
                    cardState === 3 ? "cardEnter cardlist" : "cardExit cardlist"
                  }
                  role="button"
                  tabIndex="0"
                  onClick={() => cardControl(0)}
                  onKeyDown={() => cardControl(0)}
                >
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "2rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Modern interactive UI including custom animations</li>
                  </div>
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "2rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Have traffic flow optimised for your business goals</li>
                  </div>
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "1.7rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Giving your website the right look and feel</li>
                  </div>
                </div>
              ) : (
                <div
                  className={cardState === 3 ? "cardExit " : "cardEnter"}
                  role="button"
                  tabIndex="0"
                  onClick={() => cardControl(3)}
                  onKeyDown={() => cardControl(3)}
                >
                  <img src={uximg} alt="Icon by Muhammad Haq on freeicons.io" />
                  <div className={cardClass}>
                    <h2>UX principles</h2>
                    <p>Applied and personalised for your site</p>
                  </div>
                </div>
              )}
            </div>

            <div className="card">
              {cardState2 === 4 ? (
                <div
                  className={
                    cardState === 4 ? "cardEnter cardlist" : "cardExit cardlist"
                  }
                  role="button"
                  tabIndex="0"
                  onClick={() => cardControl(0)}
                  onKeyDown={() => cardControl(0)}
                >
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "2.1rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>
                      Branding and awareness for your products and services
                    </li>
                  </div>
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "1.9rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Increase your businesses consideration and intent</li>
                  </div>
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{
                        color: "var(--Clr-Primary500)",
                        size: "1.9rem",
                      }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Drive more of online target audiences to convert</li>
                  </div>
                </div>
              ) : (
                <div
                  className={cardState === 4 ? "cardExit" : "cardEnter"}
                  role="button"
                  tabIndex="0"
                  onClick={() => cardControl(4)}
                  onKeyDown={() => cardControl(4)}
                >
                  <img
                    src={digchart}
                    alt="Icon by Muhammad Haq on freeicons.io"
                  />
                  <div className={cardClass}>
                    <h2>Social Media</h2>
                    <p>Facebook, Instagram, Linked In</p>
                  </div>
                </div>
              )}
            </div>

            <div className="card">
              {cardState2 === 5 ? (
                <div
                  className={
                    cardState === 5 ? "cardEnter cardlist" : "cardExit cardlist"
                  }
                  role="button"
                  tabIndex="0"
                  onClick={() => cardControl(0)}
                  onKeyDown={() => cardControl(0)}
                >
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "2rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Monitor exactly what people do on your website</li>
                  </div>
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "2.1rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>See how people engage and interact with your ads</li>
                  </div>
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{
                        color: "var(--Clr-Primary500)",
                        size: "1.95rem",
                      }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Create custom audiences using first party data</li>
                  </div>
                </div>
              ) : (
                <div
                  className={cardState === 5 ? "cardExit" : "cardEnter"}
                  role="button"
                  tabIndex="0"
                  onClick={() => cardControl(5)}
                  onKeyDown={() => cardControl(5)}
                >
                  <img
                    src={digbubbles}
                    alt="Icon by Muhammad Haq on freeicons.io"
                  />
                  <div className={cardClass}>
                    <h2>Tracking</h2>
                    <p>Analytics, Tagging and Reporting</p>
                  </div>
                </div>
              )}
            </div>

            <div className="card">
              {cardState2 === 6 ? (
                <div
                  className={
                    cardState === 6 ? "cardEnter cardlist" : "cardExit cardlist"
                  }
                  role="button"
                  tabIndex="0"
                  onClick={() => cardControl(0)}
                  onKeyDown={() => cardControl(0)}
                >
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "2rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Get your business listed first on search engines</li>
                  </div>
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{ color: "var(--Clr-Primary500)", size: "1.8rem" }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Reach people whilst they are most engaged</li>
                  </div>
                  <div className="flex-Row aiCenter">
                    <IconContext.Provider
                      value={{
                        color: "var(--Clr-Primary500)",
                        size: "1.95rem",
                      }}
                    >
                      <BsCaretRight />
                    </IconContext.Provider>
                    <li>Only pay if someone clicks on your search ad</li>
                  </div>
                </div>
              ) : (
                <div
                  className={cardState === 6 ? "cardExit" : "cardEnter"}
                  role="button"
                  tabIndex="0"
                  onClick={() => cardControl(6)}
                  onKeyDown={() => cardControl(6)}
                >
                  <img
                    src={diglogo}
                    alt="Icon by Muhammad Haq on freeicons.io"
                  />
                  <div className={cardClass}>
                    <h2>Google Ads</h2>
                    <p>Search, YouTube, and Display</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="buttoncontainer textCenter">
            <span className="sr-only">Jump to Development</span>
            <Button
              label="Discover more"
              cta="Development and Design"
              className="discoverbutton"
              anchor={true}
              index="perks"
            />

            <span className="sr-only">Jump to Marketing</span>
            <Button
              label="Discover more"
              cta="Digital Marketing"
              anchor={true}
              className="discoverbutton"
              index="about"
            />
          </div>
        </div>
      </div>
    </PackagesWrapper>
  )
}

const PackagesWrapper = styled.section`
  padding: 5rem 0.5rem;
  min-height: 100vh;
  background: linear-gradient(to bottom, #101010,#03233c);
  justify-content: space-between;
  overflow: hidden;
 
  .maincontainer{
    flex-wrap: wrap;
    justify-content: space-between;
  
  }

  .headerServices{

    h1 {
      font-weight: 600;
      font-size: 2rem;
      font-family: var(--Font-Title);
      padding: 1rem 0.5rem;
      
       .marketing, .devword{
         color: #4193e0;
       }
    }
  }


.buttoncontainer{
  background: rgba(1,1,1,0);
  margin-top: 0.5rem;
  
  .discoverbutton{
    align-self:center;
    -webkit-align-self: center;
    margin: 0.5rem auto;
    font-size: 0.8rem;
    a{filter: drop-shadow(0px 2px 2px black);}

  
  }
}


  .flex-container {
    border-radius: 20px;
  }

  

 .servicecards{
  flex-wrap: wrap;

  
  .cardContentH1Image{
    padding: 0 0.5rem;

    p{
      font-family: var(--Font-Second);
      font-weight: 500;
      color: rgba(255,255,255, 0.8);
      margin: 0px;
      font-size: 1rem;
      padding: 0.3rem 0.5rem;
      
      }

      h2{
        font-family: var(--Font-Second);
        font-weight: 600;
        margin: 0px;
        font-size: 1.3rem;
        padding: 0.3rem 0.3rem;
        color: rgba(255,255,255, 0.9);
       
        
       }
    }
    
   
  }

  .card{
    background-color: var(--Clr-tintPackageblue600);
    border-radius: 10px;
    width: 100%;
    padding: 1.2rem 0.4rem;
    margin-bottom: 0.4rem;
    display: flex;
    align-items: center;
    box-shadow: inset 0px 0px 10px 5px  rgba(65, 147, 224, 0.4), 0px 0px 5px 1px rgba(114, 113, 209, 0.4);
    transition: 0.3s ease-out;


    :hover{
      transform: translateY(-4px);
      cursor: pointer;
    }
    
    img{
      max-width: 100px;
      height: auto;
      align-self: center;
      }

      .cardlist{
        padding: 0 0.9rem;
        margin: 0.45rem auto;
        font-weight: 500;
        color: rgba(255,255,255, 0.8);
        padding-right: 0.3rem;
        font-family: var(--Font-Second);
        flex-flow: column;
        font-size: 1.1rem;
        line-height: 1.05;

      
        
        li{
          list-style: none;
          padding: 0.3rem 0.6rem;
        }

       
      }
    
  }
  
 }


 .cardEnter{
  animation: cardEnter 0.4s ease-out;
  display: flex;
  margin: 0 auto;
 
 }

 .cardExit{
  animation: cardExit 0.4s ease-out;
  display: flex;
  margin: 0 auto;
  
}

@keyframes cardEnter {
  0%{
    transform: translateX(-20px);
    opacity: 0;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes cardExit {
  0%{
    transform: translateX(0px);
    opacity: 1;
  }
  100%{
    transform: translateX(20px);
    opacity: 0;
  }
}

@media (min-width: 550px){
  padding: 5rem 3rem;


.cardContentH1Image{
  margin-right: auto;
 
}
  
img{
  margin: 0.5rem 0.5rem;
  margin-left: auto;
}



}

@media(min-height: 880px){
  .buttoncontainer{
    margin-top: 1rem;
  }

 
}

@media(min-width: 636px){
  .buttoncontainer{
    .discoverbutton{
      margin-right: 1rem;
    }
  }
}

@media(min-width: 1000px){
padding-top: 3.5rem;

.buttoncontainer{
  
  .discoverbutton{
    margin: 0;
    margin-left: 1rem;
  }
}

  .maincontainer{
    margin: auto;
   
  }

  h2,p{
    text-align: center;
  }

  .headerServices{
    h1{
   padding: 1rem 0.5rem;
   text-align: center;

   @media (min-width: 1235px) and (min-height: 780px ){
       
        font-size: 2.3rem;
      }

      @media (min-width: 1499px){
        padding-top:1rem;
        padding-bottom: 1rem;
        font-size: 2.05rem;
      }
  }
}

  .servicecards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    
    
  }

  .card{
      flex-flow: column nowrap;  
      max-width: 400px; 
      justify-content: center;

      li{
        font-size: 0.8rem;
        line-height: 1.3;
      }

      img{
        margin: auto;
      }
      .cardEnter, .cardExit{
        flex-flow: column;
      }
     
    
  }

 }

 


`

export default Packages
