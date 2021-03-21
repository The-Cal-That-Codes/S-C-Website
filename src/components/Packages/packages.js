import React, { useState, useEffect } from "react"
import styled from "styled-components";
import Button from "../Button/button";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";



const Packages = ({uximg, devimg, desimg, digbubbles, diglogo, digchart}) => {

  

  let [cardState2A, setcardState2A] = useState(true);
  let [cardStateA, setcardStateA] = useState(true);

  let [cardState2B, setcardState2B] = useState(true);
  let [cardStateB, setcardStateB] = useState(true);

  let [cardState2C, setcardState2C] = useState(true);
  let [cardStateC, setcardStateC] = useState(true);

  let [cardState2D, setcardState2D] = useState(true);
  let [cardStateD, setcardStateD] = useState(true);

  let [cardState2E, setcardState2E] = useState(true);
  let [cardStateE, setcardStateE] = useState(true);

  let [cardState2F, setcardState2F] = useState(true);
  let [cardStateF, setcardStateF] = useState(true);

  const cardControl = () => {
    setcardState2A(!cardState2A);

    setTimeout(() => {
      setcardStateA(!cardStateA)
    }, 400)
  }

  const cardControl2 = () => {
    setcardState2B(!cardState2B);

    setTimeout(() => {setcardStateB(!cardStateB)}, 400);
  }

  const cardControl3 = () => {
    setcardState2C(!cardState2C);

    setTimeout(() => {setcardStateC(!cardStateC)}, 400);
  }

  const cardControl4 = () => {
    setcardState2D(!cardState2D);

    setTimeout(() => {setcardStateD(!cardStateD)}, 400);
  }

  const cardControl5 = () => {
    setcardState2E(!cardState2E);

    setTimeout(() => {setcardStateE(!cardStateE)}, 400);
  }

  const cardControl6 = () => {
    setcardState2F(!cardState2F);

    setTimeout(() => {setcardStateF(!cardStateF)}, 400);
  }


  const controls = useAnimation()
  const [ref, inView] = useInView({
    // Percentage of item in view to trigger animation
    threshold: 0.25,
  })



useEffect(() => {
  if (inView) {
    controls.start("visible")
  }
}, [controls, inView])


  return (
 
    <PackagesWrapper id="packages">
       
    <div className="maincontainer">

      <div className="flex-container">

        <div className="headerServices">
              <h1>Digital solutions for  <span className="marketing">Marketing</span> and <span className="devword">Development</span></h1>
          </div>
          
        <div className="servicecards">
          <div className="ux" onClick = {() => cardControl() } >
          <img src={uximg} alt="Icon by Muhammad Haq on freeicons.io"></img>
          <div className="cardContentH1Image">
            {cardStateA ? 
              <div className={cardState2A?"cardEnter":"cardExit"}>
              <h2>UX and SEO</h2>
              <p>Industry practices applied to achieve your goals</p>
              </div>
            :
              <ul className={!cardState2A?"cardEnter cardlist":"cardExit cardlist"}>
                <li>thing i want to say one</li>
                <li>thing i want to say two</li>
                <li>thing i want to say three</li>
              </ul>
            }
           
          </div>
            
          </div>
          <div className="des" onClick = {() => cardControl2()}>
          <img src={desimg} alt="Icon by Muhammad Haq on freeicons.io"></img>
          <div className="cardContentH1Image">
          {cardStateB ? 
              <>
              <h2 className={cardState2B?"cardEnter":"cardExit"}>Custom Designs</h2>
              <p className={cardState2B?"cardEnter":"cardExit"}>A modern web presence tailored to your brand</p>
              </>
            :
              <ul className={!cardState2B?"cardEnter cardlist":"cardExit cardlist"}>
                <li>thing i want to say one</li>
                <li>thing i want to say two</li>
                <li>thing i want to say three</li>
              </ul>
            }
            </div>
            
          </div>


          <div className="dev" onClick = {() => cardControl3()}>

        <img src={devimg} alt="Icon by Muhammad Haq on freeicons.io"></img>
        <div className="cardContentH1Image">
          
        {cardStateC ? 
              <>
              <h2 className={cardState2C?"cardEnter":"cardExit"}>Modern Principles</h2>
              <p className={cardState2C?"cardEnter":"cardExit"}>Responsive design and fast, optimised code</p>
              </>
            :
              <ul className={!cardState2C?"cardEnter cardlist":"cardExit cardlist"}>
                <li>thing i want to say one</li>
                <li>thing i want to say two</li>
                <li>thing i want to say three</li>
              </ul>
            }
          </div>

        </div>


          <div className="SM">

          <img src={digchart} alt="Icon by Muhammad Haq on freeicons.io"></img>
          <div className="cardContentH1Image" onClick = {() => cardControl4()}>
          {cardStateD ? 
              <>
              <h2 className={cardState2D?"cardEnter":"cardExit"}>Social Media</h2>
              <p className={cardState2D?"cardEnter":"cardExit"}>Facebook, Instagram, Linked In, Snapchat and more</p>
              </>
            :
              <ul className={!cardState2D?"cardEnter cardlist":"cardExit cardlist"}>
                <li>thing i want to say one</li>
                <li>thing i want to say two</li>
                <li>thing i want to say three</li>
              </ul>
            }
            </div>

          </div>

          <div className="TC" onClick = {() => cardControl5()}>
          <img src={digbubbles} alt="Icon by Muhammad Haq on freeicons.io"></img>
          <div className="cardContentH1Image">
          {cardStateE ? 
              <>
              <h2 className={cardState2E?"cardEnter":"cardExit"}>Tracking</h2>
              <p className={cardState2E?"cardEnter":"cardExit"}>Analytics, Tagging and Reporting</p>
              </>
            :
              <ul className={!cardState2E?"cardEnter cardlist":"cardExit cardlist"}>
                <li>thing i want to say one</li>
                <li>thing i want to say two</li>
                <li>thing i want to say three</li>
              </ul>
            }

          </div>
          </div>

          <div className="GA" onClick = {() => cardControl6()}>
              
          <img src={diglogo} alt="Icon by Muhammad Haq on freeicons.io"></img>
          <div className="cardContentH1Image">
          {cardStateF ? 
              <>
              <h2 className={cardState2F?"cardEnter":"cardExit"}>Google Ads</h2>
              <p className={cardState2F?"cardEnter":"cardExit"}>Search, YouTube, Gmail and Display</p>
              </>
            :
              <ul className={!cardState2F?"cardEnter cardlist":"cardExit "}>
                <li>thing i want to say one</li>
                <li>thing i want to say two</li>
                <li>thing i want to say three</li>
              </ul>
            }
          </div>
            
          </div>

        </div>
      <div className="buttoncontainer">
        <Link to="packages" smooth={true} duration={500}>
              <span className="sr-only">Jump to perks</span>
            <Button label="Discover more" cta="Development and Design" className="discoverbutton"/>
        </Link>
        <Link to="about" smooth={true} duration={500}>
              <span className="sr-only">Jump to perks</span>
            <Button label="Discover more" cta="Digital Marketing" className="discoverbutton"/>
        </Link>
    </div>
      </div>
      
    </div>

    

    </PackagesWrapper>

  )
}


