import React, { Component } from 'react'
import Select from './select'

class Search extends Component {

    updateNameFilter() {
        const val = this.myValue.value
        this.props.updateNameFilter(val)
    }

    // updateStateFilter() {
    //     const val = this.myValue.value
    //     this.props.updateNameFilter(val)
    // }

    render() {

        const { contacts } = this.props;
        let state;
        const stateOption = contacts.map(contact => {
            if (contact.profile.address && contact.profile.address.state) {
                return <option key={contact.id}>{contact.profile.address.state}</option>
            } else {
                state = null
            }

        })


        // console.log(stateList)

        return (
            <div className="Search" >
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
                                <input
                                    type="text"
                                    ref={(value) => { this.myValue = value }}
                                    value={this.props.nameFilter}
                                    onChange={this.updateNameFilter.bind(this)}
                                    placeholder="search name"
                                />
                            </td>
                            <td>
                                <select ref="state">
                                    {stateOption}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Search
