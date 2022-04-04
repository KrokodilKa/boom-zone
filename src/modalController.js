import React, {useRef, useEffect, useState} from 'react';
import Modal from './modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default (props) => {

    const [modalList, setModalList] = useState([
        {id: 0, content: "aaaa0"},
        {id: 2, content: "bbbb2"},
        {id: 15, content: "cccc15"},
        {id: 3, content: "dddd3"},
        {id: 4, content: "eeee4"},
        {id: 5, content: "ffff5"},
        {id: 6, content: "ggggg6"},
        {id: 7, content: "hhhh7"},
        {id: 8, content: "iiii8"}])
    const [currentModal, setCurrentModal] = useState()

    const create = () => {
        // Для первой модалки в списке
        if (modalList.length === 0) {
            setModalList([{id: 0}])
            setCurrentModal(0)
        } else {
            //Для всех последующих модалок

            //Создаём массив, состоящий из id всех существующих модалок
            let indexes = []
            for (let i = 0; i < modalList.length; i++) {
                indexes.push(modalList[i].id)
            }
            //Сортируем в порядке возрастания
            indexes.sort(function compare(a, b) {
                    if (a < b) { return -1;}
                    if (a > b) { return 1;}
                    return 0;
                }
            )
            let max = indexes[indexes.length - 1]

            //Создаём массив - маску от 0 до самого высокого значения id
            let mask = []
            for (let i = 0; i <= max; i++) {
                mask.push(i)
            }

            //Ищем разницу между существующими id модалок и маской. Список пропущенных значений есть список доступных имён.
            let difference = indexes
                .filter(num => !mask.includes(num))
                .concat(mask.filter(num => !indexes.includes(num)));

            // difference - массив нехватающих в списке номеров.
            // Если все модалки у нас по порядку, без пропусков - нужно добавить новый номер
            if (difference.length === 0) {
                setModalList(modalList => ([...modalList, {id: max + 1}]))
                setCurrentModal(max + 1)
            } else {
                //Иначе добавить нехватающий
                setModalList(modalList => ([...modalList, {id: difference[0]}]))
                setCurrentModal(difference[0])
            }
        }

    }
    const deleteModal = () => {
        //Исключить возможность работы с отрицательными значениями id
        //И если текущая модалка вообще выбрана - можно начать удаление
        if (currentModal >= 0 && currentModal !== undefined) {
            //Получить индекс модалки по её id
            let index
            for (let i = 0; i <= modalList.length; i++) {
                if (modalList[i].id === currentModal) {
                    let a = modalList
                    a.splice(i, 1)
                    setModalList([...a])
                    setCurrentModal(undefined)
                    break
                }
            }
        }
    }
    //Эта функция срабатывает при опускании кнопки мыши на любую модалку
    const changeFokus = (index) => {
        setCurrentModal(index)
    }

    useEffect(() => {
        console.log("current index " + currentModal)
    });


    return (
        <Box>
            <Button onClick={create}>Создать</Button>
            <Button onClick={deleteModal}>Удалить</Button>
            <h1>{modalList.length}</h1>
            {
                modalList.map(function (e, i) {
                    return <Modal
                        changeFokus={changeFokus}
                        name={e.id}
                        current={currentModal}
                        content={e.content}
                    />
                })
            }
        </Box>
    )
}