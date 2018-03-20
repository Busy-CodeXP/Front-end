
import { Component } from 'react';
class SearchField extends Component {
  state = {
    searchText: '',
  };

  handleChange = e => {
    this.setState({
      searchText: e.target.value,
    });

    if(this.state.searchText.length > 3) {
      fetch('addw')
        .then(res => res.json())
        .then(res => fillList())
    }
  }

  render() {
    return <input onChange={this.handleChange} value={this.state.searchText} />
  }
}