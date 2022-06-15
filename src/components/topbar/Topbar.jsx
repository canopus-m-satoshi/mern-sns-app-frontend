import React from 'react'

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">MERN SNS APP</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <input
            type="text"
            className="searchInput"
            placeholder="探し物はなんですか？"
          />
        </div>
        <div className="topbarRight">
          <div className="topbarIconItem">1</div>
          <div className="topbarIconItem">2</div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
