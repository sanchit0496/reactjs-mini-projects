import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Posts from './Posts.js';
import Pagination from './Pagination.js';

const App = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const[postsPerPage] = useState(10)

    useEffect(() => {
        const fetchPosts = async() => {
            setLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
            setLoading(false)
        }
        fetchPosts();
    }, [])


    //for pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div>
            <Posts posts = {currentPosts} loading = {loading} />
                <Pagination postsPerPage = {postsPerPage} totalPosts = {posts.length} paginate = {paginate}/>
        </div>
    )
}

export default App
