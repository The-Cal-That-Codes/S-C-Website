import React, { useEffect, useState } from "react"
import styled from "styled-components"
// import { useInView } from "react-intersection-observer";
// import { useAnimation } from "framer-motion";
import { BsDiamondFill, BsDropletHalf , BsTerminalFill,BsLayersFill } from "react-icons/bs";
import { IconContext } from "react-icons";


const TextBlockImg = ({id}) => {

  

  let [iconColour, seticonColour] = useState(1);
  let [classControl, setclassControl] = useState(1);
 

const controller = (index) => {
 setclassControl(index)

  setTimeout(() => {
    seticonColour(index);
  } , 450);
}



  // const controls = useAnimation()
  // const [ref, inView] = useInView({
  //   // Percentage of item in view to trigger animation
  //   threshold: 0.25,
  // })


  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible")
  //   }
  // }, [controls, inView])

  return (
   
      <TextBlockImgWrapper id={id}>
        <div className="contentwrapper">
          <h1>Design, Dev and Deployment all in one place!</h1>
          <div className="iconbox">
          <IconContext.Provider value={classControl === 1 ?{ color: "#7271d1", size: "2.5rem", className:"iconmedia" }:
                                                         {color:"#969ABE", size: "2.5rem", className:"icon iconmedia" } }>
            <BsDiamondFill onClick={() => controller(1)}/>
          </IconContext.Provider>
          <h3>General</h3>
          <IconContext.Provider value={classControl === 2 ?{ color: "#7271d1", size: "2.5rem", className:"iconmedia" }:
                                      {color:"#969ABE", size: "2.5rem", className:"icon iconmedia" }}>
            <BsTerminalFill onClick={() => controller(2)} />
          </IconContext.Provider>
          <h3>Title 2</h3>
          <IconContext.Provider value={classControl === 3 ?{ color: "#7271d1", size: "2.5rem", className:"iconmedia" }:
                                      {color:"#969ABE", size: "2.5rem", className:"icon iconmedia" }}>
            <BsDropletHalf onClick={() => controller(3)}/>
          </IconContext.Provider>
          <h3>Title 3</h3>
          <IconContext.Provider value={classControl === 4 ?{ color: "#7271d1", size: "2.5rem", className:"iconmedia" }:
                                      {color:"#969ABE", size: "2.5rem", className:"icon iconmedia" }}>
          
            <BsLayersFill onClick={() => controller(4)}/>
          </IconContext.Provider>
          <h3>Title4</h3>
          </div>
          <hr className="longLine"/>
          {
          iconColour === 1 ?
          <div className={classControl === 1 ? "paraEnter" : "paraExit"}>
          <p>
          First ipsum dolor, sit amet consectetur adipisicing elit.
          Nesciunt at perferendis harum quis reprehenderit ipsum animi quae rem?
          Officiis repellat hic quisquam obcaecati mollitia quod ea dolorem maxime accusamus molestias?
         </p>
         <p>
           First ipsum dolor, sit amet consectetur adipisicing elit.
           Nesciunt at perferendis harum quis reprehenderit ipsum animi quae rem?
           Officiis repellat hic quisquam obcaecati mollitia quod ea dolorem maxime accusamus molestias?
         </p>
         </div> : iconColour === 2 ?
       <div className={classControl === 2 ? "paraEnter" : "paraExit"}>
       <p>
       Second ipsum dolor, sit amet consectetur adipisicing elit.
       Nesciunt at perferendis harum quis reprehenderit ipsum animi quae rem?
       Officiis repellat hic quisquam obcaecati mollitia quod ea dolorem maxime accusamus molestias?
      </p>
      <p>
        First ipsum dolor, sit amet consectetur adipisicing elit.
        Nesciunt at perferendis harum quis reprehenderit ipsum animi quae rem?
        Officiis repellat hic quisquam obcaecati mollitia quod ea dolorem maxime accusamus molestias?
      </p>
      </div> : iconColour === 3 ?
         <div className={classControl === 3 ? "paraEnter" : "paraExit"}>
         <p>
         Third ipsum dolor, sit amet consectetur adipisicing elit.
         Nesciunt at perferendis harum quis reprehenderit ipsum animi quae rem?
         Officiis repellat hic quisquam obcaecati mollitia quod ea dolorem maxime accusamus molestias?
        </p>
        <p>
          First ipsum dolor, sit amet consectetur adipisicing elit.
          Nesciunt at perferendis harum quis reprehenderit ipsum animi quae rem?
          Officiis repellat hic quisquam obcaecati mollitia quod ea dolorem maxime accusamus molestias?
        </p>
        </div> :
          <div className={classControl === 4 ? "paraEnter" : "paraExit"}>
           <p>
           FOURTH ipsum dolor, sit amet consectetur adipisicing elit.
           Nesciunt at perferendis harum quis reprehenderit ipsum animi quae rem?
           Officiis repellat hic quisquam obcaecati mollitia quod ea dolorem maxime accusamus molestias?
          </p>
          <p>
            First ipsum dolor, sit amet consectetur adipisicing elit.
            Nesciunt at perferendis harum quis reprehenderit ipsum animi quae rem?
            Officiis repellat hic quisquam obcaecati mollitia quod ea dolorem maxime accusamus molestias?
          </p>
          </div>
           }
          <hr className="smallLine"/>
          <div className="iconbox2 iconNav">
          <IconContext.Provider value={classControl === 1 ?{ color: "#7271d1", className: "countermedia"}:
                                                         {color:"#969ABE", className: "countermedia"} }>
            <BsDiamondFill/>
          </IconContext.Provider>
          
          <IconContext.Provider value={classControl === 2 ?{ color: "#7271d1", className: "countermedia"}:
                                                         {color:"#969ABE",className: "countermedia"} }>
            <BsDiamondFill/>
          </IconContext.Provider>
          <IconContext.Provider value={classControl === 3 ?{ color: "#7271d1",className: "countermedia" }:
                                                         {color:"#969ABE",className: "countermedia"} }>
            <BsDiamondFill/>
          </IconContext.Provider>
          <IconContext.Provider value={classControl === 4 ?{ color: "#7271d1",className: "countermedia" }:
                                                         {color:"#969ABE",className: "countermedia"} }>
            <BsDiamondFill/>
          </IconContext.Provider>
          
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

}

.iconbox2{
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0rem;
  padding-top: 0px;

}

.iconNav{
  justify-content: center;
  padding-top: 0.5rem;

  
  >* + * {
    margin-left: 0.5rem;
  }
}


 
.longLine{
  max-width: 90%;
  margin: 0 auto;
  height: 5px;
  border: 0px;
  background-color: #7271d1;
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
    transform: translateX(100px);
  }
}

