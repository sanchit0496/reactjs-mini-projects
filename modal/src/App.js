import React, {useState} from 'react'
import Modal from 'react-modal'

const App = () => {

    const [modelOpen, setModelOpen] = useState(false)

    return (
        <div>
            <button
                onClick = {() => {
                    if(modelOpen === false){
                        setModelOpen(true)
                    }else if(modelOpen === true){
                        setModelOpen(false)
                    }
                }}
            >
                Click
            </button>
            <Modal isOpen = {modelOpen}>
                <h2>Model Heading</h2>
                <p>Model Paragraph</p>
            </Modal>
        </div>
    )
}

export default App
