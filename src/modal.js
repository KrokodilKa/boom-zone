import React, { useRef, useEffect, useState } from 'react';
import SizerController from "./sizers/sizerController"
import Mover from "./mover"

function onClickResizer (e) {
    console.log(e)
}

export default (props) => {

    console.log("locale modal render")

    return(
        <section
            id={`dad${props.name}`}
            onMouseDown={() => {
                props.changeFokus(props.name)
            }}
            style={{
                position: "fixed",
                width: "500px",
                height: "500px",
                transform: "translate(10px, 10px)",
                "min-width": "100px",
                "min-height": "100px",
                "z-index": props.name === props.current ? "100" : "1",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    "background-color": "#1d2025",
                    border: props.name === props.current ? "#f7c873 2px solid" : "#101217 2px solid",
                    "border-radius": "5px",
                }}
            >
                <Mover name={props.name}/>
                {props.content}
            </div>
            <SizerController name={props.name}/>
        </section>
    )
}