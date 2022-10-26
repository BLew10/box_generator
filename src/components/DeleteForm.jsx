import React, { useState } from 'react';

const DeleteForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        props.deleteBox()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button className='bg-red-500 rounded py-2 px-2'>Delete</button>
            </form>
        </div>
    )
}

export default DeleteForm