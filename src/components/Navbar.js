import React, { useState, useEffect } from "react"
import links from "../constants/links"
import styled from "styled-components"
import { animateScroll as scroll, Link } from "react-scroll"

const Navbar = ({ Logo }) => {
  const [isOpen, setNav] = useState(false)
  const [navClass, setNavClass] = useState(false)

  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }

  useEffect(() => {
    window.addEventListener('scroll', setNavBackground);

    
  })

  const setNavBackground = () => {
    if (window.scrollY >= 100) {
      setNavClass(true);
    } else {
      setNavClass(false);
    }
  }

  

  return (
    <NavStyles>
      <div className={ navClass ? "navColour navdiv" : "navdiv"}>
        <div className="masthead flex-container">
          <div
            className="logo-container"
            role="button"
            tabIndex="0"
            onClick={() => scroll.scrollToTop()}
            onKeyDown={() => scroll.scrollToTop()}
          >
            <img src={Logo} alt="Startup Logo" />
          </div>
          <button
            className={isOpen ? "toggle-btn toggle-btn-active" : "toggle-btn"}
            type="button"
            onClick={toggleNav}
            aria-label="Menu Button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav navfontplus" : "nav-links"}>
          {links.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.path}
                smooth={true}
                duration={500}
                tabIndex={0}
                onClick={toggleNav}
                onKeyDown={toggleNav}
              >
                <li key={index} className="navlist">
                  {item.text}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </NavStyles>
  )
}

export const NavStyles = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  
  box-sizing: border-box;
  transition: 0.35s ease-out;

  .navdiv{
    display: flex;
  padding: 0rem 0.5rem;
  padding-top: 0.5rem;
  padding-right: 0rem;
  transition: 0.35s ease-out;
  }

  .navColour{
    background: rgba(255, 255, 255, 0.7);
  }
  
 

  .logo-container{
    height:100%;
    width: auto;
  }

  .masthead {
    z-index: 3;
    width: auto;
    justify-content: space-between;

    @media (max-width: 1128px){
      width: 95%;
      
    }

    
    img {
      width: 11rem;
      height: auto;
     
      transition: 0.4s ease-in-out;

      

      :hover{
        transform: scale(1.04);
        cursor: pointer;
      }
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    text-align: center;
    background: rgba(65, 147, 224, 0.85);
    margin: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 15vw;

    @media(min-width: 500px ){
      padding-left: 30vw;
    }

      @media(min-width: 1128px ){
      padding-left: 0vw;

      li{
        color: black;
      }
    }


    

    li {
      list-style: none;
      font-size: 1.75rem; 
      // ^^worthless
      font-weight: 550;
      margin-left: 0;
      margin-right: 5px;
      padding: 0.75rem 0;
      color: #fff;
      padding-bottom: 5vh;
    }

      .navlist{
        text-decoration: none;
        text-transform: capitalize;
        transition: 0.3s;
        font-family: var(--Font-Title);
        font-size: 1.7rem;

      

        &.active {
          color: #7271d1;
        }
      }
      .navlist:hover {
        cursor: pointer;
        color: var(--Clr-Primary500);
        transform: translateY(-3px);
        transition: transform 0.3s linear;
      }

      &.show-nav {

        @media (max-width: 1128px){
        transform: translateX(20%);
        }
        
      }
    }

    
  

  .toggle-btn {
    width: 40px;
    height: 40px;
    padding: 5px;
    padding-top: 1.4rem;
    z-index: 3;
    background-color: transparent;
    border: none;
    

    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: black;
      transition: 0.2s ease-in;

      &:nth-child(1) {
        transform: translateY(-5px);
      }

      &:nth-child(3) {
        transform: translateY(5px);
      }
    }

    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }

        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }

  @media (min-width: 1128px) {

    padding-bottom: 0px;

    .masthead {
      flex-direction: column;
      justify-content: center;
    }

    .toggle-btn {
      display: none;
    }

    .nav-links {
      background: transparent;
      flex-direction: row;
      margin-left: auto;
      margin-right: 2vw;
      position: relative;
      transform: translateX(0);
      transition: none;

      .navlist{
        font-size: 1.2rem;
        padding-top: 1.3rem;
      }

      li {
        padding: 0 0;
        margin-left: 1rem;
        color: black;
      }
    }

    .masthead {
      img {
        padding: 0rem 3rem ;
        margin-left: 8rem;
        width: 18rem ;
      }
    }
  }

  @media(min-width: 1300px){

    .nav-links{
      .navlist{
      
        font-size: 1.3rem;
        padding-top: 1.3rem;
      }
    }
   
   
    .masthead {
    img {
   
      width: 18rem ;
    }
  }
   }

`

export default Navbar
