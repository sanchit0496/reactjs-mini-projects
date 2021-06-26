import React from 'react'

const Posts = ({posts, loading}) => {
    
    if(loading){
        return <h1>Loading</h1>
    }
    
    return (
        <div>
        {
            
            posts.map((post) => (
                <li key = {post.id}>
                    {post.title}
                </li>
            ))
        
        }
        </div>
    )
}

export default Posts
