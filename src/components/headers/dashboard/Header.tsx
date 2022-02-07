import { Layout, Menu } from 'antd'

const { Header } = Layout

const HeaderDashboard = () => {
  return (
    <Header
      className="header"

      style={{
        height: '48px',
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{
          lineHeight: '48px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}

      >
        <Menu.Item key="1">Dashboard</Menu.Item>
        <Menu.Item key="2">Segurança</Menu.Item>
        <Menu.Item key="3">Ajuda</Menu.Item>
        <Menu.Item key="4">Sair</Menu.Item>
      </Menu>
    </Header>
  )
}

export { HeaderDashboard }