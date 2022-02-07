import { Button, DatePicker, Form, Input, message, Modal, Steps } from "antd";
import { useState } from "react";
import { steps } from "./steps";

const { Step } = Steps

type createPersonModalProps = {
  visible: boolean;
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
  visible
}: createPersonModalProps) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const [form] = Form.useForm();

  return (
    <Modal
      title="Cadastro de Pessoas"
      visible={visible}
      onOk={() => console.log('criar')}
      onCancel={onCancel}
      width={800}
    >
      <Form
        {...formItemLayout}
        initialValues={initialValues}
        form={form}
      >
        <Steps current={current}>
          {steps.map(item => (
            <Step
              key={item.title}
              title={item.title}
              description={item.description}
              onClick={() => setCurrent(steps.indexOf(item))}
              style={{ cursor: "pointer" }}
            />
          ))}
        </Steps>
        <div className="steps-content" style={{ marginTop: '1.5rem' }}>{steps[current].content(Boolean(form.getFieldValue('document')))}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Próximo
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Feito
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Anterior
            </Button>
          )}
        </div>
      </Form>
    </Modal >
  );
}

export { CreatePersonModal }