import React, {Component} from 'react';
import './SearchVineyards.css';
import Vineyards from './Vineyards';

class SearchVineyards extends Component {

  constructor(props){
    super(props)

    this.state = {

      vineyards: []
    }
  }

  componentDidMount(){

    fetch('http://localhost:8000/api/winery')
      .then((response) => response.json())
        .then((vineyards) => this.setState({vineyards: vineyards}))
  }
  render() {
    let vineyards = this.state.vineyards.map((vineyard, index) => {
      return (
        <Vineyards
          key={index}
          name={vineyard.name}
          description={vineyard.description}
          hours={vineyard.hours}
        />
      )
    });
    return (

      <div className='search-vineyards'>
        <div className='search-bar'>
        <input label='search' placeholder='Enter Search Here'></input>
        </div>
        {vineyards}
      </div>
    );
  }
}

export default SearchVineyards;

// TODO: Setup Cache to pull all Vineyards from fetch in Map.js...
