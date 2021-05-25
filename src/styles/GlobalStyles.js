import { createGlobalStyle } from "styled-components"
import "@fontsource/inter"
import "@fontsource/poppins"
import "@fontsource/roboto-slab"

const GlobalStyles = createGlobalStyle`
:root {
  
    --heavyWeight: 900;
    --transMed: 0.3s;
    --transSlow: 0.5s;
    --black: #1f1f1f;
    --charcoal: #3e3e3e;
    --primaryColor: #f441a5;
    --serif: "Playfair Display", serif;
    --sansSerif: "Gothic A1", sans-serif;
    --h1: 2rem;
    --h2: 1.8rem;
    --h3: 1.5rem;
    --h4: 1.25rem;
    --h5: 1.15rem;
    --h6: 1rem;
    --footerMenuItem: 0.85rem;
    --para: 1rem;
    --spacing: 1rem;
    --Clr-Primary500: #4193E0;
    --Clr-tintPackageblue600: rgba(150, 154, 190, 0.3);
    --Clr-Secondaryfade: rgba(255,255,255, 0.9);
    --Font-Title: "Poppins", sans-serif;
    --Font-Second: "Inter", sans-serif;
    --Font-Accent: "Roboto Slab", serif;

    font-size: 16px;

    @media (min-width: 670px) {
      font-size: 1.2rem;
      --h1: 2.6rem;
      --h2: 2.4rem;
      --h3: 1.75rem;
      --h4: 1.5rem;
      --h5: 1.25rem;
      --h6: 1.1rem;
      --footerMenuItem: 1rem;
      --para: 1.1rem;
    }

    @media (min-width: 1500px) {
      font-size: 1.3rem;
      --h1: 3rem;
      --h2: 2.8rem;
      --h3: 2rem;
      --h4: 1.75rem;
      --h5: 1.35rem;
      --para: 1.15rem;
    }

    @media(min-width: 1580px){
      font-size: 1.5rem;
    }

    @media(min-width: 1700px){
      font-size: 1.55rem;
    }
  }
  
  *:focus {
    outline: none;
}

// utility


.no-pointer:hover{
  cursor: default !important;
}

.flex-column{
  display: flex;
  flex-direction: column;
}

.display-block{
  margin: 0 auto;
}

.flex-Row{
  display: flex;
  flex-direction: row;
}

.flex-Col{
  display: flex;
  flex-direction: column;
}

.textCenter{
  text-align: center;
}

.aiCenter{
  align-items: center;
}

.jcCenter{
  justify-content: center;
}

.bgTrans{
  background: rgba(1,1,1,0);
}

.marginNill{
  margin: 0 0;
}

* {
    box-sizing: border-box;
}

body {
  font-family: "Gothic A1", sans-serif;
    color: #fff;
    /* background-color: #060c21; */
    background: black;
}



  .content-container {
    margin: auto;
    
    @media(min-width: 768px){
      max-width: 500px;
    }

    @media (min-width: 1080px) {
      max-width: 650px;
    }
  }

  .flex-container {
    display: flex;


    &.trio-block {
      flex-direction: row;  
    }
  }

  .section-padding {
    padding: 100px 30px;
  }

  

  

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
  }

  .sr-only-focusable:focus,
  .sr-only-focusable:active {
    clip: auto !important;
    -webkit-clip-path: none !important;
    clip-path: none !important;
    height: auto !important;
    margin: auto !important;
    overflow: visible !important;
    width: auto !important;
    white-space: normal !important;
  }

  

`
export default GlobalStyles
