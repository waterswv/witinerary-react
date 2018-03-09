import React, {Component} from 'react';
import './Footer.css';


class Footer extends Component {
  render() {
    let style = {backgroundColor: `#B88AAC`}
    return (

<footer className="page-footer" style={style}>
      <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Witinerary Inc.</h5>
                <p className="grey-text text-lighten-4">Made with <i className="tiny material-icons">favorite</i> in Northern California.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">About Us</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Our History</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Careers</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">All Wineries</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright Witinerary Labs
            <a className="grey-text text-lighten-4 right" href="#!">Shhh :)</a>
            </div>
          </div>
          </footer>
        );
      }
    }

    export default Footer;
