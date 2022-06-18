import { MoreVert } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import './Post.css'

import axios from 'axios'
import { format } from 'timeago.js'

const Post = ({ post }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

  const [like, setLike] = useState(post.likes.length)
  const [isLliked, setIsLike] = useState(false)
  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`)
      setUser(response.data)
      console.log(`POST: ${post.userId}`)
    }

    fetchUser()
  }, [])

  const handleLike = () => {
    // if (!isLliked) {
    //   setLike(like + 1)
    //   setIsLike(true)
    // } else {
    //   setLike(like - 1)
    //   setIsLike(false)
    // }

    setLike(isLliked ? like - 1 : like + 1)
    setIsLike(!isLliked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                user.profilePicture || PUBLIC_FOLDER + '/person/noAvatar.png'
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">{user.username}</span>
            <br />
            <br />
            <p>name is : {user.username}</p>
            <br />
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          {post.img ? (
            <img className="postImg" src={PUBLIC_FOLDER + post.img} alt="" />
          ) : (
            <></>
          )}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={PUBLIC_FOLDER + '/heart.png'}
              alt=""
              className="likeIcon"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">
              {like}人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
