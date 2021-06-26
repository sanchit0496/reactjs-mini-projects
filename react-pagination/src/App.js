import React, {useState, useEffect} from 'react'

const App = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const[postsPerPage] = useState(10)

    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])

    return (
        <div>
            App
        </div>
    )
}

export default App
