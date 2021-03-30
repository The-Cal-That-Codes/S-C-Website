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
                <div className="wordWrap">
                {props.cta}
                </div>
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
    padding: 0.9rem;
  }


  &:hover {
    cursor: pointer;
 
    scale: 1.015;

    &::before {
      filter: blur(15px);
      opacity: 1;
    
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
    background: rgba(65, 147, 224,0.3);
    background-size: 400%;
    opacity: 0;
    -webkit-transition: 0.5s;
  }



  @media(min-width: 1100px){
    font-size: 1rem;
  }
`

export default Button
