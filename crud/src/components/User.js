import React from 'react'

function User(props) {
    // console.log(props)
    let {user, index, removeUser} = props
    return (
        <>
            <div className="card flex align_center ">
                <h2 >{user.name}</h2>
                <h2 className="username">{user.username}</h2>
                <h2 onClick={() => removeUser(index)} className="cross">X</h2>
            </div>   
        </>
    )
}

export default User
