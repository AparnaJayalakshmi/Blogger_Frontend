import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, getPostsStatus, selectAllPosts } from '../features/blogger/bloggerSlice'
import { Link } from 'react-router-dom'

const Profile = () => {

  const dispatch = useDispatch()
  const post = useSelector(selectAllPosts)
  const postsStatus = useSelector(getPostsStatus)
  const user = useSelector(state => state.auth.user)
  const userid =  useSelector(state => state.auth.user.user_id)

  useEffect(() => {
    if(postsStatus === 'idle'){
      dispatch(fetchPosts())
    }
  },[dispatch,postsStatus])
  const userPosts = post.filter(post => post.owner === userid)
  console.log("USER ID IS ", userid)
  console.log('post is', post)
  console.log("user is ",user)
  console.log('filterPost is',userPosts)
  return (
    <div className='center container mt-4'>

      <h1 className='text-center font-serif font-semibold text-2xl'>My Posts</h1>     
      <br></br>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-4 my-2 p-4 shadow-lg'>
        
        {userPosts.map(post => (
          <div key={post.id} className='flex flex-col items-center'>
            <img src={'http://127.0.0.1:8000/'+post.image} className='object-cover rounded-lg w-full h-72' loading='lazy' alt={post.title} />
            <Link to={`/blog/${post.id}`} ><h5 className=' font-bold text-center mt-2'>{post.title}</h5></Link> 
          </div>
        ))}
        
      </div>
</div>

  )
}

export default Profile