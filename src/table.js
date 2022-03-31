import React, {useEffect, useRef, useLayoutEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
    table: {
        width: "100%",
        overflow:"auto",
        minHeight: "500px",
        boxSizing: "border-box",
        padding: "10px",
        position: "relative",
        backgroundColor: "black",
    },
    tab: {
        display: "inline-flex",
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    column: {
        height: "100%",
        boxSizing: "border-box",
        padding: "0 2px"
    },
    header: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        resize: "horizontal",
        maxWidth: "100%",
        backgroundColor: "white",

    },
    row: {
        minHeight: "24px",
        maxWidth: "100%",
        overflowX: "auto",
        boxSizing: "border-box",
        padding: "2px",
        backgroundColor: "green",
    },
    shellCell: {
        display: "inline-flex",
        width: "100px",
        boxSizing: "border-box",
        padding: "0 3px",
        justifyContent: "space-between",
        resize: "both",
    },
    cell: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: "white",
        marginTop: "4px"
    },
    stick: {
        height: "20px",
        width: "20px",
        backgroundColor: "red",
        cursor: "col-resize",
    },
    circleStyle: {
        width: "20px",
        height: "20px",
        border: "3px solid #4286f4",
        borderRadius: "50%",
        cursor: "col-resize"
    }
}));

// const headersNames = [
//     "День",
//     "Переходы",
//     "Уники",
//     "Reg",
//     "Подтверждение регистрации",
//     "CTR %",
//     "Демо",
//     "Трейдеры",
//     "Сделки",
//     "Сделки $",
//     "FTD",
//     "FTRS $",
//     "Отношение %",
//     "Депозиты",
//     "Депозиты $",
//     "Динамика $",
//     "Выпл $",
//     "Доход $"
// ];

export default function MiniDrawer() {
    const classes = useStyles();

    const circle = useRef(null);

    const [lt, setlt] = useState(200)

    useEffect(() => {
        circle.current.addEventListener('mousedown', function(e) {
            circle.current.addEventListener('mousemove', resize)
        })
        circle.current.addEventListener('mousedown', function(e) {
            e.preventDefault()
            window.addEventListener('mousemove', resize)
            window.addEventListener('mouseup', stopResize)
        })
    }, []);

    function resize (e) {
        console.log(e.pageX)
        setlt(e.pageX)
    }
    function stopResize() {
        window.removeEventListener('mousemove', resize)
    }

    return <><Box ref={circle} className={classes.circleStyle} position="absolute" left={lt}/> <button onClick={() => console.log(circle.current)}/></>

    // return (
    //     <Box className={classes.table}>
    //         <Box className={classes.tab}>
    //         <Box className={classes.column}>
    //             <Box className={classes.header}>oaoa</Box>
    //             <Box className={classes.cell}>продам гараж</Box>
    //             <Box className={classes.cell}>15</Box>
    //         </Box>
    //         <Box className={classes.column}>
    //             <Box className={classes.header}>text</Box>
    //             <Box className={classes.cell}>4415</Box>
    //             <Box className={classes.cell}>мемы</Box>
    //         </Box>
    //         <Box className={classes.column}>
    //             <Box className={classes.header}>header</Box>
    //             <Box className={classes.cell}>body</Box>
    //             <Box className={classes.cell}>name</Box>
    //         </Box>
    //         <Box className={classes.column}>
    //             <Box className={classes.header}>Длинный заголовок</Box>
    //             <Box className={classes.cell}>body</Box>
    //             <Box className={classes.cell}>name</Box>
    //         </Box>
    //         <Box className={classes.column}>
    //             <Box className={classes.header}>Название</Box>
    //             <Box className={classes.cell}>body</Box>
    //             <Box className={classes.cell}>name</Box>
    //         </Box>
    //         <Box className={classes.column}>
    //             <Box className={classes.header}>Прив :)</Box>
    //             <Box className={classes.cell}>body</Box>
    //             <Box className={classes.cell}>name</Box>
    //         </Box>
    //         </Box>
    //     </Box>
    // );
}