import React, {Component} from 'react';
import './MapForm.css';


class MapForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selectedValue: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSelectChange(event) {
    this.setState({selectedValue: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (

            <form className="mapform" onSubmit={this.handleSubmit}>
                  <select label='Wine Region' value={this.state.selectedValue} onChange={this.handleSelectChange}>
                    <option value="1">Dry Creek Valley</option>
                    <option value="2">Alexander Valley</option>
                    <option value="3">Sonoma Valley</option>
                  </select>

                  <input label='Name your trip' type='text' value={this.state.value} onChange={this.handleChange} />

              <input className='button' type="submit" value="Submit" />
            </form>


    );
  }
}

export default MapForm;
