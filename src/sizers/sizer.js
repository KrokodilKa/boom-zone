import React, { useRef, useState, useEffect } from 'react';
import TextureIcon from '@mui/icons-material/Texture';

export default (props) => {

    const sizer = useRef(null);

    useEffect(() => {
        sizer.current.addEventListener('mousedown', function(e) {
            // console.log(e)
            e.preventDefault()
            window.addEventListener('mousemove', props.resize)
            window.addEventListener('mouseup', stopResize)
        })
        return () => {
            stopResize()
        };
    }, []);

    function resize (e) {
        const dadObject = document.getElementById("dad");
        dadObject.style.height = dadObject.offsetHeight + e.movementY + "px"
        dadObject.style.width = dadObject.offsetWidth - e.movementX + "px"
        dadObject.style.left = Number(dadObject.style.left.slice(0, -2)) + e.movementX + "px"
        // console.log(dadObject)
        // console.log(dadObject.style.left)
        // console.log(e.movementX)
        // console.log(e.movementY)
//         movementX: 0
// movementY: 2

    }
    function stopResize() {
        window.removeEventListener('mousemove', props.resize)
    }

    return(
        <TextureIcon ref={sizer} sx={{position:props.position, right:props.right, left:props.left, top:props.top, bottom:props.bottom, cursor:props.cursor, color:props.color}}/>
    )
}