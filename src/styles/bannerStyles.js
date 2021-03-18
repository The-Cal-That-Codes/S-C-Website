import styled from "styled-components"

export const BannerStyles = styled.section`
  .gatsby-image-wrapper {
    color: #fff;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0.5rem;
    padding-bottom: 2rem;
  }



.hide{
  display none;
}




.mainbutton{
    a{filter: drop-shadow(0px 2px 2px black);}
    font-size: 0.8rem;
    background: rgba(1,1,1,0);
    margin: 1rem auto;
    border: 2px solid var(--Clr-Primary500);

}

.bannercontactbutton{
  font-size: 0.7rem;
  background: rgba(1,1,1,0);
  border: 0px;
  margin: 0 auto;
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
    margin: 0 auto;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem;
    background-color: rgba(1, 1, 1, 0);
    



    h1 {
      margin: 0px;
      font-size: 2rem;
      line-height: 1.2;
      padding: 0.5rem 0;
      font-family: var(--Font-Title);
       
      span{
        color: var(--Clr-Primary500);
        
      }

      }


    p {
      line-height: 1.5;
      font-size: 1.3rem; 
      font-family: var(--Font-Accent);
      margin: 0 0;
      padding: 0.2rem 0;
     
    }

    }


.hero-leave{
  transform: translateY(100px);
  opacity: 0;
  transition: 0.4s linear;
}

.contact-leave{
  transform: translateY(100px);
  opacity: 0;
  transition: 0.4s linear;
}

.hero-enter{
  animation: hero-enter 0.6s ease-out;
  
}
  
@keyframes hero-enter {
 0%{
   transform: translateY(-50px);
   opacity: 0;
 }
 100%{
   transform: translateY(0px);
   opacity: 1;
 }
}


@media (min-width: 1100px){

  .gatsby-image-wrapper {
    padding: 1rem 8rem;
    padding-bottom: 2rem;
  }

  .hero-content{
    padding-top: 3rem;
    h1{
      font-size: 2.5rem;
    }

   p{
     font-size: 1.5rem;
     padding-right: 2rem;
     margin-bottom: 1rem;
   }
  }
}

`
