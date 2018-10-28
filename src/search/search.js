import React, { Component } from 'react'

class Search extends Component {

    updateNameFilter() {
        const val = this.myValue.value
        this.props.updateNameFilter(val)
    }

    render() {
        return (
            <div className="Search">
                <input
                    type="text"
                    ref={(value) => { this.myValue = value }}
                    value={this.props.nameFilter}
                    onChange={this.updateNameFilter.bind(this)}
                    placeholder="search name"
                />
            </div>
        )
    }
}

export default Search
