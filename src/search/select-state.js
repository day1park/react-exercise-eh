import React, { Component } from 'react'
import PropTypes from 'prop-types'

const SelectState = ({ stateFilter, onSelectState }) => {
    return <select onChange={(e) => onSelectState(e.target.value)}>
        {
            stateFilter.map(state => {
                if (state.profile.address && state.profile.address.state) {
                    const stateOption = state.profile.address.state
                    return <option key={stateOption} value={stateOption}>{stateOption}</option>
                } else {
                    state = null
                }
            })
        }
    </select>
}

SelectState.propTypes = {
    stateFilter: PropTypes.array.isRequired,
    onSelectState: PropTypes.func
};

export default SelectState