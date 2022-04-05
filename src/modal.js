import React, { useRef, useEffect, useState } from 'react';
import SizerController from "./sizers/sizerController"
import Mover from "./mover"

function onClickResizer (e) {
    console.log(e)
}

export default React.memo((props) => {

    console.log("locale modal render")
    console.log(props)

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
                minWidth: "100px",
                minHeight: "100px",
                zIndex: props.isRender ? "100" : "1",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#1d2025",
                    border: props.isRender ? "#f7c873 2px solid" : "#101217 2px solid",
                    borderRadius: "5px",
                }}
            >
                <Mover name={props.name}/>
                {props.content}
            </div>
            <SizerController name={props.name}/>
        </section>
    )
})