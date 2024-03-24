import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';


const BlogExcerpt = ( {post, postId,posterId } ) => {

  const users = useSelector(selectAllUsers)
  let owner = users.find((user) => user.id === posterId)

  const date = post && post.date_posted ? new Date(post.date_posted) : new Date() ;
  const options = {year : "numeric" , month : "long" , day : "numeric"}
  const formatedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className=' w-80 shadow-lg'>
      
      <img  className='object-cover rounded-lg w-full h-72' src= {'http://127.0.0.1:8000/' + post.image} alt={post.title} loading='lazy'  />
      <div className='mb-3'>
        <div className='flex justify-between items-center bg-purple px-3 mt-3 text-white ' >
          <div >
            posted by : {owner.username}
          </div>
          <div>
              < AccessTimeIcon className=' text=sm me-2 ' />
              {formatedDate}
          </div>
        </div>
        <div>
          <h1 className='font-bold '> {post.title} </h1>
          <p>{post.description.substring(0,100)}..</p>
          <div className='text-white text-center mt-3' >
              <Link to={`blog/${postId}`}>
                <button className='bg-purple py-2 px-4 rounded-md'> Continue reading</button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogExcerpt