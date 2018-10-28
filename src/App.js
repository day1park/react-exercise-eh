import React, { Component } from 'react'
import './App.css'
import Header from './header'
import Table from './table'
import Search from './search/search';
import getContacts from './data/get-contacts'

let data = getContacts();

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      nameFilter: '',
      stateFilter: '',
    }
  }

  updateNameFilter(value) {
    this.setState({
      nameFilter: value
    });
  }
  // updateStateFilter(value) {
  //   this.setState({
  //     stateFilter: value
  //   });
  // }

  componentDidMount() {
    data
      .then(response => {
        this.setState({
          contacts: response
        })
      });
  }



  render() {
    return (
      <div>
        <Header />
        <div className="Toolbar" >

          <Search
            nameFilter={this.state.nameFilter}
            updateNameFilter={this.updateNameFilter.bind(this)}
            // stateFilter={this.state.stateFilter}
            // updateStateFilter={this.updateStateFilter.bind(this)}
            contacts={this.state.contacts}
          />

        </div>
        <Table
          contacts={this.state.contacts}
          nameFilter={this.state.nameFilter}
        />
      </div >
    )
  }
}

export default App
