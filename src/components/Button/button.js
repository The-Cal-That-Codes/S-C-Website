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
                
                <div className="wordWrap">{props.cta}</div>
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

.wordWrap{
  height: 100%;
  width: 100%;
}
  &:hover {
    cursor: pointer;
    animation: animate 18s linear infinite;
    scale: 1.015;

    &::before {
      filter: blur(15px);
      opacity: 1;
      animation: animate 13s linear infinite;
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
    // background: linear-gradient(85deg, #559fe3,#924fd5, #E05A42,#E0C342,#86EBD9,#559fe3);
    // background: linear-gradient(85deg, #4193e0,#924fd5,#d24a5a,#924fd5,#4193e0);
    // background: rgba(255,255,255,0.3);
    background: rgba(65, 147, 224,0.3);
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

  @media(min-width: 1100px){
    font-size: 1rem;
  }
`

export default Button
