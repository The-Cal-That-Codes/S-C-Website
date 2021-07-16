import styled from "styled-components"

export const BannerStyles = styled.section`



  .hero-image {
    color: #fff;
    min-height: 100vh;

    padding: 1rem 0.5rem;
    padding-bottom: 2rem;

    @media (min-width: 600px) {
      padding: 1rem 2.5rem;
    }
  }

  
  .mainbutton {
    a {
      /* filter: drop-shadow(0px 2px 2px black); */
    }
    font-size: 0.9rem;
 
    margin: 1rem 0;

  
  }

  .bannercontactbutton {
    font-size: 0.8rem;
    border: 0px;
    
    background:  var(--Clr-Primary500);
    
  }

  .hero-hide {
    animation: disappear 0.3s normal ease-out forwards;

    p,
    h1,
    button {
      animation: disappear 0.3s normal ease-out forwards;
    }
  }

  .hero-content {
    margin: 0 0;
    margin-top: 1rem;
    padding: 0 0.5rem;
    

    h1 {
      font-size: 2rem;
      line-height: 1.2;
      padding: 0.5rem 0;
      font-family: var(--Font-Title);
     

      span {
        color: var(--Clr-Primary500);
      }
    }

    p {
      line-height: 1.5;
      font-size: 1.3rem;
      font-family: var(--Font-Accent);
      margin-bottom: 0.5rem;
      padding: 0.2rem 0;
     
    }
  }

  .hero-leave {
    transform: translateY(100px);
    opacity: 0;
    transition: 0.4s linear;
  }

  .contact-leave {
    transform: translateY(100px);
    opacity: 0;
    transition: 0.4s linear;
  }

  .hero-enter {
    animation: hero-enter 0.6s ease-out;
  }

  @keyframes hero-enter {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @media (min-width: 1100px) {
    .hero-image {
      padding: 1rem 6rem;
      padding-bottom: 2rem;
    }

    .hero-content {
      padding-left: 6rem;

      h1 {
        font-size: 2.2rem;
        color: black;
      }

      p {
        font-size: 1.4rem;
        width: 35vw;
        margin-bottom: 0.5rem;
        color: black;
      }
    }

    .mainbutton {
      font-size: 1rem;
      margin-right: 1rem;
    }

    .bannercontactbutton {
      font-size: 0.9rem;
      padding: 0.9rem;
      color: #fff;
    }
  }

  .loaderScreen {
   

    
    display: flex;
    width: 100%;
    height: 100vh;
    background: #fff;
    position: absolute;
    z-index: 2;

    
  }

  .loaderExit {
   
    display: flex;
    width: 100%;
    height: 100vh;
    background: #121212;
    position: absolute;
    z-index: 2;
    animation: loaderExit 2s forwards;
    
  }

  @keyframes loaderExit {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      width: auto;
      height: auto;
      // background-color: rgba(1,1,1,0);
      z-index: -1;
    }
  }

`
