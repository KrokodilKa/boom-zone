import React, { useRef, useEffect } from 'react';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import SizerController from "./sizers/sizerController"
import Mover from "./mover"

function onClickResizer (e) {
    console.log(e)
}

export default (props) => {
    const re = useRef();

    useEffect(() => {
        console.log(re)

        const element = document.querySelector("section");
        // element.style.width = 100 + 'px'
    },[])

    return(
        <section
            id="dad"
            ref={re}
            style={{
                position: "fixed",
                width: "500px",
                height: "500px",
                transform: "translate(10px, 10px)",
                "min-width": "100px",
                "min-height": "100px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    "background-color": "#1d2025",
                    border: "#101217 2px solid",
                    "border-radius": "5px",
                    // "box-sizing": "border-box",
                    // padding:
                }}
            >
                <Mover
                >
                    <CancelPresentationIcon sx={{color:"#f7c873", cursor:"pointer", "margin-left":"50px"}}/>
                </Mover>
            </div>
            <SizerController/>
        </section>
    )
}