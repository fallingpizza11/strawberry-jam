import * as React from "react"

interface InfoCardProps {
  children: never[],
  title: string,
  description: string,
  image: string,
  avalivility: boolean
}

const InfoCard = (props: InfoCardProps) => {
  return (
  <>
    <h2>{props.title}</h2>
    <img src={props.image}></img>
    <p>{props.description}</p>
  </>
  )
}
export default InfoCard