import React from "react"
import styled from "styled-components"

const BannerButton = props => {
  return (
    <>
      {props.anchor ? (
        <ButtonWrapper
          aria-label={props.label}
          className={props.className}
          onClick={props.onClick}
        >
          {props.cta}
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
  position: relative;
  display: inline-block;
  padding: 0 20px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 0.85rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  text-decoration: none;
  box-sizing: border-box;
  background: rgb(1,1,1,0);
  background-size: 400%;
  border-radius: 15px;
  border: 2px solid rgba(255,255,255,0.8);
  z-index: 1;

  @media(max-width: 1050px){
    transform: scale(1.5);
    
  }

  @media(max-width: 800px){
    margin-top: 5vh !important;
  }


  &:hover {
    cursor: pointer;
    scale: 1.015;
    animation: animate 8s linear infinite;
    border: 2px solid rgba(255,255,255, 0);

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
    background: linear-gradient(90deg, #8a262f, #ea6147, #fd6b19, #8a262f);
    // background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 40px;
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
