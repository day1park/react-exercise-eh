import React, { Component } from 'react'

class SelectState extends Component {

    updateStateFilter() {
        const val = this.myValue.value
        this.props.updateStateFilter(val)
    }

    render() {
        const { stateFilter } = this.props;
        const filteredStates = [...new Set(stateFilter.map(state => {
            if (state.profile.address && state.profile.address.state) {
                return state.profile.address.state
            } else {
                return console.log(filteredStates)
            }
        }))]

        return (<select onChange={this.updateStateFilter.bind(this)} ref={(value) => { this.myValue = value }} value={this.props.nameFilter}
        ><option>All States</option>
            {
                filteredStates.map(state => {
                    if (state !== undefined) {
                        return <option key={state}
                        >{state}</option>
                    } else {
                        return false;
                    }
                })
            }
        </select>
        )
    }
}

export default SelectState

// import React from 'react'
// import PropTypes from 'prop-types'

// const SelectState = ({ stateFilter, onSelectState }) => {

//     const filteredStates = [...new Set(stateFilter.map(state => {
//         if (state.profile.address && state.profile.address.state) {
//             return state.profile.address.state
//         } else {
//             return console.log('err')
//         }

//     }))]

//     return <select onChange={(e) => onSelectState(e.target.value)}><option>Select State</option>
//         {
//             filteredStates.map(state => {
//                 if (state !== undefined) {
//                     return <option key={state} value={state}>{state}</option>
//                 } else {
//                     return false;
//                 }
//             })
//         }
//     </select>
// }

// SelectState.propTypes = {
//     // filteredStates: PropTypes.array.isRequired,
//     stateFilter: PropTypes.array.isRequired,
//     onSelectState: PropTypes.func
// };

// export default SelectState