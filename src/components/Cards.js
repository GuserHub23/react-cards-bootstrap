import React from 'react'
import Card from './Card'

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id:1,
        title:'GuserHub Web',
        image: image1,
        url: 'https://www.instagram.com',
        // text: 'This is my website'
    },
    {
        id:2,
        title:'GuserHub Blog',
        image: image2,
        url: 'https://github.com/GuserHub23'
    },
    {
        id:3,
        title:'GuserHub YT',
        image: image3,
        url: 'https://www.youtube.com/channel/UCgv4NbwCqeO6dFG-lvOYAtg'
    }
] 

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
