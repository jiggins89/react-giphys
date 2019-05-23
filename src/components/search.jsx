import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (e) => {
    this.props.search = e.target.value;
  }

  render() {
    return (
      <input className="form=control form-search" type="text" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
