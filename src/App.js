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

  //   let filterName = this.state.contacts.filter((contact) => {
  //   return contact.name.toLowerCase().indexOf(this.state.nameFilter.toLowerCase()) >= 0
  // }
  // );

  componentDidMount() {
    data
      .then(response => {
        this.setState({
          contacts: response
        })
      });
  }

  render() {
    console.log(this.state.nameFilter)
    return (
      <div>
        <Header />
        <div className="Toolbar" >
          <table>
            <tbody>
              <tr>
                <th>
                  name filter
                </th>
                <th>
                  state filter
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
                  <select ref="state">
                    <option>all</option>
                    <option>blah</option>
                    <option>blah</option>
                    {this.state.stateFilter}
                  </select>
                </td>

              </tr>
            </tbody>
          </table>
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
