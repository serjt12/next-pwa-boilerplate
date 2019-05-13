import React, { Component, Fragment } from 'react'
import TweenOne from 'rc-tween-one'
import { NextAuth } from 'next-auth/client'
import Logo from '../components/Logo'
import Carousel from '../components/Carousel'
import Login from '../components/Login'
import AppInfo from '../components/AppInfo'
class Index extends Component {
  static async getInitialProps({req}) {
    return {
      session: await NextAuth.init({req})
    }
  }
  constructor(props) {
    super(props)
    this.animation = [
      {
        duration: 10000,
        opacity: 1
      }
    ]
  }

  render() {
    return (
      <Fragment>
        <Logo />
        <TweenOne animation={this.animation} style={{
          opacity: 0
        }}>
          <Carousel />
          <Login />
          <AppInfo />
        </TweenOne>
    <style jsx>
      {`
      `}
      </style>
      </Fragment>
    )
  }

}

export default Index
