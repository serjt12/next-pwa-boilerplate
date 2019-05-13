import App from 'next/app'
import Head from 'next/head'
import { Layout, Spin } from 'antd'
import { PageTransition } from 'next-page-transitions'
import Nav from '../components/Nav'
import { title } from './_document'

const { Content, Footer } = Layout
const TIMEOUT = 400
export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, router } = this.props
    return (
      <Layout className="layout">
        <Head>
          <title>{title}</title>
        </Head>
        <Nav />
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
            <PageTransition
              timeout={TIMEOUT}
              classNames="page-transition"
              loadingClassNames="loading-indicator"
              loadingComponent={<div style={{ textAlign: 'center' }}><Spin size="large" /></div>}
              loadingDelay={500}
              loadingTimeout={{
                enter: 400,
                exit: 0
              }}
            >
              <Component {...pageProps} router={router} key={router.route} />
            </PageTransition>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
        <style jsx global>
          {`
          body {
            font-family: 'Raleway', sans-serif;
          }
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ${TIMEOUT}ms;
          }
          .loading-indicator-appear,
          .loading-indicator-enter {
            opacity: 0;
          }
          .loading-indicator-appear-active,
          .loading-indicator-enter-active {
            opacity: 1;
            transition: opacity ${TIMEOUT}ms;
          }
        `}
        </style>
      </Layout>
    )
  }
}
