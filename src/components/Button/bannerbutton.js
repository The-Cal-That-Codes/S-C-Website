import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const BannerButton = props => {
  return (
    <>
      {props.anchor ? (
      <ButtonWrapper
      aria-label={props.label}
      className={props.className}
      onClick={props.onClick}
  >
    <Link to="packages" smooth={true} duration={500}>
      {props.cta}
    </Link>
    </ButtonWrapper>
      ) : (
        <ButtonWrapper aria-label={props.label} type={props.type} className={props.className} onClick={props.onClick}>
          {props.cta}
        </ButtonWrapper>
      )}
    </>
  )
}

const ButtonWrapper = styled.button`
  padding: 0.9rem;
  text-align: center;
  line-height: 1.4;
  color: #fff;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  text-decoration: none;
  box-sizing: border-box;
  background: rgb(1,1,1,0);
  background-size: 400%;
  z-index: 1;
  
  


  &:hover {
    cursor: pointer;
    scale: 1.015;
    border: 2px solid rgba(255,255,255,0.8);
    animation: animate 8s linear infinite;
   

    &::before {
      filter: blur(20px);
      opacity: 1;
      animation: animate 8s linear;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #005826, #258A51, #258A51, #005826 );
    filter: drop-shadow(0px 2px 2px black);
    background-size: 400%;
    opacity: 0;
    transition: 0.5s;
  
  }

  
  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }

 
`

export default BannerButton
