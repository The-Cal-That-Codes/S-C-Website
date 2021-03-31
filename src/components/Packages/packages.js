import React, { useState} from "react"
import styled from "styled-components";
import Button from "../Button/button";

const Packages = ({uximg, devimg, desimg, digbubbles, diglogo, digchart, cardClass}) => {

  let [cardState, setcardState] = useState(0)
  let [cardState2, setcardState2] = useState(0)


  const cardControl = (index) => {
    setcardState(index);

    setTimeout(() => {
      setcardState2(index)
    }, 400)
  }



  return (
 
    <PackagesWrapper id="packages" className="flex-Col">
       
    <div className="maincontainer flex-Row">

      <div className="flex-container flex-Col">

        <div className="headerServices flex-Col">
              <h1 className="marginNill">Digital solutions for  <span className="marketing">Marketing</span> and <span className="devword">Development</span></h1>
          </div>
          
        <div className="servicecards flex-Row jcCenter">
          <div className="card" >
            {cardState2 === 1 ? 
              <ul className={cardState === 1?"cardEnter cardlist":"cardExit cardlist"} onClick = {() => cardControl(0) }>
              <li>thing i want to say one</li>
              <li>thing i want to say two</li>
              <li>thing i want to say three</li>
            </ul>
            :
            <div className={cardState === 1?"cardExit":"cardEnter"} onClick = {() => cardControl(1) } >
            <img src={uximg} alt="Icon by Muhammad Haq on freeicons.io"/>
            <div className={cardClass}>
            <h2>UX and SEO</h2>
            <p>Industry practices applied to achieve your goals</p>
            </div>
            </div>
            
            }
           
         
            
          </div>
          <div className="card">
          
          
          {cardState2 === 2 ? 
               <ul className={cardState === 2?"cardEnter cardlist":"cardExit cardlist"} onClick = {() => cardControl(0)}>
               <li>thing i want to say one</li>
               <li>thing i want to say two</li>
               <li>thing i want to say three</li>
             </ul>
            :
             
              <div className={cardState === 2?"cardExit":"cardEnter"} onClick = {() => cardControl(2)}>
              <img src={desimg} alt="Icon by Muhammad Haq on freeicons.io"/>
              <div className={cardClass}>
              <h2>Custom Designs</h2>
              <p>A modern web presence tailored to your brand</p>
              </div>
              </div>
            }
            </div>
            
        


          <div className="card">

        
      
          
        {cardState2 === 3 ? 

          <ul className={cardState ===3?"cardEnter cardlist":"cardExit cardlist"}  onClick = {() => cardControl(0)}>
          <li>thing i want to say one</li>
          <li>thing i want to say two</li>
          <li>thing i want to say three</li>
        </ul>

            :
        <div className={cardState === 3?"cardExit ":"cardEnter"}  onClick = {() => cardControl(3)}>
          <img src={devimg} alt="Icon by Muhammad Haq on freeicons.io"/>
          <div className={cardClass}>
            <h2>Modern Principles</h2>
            <p>Responsive design and fast, optimised code</p>
          </div>
        </div>
            }
          </div>

       


          <div className="card" >
         
          {cardState2 === 4 ? 
            <ul className={cardState === 4?"cardEnter cardlist":"cardExit cardlist"} onClick = {() => cardControl(0)}>
            <li>thing i want to say one</li>
            <li>thing i want to say two</li>
            <li>thing i want to say three</li>
          </ul>
            :
            
                <div className={cardState === 4?"cardExit":"cardEnter"} onClick = {() => cardControl(4)}>
                <img src={digchart} alt="Icon by Muhammad Haq on freeicons.io"/>
                <div className={cardClass}>
                <h2>Social Media</h2>
                <p>Facebook, Instagram, Linked In, Snapchat</p>
                </div>
                </div>
            }
            </div>

        

          <div className="card">
       
        
          {cardState2 === 5 ? 
            <ul className={cardState===5?"cardEnter cardlist":"cardExit cardlist" } onClick = {() => cardControl(0)}>
            <li>thing i want to say one</li>
            <li>thing i want to say two</li>
            <li>thing i want to say three</li>
          </ul>
             
            :
            <div className={cardState===5?"cardExit":"cardEnter"}  onClick = {() => cardControl(5)}>
            <img src={digbubbles} alt="Icon by Muhammad Haq on freeicons.io"/>
            <div className={cardClass}>
            <h2>Tracking</h2>
            <p>Analytics, Tagging and Reporting</p>
            </div>
            </div>
            }

          </div>
      

          <div className="card" >
              
         
          {cardState2===6 ? 
           <ul className={cardState ===6?"cardEnter cardlist":"cardExit cardlist"} onClick = {() => cardControl(0)}>
           <li>thing i want to say one</li>
           <li>thing i want to say two</li>
           <li>thing i want to say three</li>
         </ul>
            :
          <div className={cardState===6?"cardExit":"cardEnter"} onClick = {() => cardControl(6)}>
          <img src={diglogo} alt="Icon by Muhammad Haq on freeicons.io"/>
          <div className={cardClass}>
          <h2>Google Ads</h2>
          <p>Search, YouTube, Gmail and Display</p>
          </div>
          </div>     
            }
          </div>
            
       

        </div>
      {/* <div className="buttoncontainer textCenter"> */}
        
      <span className="sr-only">Jump to Development</span>
            <Button label="Discover more" 
                    cta="Development and Design" 
                    className="discoverbutton" 
                    anchor={true} 
                    index="perks"/>

            
        
        
            <span className="sr-only">Jump to Marketing</span>
            <Button label="Discover more" 
                    cta="Digital Marketing" 
                    anchor={true} 
                    className="discoverbutton" 
                    index="about"/>
            
      
    {/* </div> */}
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


// .buttoncontainer{
//   background: rgba(1,1,1,0);
//   margin-top: 0.5rem;
  
  .discoverbutton{
    -webkit-align-self: center;
    margin: 0rem auto;
    font-size: 0.8rem;
    a{filter: drop-shadow(0px 2px 2px black);}
  }
// }


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
        font-size: 0.99rem;
        font-weight: 500;
        color: rgba(255,255,255, 0.8);
        padding-right: 0.3rem;
        font-family: var(--Font-Second);
        flex-flow: column;
        font-size: 1.1rem;
        line-height: 1.05;

      
        
        li{
          padding: 0.3rem 0;
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
        font-size: 1rem;
        line-height: 1.4;
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
