import React from 'react'

const CloseFrined = ({ user }) => {
  return (
    <li className="sidebarFriendListItem">
      <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFrined
