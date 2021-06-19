import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {

    //defining states
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [indvalue, setIndValue] = useState(0)

    const fetchJobs = async() => {
        const response = await fetch(url)
        const newJobs = await response.json()
        setJobs(newJobs)
        console.log(newJobs)
        setLoading(false)
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    if (loading) {
        return (
          <section className="section loading">
            <h1>Loading...</h1>
          </section>
        )
      }

    return (
        <div>
            Application
        </div>
    )
}

export default App
