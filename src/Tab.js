import React, {Component} from 'react';
import './Tab.css';



class Tab extends Component {

 handleClick = () => {
   this.props.onTabClick(this.props.value)
 }

  render() {

    return (
      <div className='tabs' style={this.props.tabs}><span className='tabs-span' data-id='one' onClick={this.handleClick}>{this.props.name}</span></div>

  );
  }
}

export {Tab};


class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const {id} = event.target;
    console.log(id);
  }

  render() {
    return (
      <div className='tabs' style={this.props.tabs}><span className='tabs-span' id={this.props.id} onClick={this.handleClick}>{this.props.name}</span></div>

    );
  }
}
