// Table Component goes here
import React, { Component } from 'react'
import Row from './row'

class Table extends Component {

    render() {
        const { contacts, nameFilter } = this.props;
        const contactList = contacts
            .filter(contact => {
                // filter through both first and last names of contacts
                let contactName = contact.firstName.toLowerCase() + contact.lastName.toLowerCase()
                return contactName.indexOf(nameFilter.toLowerCase()) !== -1
            })
            .map(contact => {
                return (
                    <Row key={contact.id} contact={contact} />
                );
            })

        return (
            <div className="Table" >
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
                        {contactList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table
