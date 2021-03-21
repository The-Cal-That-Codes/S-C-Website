import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"


const Button = props => {
  return (
    <>
      {props.anchor ? (
            <ButtonWrapper
                aria-label={props.label}
                className={props.className}
                onClick={props.onClick}
            >
              <Link to={props.index} smooth={true} duration={500}>
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
  background-size: 400%;
  border: 2px solid var(--Clr-Primary500);
  z-index: 1;
  font-family: var(--Font-Title);
  filter: drop-shadow(0px 2px 2px black);
  background: rgba(1,1,1,0);


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
    background: linear-gradient(90deg, #0c3f57,#1b4347, #1b4347,#0c3f57);
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

  @media(min-width: 1100px){
    font-size: 1rem;
  }
`

export default Button
