import { InfoCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Breadcrumb, Button, Card, DatePicker, Form, Input, Layout, Row, Select, Space, TimePicker, Tooltip } from "antd"
import { useForm } from "antd/lib/form/Form"
import { HeaderDashboard } from "../../headers"
import { Affiliation } from "./affiliation"
import { Documents } from "./documents"

const { Content } = Layout

export const NascimentoLayout = () => {
  const [form] = useForm()

  const onFinish = (values: any) => {
    console.log({ values });

  }

  return (
    <Layout style={{
      height: '100%'
    }}>
      <HeaderDashboard />
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Registro civil</Breadcrumb.Item>
            <Breadcrumb.Item>Nascimento</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Form
              form={form}
              onFinish={onFinish}
            >
              <Form.Item name="name" label="Nome">
                <Input />
              </Form.Item>
              <Form.Item name="birthDate" label="Data do nascimento">
                <DatePicker format="DD/MM/yyyy" />
              </Form.Item>
              <Form.Item name="birthTime" label="Hora do nascimento">
                <TimePicker
                  showSecond={false}
                  format="HH:mm"
                />
              </Form.Item>
              <p>Documentos <Tooltip title="Informe os documentos do nascido">
                <InfoCircleOutlined />
              </Tooltip></p>
              <Form.List name={['documents']}>
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Documents
                        key={key}
                        name={name}
                        restField={restField}
                        remove={remove}
                      />
                    ))}
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Adicionar
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
              <p>Filiação</p>
              <Form.List name="affiliation">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Affiliation
                        key={key}
                        name={name}
                        restField={restField}
                        remove={remove}
                      />
                    ))}
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Adicionar
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
              <Form.Item name="email" label="Email">
                <Input />
              </Form.Item>
              <Form.Item name="phone" label="Celular">
                <Input />
              </Form.Item>
              <Form.Item
                name="zip"
                label="CEP"
                wrapperCol={{ span: 6 }}
              >
                <Input />
              </Form.Item>
              <Form.Item name="address" label="Endereço">
                <Input />
              </Form.Item>
              <Form.Item name="city" label="Cidade">
                <Input />
              </Form.Item>
              <Form.Item name="state" label="Estado" wrapperCol={{ span: 6 }}>
                <Input />
              </Form.Item>
              <Form.Item name="country" label="País" wrapperCol={{ span: 6 }}>
                <Input />
              </Form.Item>
              <Row justify='end'>
                <Form.Item style={{ marginRight: '0.5rem' }}>
                  <Button type="default">
                    Cancelar
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Finalizar
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
