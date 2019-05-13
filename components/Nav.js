import Link from 'next/link'
import { Layout, Menu } from 'antd'

const { Header } = Layout
const Nav = () => (
  <Header>
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">
        <Link href="/">
          <a href="#">Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/about">
          <a href="#">Nosotros</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="/terms">
          <a href="#">Terminos Y Condiciones</a>
        </Link>
      </Menu.Item>
    </Menu>
    <style scoped>
      {`
        .ant-layout-header {
          background: white;
        }
      `}
    </style>
  </Header>
)

export default Nav
