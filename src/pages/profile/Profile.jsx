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
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="./assets/post/3.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="./assets/person/1.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Shin Code</h4>
              <span className="profileInfoDesc">Udemy講師をしています</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile