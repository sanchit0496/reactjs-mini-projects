import React, {useState} from 'react';
import data from './data.js' ;
import SingleQuestion from './Question.js';

const App = () => {
    const [questions, setQuestions] = useState(data)
    return (
        <main>
            <div className="container">
                <section className="info">
                    {
                    questions.map((question) => {
                        return (
                            <SingleQuestion key = {question.id} {...question}/>
                        )
                    })
                }
                </section>
            </div>
        </main>
    )
}

export default App
