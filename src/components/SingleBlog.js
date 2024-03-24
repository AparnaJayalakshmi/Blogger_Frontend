import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPostsById, getPostsError, getPostsStatus, selectPost } from '../features/blogger/singleBlogSlice'
import { useParams } from 'react-router-dom'
import SingleBlogExcerpt from '../features/blogger/SingleBlogExcerpt'
import SidePanel from './SidePanel'


const SingleBlog = () => {
  
  const dispatch = useDispatch()
  const post  = useSelector(selectPost)
  const postStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  const postid = useParams();
  const postId = postid.id;


  useEffect(() => {
    console.log(postId)
    dispatch(fetchPostsById(postId))
  },[dispatch])

  let content;

  if(postStatus === "loading"){
    content = <div>loading</div>
  }
  else if(postStatus === "succeeded"){
    content = <SingleBlogExcerpt key={post.id} postId={post.id} post={post}  />
  }
  else if (postStatus === "failed") {
    content = <p>Failed {error}</p>;
}


  return (
    <div className='container m-auto mt-5'>
      <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 shadow-lg text-center py-3'>
                <div className='container'>{content}</div>
            </div>
            <div className=''><SidePanel /></div>
        </div>
    </div>
  )
}

export default SingleBlog