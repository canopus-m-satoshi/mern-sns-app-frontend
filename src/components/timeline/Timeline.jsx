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
        '/posts/timeline/62ad6fd7c473c8640b3d8994',
      )
      setPosts(response.data)
      console.log(response.data)
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
