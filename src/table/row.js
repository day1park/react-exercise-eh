// Row Component goes here
import React, { Component } from 'react'

class Row extends Component {
    render() {
        return (
            <div className="Row">
                <div className="contact">
                    <tr>
                        <th>
                            Name
                    </th>
                        <th>
                            Email
                    </th>
                        <th>
                            Company
                    </th>
                        <th>
                            State
                    </th>
                    </tr>
                    <tr>
                        <td>
                            {this.props.contact.firstName} -
                        {this.props.contact.lastName}
                        </td>
                        <td>
                            {this.props.contact.email} -
                    </td>
                        <td>
                            {this.props.contact.profile.company} -
                    </td>
                        <td>
                            state
                    </td>
                    </tr>
                </div>
            </div>
        )
    }
}

export default Row