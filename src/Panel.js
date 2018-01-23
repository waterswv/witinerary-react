import React, {Component} from 'react';
import './Panel.css';

class Panel extends Component {
  render() {
    return (

      <div className='panel'>
        <div className='location'>3 Days in Napa Valley</div>
        <div className='dates'>Jan 29th - Feb 1st</div>
        <div className='avatars'>
          <img src='https://avatars.githubusercontent.com/waterswv?s=50' alt='GitHub Avatar'></img>
          <img src='https://avatars.githubusercontent.com/waterswv?s=50' alt='GitHub Avatar'></img>
          <img src='https://avatars.githubusercontent.com/waterswv?s=50' alt='GitHub Avatar'></img>
        </div>
      </div>

  );
  }
}

export default Panel;
