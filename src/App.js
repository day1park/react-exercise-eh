import React, { Component } from 'react'
import './App.css'
import Header from './header'
import Table from './table'
import Search from './search/search'
import SelectState from './search/select-state'
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

  onSelectState(stateOption) {
    console.log('state selected!' + stateOption)
  }

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
          <table>
            <tbody>
              <tr>
                <th>
                  Name
                </th>
                <th>
                  State
                </th>
              </tr>
              <tr>
                <td>
                  <Search
                    nameFilter={this.state.nameFilter}
                    updateNameFilter={this.updateNameFilter.bind(this)}
                  />
                </td>
                <td>
                  <SelectState stateFilter={this.state.contacts} onSelectState={this.onSelectState} />
                </td>
              </tr >
            </tbody >
          </table >
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
