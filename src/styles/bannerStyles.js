import styled from "styled-components"

export const BannerStyles = styled.section`
  .gatsby-image-wrapper {
    height: 100vh;
    color: #fff;

    @media(max-width:365px){
      height: 110vh;
    }
  }

.testh1{
  height:50px;
  width:80px;
  position: relative;
  top: 40vh;
  left: 50vw;
}

.hide{
  display none;
}

.contactwrap-banner{
  animation: revealcontact 1s 1s normal ease-out forwards;

}


.mainbutton{
  filter: drop-shadow(0px 2px 2px black);
}

.button-div{
  display: flex;
  flex-flow: column;
  width: auto;
  height: 18vh;
  justify-content: space-evenly;
  justify-self: center;
  margin-left: auto;
  margin-right: auto;


  @media (max-width: 768px){
    height: 20vh;
  }

 
    
    @media (max-width: 834px) {
      height: 15vh;
    }

    @media(max-width: 600px){
      height: 19vh;
    }
  }
 
}

.hero-hide {
  
  animation: disappear 0.3s normal ease-out forwards;
   

    p,h1, button{
      animation: disappear 0.3s normal ease-out forwards;
    }
}


.displaynone{
  display:none;

  h1, p, button{
    display:none;
  }
}


  .hero-content {
    text-align: center;
    height: 100%;
    width: 100%;
    max-width: 400px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    

    @media (min-width: 768px) {
      max-width: 650px;
      
    }

    h1 {
      font-size: 2.5rem;
      line-height: 1.2;

      @media (max-width: 600px){
          font-size: 2rem;
      }

    

      span {
        background: -webkit-linear-gradient(90deg,#C6FFDD,#FBD786,#f7797d );
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent;
        font-size: 2.5rem;

        @media (max-width: 600px){
          font-size: 2rem;
          font-weight: 650;
        }
        @media (max-width: 450px){
          margin: 0px;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
      }
    }

    p {
      margin-top: 0;
      margin-bottom: 2rem;
      line-height: 1.2;
      font-size: 1.15rem;

      @media (min-width: 768px) {
        font-size: 1.35rem;
      }

      @media(max-width: 1050px){
        font-size: 1.5rem;
      }
      

    
    }

    button,
    .anchor {
      margin: 0 auto;
      filter: drop-shadow(0px 2px 2px black);
      border-radius: 20px;
      // border: 2px solid rgba(1,1,1,0.4);
      
    }

    @media (min-width: 768px) {
      max-width: 800px;

      h1 {
        font-size: 3rem;
      }
    }

    @media (min-width: 1200px) {
      h1 {
        font-size: 3rem;
      }
    }
  
    @keyframes disappear {
      0% {
        opacity: 1;
        
      }
      50% {
        opacity: 0.5;
        
      }
      100% {
        opacity: 0;
       
        
      }

      @keyframes revealcontact {
        0% { display: none;
          opacity: 0;
          
        }
        50% {
          display: flex;
          opacity: 0.5;
          
        }
        100% {
          display: flex;
          opacity: 1;
         
          
        }
      
     
    }

    

`
