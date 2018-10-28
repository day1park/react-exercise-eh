// Table Component goes here
import React, { Component } from 'react'
import Row from './row'


class Table extends Component {
    render() {
        let contacts
        if (this.props.contacts) {
            contacts = this.props.contacts.map(contact => {
                return (
                    <Row key={contact.id} contact={contact} />
                );
            })
        }

        console.log(this.props)
        return (
            <div className="Table">
                <table>
                    <tbody>
                        <tr>
                            <th className="name">
                                Name
                            </th>
                            <th className="email">
                                Email
                            </th>
                            <th className="company">
                                Company
                            </th>
                            <th className="state">
                                State
                            </th>
                        </tr>

                        {contacts}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table