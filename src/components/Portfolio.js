import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MediaQuery from 'react-responsive';

class Portfolio extends Component {

  scroll = ()=>{
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' })
  }

  render() {
    return (
      <Fragment>
        <MediaQuery query="(min-device-width: 501px)">
          <div className="PortfolioContainer">
            <div id="portfolioColumnContainer">
              <div className="port">
                <h3>Journaling App</h3>
                <div className="portfolioLinksContainer">
                  <div className="portfolioLink">
                    <a className="portfolioLinks" href="https://www.youtube.com/watch?v=Rew72U8tiRs" target="_blank" rel="noopener noreferrer">Demo</a>
                  </div>
                  <div className="portfolioLink">
                    <a className="portfolioLinks" href="https://github.com/srscalia/journal_app_frontend" target="_blank" rel="noopener noreferrer">GitHub </a>
                  </div>
                </div>
                <div className="projectText">A safe place to journal your thought. A single-page web application built with:
                  <ul>
                    <li>Ruby on Rails</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>JSON Web Tokens</li>
                    <li>Cloudinary's Upload Widget</li>
                    <li>Semantic and custom CSS for stying</li>
                  </ul>
                </div>
              </div>
              <div className="port">
                <h3>Kitty Kard Matching App</h3>
                  <div className="portfolioLinksContainer">
                    <div className="portfolioLink">
                      <a className="portfolioLinks" href="https://www.youtube.com/watch?v=RyZm8AFmCmw&list=UUom0HSbrZ1WkvnOjtFTyN2w"  target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>
                    <div className="portfolioLink">
                      <a className="portfolioLinks" href="https://github.com/srscalia/kitty_kard_frontend" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                  </div>
                <div className="projectText">Test your memory and see how quickly you can match the kitty kards!
                  A single-page web application built with:
                    <ul>
                      <li>Ruby on Rails</li>
                      <li>Vanilla JavaScript</li>
                      <li>Materialize and custom CSS for stying</li>
                    </ul></div>
              </div>
              <div className="port">
                <h3>Birthday Reminder App</h3>
                  <div className="portfolioLinksContainer">
                    <div className="portfolioLink">
                      <a className="portfolioLinks" href="" target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>
                    <div className="portfolioLink">
                      <a className="portfolioLinks" href="" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                  </div>
                <div></div>
              </div>
            </div>
            <div id="aboutDownArrow">
              <div onClick={()=>this.scroll()} className='arrow'><FontAwesomeIcon icon="caret-down"/></div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 500px)">
          <div className="PortfolioContainerResponsive">
            <div id="portfolioColumnContainerResponsive">
              <div className="port">
                <h3>Journaling App</h3>
                <div className="portfolioLinksContainer">
                  <div className="portfolioLink">
                    <a className="portfolioLinks" href="https://www.youtube.com/watch?v=Rew72U8tiRs" target="_blank" rel="noopener noreferrer">Demo</a>
                  </div>
                  <div className="portfolioLink">
                    <a className="portfolioLinks" href="https://github.com/srscalia/journal_app_frontend" target="_blank" rel="noopener noreferrer">GitHub </a>
                  </div>
                </div>
                <div className="projectTextResponsive">A safe place to journal your thought. A single-page web application built with:
                  <ul>
                    <li>Ruby on Rails</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>JSON Web Tokens</li>
                    <li>Cloudinary's Upload Widget</li>
                    <li>Semantic and custom CSS for stying</li>
                  </ul>
                </div>
              </div>
              <div className="port">
                <h3>Kitty Kard Matching App</h3>
                  <div className="portfolioLinksContainer">
                    <div className="portfolioLink">
                      <a className="portfolioLinks" href="https://www.youtube.com/watch?v=RyZm8AFmCmw&list=UUom0HSbrZ1WkvnOjtFTyN2w"  target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>
                    <div className="portfolioLink">
                      <a className="portfolioLinks" href="https://github.com/srscalia/kitty_kard_frontend" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                  </div>
                <div className="projectTextResponsive">Test your memory and see how quickly you can match the kitty kards!
                  A single-page web application built with:
                    <ul>
                      <li>Ruby on Rails</li>
                      <li>Vanilla JavaScript</li>
                      <li>Materialize and custom CSS for stying</li>
                    </ul></div>
              </div>
              <div className="port">
                <h3>Birthday Reminder App</h3>
                  <div className="portfolioLinksContainer">
                    <div className="portfolioLink">
                      <a className="portfolioLinks" href="" target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>
                    <div className="portfolioLink">
                      <a className="portfolioLinks" href="" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                  </div>
                <div></div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </Fragment>
    )
  }
}

export default Portfolio
