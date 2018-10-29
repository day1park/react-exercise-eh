import React, { Component } from 'react'
import PropTypes from 'prop-types'

const SelectState = ({ stateFilter, onSelectState }) => {

    const filteredStates = [... new Set(stateFilter.map(state => {
        if (state.profile.address && state.profile.address.state) {
            return state.profile.address.state

        } else {

        }

    }))]
    console.log(filteredStates)

    return <select onChange={(e) => onSelectState(e.target.value)}><option>Select State</option>
        {
            filteredStates.map(state => {
                if (state !== undefined) {
                    return <option key={state} value={state}>{state}</option>
                } else {

                }
            })
        }
    </select>
}

SelectState.propTypes = {
    // filteredStates: PropTypes.array.isRequired,
    stateFilter: PropTypes.array.isRequired,
    onSelectState: PropTypes.func
};

export default SelectState