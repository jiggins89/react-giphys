import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "YSN3blb8lUyJhc0qEg",
      gifs: []
    };

    this.search('homer');
  }

  search = (query) => {
    giphy('6GksLxPxWZbCpsAKsQbethgZ627OipB9').search({
      q: query,
      rating: 'g'
    }, function (error, result) {
      console.log(result.data);
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFn={this.props.search} />
          <div className="selected-gif">
            <Gif id={this.state.id} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
