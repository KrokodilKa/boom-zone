import React, { useRef, useState, useEffect } from 'react';

export default (props) => {

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
        const dadObject = document.getElementById("dad");

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
                "background-color": "#101217",
                cursor: "pointer"
            }}/>
    )
}