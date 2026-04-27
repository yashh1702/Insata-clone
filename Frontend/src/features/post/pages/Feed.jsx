import React, { useEffect } from 'react'
import "../style/feed.scss"
import Post from '../components/Post'
import { usePost } from '../hooks/usePost.js'
import Navbar from '../../shared/components/Navbar.jsx'

const Feed = () => {

  const {feed, handleGetFeed,loading, handleLike, handleUnLike} = usePost()

  useEffect(()=>{
    handleGetFeed()
  },[])

  if(loading || !feed){
    return(
      <main><h1>Feed is loading</h1></main>
    )
  }

  console.log(feed)

  return (
    <main className="feed-page">
      <Navbar/>
      <div className="feed">
        <div className="posts">
          {feed.map(post => <Post user={post.user} post={post} loading={loading} handleLike={handleLike} handleUnLike={handleUnLike}/>)}
        </div>
      </div>
    </main>
  )
}

export default Feed