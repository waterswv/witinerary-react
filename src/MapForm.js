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
    alert('Your trips name is : ' + this.state.value + " and you'll be going to the " + this.state.selectedValue + " region.");
    event.preventDefault();
    this.setState({selectedValue: '', value: ''  })
  }

  render() {
    return (
        <div className="mapform">
            <form onSubmit={this.handleSubmit}>
              <label>Wine Region:
                    <select value={this.state.selectedValue} onChange={this.handleSelectChange}>
                      <option value="Get Started">Get Started</option>
                      <option value="Dry Creek Valley">Dry Creek Valley</option>
                      <option value="Alexander Valley">Alexander Valley</option>
                      <option value="Sonoma Valley">Sonoma Valley</option>
                    </select>
              </label>
              <label>Name your trip:
                <input type='text' value={this.state.value} onChange={this.handleChange} />
              </label>
              <input className='button' type="submit" value="Submit" />
            </form>
          </div>

    );
  }
}

export default MapForm;
