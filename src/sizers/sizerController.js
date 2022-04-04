import React, { useRef, useState, useEffect } from 'react';
import Sizer from "./sizer"

//Имей в виду, что если модалка не будет иметь transform: translate со значениями по умолчанию, отличными от нуля
//значение от dadObject.style.transform будет возвращаться как "translate(0px)" (с одним пунктом)

export default (props) => {

    //Движение работает за счёт изменения ширины/высоты у окон и смещения по х/у оси. Каждому сизеру команды отдаются отдельно.
    //Завершённая тупая работа с визуалом. Разве что сейчас функции внутри компонента, хотя стоит их вынести, или обернуть в юзКолбек
    function resizeTopLeft (e) {
        const dadObject = document.getElementById(`dad${props.name}`);
        // console.log(dadObject)

        let dadLeft = dadObject.style.transform.split(/px/)[0].replace(/\D/g,'');
        let dadTop = dadObject.style.transform.split(/px/)[1].replace(/\D/g,'');

        dadObject.style.transform = `translate(` + (Number(dadLeft) + Number(e.movementX)) + `px,`+ (Number(dadTop) + e.movementY) + "px)"

        dadObject.style.height = dadObject.offsetHeight - e.movementY + "px"
        dadObject.style.width = dadObject.offsetWidth - e.movementX + "px"
    }
    function resizeTopRight (e) {
        const dadObject = document.getElementById(`dad${props.name}`);

        let dadLeft = dadObject.style.transform.split(/px/)[0].replace(/\D/g,'');
        let dadTop = dadObject.style.transform.split(/px/)[1].replace(/\D/g,'');

        dadObject.style.transform = `translate(` + Number(dadLeft)  + `px,`+ (Number(dadTop) + e.movementY) + "px)"

        dadObject.style.height = dadObject.offsetHeight - e.movementY + "px"
        dadObject.style.width = dadObject.offsetWidth + e.movementX + "px"
    }
    function resizeBottomLeft (e) {
        const dadObject = document.getElementById(`dad${props.name}`);

        let dadLeft = dadObject.style.transform.split(/px/)[0].replace(/\D/g,'');
        let dadTop = dadObject.style.transform.split(/px/)[1].replace(/\D/g,'');

        dadObject.style.transform = `translate(` + (Number(dadLeft) + Number(e.movementX)) + `px,`+ Number(dadTop) + "px)"

        dadObject.style.height = dadObject.offsetHeight + e.movementY + "px"
        dadObject.style.width = dadObject.offsetWidth - e.movementX + "px"
    }
    function resizeBottomRight (e) {
        const dadObject = document.getElementById(`dad${props.name}`);

        dadObject.style.height = dadObject.offsetHeight + e.movementY + "px"
        dadObject.style.width = dadObject.offsetWidth + e.movementX + "px"
    }

    return(
        <>
            <Sizer resize={resizeBottomLeft} position="absolute" left="0" bottom="0" cursor="nesw-resize" color="#f7c873"/>
            <Sizer resize={resizeBottomRight} position="absolute" right="0" bottom="0" cursor="nesw-resize" color="#f7c873"/>
            <Sizer resize={resizeTopLeft} position="absolute" left="0" top="0" cursor="nesw-resize" color="#f7c873"/>
            <Sizer resize={resizeTopRight} position="absolute" right="0" top="0" cursor="nesw-resize" color="#f7c873"/>
        </>
    )
}