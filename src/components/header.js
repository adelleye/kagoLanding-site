import { Link } from "gatsby"
import React from "react"
import "./Header.css"

class Header extends React.Component {
  //When a component is created, the constructor will be called.
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false,
    }
  }

  /*As soon as the component is loaded, we try to listen to the built-in scroll events passed from our window. This will in turn trigger the handleScroll function*/
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  handleClick = () => {
    window.open('http://kago-frontend-dev.herokuapp.com/')
   }

  /*The handleScroll function will get the Y position of the scrolling. When the scrolling hits more than 50px, it’ll set a new state for our hasScrolled boolean to true. Otherwise, it’ll set it back to false.*/
  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div id="site-title">
          <Link to = "/"> Kago </Link>
        </div>
        <div className="HeaderGroup">
          <Link to="/about-us">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>

        <div id="get-started" >
          <button onClick={this.handleClick}>Get Started</button>
        </div>
      </div>
    )
  }
}

export default Header