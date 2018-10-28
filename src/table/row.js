// Row Component goes here
import React, { Component } from 'react'

class Row extends Component {



    render() {
        let state;
        if (this.props.contact.profile.address) {
            state = this.props.contact.profile.address.state
        } else {
            state = 'n/a';
        }

        return (
            <tr className="Row">
                <td className="name">
                    {this.props.contact.firstName} {" "}
                    {this.props.contact.lastName}
                </td>
                <td className="email">
                    {this.props.contact.email}
                </td>
                <td className="company">
                    {this.props.contact.profile.company}
                </td>
                <td className="state">
                    {state}
                </td>
            </tr>
        )
    }
}

export default Row