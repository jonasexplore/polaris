import React from 'react';
import { Button } from 'antd'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const router = useRouter()

  const onClick = () => {
    router.push('/auth/signin')
  }

  return (
    <div className={styles.container}>
      <Button onClick={onClick} type='primary'>Hello</Button>
    </div>
  )
}

export default Home
