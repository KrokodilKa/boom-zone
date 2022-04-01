import React, { useRef, useState, useEffect } from 'react';
import TextureIcon from '@mui/icons-material/Texture';

export default (props) => {

    const sizer = useRef(null);

    useEffect(() => {
        sizer.current.addEventListener('mousedown', function(e) {
            e.preventDefault()
            window.addEventListener('mousemove', props.resize)
            window.addEventListener('mouseup', stopResize)
        })
        return () => {
            stopResize()
        };
    }, []);
    function stopResize() {
        window.removeEventListener('mousemove', props.resize)
    }

    return(
        <TextureIcon ref={sizer} sx={{position:props.position, right:props.right, left:props.left, top:props.top, bottom:props.bottom, cursor:props.cursor, color:props.color}}/>
    )
}