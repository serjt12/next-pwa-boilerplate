import React, { Component, Fragment} from 'react'
import Router from 'next/router'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Link from 'next/link'
import { NextAuth } from 'next-auth/client'

class SigninForm extends Component {
  static async getInitialProps({req}) {
    return {
      session: await NextAuth.init({req}),
      linkedAccounts: await NextAuth.linked({req}),
      providers: await NextAuth.providers({req})
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        NextAuth.signin(values.email)
          .then(() => {
            Router.push(`/auth/check-email?email=${values.email}`)
          })
          .catch(() => {
            Router.push(`/auth/error?action=signin&type=email&email=${values.email}`)
          })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form
    console.log(this.props.session.user);
    return (
      <div className="signin-container">
        <div className="signin-form">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Por favor ingresa tu e-mail!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="E-mail" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Por favor ingresa tu contraseña!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Ingresa
            </Button>
            Or <a href="">Registrate ahora!</a>
          </Form>
        </div>
        <style jsx>{`
          .signin-container {
            text-align: center;
          }
          .signin-form {
            max-width: 300px;
            display: inline-block;
            text-align: center;
          }
        `}</style>
      </div>
    )}
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(SigninForm)

export default WrappedNormalLoginForm