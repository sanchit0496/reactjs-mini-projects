import React from 'react'

const Pagination = ({postsPerPage, totalPosts}) => {
    
    const pageNumbers = [];

    for(let i = 0; i <= Math.ceil(totalPosts/ postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            {
                pageNumbers.map((page) => (
                    <p>{page}</p>
                ))
            }
        </div>
    )
}

export default Pagination