const PackagesWrapper = styled.section`
  padding: 5rem 0.5rem;
  min-height: 100vh;
  display:flex;
  flex-flow: column;
  background: linear-gradient(to bottom, #101010,#03233c);
  // background: #011727;
  justify-content: space-between;
  overflow: hidden;
 
  .maincontainer{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  
  }

  .headerServices{
    display: flex;
    flex-flow: column;
    
   
    // p{
    //   font-family: var(--Font-Accent);
    //   color: var(--Clr-Secondaryfade);
    //   font-size: 1.1rem;
    //   margin: 0px;
    //   padding: 0.5rem 0.5rem;
    // }

    h1 {
      font-weight: 600;
      font-size: 2rem;
      font-family: var(--Font-Title);
      margin: 0px;
      padding: 1rem 0.5rem;
      
       .marketing, .devword{
         color: #7271d1;
       }
    }
  }


.buttoncontainer{
  text-align: center;

  button{
    margin: 0.5rem 0.5rem;
    padding: 0.9rem 2rem;
    font-size: 0.8rem;
    a{filter: drop-shadow(0px 2px 2px black);}
  }
}


  .flex-container {
    display:flex;
    flex-flow: column;
    border-radius: 20px;
  }

  

 .servicecards{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  
  .cardContentH1Image{
    display: flex;
    flex-flow: column;
    padding: 0 0.5rem;

    p{
      font-family: "Inter";
      font-weight: 500;
      color: rgba(255,255,255, 0.8);
      margin: 0px;
      font-size: 1rem;
      padding: 0.3rem 0.5rem;
      
      }

      h2{
        font-family: "Inter";
        font-weight: 600;
        margin: 0px;
        font-size: 1.3rem;
        padding: 0.3rem 0.3rem;
        color: rgba(255,255,255, 0.9);
       
        
       }
    }
    
   
  }

  .ux, .dev, .des, .SM,.TC,.GA{
    background-color: var(--Clr-tintPackageblue600);
    border-radius: 10px;
    width: 100%;
    padding: 1rem 0.3rem;
    
    display: flex;
    
    align-items: center;
    box-shadow: inset 0px 0px 10px 5px  rgba(114, 113, 209, 0.4), 0px 0px 5px 1px rgba(114, 113, 209, 0.4);
    transition: 0.3s ease-out;


    :hover{
      transform: translateY(-4px);
      box-shadow: inset 0px 0px 10px 5px  rgba(114, 113, 209, 0.4), 0px 0px 15px 6px rgba(114, 113, 209, 0.4);
      cursor: pointer;
    }
    
    img{
      max-width: 100px;
      }

      .cardlist{
        padding: 0 0.9rem;
        margin: 0.5rem 0.6rem;
        font-size: 0.99rem;
        font-weight: 500;
        color: rgba(255,255,255, 0.8);
       
        padding-right: 0.3rem;
        font-family: var(--Font-Second);
        
        
        li{
          padding: 0.2rem 0;
        }
      }
    
  }
  
 }

  .ux, .dev, .des{
  
  
 }
  
 .SM,.TC,.GA{

 }




 .cardEnter{
  animation: cardEnter 0.4s ease-out;
 }

 .cardExit{
  animation: cardExit 0.4s ease-out;
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

//   .headerServices{
//     p{
//     font-size: 1.3rem;
//   }
// }

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

@media(min-width: 1000px){
padding-top: 3.5rem;

.buttoncontainer{
  margin-top: 0.5rem;
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
   padding-top: 1rem;

   @media (min-width: 1235px) and (min-height: 780px ){
        padding-top: 2.5rem;
        padding-bottom: 2rem;
        font-size: 2.3rem;
      }

      @media (min-width: 1499px){
        padding-top:2rem;
        padding-bottom: 1rem;
        font-size: 2rem;
      }
  }
}

  .servicecards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    
    
  }
  .ux, .dev, .des, .SM,.TC,.GA{
      flex-flow: column nowrap;  
      max-width: 400px; 

      li{
        font-size: 0.8rem;
      }

      img{
        margin: auto;
      }
  }

  .ux, .dev, .des{
    
  }
   
  .SM,.TC,.GA{
 
  }

 }

 

  
 

`

export default Packages
