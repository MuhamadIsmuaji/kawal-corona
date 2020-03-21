import './style.css';
import React from 'react';
import axios from 'axios';
import LiveData from './LiveData';
import LiveGlobal from './LiveGlobal';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui fixed inverted menu">
          <div className="container">
            <a href="#" className="header item">
              <img className="logo" src="assets/logo/coronaicon.png" />
              BURKAS INFO
            </a>
            <a href="#" className="item">Beranda</a>
            <div className="ui simple dropdown item">
              Live Data <i className="dropdown icon"></i>
              <div className="menu">
                <a className="item" href="#">Global</a>
                <a className="item" href="#">Indonesia</a>
                <a className="item" href="#">Papua</a>
              </div>
            </div>
          </div>
        </div>

        <div className="ui main text container">
          <h2 className="ui header">
            Live Data Corona Virus Global
            
          </h2>
          <div className="ui divider"></div>
          <LiveData />
          <div className="ui divider"></div>
          <h2 className="ui header">
            Live data per Negara
            
          </h2>
          <LiveGlobal />
        </div>

        <div className="ui inverted vertical footer segment">
          <div className="ui inverted section divider">
            <img src="assets/images/logo.png" className="ui centered mini image" />
            <div className="ui horizontal inverted small divided link list">
              <a className="item" href="#">Site Map</a>
              <a className="item" href="#">Contact Us</a>
              <a className="item" href="#">Terms and Conditions</a>
              <a className="item" href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;