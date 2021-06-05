import React from "react"
import "../styles/style.css"
import { useStaticQuery, graphql} from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"


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

  const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `

  const Banner = styled.header`
   background: url("https://media.graphcms.com/Hl2QQFI5Tu6zS46U2J93");
   background-size: cover;
   height: 100vh;
   width: 100%;
  `


  return(
  <div>
    <Banner></Banner>

    <h1>{content.welcomeText}</h1>



    <Container>
    <p>{content.welcomeParagraph}</p>
    </Container>
  </div>
  )
}
