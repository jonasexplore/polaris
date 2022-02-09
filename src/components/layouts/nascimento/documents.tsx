import { MinusCircleOutlined } from "@ant-design/icons"
import { Form, Input, Select, Space, Tooltip } from "antd"

type documentsProps = {
  key: number;
  restField: any;
  name: number;
  remove: (name: number) => void;
}

const { Option } = Select

const Documents = ({ key, name, remove, restField }: documentsProps) => {

  return (
    <Space key={key} style={{ display: 'flex' }} align="baseline">
      <Form.Item
        {...restField}
        label="Número"
        name={[name, 'number']}
      >
        <Input placeholder="Número" />
      </Form.Item>
      <Form.Item
        {...restField}
        label="Tipo"
        name={[name, 'type']}
      >
        <Select style={{ minWidth: 72 }}>
          <Option value="CPF">CPF</Option>
          <Option value="NIT">NIT</Option>
          <Option value="CNH">CNH</Option>
        </Select>
      </Form.Item>
      <Tooltip title="Remover documento">
        <MinusCircleOutlined onClick={() => remove(name)} />
      </Tooltip>
    </Space>
  )
}

export { Documents }