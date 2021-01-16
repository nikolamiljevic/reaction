import React from 'react'
import { connect } from 'react-redux'
import { setUsername } from '../actions/username'

const SetUsername = ({setUsername}) => {

    return (
        <div>
            <h3>Username</h3>
            <input type="text" onChange={setUsername} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setUsername: event => dispatch(setUsername(event.target.value))
})

export default connect(null,mapDispatchToProps)(SetUsername)
