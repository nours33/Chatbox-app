import React from 'react'
import './Message.css'


const Message = ({ pseudo, message }) => {
    return (
        <div className="message">
            <div className="user-message">
                {message}
            </div>
           
        </div>
    )
}

export default Message