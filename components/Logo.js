import { Component, Fragment } from 'react'
import TweenOne from 'rc-tween-one'
import LogoImg from '../static/thumbnail.png'

const p0 = 'M0,100 L25,100 C34,20 40,0 100,0'
const ease0 = TweenOne.easing.path(p0)
class Logo extends Component {
  constructor(props) {
    super(props)
    this.moment = null
    this.animation = [
      {
        ease: ease0,
        duration: 1000,
        opacity: 1
      },
      {
        x: 0,
        y: -100,
        scale: 0,
        rotate: 360,
        duration: 1000,
        opacity: 0
      }
    ]
  }

  render() {
    return (
      <Fragment>
        <TweenOne
          animation={this.animation}
          style={{ position: 'absolute' }}
        >
          <img className="logoImg" src={LogoImg} alt="Logo" />
        </TweenOne>
        <style scoped>
          {`
            .logoImg {
              width: 50%;
              left: 25%;
              position: relative;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default Logo
