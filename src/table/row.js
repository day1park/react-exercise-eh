// Row Component goes here
import React, { Component } from 'react'

class Row extends Component {

    render() {
        let contactInfo = this.props.contact;
        let state;
        if (contactInfo.profile.address) {
            state = contactInfo.profile.address.state
        } else {
            state = 'n/a';
        }

        return (
            <tr className="Row">
                <td className="name">
                    {contactInfo.firstName}{" "}
                    {contactInfo.lastName}
                </td>
                <td className="email">
                    {contactInfo.email}
                </td>
                <td className="company">
                    {contactInfo.profile.company}
                </td>
                <td className="state">
                    {state}
                </td>
            </tr>
        )
    }
}

export default Row
