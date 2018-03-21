import React, { Component } from 'react';

class SearchField extends Component {
  state = {
    searchText: '',
  };

  handleChange = e => {
    this.setState({
      searchText: e.target.value,
    });
  }

  render() {
    return (
      <input onChange={(
        this.props.funcao(this.state.searchText),
        this.handleChange
      )}
        value={this.state.searchText} />
    )
  }
}
export default SearchField

