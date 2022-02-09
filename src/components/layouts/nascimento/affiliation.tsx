import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Card, DatePicker, Form, Input, Select, Space, Tooltip } from "antd"
import { Documents } from "./documents"

type affiliationProps = {
  key: number;
  restField: any;
  name: number;
  remove: (name: number) => void;
}

const { Option } = Select

const Affiliation = ({ key, name, restField, remove }: affiliationProps) => {

  return (
    <Card key={key} style={{ marginBottom: 8 }}>
      <Form.Item
        {...restField}
        label="Data de nascimento"
        name={[name, 'birthDate']}
      >
        <DatePicker format="DD/MM/yyyy" />
      </Form.Item>
      <Form.Item
        {...restField}
        label="Nome"
        name={[name, 'name']}
      >
        <Input placeholder="Nome" />
      </Form.Item>
      <Form.Item
        {...restField}
        label="Sexo"
        name={[name, 'sex']}
      >
        <Select>
          <Option value="MASCULINO">Masculino</Option>
          <Option value="FEMININO">Feminino</Option>
        </Select>
      </Form.Item>
      <Form.Item
        {...restField}
        label="Local de nascimento"
        name={[name, 'birthPlace']}
      >
        <Input placeholder="Nascimento" />
      </Form.Item>

      <p>Documentos</p>
      <Form.List name={[name, 'documents']}>
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
      <Form.Item
        {...restField}
        label="Ocupação"
        name={[name, 'occupatiom']}
      >
        <Input placeholder="Ocupação" />
      </Form.Item>
      <Form.Item
        {...restField}
        label="Nacionalidade"
        name={[name, 'nationality']}
      >
        <Input placeholder="Nacionalidade" />
      </Form.Item>
      <p>Pais</p>
      <Form.List name={[name, 'parents']}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex' }} align="baseline">
                <Form.Item
                  {...restField}
                  label="Nome"
                  name={[name, 'name']}
                >
                  <Input placeholder="Nome" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  label="Sexo"
                  name={[name, 'sex']}
                >
                  <Select>
                    <Option value="MASCULINO">Masculino</Option>
                    <Option value="FEMININO">Feminino</Option>
                  </Select>
                </Form.Item>
                <Tooltip title="Remover parente">
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Tooltip>
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Adicionar
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Button type="primary" onClick={() => remove(name)}>Remover</Button>
    </Card>
  )
}

export { Affiliation }