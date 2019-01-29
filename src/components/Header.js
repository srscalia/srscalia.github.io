import React, { Component, Fragment } from 'react';
import MediaQuery from 'react-responsive';

class Header extends Component {

  contactClick=()=>{
    window.scrollTo(0,document.body.scrollHeight)
  }

  shelbyClick =()=>{
    window.scrollTo(0,-document.body.scrollHeight)
  }

  render() {
    return (
      <Fragment>
        <MediaQuery query="(min-device-width: 501px)">
          <nav id="header" className="animated slideInUp slow">
            <div className="headerHover" id="contact" onClick={()=>this.contactClick()}>Contact</div>
            <div className="headerHover" id="shelby" onClick={()=>this.shelbyClick()}>SHELBY</div>
            <div id='navRight'>
              <div onClick={()=>this.props.aboutClick()} className="headerHover">About</div>
              <div id="portfolio" className="headerHover" onClick={()=>this.props.portfolioClick()}>Portfolio</div>
            </div>
          </nav>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 500px)">
          <nav id="headerResponsive" className="animated slideInUp slow">
            <div className="headerHover" id="contact" onClick={()=>this.contactClick()}>Contact</div>
            <div className="headerHover" id="shelby" onClick={()=>this.shelbyClick()}>SHELBY</div>
            <div id='navRight'>
              <div onClick={()=>this.props.aboutClick()} className="headerHover">About</div>
              <div id="portfolio" className="headerHover" onClick={()=>this.props.portfolioClick()}>Portfolio</div>
            </div>
          </nav>
        </MediaQuery>
      </Fragment>
    )
  }
}







export default Header
