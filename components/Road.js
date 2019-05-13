import { Component } from 'react'
import TweenOne from 'rc-tween-one'
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin'
import RoadImg from '../static/carreraprueba1.png'
// import Car from '../static/carro.png'
import { roadPath } from './vectors'

TweenOne.plugins.push(PathPlugin)
// const ease = TweenOne.easing.path(roadPath)
class Road extends Component {
  constructor(props) {
    super(props)
    this.path = roadPath
    this.animation = {
      path: this.path,
      duration: 100000,
      ease: 'linear',
      repeat: -1
    }
  }

  render() {
    return (
      <div className="road-container">
        <TweenOne
          style={{ width: 34, height: 20, transform: 'translate(10px, 10px)'}}
          animation={this.animation}
          className="code-box-shape"
        />
        <img className="road-img" src={RoadImg} alt="" />
        <style scoped>
          {`
            .code-box-shape {
              background: url('../static/carro.png');
              background-repeat: no-repeat;
            }
            .road-container {
              border: 1px solid black;
              width: 100%;
            }
            .road-img {
              width: 50%;
            }
          `}
        </style>
      </div>
    )
  }
}

export default Road
