import React, { useRef, useState, useEffect } from 'react';
import Sizer from "./sizer"

function resizeTopLeft (e) {
    const dadObject = document.getElementById("dad");
    dadObject.style.height = dadObject.offsetHeight - e.movementY + "px"
    dadObject.style.top = Number(dadObject.style.top.slice(0, -2)) + e.movementY + "px"

    dadObject.style.width = dadObject.offsetWidth - e.movementX + "px"
    dadObject.style.left = Number(dadObject.style.left.slice(0, -2)) + e.movementX + "px"
}
function resizeTopRight (e) {
    const dadObject = document.getElementById("dad");
    dadObject.style.height = dadObject.offsetHeight - e.movementY + "px"
    dadObject.style.top = Number(dadObject.style.top.slice(0, -2)) + e.movementY + "px"

    dadObject.style.width = dadObject.offsetWidth + e.movementX + "px"
}
function resizeBottomLeft (e) {
    const dadObject = document.getElementById("dad");
    dadObject.style.height = dadObject.offsetHeight + e.movementY + "px"
    dadObject.style.width = dadObject.offsetWidth - e.movementX + "px"
    dadObject.style.left = Number(dadObject.style.left.slice(0, -2)) + e.movementX + "px"
}
function resizeBottomRight (e) {
    const dadObject = document.getElementById("dad");
    dadObject.style.height = dadObject.offsetHeight + e.movementY + "px"
    dadObject.style.width = dadObject.offsetWidth + e.movementX + "px"
}


export default (props) => {
    return(
        <>
            <Sizer resize={resizeBottomLeft} position="absolute" left="0" bottom="0" cursor="nesw-resize" color="#f7c873"/>
            <Sizer resize={resizeBottomRight} position="absolute" right="0" bottom="0" cursor="nesw-resize" color="#f7c873"/>
            <Sizer resize={resizeTopLeft} position="absolute" left="0" top="0" cursor="nesw-resize" color="#f7c873"/>
            <Sizer resize={resizeTopRight} position="absolute" right="0" top="0" cursor="nesw-resize" color="#f7c873"/>
        </>
    )
}