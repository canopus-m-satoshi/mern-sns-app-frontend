import { Timeline } from '@mui/icons-material'
import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

import './Profile.css'

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <Timeline />
        <Rightbar />
      </div>
    </>
  )
}

export default Profile
