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

                        {contacts}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table