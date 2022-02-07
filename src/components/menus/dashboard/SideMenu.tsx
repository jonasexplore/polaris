import { UserAddOutlined, BookOutlined } from "@ant-design/icons"
import { Menu } from "antd"

const { SubMenu } = Menu

const SideMenuDashboard = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['Pessoas']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <SubMenu
        key="Pessoas"
        title={
          <span>
            <UserAddOutlined style={{ marginRight: '0.5rem' }} />
            Pessoas
          </span>
        }
      >
        <Menu.Item key="1">Geral</Menu.Item>
      </SubMenu>
      <SubMenu
        key="RCPN"
        title={
          <span>
            <BookOutlined style={{ marginRight: '0.5rem' }} />
            RCPN
          </span>
        }
      >
        <Menu.Item key="2">Nascimento</Menu.Item>
        <Menu.Item key="3">Hab. de casamento</Menu.Item>
        <Menu.Item key="4">Casamento</Menu.Item>
        <Menu.Item key="5">Óbito</Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export { SideMenuDashboard }