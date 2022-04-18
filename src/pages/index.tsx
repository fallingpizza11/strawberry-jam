import React from "react"
import "../styles/reset.css"
import "../styles/style.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/react"
import styled, { StyledComponent } from "@emotion/styled"
import colours from "../styles/colours"
import "@fontsource/montserrat"
import "@fontsource/piazzolla"

import Layout from "../components/layout"
import Header from '../components/header'

export default function index() {
  const data = useStaticQuery(graphql`
    query {
      cms {
        homepageContents {
          welcomeText,
          welcomeParagraph,
          welcomeImage {
            id,
            url
          }
        }
      }
    }
  `)
  const content = data.cms.homepageContents[0]
  console.log(content.welcomeText)

  const Page = styled.div`
    background: ${colours.accent};
    height: 100%;
  `

  const Banner = styled.header`
   background: url(${content.welcomeImage.url});
   background-size: cover;
   height: 85vh;
   width: 100%;
   display: flex;
   justify-content: center;
  `

  return (
    <Layout>
        {/* <img src="https://media.graphcms.com/6WluMkcCTG2x9NjDAYZK" alt="slava" /> */}
      <Banner>
      </Banner>



    </Layout>
  )
}
