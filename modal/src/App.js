import React from 'react'
import Modal from 'react-modal'

const App = () => {
    return (
        <div>
            <Modal isOpen = {true}>
                <h2>Model Heading</h2>
                <p>Model Paragraph</p>
            </Modal>
        </div>
    )
}

export default App
