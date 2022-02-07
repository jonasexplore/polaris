import { Button, Form, Input, Layout } from "antd";
import { useRouter } from 'next/router'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useState } from "react";

const defaultData = {
  email: '',
  password: ''
}

const SingIn = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onFinish = (values: any) => {
    console.log(values);
    setLoading(!loading)

    router.push('/dashboard')
  }

  return (
    <Layout style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column'
    }}>
      <div>
        <h1>Sign In</h1>
      </div>

      <Form
        initialValues={defaultData}
        onFinish={onFinish}
        style={{
          width: '300px',
        }}
      >
        <Form.Item name='email' rules={[{
          required: true,
          message: 'Informe o email de acesso.'
        }, {
          message: 'Infome um email de acesso válido.',
          type: 'email'
        }]}>
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Email'
          />
        </Form.Item>
        <Form.Item name='password' rules={[{
          required: true,
          message: 'Infome a senha de acesso.'
        }]}>
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            loading={loading}
          >
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}

export default SingIn