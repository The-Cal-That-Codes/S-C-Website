import React from "react"
import styled from "styled-components"

const Button = props => {
  return (
    <>
      {props.anchor ? (
        <ButtonWrapper
          aria-label={props.label}
          className="anchor"
          as="a"
          href={props.href}
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
  font-size: 0.85em;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-decoration: none;
  box-sizing: border-box;
  background: linear-gradient(90deg, #581534, #ca3e33, #ffeb3b, #581534 );
  background-size: 400%;
  border-radius: 30px;
  border: none;
  z-index: 1;
  
@media(max-width: 1050px){
  transform: scale(1.5);
}

@media (max-width: 768px){
  margin-bottom: 10vh;
}


  &:hover {
    cursor: pointer;
    animation: animate 8s linear infinite;
    scale: 1.015;

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
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
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

export default Button
