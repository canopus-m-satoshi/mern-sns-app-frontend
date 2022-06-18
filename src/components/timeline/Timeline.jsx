import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Post from '../post/Post'
import Share from '../share/Share'

import './Timeline.css'

const Timeline = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(
        '/posts/timeline/62a568b1ffb1c8689df84181',
      )
      setPosts(response.data)
    }

    fetchPost()
  }, [])

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}

export default Timeline
