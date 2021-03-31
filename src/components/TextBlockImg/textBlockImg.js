import React, {useState } from "react";
import styled from "styled-components";
import { BsXDiamondFill, BsDropletHalf , BsTerminalFill,BsLayersFill,BsFillCircleFill,BsPeopleFill, BsChatSquareDotsFill} from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-scroll";


const TextBlockImg = ({id, paraEnter, paraExit}) => {

  

  let [iconColour, seticonColour] = useState(1);
  let [classControl, setclassControl] = useState(1);
 

const controller = (index) => {
 setclassControl(index)

  setTimeout(() => {
    seticonColour(index);
  } , 450);
}



  return (
   
      <TextBlockImgWrapper id={id}>
        <div className="contentwrapper">
          <h1 className="marginNill">Design, Dev and Deployment all in one place!</h1>
          <div className="iconbox">
          <IconContext.Provider value={classControl === 1 ?{ color: "var(--Clr-Primary500)", className:"iconmedia" }:
                                                         {color:"#969ABE", className:"icon iconmedia" } }>
            <BsXDiamondFill onClick={() => controller(1)}/>
          </IconContext.Provider>
          <h3>General</h3>
          <IconContext.Provider value={classControl === 2 ?{ color: "var(--Clr-Primary500)", className:"iconmedia" }:
                                      {color:"#969ABE", className:"icon iconmedia" }}>
            <BsTerminalFill onClick={() => controller(2)} />
          </IconContext.Provider>
          <h3>Title 2</h3>
          <IconContext.Provider value={classControl === 3 ?{ color: "var(--Clr-Primary500)", className:"iconmedia" }:
                                      {color:"#969ABE", className:"icon iconmedia" }}>
            <BsDropletHalf onClick={() => controller(3)}/>
          </IconContext.Provider>
          <h3>Title 3</h3>
          <IconContext.Provider value={classControl === 4 ?{ color: "var(--Clr-Primary500)", className:"iconmedia" }:
                                      {color:"#969ABE", className:"icon iconmedia" }}>
          
            <BsLayersFill onClick={() => controller(4)}/>
          </IconContext.Provider>
          <h3>Title4</h3>
          
          </div>
          <hr className="longLine"/>
          {
          iconColour === 1 ?
          <div className={classControl === 1 ? paraEnter : paraExit}>
          <p className="paraLeft">
          Websites are almost a requirement for modern trade, they are your customers initial
          contact with your brand and a key factor in gaining clientele.  
          Our design and development process is geared towards providing you with a unique, captivating web identity
         </p>
         <p className="paraRight">
          that utilises modern techniques to give you the online identity you deserve.
         Whether you’re establishing or updating your businesses web identity our philosophy is to deliver a 
         high-quality asset that will aid in the development of your business.
         </p>
         </div> : iconColour === 2 ?
       <div className={classControl === 2 ? paraEnter : paraExit}>
       <p className="paraLeft">
       Forget about clunky website builders, we code everything from scratch to accurately translate your vision into a tailored online home for your business. 
       Combining advanced HTML, CSS and JavaScript 
      </p>
      <p className="paraRight">
      with powerful frameworks like React we blend engaging functionality with optimised performance.
      Using responsive CSS we offer complete functionality over all devices, all inclusive to ensure every site we create is of high quality. 
      </p>
      </div> : iconColour === 3 ?
         <div className={classControl === 3 ? paraEnter : paraExit}>
         <p className="paraLeft">
         In order to ensure aesthetic quality all pages are designed in Figma and sent to you for review before the coding begins.
        User experience principles are implemented from wireframes  
        </p>
        <p className="paraRight">
        to prototypes giving your site the edge it needs to engage your customer base.
        Sites are designed from a “mobile first” approach to keep your business accessible and exceptional across multiple devices. 
        </p>
        </div> :
          <div className={classControl === 4 ? paraEnter : paraExit}>
           <p className="paraLeft">
           FOURTH ipsum dolor, sit amet consectetur adipisicing elit.
           Nesciunt at perferendis harum quis reprehenderit ipsum animi quae rem?
           Officiis repellat hic quisquam obcaecati mollitia quod ea dolorem maxime accusamus molestias?
          </p>
          <p className="paraRight">
            First ipsum dolor, sit amet consectetur adipisicing elit.
            Nesciunt at perferendis harum quis reprehenderit ipsum animi quae rem?
            Officiis repellat hic quisquam obcaecati mollitia quod ea dolorem maxime accusamus molestias?
          </p>
          </div>
           }
         
          <div className="iconbox2 iconNav">

          <Link to="contact" smooth={true} duration={500}>
            <div className="contactLink">
            
            <IconContext.Provider value={{color:"#969ABE",className: "countermedia contactIcon"} }>
              <BsChatSquareDotsFill/>
            </IconContext.Provider>
            <p>Contact Now!</p>
           
            </div>
            </Link>

          <div className="InnerIconbox">
            <IconContext.Provider value={classControl === 1 ?{ color: "var(--Clr-Primary500)", className: "countermedia"}:
                                                           {color:"#969ABE", className: "countermedia"} }>
              <BsFillCircleFill/>
            </IconContext.Provider>
            
            <IconContext.Provider value={classControl === 2 ?{ color: "var(--Clr-Primary500)", className: "countermedia"}:
                                                           {color:"#969ABE",className: "countermedia"} }>
              <BsFillCircleFill/>
            </IconContext.Provider>
            <IconContext.Provider value={classControl === 3 ?{ color: "var(--Clr-Primary500)",className: "countermedia" }:
                                                           {color:"#969ABE",className: "countermedia"} }>
              <BsFillCircleFill/>
            </IconContext.Provider>
            <IconContext.Provider value={classControl === 4 ?{ color: "var(--Clr-Primary500)",className: "countermedia" }:
                                                           {color:"#969ABE",className: "countermedia"} }>
              <BsFillCircleFill/>
            </IconContext.Provider>
          </div>
          <Link to="about" smooth={true} duration={500}>
          <div className="marketingLink">
            
            <IconContext.Provider value={{color:"#969ABE",className: "countermedia marketingIcon"} }>
              <BsPeopleFill/>
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
  background: linear-gradient(to bottom, #03233c, #03233c);

  .FooterButton{
    display: none;
  }
 

h1{
  margin: 0 0;
  padding: 1rem 1rem;
  font-size: 1.5rem;
  font-family: var(--Font-Title);
}

h3{
  display: none
}

.iconbox{
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem 0rem;
  padding-top: 0px;

  svg{
    overflow: visible;
  }

}

.iconbox2{
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0rem;

  .contactLink, .marketingLink{
    display: none;
  }

  .countermedia{
    margin-left: 1rem;
  }

}

.iconNav{
  justify-content: center;
  

  
  >* + * {
    margin-left: 0.5rem;
  }
}

.iconmedia{
  width: 2.5rem;
  height: 2.5rem;
}
 
.longLine{
  max-width: 96%;
  margin: 0 auto;
  height: 5px;
  border: 0px;
  background-color: var(--Clr-Primary500);
  opacity: 0.8;

}

.smallLine{
  max-width: 80%;
  margin: 0 auto;
  height: 4px;
  border: 0px;
  background-color: #969ABE;
  opacity: 0.8;
}

.icon{
  cursor: pointer;
  transition: 0.3s ease-out;
}

.icon:hover{
  transform: translateY(-5px);
  
}
  

.paraEnter{
  display: flex;
  flex-flow: column;
  animation: paraEnter 0.45s ease-out;

  p{
    padding: 0.5rem 1.2rem;
    padding-right: 0.4rem;
    margin: 0 0.3rem;
    line-height: 1.5;
    font-family: var(--Font-Second);
    font-size: 1.1rem;
    
  }

}

.paraExit{
  display: flex;
  flex-flow: column;
  animation: paraExit 0.45s ease-out;

  p{
    padding: 0.5rem 1.2rem;
    padding-right: 0.4rem;
    margin: 0 0.3rem;
    line-height: 1.5;
    font-family: var(--Font-Second);
    font-size: 1.1rem;
  }
 
}

@keyframes paraEnter{
  0%{
    opacity: 0;
    transform: translateX(-50px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes paraExit{
  0%{
    opacity: 1;
    transform: translateX(0px);
  }
  100%{
    opacity: 0;
    transform: translateX(50px);
  }
}

@media (min-width: 519px){
  padding: 3rem 3rem;
  padding-bottom: 0rem;

  h1{
    font-size: 1.7rem;
    padding: 2rem 1rem;
    padding-bottom: 1rem;

    @media(min-width: 790px){
      padding-bottom: 2rem;
      font-size: 2rem;
    }
  }
  .paraEnter,.paraExit{
    flex-flow: row;

    p{
    font-size: 1.1rem ;
    padding: 1.5rem 0.5rem ;
    
    }
  }
  
  .iconbox{
    justify-content: space-evenly;
  

    svg{
      padding: 0.1rem;
    }
  }

  .iconbox2{
    justify-content: center;
    margin-top: 0.5rem;
    
    
  }

  .iconmedia{
    height: 3.5rem;
    width: 3.5rem;
  }

  .countermedia{
    height: 1.4rem;
    width: 1.4rem;
    margin-left: 1rem;

  }

  .contentwrapper{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 80vh;
       
     }

     .footerWrap{
       display: flex;
       margin: 0.5rem auto;
       width: 100%;
       justify-content: space-evenly;
       
      .FooterButton{
        display: block;
        margin: 0 0.5rem;
        background: rgba(1,1,1,0);
      }
     }

    
}

@media(min-width: 1000px){
  padding: 1rem 1rem;
  
  

  h1{
    font-size: 2rem;
   padding: 2rem 1rem;
   
  }

  h3{
    display: block;
    font-size: 1.5rem;
    margin-left: 1rem;
    margin-right: 2rem;
  }

  .longLine{
    margin: 0rem 1rem;
    width: 100%;
    
  }

  .smallLine{
    width: 85%;
  }

  .contentwrapper{
 display: flex;
 flex-flow: column nowrap;
 justify-content: center;
 height: 100vh;
    
  }

.iconbox{
  justify-content: flex-start;
  padding: 0rem 1rem;
}
  .iconbox2{
  justify-content: space-around;
  display: flex;
  margin-top: 1rem;

  svg{
    margin-left: 1rem;
  }
  .contactLink, .marketingLink{
    display: flex;   
    cursor: pointer;


    p{
      margin: 0 0;
      margin-bottom: 0.2rem;
      align-self: center;
      font-size: 1.2rem;
    }

    svg{
      margin: 0 0.3rem;
      margin-bottom: 0.3rem;
      align-self: center;
    }
    .marketingIcon,.contactIcon{
      transition: 0.3s ease-out;
      height: 2rem;
      width: 2rem;
    }

    
    }

    .marketingLink,.contactLink{
      transition: 0.3s ease-out;
    }

    .marketingLink:hover{
     
      transform: scale(1.1);
      transition: 0.3s ease-out;

      .marketingIcon{
        
        fill: var(--Clr-Primary500);
       
      }
  }

  .contactLink:hover{
     
    transform: scale(1.1);
    transition: 0.3s ease-out;

    .contactIcon{
      
      fill: var(--Clr-Primary500);
     
    }
}

 

}

.paraEnter, .paraExit {
    max-width: 100%;
    
    .paraLeft,.paraRight{
      font-size: 1.3rem ;
      padding: 2rem 1rem;
      padding-bottom: 0.5rem;
      line-height: 1.6
    }

    .paraLeft{
      margin-left: 8vw;
    }
   
    .paraRight{
      margin-right: 8vw;
    }
  }

  .countermedia{
    max-height: 1.6rem;
    max-width: 1.6rem;
    margin-left: 0rem;
    padding: 0.1rem;

  }


}

@media(min-width: 1359px){
  padding: 2rem 2rem;

  h1{

    padding: 0rem 1rem;
    padding-bottom: 1.5rem;
  
  }
  
  .iconbox{
    padding-bottom: 0px;
  }

  .paraEnter, .paraExit {
    max-width: 100%;
    
    p{
      font-size: 1.2rem ;
      padding: 1rem 1rem;
    }
   
  }
}

@media(min-width: 1390px){
  padding: 1rem 4rem;
  

  h1{
 
    font-size: 2.3rem;
  }

  .iconbox{
    margin-bottom: 0.5rem;

    svg{
      margin: 0.3rem;
    }
  }
  .iconbox2{
    padding: 0rem;
    padding-top: 1rem;
    margin-top: 1rem;

    svg{
      margin: 0.3rem;
      overflow: visible;
    }
  }
}  

@media(min-height: 809px){
  padding-bottom: 0.5rem;
  h1{
    padding-bottom: 2.5rem;
    font-size: 2.3rem;
  }

  @media(min-width: 1580px){
    h1{
      padding-bottom: 0rem;
    }

    .iconbox2{
      padding-top: 0.5rem;
      
    }
  }
}

@media(min-height: 865px){
  padding-bottom: 0.5rem;
  h1{
    padding-bottom: 2.5rem;
    font-size: 2.3rem;
  }

  @media(min-width: 1620px){
    h1{
      padding-bottom: 1rem;
    }

    .iconbox2{
      padding-top: 0.5rem;
      
    }
  }
}

@media(min-height: 865px){
  
  @media(min-width: 1800px){
 

    h1{
      padding-bottom: 2rem;
    }

    .iconbox2{
      padding-top: 2rem;
      
    }
  }
}

`

export default TextBlockImg
