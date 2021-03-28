import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "react-scroll"
import {
  mainMenuItems,
  footerMenuItems,
} from "../constants/menu-items"
import styled from "styled-components"
import PropTypes from "prop-types"

const Footer = ({ Logo }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            authorSite
          }
        }
      }
    `
  )

  const footerData = data.site.siteMetadata

  return (
    <FooterStyles>
      <div className="flex">
        {Logo ? (
          <div className="brand-cont">
            {/* If there is a logo, render this */}
            {Logo && (
            
                <img src={Logo} alt={`${footerData.title} logo`} />
              
            )}
            <address>
              CroftDigital@gmail.com
            </address>

            <p className="privacy">Privacy Policy</p>
         
          </div>
        ) : null}

        {mainMenuItems || footerMenuItems ? (
          <div className="menus-cont">
            {/* If main menu items are being imported, render this */}
            {mainMenuItems && (
              <ul className="footer-menu">
                {/* First we want to filter out the Home menu item, then display the rest of them */}
                {mainMenuItems
                  .filter(item => {
                    return item.title !== "home"
                  })
                  .map((item, index) => (
                    <li key={`menuItem${index}`}>
                      <Link to={item.path} smooth={true} duration={500} className="footerlinks">{item.title}</Link>
                    </li>
                  ))}
              </ul>
            )}

            {/* If footer menu items are being imported, render this */}
            {footerMenuItems && (
              <ul className="footer-menu">
                {footerMenuItems.map((item, index) => (
                  <li key={`footerMenuItem${index}`}>
                    <Link to={item.path} smooth={true} duration={500}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}

            
          </div>
        ) : null}

        <div className="copy-cont">
          <ul className="copy">
            <li>&copy; {new Date().getFullYear()}</li>

            {/* if there is an author stated in the config, render this */}
            {footerData.author && (
              <li>
                <a
                  className="no-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {footerData.author}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </FooterStyles>
  )
}

Footer.propTypes = {
  Logo: PropTypes.string,
}

const FooterStyles = styled.footer`
  padding: calc(var(--spacing) * 2);
  background-color: #010108;
  font-family: var(--Font-Accent);
  font-weight: 300;
  font-style: normal;
  color: #fff;

  .flex {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: flex-end;
    }
  }

  .telephone,
  address,
  li {
    font-size: var(--footerMenuItem);
  }

  address {
    font-style: normal;
    margin-bottom: var(--spacing);

    @media( max-width: 1050px){
      font-size: 1.5rem;
    }
  }

  li {
    text-transform: capitalize;
    list-style: none;
    padding-left: 0;
    margin-top: 5px;
    margin-bottom: 5px;

    @media (min-width: 768px) {
      margin-top: 10px;
      margin-bottom: var(--spacing);
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    transition: var(--transMed);

    &:hover {
      color: #4193e0;
      cursor: pointer;
     
    }
  }

  .privacy:hover{
    cursor: pointer;
    color: #4193e0;
  }

  @media (min-width: 768px) {
    padding-top: calc(var(--spacing) * 4);
    padding-bottom: calc(var(--spacing) * 2);
  }

  .brand-cont,
  .brand-cont img {
    margin-bottom: calc(var(--spacing) * 2);
  }

  .brand-cont {
    width: 100%;


    @media (min-width: 768px) {
      width: 25%;
    }

    a {
      display: inline-block;
    }

    img {
      max-width: 15vw;
      width: 100%;

      @media( max-width: 1050px){
        max-width: 25vw;
      }
    }
  }

  .menus-cont {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    @media (min-width: 768px) {
      width: 75%;
      border-top: 0;
    }
  }

  .footer-menu {
    padding: 0;
    width: 50%;
    margin-top: calc(var(--spacing) * 2);
    margin-bottom: 0;

    > *:first-child {
      margin-top: 0;
    }

    li {
      margin-bottom: var(--spacing);

      &:last-child {
        margin-bottom: 0;
      }

      @media( max-width: 1050px){
        font-size: 1.5rem;
        margin-bottom: 3vh;
      }
    }

    @media (min-width: 768px) {
      width: auto;
      margin-top: 0;
      margin-bottom: 0;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      padding-left: calc(var(--spacing) * 2);
      padding-right: calc(var(--spacing) * 5);

      li {
        padding-left: calc(var(--spacing) / 2);
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }

  .menus-cont {
    display: flex;
    justify-content: flex-end;
  }

  .socials {
    display: flex;

    li {
      margin-top: 0;
      padding: 0;
      margin-right: var(--spacing);

      &:last-child {
        margin-right: 0;
      }
    }

    a {
      font-size: 24px;
    }
  }
  .copy-cont {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: calc(var(--spacing) * 2);
    padding-top: calc(var(--spacing) * 2);

    @media (min-width: 768px) {
      border-top: none;
    }

    .copy {
      display: flex;
      padding: 0;
      margin-top: 0;

      margin-bottom: 0;

      li {
        margin-right: var(--spacing);
      }

      @media (min-width: 768px) {
        justify-content: center;

        li {
          margin: 0 calc(var(--spacing) / 2);
          font-size: 0.75rem;
        }
      }
    }
  }

  .footerlinks:hover{
   cursor: pointer;
      
    }
  }
`

export default Footer
