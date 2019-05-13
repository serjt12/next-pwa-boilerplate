import React from 'react'
import Link from 'next/link'

export default class extends React.Component {

  static async getInitialProps({query}) {
    return {
      email: query.email
    }
  }

  render() {
    return(
      <div className="check-email-container">
        <div className="text-center">
          <h1 className="display-4 mt-5 mb-3">Revisa tu e-mail y comienza a disfrutar de TOBCITY!</h1>
          <p className="lead">
            Un e-mail ha sido enviado a { (this.props.email) ? <span className="font-weight-bold">{this.props.email}</span> : <span>your inbox</span> }.
          </p>
          <p>
            <Link href="/"><a>Home</a></Link>
          </p>
        </div>
        <style scoped>{`
          .text-center {
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}