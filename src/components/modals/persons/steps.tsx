import { DatePicker, Form, Input } from "antd";

const steps = [
  {
    title: 'Primeiro',
    description: 'Informações básicas',
    content: (document: boolean) => (
      <>
        <Form.Item
          name="document"
          hasFeedback
          label="CPF"
          wrapperCol={{ span: 6 }}
          validateStatus="validating"
        >
          <Input />
        </Form.Item>
        <Form.Item name="name" label="Nome">
          <Input disabled={document} />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input disabled={document} />
        </Form.Item>
        <Form.Item name="birthDate" label="Data de Nascimento">
          <DatePicker disabled={document} />
        </Form.Item>
        <Form.Item name="phone" label="Celular">
          <Input disabled={document} />
        </Form.Item>
      </>
    ),
  },
  {
    title: 'Segundo',
    description: 'Endereço atual',
    content: (document: boolean) => (
      <>
        <Form.Item
          name="zip"
          label="CEP"
          hasFeedback
          wrapperCol={{ span: 6 }}
          validateStatus="validating"
        >
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Endereço">
          <Input />
        </Form.Item>
        <Form.Item name="city" label="Cidade">
          <Input disabled />
        </Form.Item>
        <Form.Item name="state" label="Estado" wrapperCol={{ span: 6 }}>
          <Input disabled />
        </Form.Item>
        <Form.Item name="country" label="País" wrapperCol={{ span: 6 }}>
          <Input disabled />
        </Form.Item>
      </>
    ),
  },
  {
    title: 'Finalizado',
    content: (document: boolean) => (
      <>
        <p>Cadastro finalizado com sucesso!</p>
      </>
    ),
  },
];

export { steps }