import React, {useState} from 'react'
import Modal from 'react-modal'

const App = () => {

    const [modelOpen, setModelOpen] = useState(false)

    return (
        <div>
            <button
                onClick = {() => {
                    setModelOpen(true)
                }}
            >
                Click
            </button>
            <Modal isOpen = {modelOpen}>
                <h2>Model Heading</h2>
                <p>Model Paragraph</p>
                <button
                    onClick = {() => {
                        setModelOpen(false)
                    }}
                >
                    Okay
                </button>
            </Modal>
        </div>
    )
}

export default App
