import { InfoCircleOutlined, PlusOutlined, WindowsFilled } from "@ant-design/icons"
import { Breadcrumb, Button, Checkbox, DatePicker, Form, Input, Layout, Row, Select, TimePicker, Tooltip } from "antd"
import { useForm } from "antd/lib/form/Form"
import { useContext, useState } from "react"
import { If } from "react-extras"
import { CitiesContext } from "../../../contexts/cities"
import { HeaderDashboard } from "../../headers"
import { Affiliation } from "./affiliation"
import { Documents } from "./documents"

const { Content } = Layout
const { Option } = Select

const inititalValues = {
  name: "",
  nonDnv: false,
  affiliation: [],
  documents: [],
}

export const NascimentoLayout = () => {
  const [form] = useForm()
  const [nonDnv, setNonDnv] = useState(false)

  const { cities, countries } = useContext(CitiesContext)

  const onFinish = (values: any) => {
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
              initialValues={inititalValues}
              autoComplete="off"
            >
              <Form.Item name="name" label="Nome">
                <Input />
              </Form.Item>
              <Form.Item name="birthDate" label="Data do nascimento">
                <DatePicker format="DD/MM/yyyy" placeholder="" />
              </Form.Item>
              <Form.Item name="birthTime" label="Hora do nascimento">
                <TimePicker
                  showSecond={false}
                  format="HH:mm"
                  placeholder=""
                />
              </Form.Item>
              <Form.Item
                label="Local de nascimento"
                name={['birthPlace']}
              >
                <Select>
                  <Option value="Unidade de Saúde">Unidade de Saúde</Option>
                  <Option value="Fora de Unidade de Saúde">Fora de Unidade de Saúde</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Sexo"
                name={['sex']}
              >
                <Select>
                  <Option value="MASCULINO">Masculino</Option>
                  <Option value="FEMININO">Feminino</Option>
                </Select>
              </Form.Item>
              <Form.Item name="nationality" label="Nacionalidade" wrapperCol={{ span: 6 }}>
                <Select
                  showSearch
                  optionFilterProp="children"
                  filterOption={false}
                >
                  {countries.map(country =>
                    <Option
                      key={country.value}
                      value={country.value}
                    >
                      {country.label}
                    </Option>)
                  }
                </Select>
              </Form.Item>
              <Form.Item name="city" label="Cidade">
                <Select
                  showSearch
                  optionFilterProp="children"
                >
                  {cities.map(city =>
                    <Option
                      key={city.value}
                      value={city.value}
                    >
                      {city.label}
                    </Option>)
                  }
                </Select>
              </Form.Item>
              <Form.Item name="country" label="País" wrapperCol={{ span: 6 }}>
                <Select
                  showSearch
                  optionFilterProp="children"
                  filterOption={false}
                >
                  {countries.map(country =>
                    <Option
                      key={country.value}
                      value={country.value}
                    >
                      {country.label}
                    </Option>)
                  }
                </Select>
              </Form.Item>
              <Form.Item name="nonDnv" valuePropName="checked">
                <Checkbox
                  name="nonDnv"
                  checked={nonDnv}
                  onChange={() => setNonDnv(!nonDnv)
                  }>
                  Não possui declaração nascido vivo
                </Checkbox>
              </Form.Item>
              <If condition={!nonDnv}>
                <Form.Item required name="dnv" label="Número da declaração nascido vivo">
                  <Input />
                </Form.Item>
              </If>
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
