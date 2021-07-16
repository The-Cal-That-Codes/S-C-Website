import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const Button = (props) => {
  return (
    <>
      {/* two different buttons for whether it links to other page or just has onClick event, if anchor is true then it has the Link component from react scroll*/}
      {props.anchor ? (
        <ButtonWrapper
          aria-label={props.label}
          className={props.className}
          onClick={props.onClick}
        >
          {/*spans form the outside border animation*/}
         
          <Link to={props.index} smooth={true} duration={500}>
            <div className="wordWrap">{props.cta}</div>
          </Link>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper
          aria-label={props.label}
          type={props.type}
          className={props.className}
          onClick={props.onClick}
        >
         
          {props.cta}
        </ButtonWrapper>
      )}
    </>
  )
}

const ButtonWrapper = styled.button`
  position: relative;
  display: inline-block;
  text-align: center;
  line-height: 1.2;
  width: 350px;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  text-decoration: none;
  box-sizing: border-box;
  z-index: 1;
  font-family: var(--Font-Title);
  background: rgba(105, 150, 236, 0);
  border: 2px solid var(--Clr-Primary500);
  border-radius: 5px;
  transition: 0.3s ease-out;
  
  font-weight: bold;

  .wordWrap {
    height: 100%;
    width: 100%;
    padding: 0.8rem;
  }

  

  &:hover {
    cursor: pointer;
    transform: scale(1.025);

  }

  @media (min-width: 1100px) {
    font-size: 1rem;
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
