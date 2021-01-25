import image from './assets/ph-1.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks.js'

const text = `
Функционал на данный момент: пока только есть возможность добавить Текст + его стили(пока что только строго в CSS, аля colour: green; и др.) и аналогично заголовоки. В планах добавить колоночную верстку и медиа-контент, как уже в готовом примере на странице. Расширить функционал в плане распределения по колонками(буду пользоваться классами из Bootstrap) и многое другое. В общем, что в голову придёт. Чисто для себя, чисто по фану:)  А вот просто ссылочка на Youtube <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Touch me!!!</a>
`

export const model   = [
    new TitleBlock('Конструктор сайтов на чистом JS', {
        tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center',
            }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock([
        'Привет, меня зовут Кирилл, и я начинающий Frontend-developer :)',
        'Этой мой мини пет-проект, где я учусь применять новые знания/технологии, а также оттачивать свои навыки написания красивого и профессионального кода',
        'Не судите строго, ведь это только начало моего пути как крутого Frontend разработчика! Пролистай стриничку ниже и увидишь результат работы кода',
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
]