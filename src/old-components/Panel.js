import React, {Component} from 'react';
import './Panel.css';

class Panel extends Component {
  render() {
    return (

      <div className='panel'>
        <div className='trip-title'>3 Days in Napa Valley <br></br>
        <span className='avatars'>Jan 29th - Feb 1st</span>

        <div className='dates'>
          <img src='https://avatars.githubusercontent.com/waterswv?s=50' alt='GitHub Avatar'></img>
          <img src='https://avatars.githubusercontent.com/waterswv?s=50' alt='GitHub Avatar'></img>
          <img src='https://avatars.githubusercontent.com/waterswv?s=50' alt='GitHub Avatar'></img>
        </div>
      </div>
      </div>

  );
  }
}

export default Panel;
