import React, { useState } from "react"
import links from "../constants/links"
import styled from "styled-components"
import { animateScroll as scroll, Link } from "react-scroll"
import "@fontsource/roboto"


const Navbar = ({ Logo }) => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  // let scrollPercentage = (scroll.y / (document.documentElement.offsetHeight - window.innerHeight)) * 100;
  // if (scrollPercentage > 50) {
  //   classchange === true;
  // } else {
  //   classchange === false
  // }
  
  return (
    <NavStyles>
      <div className="masthead flex-container">
       <div 
       className="logo-container" 
       onClick={() => scroll.scrollToTop()}>
         
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
            <Link to={item.path} smooth={true} duration={500}>
            <li key={index} className="navlist" onClick={toggleNav} >
              {item.text}
            </li>
            </Link>
          )
        })}
      </ul>
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
  display: flex;
  padding: 1rem;
  padding-top: 0.5rem;
  box-sizing: border-box;
  


  .logo-container{
    height:100%;
    width: auto;
  }

  .masthead {
    z-index: 3;
    width: auto;
    justify-content: space-between;

    @media (max-width: 1050px){
      width: 100%;
    }

    img {
      width: 300px;
      height: auto;
      transition: 0.4s ease-in-out;

      :hover{
        scale: 1.04
      }

      @media (max-width: 1450px) {
        width: 15vw;
      }
      @media (max-width: 1050px){
        width: 30vw;
        
      }
      @media (max-width: 600px) {
        width: 40vw;
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
    background: linear-gradient(45deg, rgba(6, 12, 33, 0.9), rgba(13, 1, 57,0.9));
    margin: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 20vw;

    @media(max-width: 1050px){
      padding-left: 10vw;
    }

    @media (max-width: 993px){
      padding-left: 30vw;
      
    }

    li {
      list-style: none;
      font-size: 1.75rem; 
      // ^^worthless
      font-weight: 550;
      margin-left: 0;
      margin-right: 5px;
      padding: 0.75rem 0;
      color: #F0EAEA;
      padding-bottom: 5vh;
    }

      .navlist{
        text-decoration: none;
        text-transform: capitalize;
        transition: 0.3s;
        font-family: "Roboto";
        font-size: 1.7rem;

        @media (max-width: 1050px){
          font-size: 2rem !important;
          
        }

        &.active {
          color: #e609b5;
        }
      }
      .navlist:hover {
        postion:relative;
        cursor: pointer;
        color: #db4a37;
        transform: translateY(-3px);
        transition: transform 0.3s linear;
        // filter: drop-shadow(3px 4px 2px #db4a37);
      }

      &.show-nav {

        @media (max-width: 993px){
        transform: translateX(25%);
        }
        
      }
    }

    
  }

  .toggle-btn {
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: transparent;
    border: none;

    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
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

  @media (min-width: 992px) {
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
      position: relative;
      transform: translateX(0);
      transition: none;

      li {
        margin-left: 1rem;
      }
    }
  }

`

export default Navbar
