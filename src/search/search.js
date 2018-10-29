import React, { Component } from 'react'

class Search extends Component {

    updateNameFilter() {
        const val = this.myValue.value
        this.props.updateNameFilter(val)
    }

    render() {

        return (
            <input
                className="Search"
                type="text"
                ref={(value) => { this.myValue = value }}
                value={this.props.nameFilter}
                onChange={this.updateNameFilter.bind(this)}
                placeholder="search name"
            />
        )
    }
}

export default Search
