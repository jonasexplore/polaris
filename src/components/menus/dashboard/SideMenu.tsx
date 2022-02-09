import { UserAddOutlined, BookOutlined, TableOutlined } from "@ant-design/icons"
import { Menu } from "antd"

const { SubMenu } = Menu

type SideMenuProps = {
  setCurrentSideMenu: any;
}

const SideMenuDashboard = ({ setCurrentSideMenu }: SideMenuProps) => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['Pessoas']}
      style={{ height: '100%', borderRight: 0 }}
      onClick={(e) => setCurrentSideMenu(e.key)}
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
      <Menu.Item key="6">
        <span>
          <TableOutlined style={{ marginRight: '0.5rem' }} />
          Emolumentos
        </span>
      </Menu.Item>
    </Menu>
  )
}

export { SideMenuDashboard }