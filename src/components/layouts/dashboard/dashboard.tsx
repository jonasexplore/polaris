import { useState } from "react"
import { Choose } from "react-extras"
import { Breadcrumb, Layout } from "antd"
import { PersonsTable } from "../../tables"
import { HeaderDashboard } from "../../headers"
import { SideMenuDashboard } from "../../menus"
import { PersonsProvider } from "../../../contexts/persons"
import { EmolumentsTable } from "../../tables/emoluments/EmolumentsTable"
import { CardsOptions } from "../../cards/birth/CardsOptions"

const { Sider, Content } = Layout

export const DashboardLayout = () => {
  const [currentSideMenu, setCurrentSideMenu] = useState('1')

  return (
    <Layout style={{
      height: '100vh'
    }}>
      <HeaderDashboard />
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <SideMenuDashboard setCurrentSideMenu={setCurrentSideMenu} />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Choose>
              <Choose.When condition={currentSideMenu === '1'}>
                <PersonsProvider>
                  <PersonsTable />
                </PersonsProvider>
              </Choose.When>
              <Choose.When condition={currentSideMenu === '2'}>
                <CardsOptions />
              </Choose.When>
              <Choose.When condition={currentSideMenu === '6'}>
                <EmolumentsTable />
              </Choose.When>
            </Choose>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
