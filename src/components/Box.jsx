import React, { useState } from 'react';
import styles from './component.module.css';


const Box = (props) => {
    const boxDisplay = props.boxes.map((color) => <div className="w-48 h-48" style ={{backgroundColor:color}}></div>)
    console.log(props.boxes)
    const msg = <p className='text-xl text-black'>Type in a Color and Watch Boxes Appear</p>
    return (
        <div className='flex flex-wrap items-center justify-around'>
        { boxDisplay ? boxDisplay : msg }
        </div>
    )
}

export default Box