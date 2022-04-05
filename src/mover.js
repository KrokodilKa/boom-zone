import React, { useRef, useState, useEffect } from 'react';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export default (props) => {

    //Меняет значение трансформа у модалки при движении мышью

    const sizer = useRef(null);

    useEffect(() => {
        sizer.current.addEventListener('mousedown', function(e) {
            e.preventDefault()
            window.addEventListener('mousemove', resize)
            window.addEventListener('mouseup', stopResize)
        })
        return () => {
            stopResize()
        };
    }, []);

    function resize (e) {
        const dadObject = document.getElementById(`dad${props.name}`);

        let dadLeft = dadObject.style.transform.split(/px/)[0].replace(/\D/g,'');
        let dadTop = dadObject.style.transform.split(/px/)[1].replace(/\D/g,'');

        dadObject.style.transform = `translate(` + (Number(dadLeft) + Number(e.movementX)) + `px,`+ (Number(dadTop) + e.movementY) + "px)"

    }
    function stopResize() {
        window.removeEventListener('mousemove', resize)
    }

    return(
        <article
            ref={sizer}
            style={{
                width: "100%",
                height: "40px",
                backgroundColor: "#101217",
                cursor: "pointer",
                color: "white",
                boxSizing: "border-box",
                padding: "0 20px"
            }}>{props.name}</article>
    )
}
// Кнопка удаления
// <CancelPresentationIcon sx={{color:"#f7c873", cursor:"pointer"}}/>