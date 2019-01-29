import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MediaQuery from 'react-responsive';

class Introduction extends Component {

  render() {
    return (
      <Fragment>
        <MediaQuery query="(min-device-width: 501px)">
          <div className="IntroductionContainer">
            <center className="animated slideInLeft slow">— hi, my name is shelby. <br/>I'm a full stack developer living in NYC.</center>
            <div id="downArrow">
              <div onClick={()=>this.props.aboutClick()} className='arrow'><FontAwesomeIcon icon="caret-down"/></div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 500px)">
          <div className="IntroductionContainer">
            <center className="animated slideInLeft slow">— hi, my name is shelby. <br/>I'm a full stack developer living in NYC.</center>
          </div>
        </MediaQuery>
      </Fragment>
    )
  }
}

export default Introduction
