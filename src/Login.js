import React, {Component} from 'react';

class Login extends Component {

  handleClick = () => {
    this.props.onLogInClick()
  }

  render() {
    return (

      <div className="login" >

        <button onClick={this.handleClick}>Login</button>

      </div>


  );
  }
}

export default Login;
