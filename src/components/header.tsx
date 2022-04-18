import * as React from "react"
import {Link} from "gatsby"

interface StyledNavProps {
  children: never[],
  links: any[]
}

const Nav = (props: StyledNavProps) => {
  const menuItems = props.links.map(link => {

    // TODO: clean-up this if statement
    // TODO: implement cool scrolling animation 
    // that makes the signature shrink when

    if (typeof (link) === "string") {
      return (
        <li key={props.links.indexOf(link)}>
          <Link to={`/${link}`}>
            {link}
          </Link>
        </li>
      )
    }
    else if (typeof (link) === "object") {
      return (
        <li key={props.links.indexOf(link)}>
          <Link to="/">
            {link}
          </Link>
        </li>
      )
    }
  }
  )
 
  return (
    <nav>
      <ul>
        {menuItems}
      </ul>
    </nav>
  )
}

const Header = (props) => {
  return (
    <Nav links={props.links}> 
    </Nav>
  )
}

export default Header