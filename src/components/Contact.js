import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {

  scroll = ()=>{
    window.scrollTo(0,-document.body.scrollHeight)
  }
  
  render() {
    return (
      <div className="ContactContainer">
        <div id="iconContainer">
          <a id="email" className='contactIcon' href="mailto: shelby.scalia@gmail.com">
            <FontAwesomeIcon icon='envelope' />
          </a>
          <a id='twitter' className='contactIcon' href='https://twitter.com/shelby_scalia' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
          <a id="linked" className='contactIcon' href='https://linkedin.com/in/shelby-scalia' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']}/>
          </a>
          <a className='contactIcon blackIcon' href='https://github.com/srscalia' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a className='contactIcon blackIcon' href="https://medium.com/@shelby.scalia" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'medium']} />
          </a>
        </div>
        <div id="upArrow">
          <div onClick={()=>this.scroll()} className='arrow'>
            <FontAwesomeIcon icon="caret-up"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
