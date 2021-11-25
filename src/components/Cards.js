import React from 'react'
import Card from './Card'

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id:1,
        title:'GuserHub IG',
        image: image1,
        url: 'https://www.instagram.com',
        // text: 'This is my website',
        button: 'Go to my Instagram'
    },
    {
        id:2,
        title:'GuserHub GitHub',
        image: image2,
        url: 'https://github.com/GuserHub23',
        button: 'Go to my GitHub' 
    },
    {
        id:3,
        title:'GuserHub YT',
        image: image3,
        url: 'https://www.youtube.com',
        button: 'Go to my YT Channel'
    },
    {
        id:4,
        title:'GuserHub nothing',
        // image: image4,
        url: '#!',
        button: 'Doesn´t work'
    }

] 

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text} button={card.button}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
