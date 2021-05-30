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
          <span></span>
          <span></span>
          <span></span>
          <span></span>
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
          <span></span>
          <span></span>
          <span></span>
          <span></span>
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
  line-height: 1.4;
  color: #fff;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  text-decoration: none;
  box-sizing: border-box;
  z-index: 1;
  font-family: var(--Font-Title);
  filter: drop-shadow(0px 2px 2px black);
  background: rgba(105, 150, 236, 0.1);
  border: none;

  .wordWrap {
    height: 100%;
    width: 100%;
    padding: 0.9rem;
  }

  span {
    display: block;
    position: absolute;
    background: var(--Clr-Primary500);
  }

  span:nth-child(1) {
    left: 0;
    bottom: 0;
    width: 2px;
    height: 100%;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s;
  }

  &:hover span:nth-child(1) {
    transform: scaleY(1);
    transform-origin: bottom;

    z-index: 1;
  }

  span:nth-child(2) {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s;
  }

  &:hover span:nth-child(2) {
    transform: scaleX(1);
    transform-origin: left;
    z-index: 1;
  }

  span:nth-child(3) {
    right: 0;
    bottom: 0;
    width: 2px;
    height: 100%;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s;
    transition-delay: 0.3s;
  }

  &:hover span:nth-child(3) {
    transform: scaleY(1);
    transform-origin: bottom;

    z-index: 1;
  }

  span:nth-child(4) {
    top: 0;
    left: 0px;
    bottom: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s;
    transition-delay: 0.3s;
  }

  &:hover span:nth-child(4) {
    transform: scaleX(1);
    transform-origin: left;

    z-index: 1;
  }

  &:hover {
    cursor: pointer;

    border: 0px;
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
