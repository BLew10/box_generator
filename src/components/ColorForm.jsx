import React, { useState } from 'react';
import styles from './component.module.css';

const ColorForm = (props) => {
    const [color,setColor] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(color)
    props.newColor(color)
    document.querySelector('#colorPicker').value = ''
}

    return (
        <div className='flex items-center justify-around'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='colorPicker'>Color: </label>
                <input type="text" id='colorPicker' name='color' className='border-2 black' onChange={(e) => setColor(e.target.value)}/>
                <button className='bg-indigo-500 rounded py-2 px-2'>Add</button>
            </form>
        </div>
    )
}

export default ColorForm