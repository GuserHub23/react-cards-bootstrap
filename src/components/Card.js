import React from 'react'
import PropTypes from 'prop-types'
import './cards.css'

function Card({title,imageSource,text,url,button}) {
    return (
        <div className="card text-center bg-dark bg-gradient
        animate__animated animate__backInRight">
            <div className="overflow">
                <img src=
                {
                    imageSource ? imageSource: 'https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1'
                }
                alt="" className="card-img-top"/>
            
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {
                        text ? text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nemo dolorem animi recusandae officiis sequi ipsum ratione aspernatur, iste aliquid, nisi a asperiores molestiae nulla alias quae, in repellendus? Non?'
                    }
                </p>
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                    {
                        button ? button: 'Go to this Website'
                    }
                </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.string,
}

export default Card
