import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: []
    }
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='container App'>
        <div className="jumbotron">
        <h2 className='display-4'>San Diego Top Spots</h2>
        <p className='lead'>A list of the top 30 places to see in San Diego, California.</p>
        </div>
        {this.state.topspots.map(topspot => (
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location} />
          ))
        }
      </div>
    );
  }
}

export default App;
