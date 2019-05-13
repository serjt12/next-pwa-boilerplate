import React, { Component } from 'react'
import { Carousel } from 'antd'
import LogoImg from '../static/thumbnail.png'
import CirculoEmojis from '../static/carousel/circuloemoji.png'

export default class CarouselComponent extends Component {
  render() {
    return (
      <div className="carousel-container">
        <img className="emojis" src={CirculoEmojis}alt="Circulo emojis TOBCITY" />
        <Carousel autoplay>
          <img className="img-from-carousel" src={LogoImg} alt="Logo" />
          <img className="img-from-carousel" src={LogoImg} alt="Logo" />
          <img className="img-from-carousel" src={LogoImg} alt="Logo" />
        </Carousel>
          <style scoped>{`
            .emojis {
              position: absolute;
              width: 74%;
            }
          `}</style>
      </div>
    )
  }
}
