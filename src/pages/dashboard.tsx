import { Breadcrumb, Layout, Menu } from "antd";
import { HeaderDashboard } from "../components/headers";
import { SideMenuDashboard } from "../components/menus";
import { PersonsTable } from "../components/tables";
import { personsMock } from "../mocks/persons";

const { Sider, Content, Header } = Layout

const Dashboard = () => {
  return (
    <Layout style={{
      height: '100vh'
    }}>
      <HeaderDashboard />
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <SideMenuDashboard />
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
            <PersonsTable persons={personsMock} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Dashboard