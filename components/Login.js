import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import LoginFace from '../static/login/loginfacebook.png'
import LoginCell from '../static/login/login-celular.png'

export default class Login extends Component {
  state = {
  
  }
  render() {
    return (
      <Fragment>
        <div className="accessbtn">
          <Link href="/auth"><img src={LoginCell} alt="Ingreso con celular " /></Link>
          <Link  href="/auth/facebook"><img src={LoginFace} alt="Ingreso con facebook" /></Link>
        </div>
        <style scoped>
          {`
            .accessbtn img {
              width: 100%;
              cursor: pointer;
            }
          `}
        </style>
      </Fragment>
    )
  }
}
