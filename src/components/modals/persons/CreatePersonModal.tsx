import React, { useContext } from 'react';
import { Button, DatePicker, Form, Input, Modal, Row } from "antd";
import { useEffect, useState } from "react";
import { Person } from "../../../types/persons";
import { PersonsContext } from '../../../contexts/persons';

type createPersonModalProps = {
  personId?: string;
  visible: boolean;
  createPerson: (person: Person) => void;
  onCancel: () => void;
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const initialValues = {
  id: "",
  document: "",
  name: "",
  address: "",
  phone: "",
  email: "",
  birthDate: "",
  city: "",
  state: "",
  country: "",
  zip: "",
}

const CreatePersonModal = ({
  onCancel,
  visible,
  personId,
  createPerson,
}: createPersonModalProps) => {
  const [editingPerson, setEditingPerson] = useState<Person>(initialValues);
  const [form] = Form.useForm();

  const { persons, updatePerson } = useContext(PersonsContext)

  useEffect(() => {
    if (personId) {
      const person = persons.find((person) => person.id === personId);

      if (person) {
        setEditingPerson(person);
        form.setFieldsValue(person);
      }
    }
  }, [form, personId, persons])

  const onFinish = (values: any) => {
    personId ? updatePerson(personId, values) : createPerson(values);
    onCancel();
  }

  return (
    <Modal
      destroyOnClose
      title="Cadastro de Pessoas"
      visible={visible}
      onCancel={onCancel}
      width={800}
      footer={null}
    >
      <Form
        {...formItemLayout}
        initialValues={editingPerson}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="document"
          label="CPF"
          wrapperCol={{ span: 6 }}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item name="name" label="Nome">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        {/* <Form.Item name="birthDate"  label="Data de Nascimento">
          <DatePicker />
        </Form.Item> */}
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
            <Button type="default" onClick={onCancel}>
              Cancelar
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {personId ? 'Atualizar' : 'Finalizar'}
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Modal >
  );
}

export { CreatePersonModal }