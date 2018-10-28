import React, { Component } from 'react'
import './App.css'
import Header from './header'
import Table from './table'
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
                  name filter
                </th>
                <th>
                  state filter
                </th>
              </tr>
              <tr>
                <td>
                  <input></input>
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
        <Table contacts={this.state.contacts} />
      </div >
    )
  }
}

export default App