@media (min-width: 519px){
  padding: 3rem 3rem;
  padding-bottom: 0rem;

  h1{
    font-size: 1.8rem;
    padding: 2rem 1rem;
    padding-bottom:1rem;
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
    height: 1.7rem;
    width: 1.7rem;
    margin-left: 1rem;

  }
}

@media(min-width: 1000px){
  padding: 1rem 1rem;
  
  

  h1{
    font-size: 2.5rem;
   padding: 1rem 1rem;
  }

  h3{
    display: block;
    font-size: 1.5rem;
    margin-left: 1rem;
    margin-right: 2rem;
  }

  .longLine{
    margin: 0rem 1rem;
    max-width: 100%;
    
  }

  .smallLine{
    margin: 0 1rem;
    max-width: 100%;
  }

  .contentwrapper{
 display: flex;
 flex-flow: column nowrap;
 justify-content: center;
 height: 100vh;
    
  }

.iconbox{
  justify-content: flex-start;
  padding: 1rem 1rem;
}
  .iconbox2{
  justify-content: center;
  display: flex;
  

  svg{
    margin-left: 1rem;
  }

  }

.paraEnter, .paraExit {
    max-width: 100%;
    
    p{
      font-size: 1.35rem ;
      padding: 2rem 1rem;
    }
   
  }

  .countermedia{
    height: 2rem;
    width: 2rem;
    margin-left: 0rem;

  }


}

@media(min-width: 1359px){
  padding: 2rem 2rem;

  h1{
    padding-bottom: 0px;
  
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
  padding 1rem 2rem;

  h1{
    padding-bottom: 1rem;
  }

  .iconbox{
    padding-bottom: 1rem;
  }
  .iconbox2{
    padding-bottom: 0rem;
  }
  

  .paraEnter, .paraExit {
    max-width: 100%;
    
    p{
      font-size: 1.2rem ;
      padding: 2rem 2rem;
    }
   
  }
}
`

export default TextBlockImg
