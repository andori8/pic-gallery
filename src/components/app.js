import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 17ceb2a2592b390b6cbc6102dba4a140155cdc93d9b08a8f56d06cc3e2a7371d'
      }
    })

    this.setState({ images: response.data.results });
  }

  render() {
    return  (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    )
  }
}

export default App;
